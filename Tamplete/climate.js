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