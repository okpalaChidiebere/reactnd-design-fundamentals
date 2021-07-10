import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import AnimatedText from './AnimatedText'
import AnimatedImage from './AnimatedImage'

function HeaderBackground({ animationRange }) {

   const interpolatedElevation = animationRange.interpolate({
        inputRange: [0, 0.5, 0.95, 1],
        outputRange: [0, 0, 1, 6],
    })
    const animateHeader = {
        shadowOpacity: interpolatedElevation,
        shadowOffset: { width: 0, height: interpolatedElevation }, elevation: interpolatedElevation, //we will see the elevation of this header increasing as the user scrolls
        transform: [
            {
                translateY: animationRange.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100],
                }),
            },
        ],
    };

    return <Animated.View style={[styles.headerBackground, animateHeader]} />;
};

export default function AnimatedHeader({ animationRange }){

    const interpolatedElevation = animationRange.interpolate({
        inputRange: [0, 0.5, 0.95, 1],
        outputRange: [0, 0, 1, 6],
    })

    const animateHeaderElevation = {
        shadowOffset: { width: 0, height: interpolatedElevation }, elevation: interpolatedElevation //we will see the elevation of this header increasing as the user scrolls
    };
    
    return (
        <Animated.View style={[styles.container, animateHeaderElevation]} pointerEvents="none">
            <HeaderBackground animationRange={animationRange} />
            <Animated.View style={[styles.container, animateHeaderElevation]} pointerEvents="none">       
                <AnimatedText animationRange={animationRange}/>
                <AnimatedImage animationRange={animationRange}/>
            </Animated.View>   
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 0, 
        zIndex: 2, 
        height:200, 
        width:'100%', 
        backgroundColor: 'transparent',

        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBackground: {
        //position: 'absolute',
        flex: 0,        
        height: 200,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 2,
    }
});
