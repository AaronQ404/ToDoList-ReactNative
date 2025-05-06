import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();


/**
 * Helper para guardar un item en una lista

 */
export default mmkvHelper = {


    /**
     * Guarda un item en una lista
     * @param {*} itemName nombre del item
     * @param {*} list nombre de la lista
     */
    saveTask: (itemName,list) => {
    const savedItems = storage.getString(list);
    const items = savedItems ? JSON.parse(savedItems) : [];

    // 2. Crear el nuevo item de la lista
    const newItem = { id: Date.now(), texto: itemName, completada: false };

    // 3. Añadir el nuevo item a la lista
    const newList = [...items, newItem];

    // 4. Guardar el array actualizado en MMKV
    storage.set(list, JSON.stringify(newList));
    },

    /**
     * Obtiene todas los items de una lista
     * @param {*} list Nombre de la lista
     * @returns 
     */
    getTasks: (list) => {
        //1. Obtiene los items de la lista proporcionada
        const savedItems = storage.getString(list);
        // 2. Parsea los items a un array, en caso de que no existan, retorna un array vacio
        const items = savedItems ? JSON.parse(savedItems) : [];
        return items;
    },


    /**
     * Obtiene un item de una lista
     * @param {*} id id del item
     * @param {*} list nombre de la lista
     * @returns 
     */
    getTask: (id,list) => {
        //1. Obtiene los items de la lista proporcionada
        const items = getTasks();
        // 2. Busca el item con el id proporcionado
        const item = tasks.find(task => task.id === id);
        // 3. Devuelve  el item encontrado
        return task;
    },
    
    /**
     * Elimina un item de una lista
     * @param {*} id id del item
     * @param {*} list nombre de la lista
     */
    deleteTask: (id,list) => {
        //1. Obtiene los items de la lista proporcionada
        const savedItems = storage.getString(list);
        // 2. Devuelve los items a un array, en caso de que no existan, devuelve un array vacio
        const items = savedItems ? JSON.parse(savedItems) : [];

        // 2. Elimina la tarea con id específico (por ejemplo, id = 123)
        const idAEliminar = id;
        const newSavedItems = items.filter(item => item.id !== idAEliminar);

        // 3. Guardar la lista actualizada en MMKV
        storage.set(list, JSON.stringify(newSavedItems));
    },
    

     /**
      * Actualiza un item de una lista
      * @param {*} id id del item
      * @param {*} item item
      * @param {*} list nombre de la lista
      */
    completeTask: (id, list) => {
        //1. Obtiene los items de la lista proporcionada
        const savedItems = storage.getString(list);
        const items = savedItems ? JSON.parse(savedItems) : [];
        // 2. Busca el item con el id proporcionado
        const index = items.findIndex(item => item.id === id);
        const item = items[index];
        // 3. Si el item existe, actualiza el item
        if (index !== -1) {
            items[index].completada = !item.completada;
            storage.set(list, JSON.stringify(items));
        }
    }
}
