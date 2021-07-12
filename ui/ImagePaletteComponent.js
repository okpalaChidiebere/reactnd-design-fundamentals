import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, StatusBar }  from "react-native"
import { useTheme } from "@react-navigation/native"
import Palette from "react-native-palette-full"
import Constants from "expo-constants"
import * as ImagePicker from "expo-image-picker"
import * as ImageManipulator from "expo-image-manipulator"
import { Provider, Modal, Portal } from "react-native-paper"


const initialState = {
    colorPallete: null,
    rawResult: null,
}

export default function ImagePaletteComponent(){
    const { screenContainer, colors } = useTheme()
    const [image, setImage] = useState(null)
    const [pallete, setPallete] = useState(initialState)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        //You basically can set the statusBar color dynamically if we want
        //StatusBar.setBackgroundColor(colors.colorPrimaryDark, true)
    }, [])

    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    const pickImage = async () => {
        if (Constants.isDevice){
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!'); 
                return  
            }
        }else{
            alert('You need a real device for the permission to work'); 
            return 
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3], //the size of the box that the user will use for cropping the image
            quality: 1,
        })

        if (!result.cancelled) {
            const manipResult = await ImageManipulator.manipulateAsync(
                result.localUri || result.uri,
                [ 
                    { resize: { width: result.width, height: result.height } }, 
                ],
                { compress: 1, format: ImageManipulator.SaveFormat.PNG }
            )
            await fetchColors(manipResult.uri)
            setImage(manipResult.uri)
            hideModal()
        }
    }

    const takePhoto = async () => {
        if (Constants.isDevice){
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!'); 
                return  
            }
        }else{
            alert('You need a real device for the permission to work'); 
            return  
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            const manipResult = await ImageManipulator.manipulateAsync(
                result.localUri || result.uri,
                [ 
                    { resize: { width: result.width, height: result.height } }, 
                    //{ crop: { originX: 0, originY: 0, width: 200, height: 200 }}
                ],
                { compress: 1, format: ImageManipulator.SaveFormat.PNG }
            )
            //FYI: You should show a loading bar because this fetch colors takes a bit of time like 2 seconds max
            await fetchColors(manipResult.uri)
            setImage(manipResult.uri)
            hideModal()
        }
    }

    /** YOu can have this function in a Utils folder */
    const fetchColors = async (uri) => {
          try {
            const result = await Palette.getNamedSwatchesFromUrl(uri)
            //console.log(result)
            //NOTE: result.Muted.population tells us how many pixels in the image were from that color. This will help you decide which color is more dorminant color. 
            //We can change the color of the statusBar using the StatusBar.setBackgroundColor() method
            setPallete({
                colorPallete: {
                    colorOne: { value: result["Muted Dark"].color, name: 'DarkMuted' },
                    colorTwo: { value: result["Muted Light"].color, name: 'LightMuted' },
                    colorThree: { value: result.Muted.color, name: 'Muted' },
                    colorFour: { value: result["Vibrant Dark"]?.color??"#ffff", name: 'DarkVibrant' }, //dending on the image, sometimes this will be null. Not for the top three though
                    colorFive: { value: result.Vibrant?.color??"#ffff", name: 'Vibrant' }, //dending on the image, sometimes this will be null
                },
                rawResult: JSON.stringify(result),
            })
          } catch (err) {
            console.log('Error:', err);
          } 
    }

    const { rawResult, colorPallete } = pallete

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainerStyle}>
                    <Button title="PICK AN IMAGE" onPress={pickImage} />
                    <View style={{ height: 10}}/>
                    <Button title="TAKE A PHOTO" onPress={takePhoto} />
                </Modal>
            </Portal>
            <View style={{ flex: 1, margin: 16, backgroundColor: "#E0E0E0", alignItems:"center"}}>
                {image && <Image source={{ uri: image }} style={{ width: 300, height: "100%", resizeMode: "contain" }} />}
            </View>
            <View style={{ flex: 2, flexDirection:"column", paddingHorizontal: 16, }}>
                <Text>Color Information</Text>
                <View style={styles.imformationContainer}>
                    {colorPallete && Object.keys(colorPallete).map(key => {
                        const info = colorPallete[key]
                        return (
                            <View key={key} style={styles.informationItem}>
                                <View style={styles.informationItemInner}>
                                    <View style={{ width: 32, height: 32, backgroundColor: info.value}}/>
                                    <View style={{ paddingLeft: 10}}>
                                        <Text>{info.name}</Text>
                                        <Text>{info.value}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                {rawResult && <ScrollView style={{height: 150}}><Text>{rawResult}</Text></ScrollView>}
                <Button title="SHOW" onPress={showModal} />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    imageSize: {
        width: "70%", 
        height: 200,
    },
    imformationContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        height: 300,
    },
    informationItem: {
        width:"50%",
        height:"20%",
        padding: 5,
    },
    informationItemInner: {
        flex: 1, 
        flexDirection: "row",
    },
    modalContainerStyle: {
        backgroundColor: 'white', 
        padding: 20, 
        marginLeft: 30,
        marginRight: 30,
    },
})

export function ImagePaletteComponentOptions({ }){
    const { colors } = useTheme()
    return {
        title: "Picking a Palette from an image",
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: colors.colorPrimary,
        },
    }
}