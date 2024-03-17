import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import React from 'react'
import Task from '../components/Task'
import { TouchableOpacity } from 'react-native-gesture-handler'

const journey = () => {
  return (
    <View style= {styles.container}>
      <View style= {styles.taskWrapper}>
        <Text style= {styles.sectionTitle}>My Journey</Text>
        <View style = {styles.items}> 
        <Task text= {'Task 1'}/>
        <Task text={'Task 2'}/>
        
      </View>
      </View>
      {/* write a task */}
      <KeyboardAvoidingView
        behavior= {Platform.OS === "ios" ? "padding" : "height"}
        style= {styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder='write a task'/>
          <TouchableOpacity>
            <View style= {styles.addWrapper}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  )
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

  },
  writeTaskWrapper:{

  },
  addWrapper:{

  },

})

export default journey



// https://www.youtube.com/watch?v=0kL6nhutjQ8&ab_channel=MadeWithMatt
