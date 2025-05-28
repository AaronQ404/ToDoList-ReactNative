import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import mmkvHelper from '../helpers/mmkvHelper';

export default function AddItemList({onAddTask}) {
    const [newTask, setNewTask] = useState(''); 
    const list = 'tareas';    
    const handleAddTask = () => {
        if(newTask.trim() === ''){
            Toast.show({
                type:'error',
                text1:'Error',
                text2:'No se puede insertar tareas vacias.',
                visibilityTime: '2000'
            })

            return;
        }else{
            mmkvHelper.saveTask(newTask,list);
            setNewTask('');
            onAddTask();
            Toast.show({
                type:'success',
                text1:'Tarea Añadida',
                text2:'Tarea añadida con exito',
                visibilityTime: '1000'
            })
        }
    }
    
    return (
        <View className="absolute rounded-lg bg-white m-2 bottom-20 h-auto left-0 right-0 border-t border-gray-200 p-4 flex-row justify-between items-center">
                <TextInput 
                    maxLength={255}
                    className="flex-1 mr-2 border border-gray-300 rounded-lg p-2 text-xl" 
                    placeholder="Add a new task" 
                    value={newTask} 
                    onChangeText={setNewTask}
                    onSubmitEditing={handleAddTask} 
                />
                <Pressable 
                    className="transition-colors duration-200 ease-in-out bg-gray-300 hover:bg-blue-100 rounded-lg p-2" 
                    onPress={handleAddTask}
                >
                    <Text className="text-center p-2 text-xl ">ADD</Text> 
                </Pressable>
        </View>
    );
}



