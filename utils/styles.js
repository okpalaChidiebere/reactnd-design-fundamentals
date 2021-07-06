import { DefaultTheme } from "@react-navigation/native"

//https://reactnavigation.org/docs/themes#basic-usage
export default {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors, //it is important you add the extisting theme, the you can modify any field i  ther if you want
      text: "#00cc99", //like here we modify the `text` color in the DefaultTheme
      colorSecondadry: "#0099ff", //here we add our own style to the theme
    },
    //Adding our own custom style that will be applied to our theme. The we can use this style anywhere in our app easily
    anotherStyle: {
      color: "#ff9900",
      fontWeight: "bold"
    }
}
  