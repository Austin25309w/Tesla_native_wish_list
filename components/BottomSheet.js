import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import React from 'react'

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

const BottomSheet = () => {

    const translateY = useSharedValue(0)

    const context = useSharedValue({ y: 0});
    const gesture = Gesture.Pan()
        .onStart(()=> {
            context.value = { y: translateY.value }
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY.value }]
        }
    })
  return (
    <GestureDetector gesture={ gesture}>
        <Animated.View style = {[styles.bottomSheetContainer, rBottomSheetStyle]}>
            <View style = {styles.line}>
            
            </View>
            <View style={styles.text}>
                <Text>BottomSheet</Text>
            </View>
            
        </Animated.View>
     </GestureDetector>
    
  )
}




const styles = StyleSheet.create({
    
    bottomSheetContainer: {
         height: 700, 
         width: '100%',
         backgroundColor: 'white',
         position: 'absolute',
        //  top: SCREEN_HEIGHT,
         borderRadius: 25,
    },
    text: {
        flex: 1,
        color: 'green',
        alignItems: 'center',
        justifyContent: 'center'

    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
      },
})

export default BottomSheet

//#161818