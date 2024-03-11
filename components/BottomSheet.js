import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const BottomSheet = () => {
  return (
    <View style = {styles.bottomSheetContainer}>
      <Text style={styles.text}>BottomSheet</Text>
    </View>
  )
}

export default BottomSheet


const styles = StyleSheet.create({
    
    bottomSheetContainer: {
         height: 700, 
         width: '100%',
         backgroundColor: '#161818',
         position: 'absolute',
        //  top: SCREEN_HEIGHT / 1.2 ,
    },
    text: {
        color: 'white'
    },
})