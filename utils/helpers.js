import { Dimensions, Platform, PixelRatio } from "react-native"

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')
  
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320

/**
 * This functions ensures the fontSize scale across different devices. Android already has this in place but react native do not. 
 * We had to implement a helper function for this ourselves
 * @param size 
 * @returns scaled fontSize
 */
export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

// You can use PixelRatio to render different images based on screen sizes like xhdpi, xxhdpi, xxxhdpi, etc for iOS and Android
// https://docs.expo.io/versions/v41.0.0/react-native/pixelratio/
//https://reactnative.dev/docs/pixelratio