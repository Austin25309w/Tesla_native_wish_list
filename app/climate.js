import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import climate from '../assets/images/climate.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import { useState } from 'react';
import BottomDrawer from '../components/BottomDrawer'

// const TAB_BAR_HEIGHT = 49;

const ClimateScreen = () => {
    const router = useRouter();
    const [temperature, setTemperature] = useState(68); {/* default 68 degree */}
    const [on, setOn] = useState(false); {/* clamate switch */}
    const [vent, setVent] = useState(false); {/* air vent */}
    
  return (
    <View style ={styles.container}>
        {/* load image */}
        <Image source={climate} style={styles.image} resizeMode="cover"/>
         {/* load arrow button */}
        <Pressable onPress={()=> router.back()} style = {styles.back}>
            <Entypo name="chevron-left" size={24} color ="white"/>
        </Pressable>
        
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
        <BottomDrawer/>
    </View>
  )
};

export default ClimateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161818",
    },
    image: {
        width: "100%",
        height: '65%',
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
    }

});


//https://www.npmjs.com/package/rn-bottom-drawer



// <BottomDrawer
// containerHeight={100}
// offset={TAB_BAR_HEIGHT}
// >
//     BottomDrawer
// </BottomDrawer>

// https://www.npmjs.com/package/react-native-modal