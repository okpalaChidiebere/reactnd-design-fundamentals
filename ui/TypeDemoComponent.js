import React from "react"
import { View, Text, ScrollView }  from "react-native"
import { useFonts } from "expo-font"
import { useTheme } from "@react-navigation/native"
import { body1, body2, button, caption, display1, display2, display3, display4, 
    headline, hello_world, subhead, title } from "../utils/strings"
import { text_size_display_1, text_size_display_2, text_size_display_3, text_size_display_4, 
    text_size_title, text_size_subhead, text_size_body_2, text_size_body_1, text_size_caption, 
    text_size_button, text_size_headline, component_horizontal_margin, component_vertical_margin} from "../utils/dimens"

export default function TypeDemoComponent(){
    const { screenContainer, colors } = useTheme()
    const [fontLoaded] = useFonts({
        /**
         * You can get more liscended google fonts for free here
         * https://fonts.google.com/
         */
        Courgette: require("../assets/fonts/Courgette-Regular.ttf"),
    })

    if (!fontLoaded) {
        //You can show a loading bar your your app
        return null;
    }

    return (
            <ScrollView>
                <View style={[screenContainer, { paddingHorizontal: component_horizontal_margin, paddingVertical: component_vertical_margin }]}>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{display4}</Text>
                        <Text style={{ fontSize: text_size_display_4, fontFamily: "Courgette"}} >{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{display3}</Text>
                        <Text style={{ fontSize: text_size_display_3}}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{display2}</Text>
                        <Text style={{ fontSize: text_size_display_2}}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{display1}</Text>
                        <Text style={{ fontSize: text_size_display_1}}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{headline}</Text>
                        <Text style={{ fontSize: text_size_headline, fontFamily: "Courgette"}}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{title}</Text>
                        <Text style={{ fontSize: text_size_title}}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{subhead}</Text>
                        <Text style={{ fontSize: text_size_subhead }}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{body2}</Text>
                        <Text style={{ fontSize: text_size_body_2 }}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{body1}</Text>
                        <Text style={{ fontSize: text_size_body_1 }}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{caption}</Text>
                        <Text style={{ fontSize: text_size_caption }}>{hello_world}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ color: colors.label}}>{button}</Text>
                        <Text style={{ fontSize: text_size_button }}>{hello_world.toUpperCase()}</Text>
                    </View>
                </View>
            </ScrollView>
        
    )
}

export function TypeDemoComponentOptions(){
    const { colors } = useTheme()
    return {
        title: "Type Demo",
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: colors.colorPrimary,
        },
    }
}