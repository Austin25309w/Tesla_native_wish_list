import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { 
    Extrapolation,
    useAnimatedStyle, 
    useSharedValue, 
    withTiming,
    withSpring, 
    interpolate} from 'react-native-reanimated'
import React, { useEffect } from 'react'

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

    useEffect(()=> {
        translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
    },[]);

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolation.CLAMP
        )
        return {
            borderRadius,
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

// https://www.youtube.com/watch?v=KvRqsRwpwhY&ab_channel=Reactiive



import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

const BottomSheet = () => {
    const bottomSheetRef = useRef<BottomSheet>(null)

    const handlesSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    },[])
  return (
    <View style= {styles.container}>
        <BottomSheet
            ref={bottomSheetRef}
            onChange={handlesSheetChanges}
            >
            <BottomSheetView style = {styles.contentContainer}>
                <Text>BottomSheet</Text>
            </BottomSheetView>
        </BottomSheet>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer:{
        flex:1,
        alignItems: 'center'
    }

})

export default BottomSheet