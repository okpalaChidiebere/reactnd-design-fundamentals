import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import MainNavigator from "./ui/MainNavigator"
import { indigo_700 } from "./utils/colors"


export default function App() {

  const [ statusBarColor, setStatusColor ] = useState(null)

  const setStatusBarColor = (color) => {
    setStatusColor(color)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={statusBarColor || indigo_700}/>
      <MainNavigator handleStatusBardColor={setStatusBarColor}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})