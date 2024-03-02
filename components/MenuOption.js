
import { Text, View, StyleSheet, Pressable} from 'react-native';
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router'




const MenuOption = ({item}) => {

    return (
       <Link href ={item.href} asChild>
        <View style = {styles.optionRow} >
              {/* Icon */}

              <MaterialCommunityIcons name={item.iconName} size={26} color="grey" />
              
              {/* Text */}
              <Text style={styles.optionText}> {item.name} </Text>
              {/* Icon */}
              <MaterialIcons 
                  name= "keyboard-arrow-right"
                  size={24} 
                  color="green"
                  style={{marginLeft:'auto'}}
              />
        </View>
      </Link>
    )
  }

const styles = StyleSheet.create({
      optionRow:{
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center'
  },
  optionText:{
     color: '#eee',
     fontSize: 18,
     fontWeight: 'bold',
     marginLeft: 10
  }
})



  export default MenuOption;


  // https://www.youtube.com/watch?v=UzdN1Xj8iq8&t=4745s&ab_channel=notJust%E2%80%A4dev
  // 1:12:51 different screen
  //1:14:54



 