import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Task from '../components/Task'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Journey() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask('');
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  
  }
  return (

    
    <View style= {styles.container}>
      <View style= {styles.taskWrapper}>
        <Text style= {styles.sectionTitle}>My Journey</Text>
        <View style = {styles.items}> 
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress= {()=> completeTask(index) }>
                <Task  text= {item} />
              </TouchableOpacity>
              
            )
            
          } )
        }
        
        
      </View>
      </View>
      {/* write a task */}
      <KeyboardAvoidingView
        behavior= {Platform.OS === "ios" ? "padding" : "height"}
        style= {styles.writeTaskWrapper}
        >
          <TextInput 
            style={styles.input} 
            placeholder='write a task'
            value = {task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style= {styles.addWrapper}>
              <Text style = {styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#161818'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  items:{
    marginTop: 30,
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{
    fontSize: 25
  }

})




// https://www.youtube.com/watch?v=0kL6nhutjQ8&ab_channel=MadeWithMatt
