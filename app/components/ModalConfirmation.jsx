import { Modal, Pressable, Text, View } from "react-native";

export default function ModalConfirmation( {modalVisible, setModalVisible, handleOk, message} ) {
    const handleSubmit = () => {
        handleOk()
    }


return (<Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
    >
        <View className="flex-1 justify-center items-center bg-black/30 ">
            <View className="w-72 h-52 bg-white rounded-lg justify-center items-center shadow-lg p-5 dark:bg-neutral-800">
                <Text className="text-2xl font-bold p-4 dark:text-white" >{message}</Text>
                <View className="flex-row w-full mt-4 space-x-2">
                    <Pressable className="flex-1 h-10 bg-green-500 rounded-lg p-2 dark:bg-green-700"
                        onPress={handleSubmit}>
                        <Text className="text-white text-center">Confirmar</Text>
                    </Pressable>
                    <Pressable className="flex-1 h-10 bg-red-500 rounded-lg p-2 dark:bg-red-700"
                        onPress={() => setModalVisible(false)}>
                        <Text className="text-white text-center">Cancelar</Text>
                    </Pressable>
                </View>
            </View>
      </View>
    </Modal>);
}