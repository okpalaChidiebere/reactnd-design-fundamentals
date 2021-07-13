import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MainComponent, { MainComponentOptions } from "./MainComponent"
import { component_main, component_card_reveal, component_scroll_event, 
  component_image_palette, component_type_demo } from "../utils/strings"
import MyTheme from "../utils/styles"
import CardRevealComponent, { CardRevealComponentOptions } from "./CardReveal"
import ScrollEventComponent, { ScrollEventComponentOptions } from "./ScrollEventComponent"
import ImagePaletteComponent, { ImagePaletteComponentOptions } from "./ImagePaletteComponent"
import TypeDemoComponent, { TypeDemoComponentOptions } from "./TypeDemoComponent"

const Stack = createStackNavigator()
const MainNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator headerMode="screen" initialRouteName={component_type_demo}>
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
        <Stack.Screen
          name={component_image_palette}
          component={ImagePaletteComponent}
          options={ImagePaletteComponentOptions}
        />
        <Stack.Screen
          name={component_type_demo}
          component={TypeDemoComponent}
          options={TypeDemoComponentOptions}
        />
    </Stack.Navigator>
  </NavigationContainer>
)

export default MainNavigator