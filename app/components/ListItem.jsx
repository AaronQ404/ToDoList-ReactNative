import { Pressable, Text, View } from 'react-native';
import mmkvHelper from '../helpers/mmkvHelper';
import '../styles.css';

export default function ListItem({ item, list, onCompleteTask, onDeleteTask }) {
    console.log(item)
    const handleComplete = () => {
        mmkvHelper.completeTask(item.id, list);
        onCompleteTask();
    };

    const handleDelete = () => {
        mmkvHelper.deleteTask(item.id, list);
        onDeleteTask();
    };

    return (
        <View onPress className="flex-row justify-between items-center p-4 border-b border-gray-200">
           <Pressable 
                    onPress={handleComplete}
                    className={` border-solid border-4 border-green-600  rounded-full text-lg p-3 ${item.completada ? 'bg-green-400' : ''}`}
                >
                </Pressable>
            <Text className={`text-lg ${item.completada ? 'line-through text-gray-500' : ''}`}>
                {item.texto}
            </Text>
            <View className="flex-row">
                
                <Pressable 
                    onPress={handleDelete}
                    className="bg-red-500 p-2 rounded-lg"
                >
                    <Text className="text-white">Delete</Text>
                </Pressable>
            </View>
        </View>
    );
}
