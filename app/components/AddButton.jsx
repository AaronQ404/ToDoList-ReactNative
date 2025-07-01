import { Pressable, Text } from "react-native";

export default AddButton = ({handleModal}) =>{
    return (
            <Pressable 
            className="transition-colors duration-200 ease-in-out bg-blue-500 hover:bg-blue-100 h-20 w-40 rounded-lg p-2 flex justify-center items-center" 
            onPress={handleModal}
        >
            <Text className="text-center text-white p-2 text-2xl ">ADD</Text> 
        </Pressable>
    )
}