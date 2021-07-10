import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import buildTransform from '../utils/buildTransform';

export default function AnimatedImage({ animationRange }){

    const [measure, setMeasure] = useState(null);

    useEffect(() => {}, [measure])

    const animateImageStyle = measure ? buildTransform(animationRange, measure.elementX, measure.elementY, measure.elementHeight, measure.elementWidth, 20, 40, 0.5) : null
    const onLayoutSetMeasurements = event => {
        setMeasure({ 
            elementX: event.nativeEvent.layout.x,
            elementY: event.nativeEvent.layout.y,
            elementWidth: event.nativeEvent.layout.width,
            elementHeight: event.nativeEvent.layout.height,
        })
    }

    return (
        <Animated.Image 
            source={require("../assets/dog.png")} 
            style={[styles.image, animateImageStyle]} 
            onLayout={onLayoutSetMeasurements} 
        />                
    )  
}

const styles = StyleSheet.create({
    image: {  
        marginTop: 20,
        width: 50,
        height: 50              
    }
})