import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function ModalAddItem( {modalVisible, setModalVisible, handleAdd} ) {

    const [newItem, setNewItem] = useState('');

    const handleSubmit = () => {
        handleAdd(newItem)
        setNewItem('')
        setModalVisible(false)
    }


return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
    >
        <View className="flex-1 justify-center items-center bg-black/30">
            <View className="w-72 h-52 bg-white rounded-lg justify-center items-center shadow-lg p-5">
                <Text className="text-2xl font-bold p-4">Agregar Item</Text>
                <TextInput
                    onChangeText={text => setNewItem(text)}
                    className="w-full h-10 bg-gray-200 rounded-lg p-2"
                    placeholder="Agregar Item"
                    onSubmitEditing={handleSubmit}
                />
                <View className="flex-row w-full mt-4 space-x-2">
                    <Pressable className="flex-1 h-10 bg-green-500 rounded-lg p-2"
                        onPress={handleSubmit}>
                        <Text className="text-white text-center">Agregar</Text>
                    </Pressable>
                    <Pressable className="flex-1 h-10 bg-red-500 rounded-lg p-2"
                        onPress={() => setModalVisible(false)}>
                        <Text className="text-white text-center">Cancelar</Text>
                    </Pressable>
                </View>
            </View>
      </View>
    </Modal>
)
}

