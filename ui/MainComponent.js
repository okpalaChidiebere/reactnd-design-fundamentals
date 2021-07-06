import React from "react"
import { Text, View, StyleSheet }  from "react-native"

export default function MainComponent() {

    return ( 
    <View style={styles.container}>
      <Text style={{ fontSize:40 }}>Open MainComponent.js to start working on your app!</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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