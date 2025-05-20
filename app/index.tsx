import { View } from "react-native";
import ToDoList from "./ToDoList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToDoList />
    </View>
  );
}
