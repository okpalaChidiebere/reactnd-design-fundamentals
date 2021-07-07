import React from "react"
import { Text, View, ScrollView, Platform, StyleSheet }  from "react-native"
import { useTheme } from "@react-navigation/native"
import { FloatingAction } from "react-native-floating-action"
import { Entypo } from "@expo/vector-icons"

export default function MainComponent() {
  const { colors, anotherStyle } = useTheme() //https://reactnavigation.org/docs/themes#using-the-current-theme-in-your-own-components

    return ( 
      <>
        <ScrollView>
          <View style={styles.container}>
            <Text style={{ color: colors.colorSecondadry, fontSize:40 }}>Open MainComponent.js to start working on your app!</Text>
            <Text style={anotherStyle}>Open MainComponent.js to start working on your app!</Text>
            <View style={styles.surface1}/>
            <View style={styles.surface2}/>
            <View style={styles.surface3}/>
          </View>
        </ScrollView>
        <FloatingAction 
          color={colors.colorSecondadry}
          showBackground={false}
          floatingIcon={<Entypo name="plus" size={24} color="#fff" />}
        />            
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