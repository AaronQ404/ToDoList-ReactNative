import { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import '../styles.css';

export default function ListItem({ item, onPressItem, onDeleteItem,isAList }) {
    
    const handleComplete = () => {
        onPressItem(item);
        swipeableRef.current?.close()
    }

    const handleDelete = () => {
        onDeleteItem(item)
        swipeableRef.current?.close()
    }

    const swipeableRef = useRef(null);

    // Render para la acción al deslizar a la derecha
    const renderRightActions = () => (
        <View onPress={handleDelete} className="bg-red-500 m-2 w-100% flex-1 rounded-lg justify-center items-end p-4">
            <Text className="text-white font-bold">Borrar</Text>
        </View>
    );

    // Render para la acción al deslizar a la izquierda
    const renderLeftActions = () => (
        <View className={`${isAList?'bg-blue-500':'bg-green-400'} m-2 w-100% flex-1 rounded-lg justify-center items-left p-2`}>
            <Text className="text-white font-bold">{isAList?'Abrir':'Completar'}</Text>
        </View>
    );


    return (
        <Swipeable className='dark:bg-neutral-900'
        ref={swipeableRef}
        onSwipeableOpen={direction => {
            if (direction === 'left') {
                handleDelete();
            } else if (direction === 'right' ) {
                handleComplete();
            }
        }}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}>
            <Pressable className={`  ${item.completada ? "bg-green-100 dark:bg-green-200" : 'bg-white dark:bg-neutral-800'} m-2 flex-row rounded-lg justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200 ease-in-out'}`}>
                <Text className={`p-4 text-lg w-[70%] ${item.completada ? 'line-through text-gray-500' : 'dark:text-white'}`}>
                    {item.texto}
                </Text>
            </Pressable>

        </Swipeable>

    );
}
