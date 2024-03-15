import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Task from '../components/Task'

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
      
    </View>
    
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 30,
  }

})

export default journey