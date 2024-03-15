import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import climate from '../assets/images/climate.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
// import BottomDrawer from '../components/BottomDrawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import  BottomTray  from '../components/BottomTray';


// const TAB_BAR_HEIGHT = 49;

const ClimateScreen = () => {
    const router = useRouter();
    const [temperature, setTemperature] = useState(68); {/* default 68 degree */}
    const [on, setOn] = useState(false); {/* clamate switch */}
    const [vent, setVent] = useState(false); {/* air vent */}
    const bottomSheet = useRef();


  return (
    <View style ={styles.container}>
        {/* load image */}
        <Image source={climate} style={styles.image} resizeMode="cover"/>
         {/* load arrow button */}
        <Pressable onPress={()=> router.back()} style = {styles.back}>
            <Entypo name="chevron-left" size={24} color ="white"/>
        </Pressable>
        

        <BottomTray />
        
        
    </View>
  )
};

export default ClimateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161818",
    },
    sheetContainer:{
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent:'center'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
    image: {
        width: "100%",
        height: '70%',
    },
    back:{
        position: 'absolute',
        top: 50,
        left: 25,
        backgroundColor: '#2f3030',
        padding: 10,
        borderRadius: 5,
    },
    controlsRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    footer:{
        alignItems: 'center',
        padding: 12,
        marginBottom: 20,
        marginTop: 'auto'
    },
    label: {
        color: 'gray',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 20,
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
    button: {
        height: 50,
        width: 150,
        backgroundColor: "#140078",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
          height: 4,
          width: 4,
        },
        shadowRadius: 5,
        elevation: 6,
      },
      text: {
        color: "white",
        fontWeight: "600",
      },

});


//https://www.npmjs.com/package/rn-bottom-drawer



// <BottomDrawer
// containerHeight={100}
// offset={TAB_BAR_HEIGHT}
// >
//     BottomDrawer
// </BottomDrawer>

// https://www.npmjs.com/package/react-native-modal

// https://www.npmjs.com/package/react-native-gesture-handler

// https://www.npmjs.com/package/react-native-reanimated