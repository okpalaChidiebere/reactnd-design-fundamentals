import { DefaultTheme } from "@react-navigation/native"
import { indigo_500, indigo_700 } from "./colors"

//https://reactnavigation.org/docs/themes#basic-usage
export default {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors, //it is important you add the extisting theme, the you can modify any field i  ther if you want
      text: "#00cc99", //like here we modify the `text` color in the DefaultTheme
      colorSecondadry: "#0099ff", //here we add our own style to the theme
      colorPrimary: indigo_500,
      colorPrimaryDark: indigo_700,
    },
    //Adding our own custom style that will be applied to our theme. The we can use this style anywhere in our app easily
    anotherStyle: {
      color: "#ff9900",
      fontWeight: "bold"
    },
    //i will not have to re-write this style for every screen container :)
    screenContainer: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:"center",
      alignItems:"center",
    }
}
  