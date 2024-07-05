import { View, Text,FlatList } from 'react-native'
import {useState} from 'react'
import TaskListItem from './TaskListItem'

const TaskList = () => {
    const [tasks,setTask]=useState([
        {description:'Second Task'},
        {description:'First Task'}
    ]);

  return (
    <View>
      <Text>Todo</Text>
     <FlatList data={tasks} 
     contentContainerStyle={{gap:5}}
     renderItem={({item}:any)=> <TaskListItem description={item?.description}/>}
     />  
    </View>
  )
}

export default TaskList