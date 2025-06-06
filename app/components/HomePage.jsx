import { useRouter } from "expo-router";
import { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import mmkvHelper from '../helpers/mmkvHelper';
import AddItemList from './AddItemList';
import List from './List';

export default HomePage = () => {
    
    const [lists,setLists] = useState(mmkvHelper.getAllLists());
    const router = useRouter();

    const onPressItem = (item)  => {
        router.navigate({
            pathname: "/components/ListView",
            params: { 
                listName: item.texto,
                listId: item.id
            }
        });
    }

    const onDeleteItem = (item) => {
        mmkvHelper.deleteTask(item.id,'listas');
        Toast.show({
            type:'success',
            text1: 'Lista eliminada',
            text2:'Lista '+item.texto+' eliminada con éxito',
            visibilityTime: '2000'
        })
        updateList();
    }


    const updateList = () =>{
        setLists( mmkvHelper.getAllLists());
    }

    const handleAddList = (itemName) => {
        const listName = String(itemName);
        if(listName.trim() === ''){
            Toast.show({
                type:'error',
                text1:'Error',
                text2:'No se puede insertar una lista sin nombre.',
                visibilityTime: '4000'
            })
            return;
        }else{
            mmkvHelper.saveList(listName);
            Toast.show({
                type:'success',
                text1:'Lista creada',
                text2:'Lista '+itemName+' creada con exito',
                visibilityTime: '2000'
            });
            updateList();
        }
    }

    return (
            <View className="w-screen h-full">                          
                <List
                    list={lists}
                    onClickItem={onPressItem}
                    onDeleteItem={onDeleteItem}
                    isAList = {true}
                />
                <AddItemList onAddTask={handleAddList}/>
            </View>
        );
}