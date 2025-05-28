import { Pressable, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import mmkvHelper from '../helpers/mmkvHelper';
import '../styles.css';

export default function ListItem({ item, list, onCompleteTask, onDeleteTask }) {
    const handleComplete = () => {
        mmkvHelper.completeTask(item.id, list);
        var titleToast = `Tarea ${item.completada?'no':''} completada`;
        var textToast = `Tarea marcada como ${item.completada?'no':''} completada`;

            Toast.show({
                type:'success',
                text1:titleToast,
                text2:textToast,
                visibilityTime:'2000'
            });
        onCompleteTask();
    };

    const handleDelete = () => {
        mmkvHelper.deleteTask(item.id, list);
        onDeleteTask();
    };

    return (
        <Pressable onPress={handleComplete}  className={`  ${item.completada ? "bg-green-100" : 'bg-white'} m-2 flex-row rounded-lg justify-between items-center p-4 border-b border-gray-200 hover:
        transition-colors duration-200 ease-in-out bg-white-100 hover:bg-blue-100  transform scale-auto ease-in-out `}>
           <Pressable 
                    onPress={handleComplete}
                    className={` border-solid border-4 border-green-600  rounded-full text-lg p-4 ${item.completada ? 'bg-green-400' : ''}`}
                >
                </Pressable>
            <Text className={`p-4 text-lg w-[70%] ${item.completada ? 'line-through text-gray-500' : ''}`}>
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
        </Pressable>
    );
}
