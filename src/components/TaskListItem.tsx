import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const TaskListItem = ({description}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

export default TaskListItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black"
  },
  text:{color:"white"}
})