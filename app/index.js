import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import car from '../assets/images/car.png'
import menuOptions from '../assets/menuOptions';
import MenuOption from '../components/MenuOption';
import { registerRootComponent} from 'expo'

// class App extends Component {
//     ...
//   }
  
//   export default Expo.registerRootComponent(App);


const Control = () => {
  return (
    <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
    </View>
  )
}

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style ={styles.title}>My Model S</Text>
            <Text style = {styles.subtitle}>Parked</Text>
          </View>
          <FontAwesome name="user-circle" size={30} color="grey" />
        </View>
        <Image source={car} style={styles.image} resizeMode='contain'/>
        {/* <Control/> */}
        {/* FlatList is a component that allow to render list of items */}
        <FlatList 
          data={menuOptions}
          showsVerticalScrollIndicator = {false}
          renderItem={MenuOption}
          ListHeaderComponent= {Control}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header:{
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#eee',
    fontWeight: 'bold',
    marginBottom:8
  },
  subtitle:{
    color: 'grey',
    fontWeight: '500'
  },
  image: {
    height:200,
    width: '100%'
  },
  controls:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginVertical:20
  },
});


// https://www.notjust.dev/projects/tesla-clone-with-react-native