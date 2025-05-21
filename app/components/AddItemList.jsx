import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import mmkvHelper from '../helpers/mmkvHelper';

export default function AddItemList({onAddTask}) {
    const [newTask, setNewTask] = useState(''); 
    const list = 'tareas';    
    const handleAddTask = () => {
        if(newTask.trim() === ''){
            alert('La tarea no puede estar vacia');
            return;
        }else{
            mmkvHelper.saveTask(newTask,list);
            setNewTask('');
            onAddTask();
        }
        
    }
    

    return (
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
            <TextInput className="borderWidth-1px shadow appearance-no text-xl m-4 p-4 rounded-lg" type="text" placeholder="Add a new task" value={newTask} onChangeText={setNewTask} />
            <Pressable  title='Add' className="bg-gray-300 rounded-lg p-2 text-center transition delay-50 duration 300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-100" onPress={() => handleAddTask()} >
                <Text className='text-center p-2 text-2xl' >ADD</Text> 
            </Pressable>
        </View>
    );
};


