import React, { useRef } from "react"
import { Text, View, FlatList, StyleSheet, Animated, TouchableWithoutFeedback }  from "react-native"
import { green, white } from "../utils/strings"


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        baconTitle: 'Bacon',
        baconText: 'Bacon ipsum dolor amet pork belly meatball kevin spare ribs. Frankfurter swine corned beef meatloaf, strip steak.',
        veggieTitle: "Veggie",
        veggieText: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        baconTitle: 'Bacon',
        baconText: 'Bacon ipsum dolor amet pork belly meatball kevin spare ribs. Frankfurter swine corned beef meatloaf, strip steak.',
        veggieTitle: "Veggie",
        veggieText: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        baconTitle: 'Bacon',
        baconText: 'Bacon ipsum dolor amet pork belly meatball kevin spare ribs. Frankfurter swine corned beef meatloaf, strip steak.',
        veggieTitle: "Veggie",
        veggieText: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
    },
];


const Item = ({ item }) => {

    const animatedValue = useRef(new Animated.Value(0)).current
    const valueListener = useRef(0) //this will help us know when to flip the card back or front based on the current animated value

    animatedValue.addListener(({ value }) => {
        valueListener.current = value
    })

    const handleOnClickItem = () => {
        let anim
        if(valueListener.current >= 0.5){
            anim = Animated.timing(animatedValue, { toValue: 0, duration: 600, useNativeDriver: false })
        }else{
            anim = Animated.timing(animatedValue, { toValue: 1, duration: 600, useNativeDriver: false })
        }
        anim.start()
    }

    const frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '90deg', '180deg'] //fontCard starting at 0deg will make it be in the reveal state
    })

    
    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['180deg', '270deg', '360deg'] //starting point at 180deg means the backcard rotate out of the way by default
    })

    const frontAnimatedStyle = {
        transform: [
            { perspective: 1000 },
            { rotateY: frontInterpolate }
        ]
    }

    const backAnimatedStyle = {
        transform: [
            { perspective: 1000 },
            { rotateY: backInterpolate }
        ]
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnClickItem}>
            <View>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle ]}>
                    <Text style={styles.title}>{item.baconTitle}</Text>
                    <Text style={styles.body}>{item.baconText}</Text>
                </Animated.View>
                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle ]}>
                    <Text style={styles.title}>{item.veggieTitle}</Text>
                    <Text style={styles.body}>{item.veggieText}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default function CardRevealComponent(){

    const renderItem = ({ item }) => {
        return <Item item={item} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
    flipCard: {
        paddingVertical: 16, //adds padding to the top and bottom
        paddingHorizontal: 16, //adds padding to the left and right
        paddingLeft: 72, //extra padding to the left
        backgroundColor: white,
        backfaceVisibility: "hidden",  //this means when this card rotates out of the way it will be hidden nd when it rotates back, it will be visible
    },
    flipCardBack: {
        position: "absolute",
        backgroundColor: green,
        top: 0,
    },
    title: {
        fontSize: 14,
        fontWeight:"bold",
        marginBottom: 10,
    },
})

export function CardRevealComponentOptions({ route, navigation }) {

    return {
        title: "Material Design: Lesson 2",
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: "#3F51B5",
        },
    }
}
