import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MainComponent, { MainComponentOptions } from "./MainComponent"
import { component_main, component_card_reveal } from "../utils/strings"
import MyTheme from "../utils/styles"
import CardRevealComponent, { CardRevealComponentOptions } from "./CardReveal"

const Stack = createStackNavigator()
const MainNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator headerMode="screen" initialRouteName={component_card_reveal}>
        <Stack.Screen
          name={component_main}
          component={MainComponent}
          options={MainComponentOptions}
        />
        <Stack.Screen
          name={component_card_reveal}
          component={CardRevealComponent}
          options={CardRevealComponentOptions}
        />
    </Stack.Navigator>
  </NavigationContainer>
)

export default MainNavigator