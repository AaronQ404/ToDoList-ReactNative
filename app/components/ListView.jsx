import { HeaderBackButton } from "@react-navigation/elements";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import Toast from 'react-native-toast-message';
import mmkvHelper from "../helpers/mmkvHelper";
import toastConfig from "../toast.config";
import AddItemList from "./AddItemList";
import List from "./List";


export default function ListView() {
    const { listName, listId } = useLocalSearchParams();
    const [tasks, setTasks] = useState(mmkvHelper.getTasks(listId));
    const router = useRouter();

    const handleAddTask = (taskName) => {
        if(taskName.trim() === ''){
            Toast.show({
                type:'error',
                text1:'Error',
                text2:'No se puede insertar tareas vacias.',
                visibilityTime: '2000'
            })
            return;
        }else{
            mmkvHelper.saveTask(taskName, listId);
            updateList();
            Toast.show({
                type:'success',
                text1:'Tarea Añadida',
                text2:'Tarea añadida con exito',
                visibilityTime: '1000'
            })
        }
    }

    const updateList = () => {
        const updatedList = mmkvHelper.getTasks(listId);
        setTasks(updatedList);
    }

    const onClickItem = (item) => {
        var message = !item.completada ? 'Item marcado como completado' : 'Item marcado como incompleto';
        var title = !item.completada ? 'Completado' : 'No Completado';
        mmkvHelper.completeTask(item.id,listId);
        Toast.show({
            type:'success',
            text1:'Completado',
            text2:message,
            visibilityTime: '2000'
        });
        updateList();
        
    }

    const onDeleteItem = (item) => {
        console.log(item);
        mmkvHelper.deleteTask(item.id,listId);
        Toast.show({
            type:'success',
            text1:'Eliminado',
            text2:'Item eliminado con exito',
            visibilityTime: '2000'
        })
        updateList();
       
    }



    // const toastConfig = {
    //     success: (props) => (
    //         <SuccessToast
    //             {...props}
    //             contentContainerStyle={{ paddingHorizontal: 15 }}
    //             text1Style={{
    //                 fontSize: 20,
    //                 fontWeight: '400'
    //             }}
    //             text2Style={{
    //                 fontSize: 17
    //             }}
    //         />
    //     ),
    //     error: (props) => (
    //         <ErrorToast
    //             {...props}
    //             text1Style={{
    //                 fontSize: 20
    //             }}
    //             text2Style={{
    //                 fontSize: 17
    //             }}
    //         />
    //     )
    // };

    return (
        <View className="w-screen h-full">
            <Stack.Screen 
                options={{ 
                    title: listName,
                    headerLeft: () => {
                        console.log(router.canGoBack())
                        return router.canGoBack() ? <HeaderBackButton
                        onPress={() => router.back()}/> : (
                            <HeaderBackButton
                                onPress={() => router.navigate('/components/HomePage')}
                            />
                        );
                    }
                }} 
            />
            <List 
                list={tasks}
                listName={listName}
                onClickItem={onClickItem}
                onDeleteItem={onDeleteItem}
            />
            <AddItemList onAddTask={handleAddTask}/>
            <Toast config={toastConfig} />
        </View>
    );
}
