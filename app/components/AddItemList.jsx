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
        <View className="absolute rounded-lg bg-white m-2 bottom-20 h-auto left-0 right-0 border-t border-gray-200 p-4 flex-row justify-between items-center">
                <TextInput 
                    className="flex-1 mr-2 border border-gray-300 rounded-lg p-2 text-xl" 
                    placeholder="Add a new task" 
                    value={newTask} 
                    onChangeText={setNewTask} 
                />
                <Pressable 
                    className="bg-gray-300 rounded-lg p-2" 
                    onPress={handleAddTask}
                >
                    <Text className="text-center p-2 text-xl">ADD</Text> 
                </Pressable>
        </View>
    );
}



