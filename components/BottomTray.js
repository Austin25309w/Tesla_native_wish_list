import React, { useCallback, useState, useMemo } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

const BottomTray = () => {
  // const bottomSheetRef = React.useRef<BottomSheet>(null);
  // const [isOpen, setIsOpen] = useState(true);
  const [temperature, setTemperature] = useState(68); {/* default 68 degree */}
  const [on, setOn] = useState(false); {/* clamate switch */}
  const [vent, setVent] = useState(false); {/* air vent */}

  const snapPoints = useMemo(()=> ["60%", "150%"],[]) ;

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <View style = {styles.container}>
          <BottomSheet 
            index = {0}
            snapPoints={snapPoints}
            enablePanDownToClose = {true}
            backgroundStyle = {{ backgroundColor: '#161818'}}
            handleIndicatorStyle = {{ backgroundColor: 'lightblue'}}
            >
            <View style = {styles.footer}>
            <Text style = {styles.label}>Interior 74°F - Exterior 66°F</Text>
            {/* turn on climate */}
            <View style = {styles.controlsRow}>
                <Pressable
                    onPress={()=> setOn(!on)} 
                    style={styles.buttonContainer}
                    >
                    <MaterialCommunityIcons name="power" size={42} color={on ? 'white' : 'grey'} />
                    <Text style={styles.buttonText}>{on ? 'On' : 'Off'}</Text>
                </Pressable>

                {/* temperature level */}
                <View style={styles.temperatureContainer}>
                    <Entypo 
                        onPress={()=> setTemperature( temperature - 1 )} 
                        name="chevron-left" size={30} color="gray"
                    />
                    <Text style={styles.temperatureText}>{temperature}°</Text>
                    <Entypo 
                        onPress={()=> setTemperature( temperature + 1 )} 
                        name="chevron-right" size={30} color="gray"
                        />
                    
                </View>

            {/* window vent  */}
            <Pressable
                onPress={()=> setVent(!vent)}
                    style={styles.buttonContainer}>
                <MaterialCommunityIcons name="car-door" size={42} color={vent ? 'white' : 'grey'} />
                <Text style={styles.buttonText} >{vent ? 'Vent' : 'Close'}</Text>
            </Pressable>
        </View>
        
        </View >
          </BottomSheet>
      </View>
    </GestureHandlerRootView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#161818',
    alignItems: 'center',
    justifyContent:'center'
  },
  footer:{
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    // marginTop: 'auto'
},
label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
},
controlsRow: {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-around',
},
buttonContainer:{
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: '600',
  marginTop: 10,
},
temperatureContainer:{
  flexDirection: 'row',
  alignItems: 'center'
},
temperatureText: {
  fontSize: 48,
  fontWeight: '300',
  color: 'white',
  marginHorizontal: 20
},
})

export default BottomTray



// https://ui.gorhom.dev/components/bottom-sheet/

// fix ios android bottom tray
// https://github.com/gorhom/react-native-bottom-sheet/issues/1389
