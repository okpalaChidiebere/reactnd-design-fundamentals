import React, { useRef } from "react"
import { View, StyleSheet, Animated }  from "react-native"
import AnimatedHeader from "./AnimatedHeader"
import ItemInScroll from "./ItemInScroll"

export const scrollRangeForAnimation = 100;

const HeaderPlaceholder = <View style={{flex: 0, height: 200, width: '100%' }} />;


export default function ScrollEventComponent(){

    const scrollY = useRef(new Animated.Value(0)).current
    const animationRange =  scrollY.interpolate({
        inputRange: [0, scrollRangeForAnimation],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    })
    
    const scroller = useRef(null)

    const onScrollEndSnapToEdge = event => {
        const y = event.nativeEvent.contentOffset.y;
        if (0 < y && y < scrollRangeForAnimation / 2) {
            if (scroller.current) {
                scroller.current.scrollTo({y: 0});
            }
        } else if (scrollRangeForAnimation / 2 <= y && y < scrollRangeForAnimation) {
            if (scroller.current) {
                scroller.current.scrollTo({y: scrollRangeForAnimation});
            }
        }
    };

    return (
        <View style={styles.container}>                              
            <Animated.ScrollView            
                style={styles.scrollView}
                ref={scroller}
                scrollEventThrottle={16}
                onScrollEndDrag={onScrollEndSnapToEdge}
                onMomentumScrollEnd={onScrollEndSnapToEdge}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {contentOffset: {y: scrollY}},
                        },
                    ],
                    {
                        useNativeDriver: true,
                    }
                )}
                >
                {HeaderPlaceholder}
                <ItemInScroll numberOfItem={1} />
                <ItemInScroll numberOfItem={2} />
                <ItemInScroll numberOfItem={3} />
                <ItemInScroll numberOfItem={4} />
                <ItemInScroll numberOfItem={5} />
                <ItemInScroll numberOfItem={6} />
                <ItemInScroll numberOfItem={7} />
                <ItemInScroll numberOfItem={8} />
                <ItemInScroll numberOfItem={9} />
                <ItemInScroll numberOfItem={10} />
                <ItemInScroll numberOfItem={11} />
            </Animated.ScrollView>       
            <AnimatedHeader animationRange={animationRange}/>   
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    scrollView: {
      flex:1, 
      zIndex: 1
    }
})

export function ScrollEventComponentOptions({ route, navigation }) {

    return {
        headerShown: false,
    }
}