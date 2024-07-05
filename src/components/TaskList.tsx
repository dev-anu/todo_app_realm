import { View, Text,FlatList, TextInput,StyleSheet, Button } from 'react-native'
import {useState} from 'react'
import TaskListItem from './TaskListItem'

const TaskList = () => {
    const [tasks,setTask]=useState([
        {description:'Second Task'},
        {description:'First Task'}
    ]);

    const [newTask,setNewTask] = useState('');

    const createTask=()=>{
        setTask([...tasks,{description:newTask}])
        setNewTask('');
    }

  return (
    <View>
      <Text>Todo</Text>
     <FlatList data={tasks} 
     contentContainerStyle={{gap:5}}
     renderItem={({item}:any)=> <TaskListItem description={item?.description}/>}
     />  
     <TextInput
     value={newTask}
     onChangeText={setNewTask}
        placeholder='New Task'
        placeholderTextColor="grey"
        style={styles.textField}
     />
     <Button title='Add TasK' onPress={createTask}/>
    </View>
  )
}

export default TaskList

const styles=StyleSheet.create({
    textField:{
        color:"white",
        padding:10,
        backgroundColor:'#1D2125',
        borderRadius:5,
        marginTop:5
    }
})