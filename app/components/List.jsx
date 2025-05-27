import { ScrollView, View } from "react-native";
import ListItem from "./ListItem";

export default function List({ list, listName, onCompleteTask, onDeleteTask }) {
    return (
        <View className="h-[85%] p-10 w-screen">
            <ScrollView>
            {list && list.map((item) => {
                // Aseguramos que el ID sea string
                const itemWithStringId = {
                    ...item,
                    id: String(item.id)
                };
                return (
                    <ListItem 
                        key={itemWithStringId.id}
                        item={itemWithStringId} 
                        list={listName} 
                        onCompleteTask={onCompleteTask} 
                        onDeleteTask={onDeleteTask} 
                    />
                );
            })}
            </ScrollView>
        </View>
    );
}

