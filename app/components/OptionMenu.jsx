import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import mmkvHelper from "../helpers/mmkvHelper";
import ModalConfirmation from './ModalConfirmation';

import { useRouter } from "expo-router";


export default OptionMenu = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [modalVisible, setModalVisible] = useState(false);

    const router = useRouter();

    const handleModal = () => {
        setModalVisible(true);
    }
    
    const handleOk = () => {
        mmkvHelper.deleteAllList();
        setModalVisible('false');
        router.dismissAll();
        router.replace('/components/HomePage');
    }
    
    const toggleDarkMode = () => {
        const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
        setColorScheme(newScheme);
        mmkvHelper.saveSettings({darkMode: newScheme });
        console.log('Settings guardados:', mmkvHelper.getSettings());
      };

      const isDarkMode = colorScheme ==='dark';
    
    return(
        <View className="w-screen h-full text-center dark:bg-neutral-900">
            <Stack.Screen
               options = {{
                title:'Opciones'
               }}
            />
            <Text className="p-4 text-2xl font-bold dark:text-white">Visual</Text>
            <Pressable className=" flex-row p-4 m-2 border-b-2 border-gray-300" onPress={toggleDarkMode}>
                <Text className='flex-1 dark:text-white'>Modo Oscuro</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </Pressable>
            <Text className="p-4 text-2xl font-bold dark:text-white">Almacenamiento</Text>
            <Pressable className="p-4 m-2 border-b-2 border-gray-300" onPress={handleModal}>
                <Text className='dark:text-white'>Borrar Todo</Text>
            </Pressable>

            <ModalConfirmation
                modalVisible={modalVisible}
                setModalVisible = {setModalVisible}
                handleOk={handleOk}
                message = {'¿Desea borrar todas las listas?'}
            />
        </View>
    )
}