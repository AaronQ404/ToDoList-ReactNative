import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import mmkvHelper from "../helpers/mmkvHelper";
import AddItemList from "./AddItemList";
import ListItem from "./ListItem";

export default function List({listName}) {
    
    const [list,setList] = useState(mmkvHelper.getTasks(listName));

    const updateList = () => {
        setList(mmkvHelper.getTasks(listName));
    }
    console
    return (
        <View>
            
            <View>
                    <Text className=" text-4xl text-fd-primary">{listName}</Text>
                    <AddItemList onAddTask={updateList} />
                </View>
                <View>
                {
                    list.map((item) => {
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
                                onCompleteTask={updateList} 
                                onDeleteTask={updateList} 
                            />
                        );
                    })
                }
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    listContainer: {
        flex: 1,
    }
});
