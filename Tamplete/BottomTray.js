import React, { useCallback, useState, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const BottomTray = () => {
  // const bottomSheetRef = React.useRef<BottomSheet>(null);
  // const [isOpen, setIsOpen] = useState(true);

  const snapPoints = useMemo(()=> ["15%", "50%"],[]) ;

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <View style = {styles.container}>
          <BottomSheet 
            index = {0}
            snapPoints={snapPoints}
            enablePanDownToClose = {true}
            handleIndicatorStyle = {{ backgroundColor: 'lightblue'}}
            >
              <View>
                  <Text>BottomSheet</Text>
              </View>
          </BottomSheet>
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



// https://ui.gorhom.dev/components/bottom-sheet/

// fix ios android bottom tray
// https://github.com/gorhom/react-native-bottom-sheet/issues/1389
