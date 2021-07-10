import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MainComponent, { MainComponentOptions } from "./MainComponent"
import { component_main, component_card_reveal, component_scroll_event } from "../utils/strings"
import MyTheme from "../utils/styles"
import CardRevealComponent, { CardRevealComponentOptions } from "./CardReveal"
import ScrollEventComponent, { ScrollEventComponentOptions } from "./ScrollEventComponent"

const Stack = createStackNavigator()
const MainNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator headerMode="screen" initialRouteName={component_scroll_event}>
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
        <Stack.Screen
          name={component_scroll_event}
          component={ScrollEventComponent}
          options={ScrollEventComponentOptions}
        />
    </Stack.Navigator>
  </NavigationContainer>
)

export default MainNavigator