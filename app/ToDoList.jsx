import { useState } from "react";
import { View } from "react-native";
import "../global.css";
import AddItemList from "./components/AddItemList";
import List from "./components/List";
import mmkvHelper from "./helpers/mmkvHelper";

export default function ToDoList() {
    const listName = 'tareas';
    const [list, setList] = useState(mmkvHelper.getTasks(listName));

    const updateList = () => {
        const updatedList = mmkvHelper.getTasks(listName);
        setList(updatedList);
    }

    const onAddTask = () => {
        alert('addTask');
    }

    const deleteAll = () => {
        mmkvHelper.deleteAll();
    }

    return (
        <View>
            <List 
                list={list}
                listName={listName}
                onCompleteTask={updateList}
                onDeleteTask={updateList}
            />
            <AddItemList onAddTask={updateList}/>
            {/* <Button onPressIn={deleteAll}>Delete All</Button> */}
        </View>
    )
}
