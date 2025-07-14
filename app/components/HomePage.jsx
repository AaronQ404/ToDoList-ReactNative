import { Stack, useFocusEffect, useRouter } from "expo-router";
import React, { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import mmkvHelper from '../helpers/mmkvHelper';
import AddButton from "./AddButton";
import List from './List';
import ModalAddItem from "./ModalAddItem";
import OptionButton from './OptionButton';

export default HomePage = () => {
    
    // const [lists,setLists] = useState(mmkvHelper.getAllLists());
    const [lists,setLists] = useState(mmkvHelper.getAllLists());
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();


    useFocusEffect(
        React.useCallback(()=>{
            updateList()
        },[])
    )


    const handleModal = () => {
        setModalVisible(true);
    }    
  


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
        mmkvHelper.deleteList(item.id);
        Toast.show({
            type:'success',
            text1: 'Lista eliminada',
            text2:'Lista '+item.texto+' eliminada con éxito',
            visibilityTime: '1000'
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
                text2:'No se puede insertar listas sin un nombre.',
                visibilityTime: '2000'
            })
            return;
        }else{
            mmkvHelper.saveList(listName);
            Toast.show({
                type:'success',
                text1:'Creada',
                text2:'Lista '+listName+' creada con exito',
                visibilityTime: '1000'
            })
            updateList();
        }
    }

    return (

            <View className="w-screen h-full dark:bg-neutral-900">                          
            <Stack.Screen               
                options={{
                    title:'Inicio',
                    headerRight: () => {
                        return <OptionButton/>
                    }

                 }}
            />
                <List
                    list={lists}
                    onClickItem={onPressItem}
                    onDeleteItem={onDeleteItem}
                    isAList = {true}
                />
                <View className="items-center m-4">
                    <AddButton handleModal={handleModal} />
                </View>
                <ModalAddItem
                    modalVisible={modalVisible}
                    setModalVisible = {setModalVisible}
                    handleAdd={handleAddList}
                />
                {/* <Toast config={toastConfig(colorScheme)} /> */}
            </View>
        );
}