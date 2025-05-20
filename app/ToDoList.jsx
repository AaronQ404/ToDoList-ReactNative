import { View } from "react-native";
import "../global.css";
import List from "./components/List";

export default function ToDoList() {
    
    return (
        <View>
            <List listName="tareas" />
        </View>
    )
}
