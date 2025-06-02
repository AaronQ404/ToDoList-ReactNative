import { Pressable, Text, View } from 'react-native';
import '../styles.css';

export default function ListItem({ item, onPressItem, onDeleteItem, }) {
    
    const handlePress = () => {
        onPressItem(item);
    }

    const handleDelete = () => {
        onDeleteItem(item)
    }



    return (
        <Pressable onPress={handlePress}  className={`  ${item.completada ? "bg-green-100" : 'bg-white'} m-2 flex-row rounded-lg justify-between items-center p-4 border-b border-gray-200 hover:
        transition-colors duration-200 ease-in-out bg-white-100 hover:bg-blue-100  transform scale-auto ease-in-out `}>
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
