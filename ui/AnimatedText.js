import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import buildTransform from '../utils/buildTransform';

export default function AnimatedText({ animationRange }){

        const [measure, setMeasure] = useState(null)

        useEffect(() => {}, [measure])

        const animateTextStyle = measure ? buildTransform(animationRange, measure.elementX, measure.elementY, measure.elementHeight, measure.elementWidth, 20, 70, 0.7) : null
        const animateOpacity = {
            opacity: animationRange.interpolate({
                inputRange: [0, 0.9, 1],
                outputRange: [1, 0, 1],
            }),
        }

        const onLayoutSetMeasurements = event => {
            setMeasure({ 
                elementX: event.nativeEvent.layout.x,
                elementY: event.nativeEvent.layout.y,
                elementWidth: event.nativeEvent.layout.width,
                elementHeight: event.nativeEvent.layout.height,
            })
        }

        return (
            <Animated.Text 
                style={[styles.text, animateOpacity, animateTextStyle ]}
                onLayout={onLayoutSetMeasurements} >
                This is Animated Text
            </Animated.Text>
        )       
}

const styles = StyleSheet.create({
    text: {        
        fontSize: 20,
        color: '#696969',
        fontWeight: 'bold'
    }
})