import React, { useRef } from "react"
import { Text, View, ScrollView, Platform, StyleSheet, TouchableNativeFeedback, Animated, TouchableWithoutFeedback, 
  TouchableOpacity }  from "react-native"
import { useTheme } from "@react-navigation/native"
import { FloatingAction } from "react-native-floating-action"
import { Entypo } from "@expo/vector-icons"

export default function MainComponent() {
  const animatedElevation = useRef(new Animated.Value(0)).current

  const { colors, anotherStyle } = useTheme() //https://reactnavigation.org/docs/themes#using-the-current-theme-in-your-own-components

  const interpolatedElevation = animatedElevation.interpolate({
    inputRange: [0, 8], //this animation translation will go from 0 to 8
    outputRange: [6, 14], //our Animated View will actually go from an elevation of 6 to 14
  })
    return ( 
      <>
        <ScrollView>
          <View style={styles.container}>
            <Text style={{ color: colors.colorSecondadry, fontSize:40 }}>Open MainComponent.js to start working on your app!</Text>
            <Text style={anotherStyle}>Open MainComponent.js to start working on your app!</Text>
            <View style={styles.surface1}/>
            <TouchableWithoutFeedback 
              onPressIn={() => Animated.timing(animatedElevation, {
                useNativeDriver: false,
                toValue: 8,
                duration: 100,
              }).start()} 
              onPressOut={() => Animated.timing(animatedElevation, {
                useNativeDriver: false,
                toValue: 1,
                duration: 100,
              }).start()}
            >
              <Animated.View 
              style={[
                styles.surface1, 
                { shadowOffset: { width: 0, height: interpolatedElevation }, elevation: interpolatedElevation }
              ]}
              />
            </TouchableWithoutFeedback>
            <View style={styles.surface2}/>
            <View style={styles.surface3}/>
          </View>
        </ScrollView>
        {Platform.select({
          ios: (
            <TouchableOpacity>
              <FloatingAction 
                color={colors.colorSecondadry}
                showBackground={false}
                floatingIcon={<Entypo name="plus" size={24} color="#fff" />}
              />
            </TouchableOpacity>
          ),
          android: (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#E0E0E0", true)}>
              <FloatingAction 
                color={colors.colorSecondadry}
                showBackground={false}
                floatingIcon={<Entypo name="plus" size={24} color="#fff" />}
              />
            </TouchableNativeFeedback>
          ),
        })}
                    
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    surface1: {
      margin: 30,
      width:"80%",
      height: 200,
      backgroundColor: '#fff',
      ...Platform.select({ //NOTE: you dont have to add this Platform select, but for readability purpose it makes sense
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.5,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    surface2: {
      margin: 30,
      width:"80%",
      height: 200,
      backgroundColor: '#fff',
      ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.5,
        },
        android: {
          elevation: 8,
        },
      }),
    },
    //this one will produce the most diffuse shadow; giving it the appearance of being higher up furhter in front of the back plane
    surface3: {
      margin: 30,
      width:"80%",
      height: 200,
      backgroundColor: '#fff',
      ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 16 },
            shadowOpacity: 0.5,
        },
        android: {
          elevation: 16,
        },
      }),
    }
  })

export function MainComponentOptions({ route, navigation }) {

    return {
        title: "Android Design: Lesson 1",
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: "#3F51B5",
        },
    }
}