import React, { useContext, useEffect } from "react"
import { View, Text, StyleSheet }  from "react-native"
import { useTheme } from "@react-navigation/native"
import Context from '../appContext'


export default function ImagePaletteComponent(){
    const { screenContainer, colors } = useTheme()
    const { setStatusBarColor } = useContext(Context)

    useEffect(() => {
        //You basically can set the statusBar color dynamically if we want
        // setStatusBarColor(colors.colorPrimaryDark)
    }, [])

    return (
        <View style={screenContainer}>
            <Text>Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:"center",
        alignItems:"center",
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