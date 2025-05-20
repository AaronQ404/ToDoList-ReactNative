import { Pressable, Text, View } from 'react-native';
import mmkvHelper from '../helpers/mmkvHelper';
import '../styles.css';

export default function ListItem({item,list,onCompleteTask,onDeleteTask}) {
    // Aseguramos que el ID sea string desde el inicio
    const id = String(item.id);
    const {texto, completada} = item;

    const updateTask = (id,list) => {
        mmkvHelper.completeTask(id,list);
        onCompleteTask(id);
    }

    const deleteTask = (id,list) => {
        mmkvHelper.deleteTask(id,list);
        onDeleteTask();
    }
    
    return (
        <View className="todo-item" id={id}>
                <Text className={completada ? ' line-through' : 'todo-text'}>{texto}</Text>
                <Pressable selectable={false} selectionColor='orange' className="bg-green-500 appearance-no text-xl m-2 p-2 rounded-lg transition hover:bg-green-300" onPress={() => updateTask(id,list)} title="Complete">
                    <Text>Complete</Text>
                </Pressable>

                <Pressable className="bg-red-500 appearance-no text-xl m-2 p-2 rounded-lg transition hover:bg-red-300" onPress={() => deleteTask(id,list)} title="Delete">
                    <Text>Delete</Text>
                </Pressable>
        </View>
    )
}
