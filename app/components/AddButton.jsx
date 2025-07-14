import { Pressable, Text } from "react-native";

export default AddButton = ({handleModal}) =>{
    return (
        <Pressable 
            className="flex flex-row transition-colors duration-200 ease-in-out bg-blue-500 dark:bg-blue-700 dark:border-black hover:bg-blue-300 h-16 w-40 rounded-lg p-2 justify-center items-center border-b-2 " 
            onPress={handleModal}
        >           
            <Text className="text-center text-white text-xl">+ ADD</Text> 
        </Pressable>
    )
}