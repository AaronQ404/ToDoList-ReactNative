import { View } from "react-native";
import Toast from "react-native-toast-message";
import "../global.css";
import HomePage from "./components/HomePage";
import toastConfig from "./toast.config";

export default function ToDoList() {
   

    return (
        <View className="w-screen h-full">
            <HomePage />
            <Toast config={toastConfig} />
        </View>
    );
}
