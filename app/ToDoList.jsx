import { useState } from "react";
import { View } from "react-native";
import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message";
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

    const deleteAll = () => {
        mmkvHelper.deleteAll();
    }

    const toastConfig = {
        /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
        success: (props) => (
          <SuccessToast
            {...props}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 20,
              fontWeight: '400'
            }}
            text2Style={{
                fontSize: 17
            }}
          />
        ),
        /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
        error: (props) => (
          <ErrorToast
            {...props}
            text1Style={{
              fontSize: 20
            }}
            text2Style={{
              fontSize: 17
            }}
          />
        ),
        /*
          Or create a completely new type - `tomatoToast`,
          building the layout from scratch.
      
          I can consume any custom `props` I want.
          They will be passed when calling the `show` method (see below)
        */
        tomatoToast: ({ text1, props }) => (
          <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
          </View>
        )
      };

    return (
        <View className="w-screen h-full">
            <List 
                list={list}
                listName={listName}
                onCompleteTask={updateList}
                onDeleteTask={updateList}
            />
            <AddItemList onAddTask={updateList}/>
            {/* <Button onPressIn={deleteAll}>Delete All</Button> */}
            <Toast config={toastConfig} />
        </View>
    )
}
