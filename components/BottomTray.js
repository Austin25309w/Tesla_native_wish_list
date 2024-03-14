import React, { useCallback, useState, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const BottomTray = () => {
  // const bottomSheetRef = React.useRef<BottomSheet>(null);
  // const [isOpen, setIsOpen] = useState(true);

  const snapPoints = useMemo(()=> ["25%", "50%", "70%"],[]) ;

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <View style = {styles.container}>
          <BottomSheet 
            index = {1}
            snapPoints={snapPoints}>
              <View>
                  <Text>BottomSheet</Text>
              </View>
          </BottomSheet>
          <Text>BottomSheet</Text>
      </View>
    </GestureHandlerRootView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default BottomTray