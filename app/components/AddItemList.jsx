import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function AddItemList({onAddTask}) {
    const [newItem, setNewItem] = useState('');
    
    
    const handleSubmit = () => {
        onAddTask(newItem);
        setNewItem('');
    }
    
    
    return (
        <View className="absolute rounded-lg bg-white m-2 bottom-20 h-auto left-0 right-0 border-t border-gray-200 p-4 flex-row justify-between items-center">
                <TextInput 
                    maxLength={255}
                    className="flex-1 mr-2 border border-gray-300 rounded-lg p-2 text-xl" 
                    placeholder="Add a new task" 
                    value={newItem} 
                    onChangeText={setNewItem}
                    onSubmitEditing={handleSubmit} 
                />
                <Pressable 
                    className="transition-colors duration-200 ease-in-out bg-gray-300 hover:bg-blue-100 rounded-lg p-2" 
                    onPress={handleSubmit}
                >
                    <Text className="text-center p-2 text-xl ">ADD</Text> 
                </Pressable>
        </View>
    );
}



