import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// Función de utilidad para validar y normalizar IDs
const normalizeId = (id) => {
    if (!id) return '';
    return String(id).trim();
};

/**
 * Helper para guardar un item en una lista

 */
export default mmkvHelper = {


    /**
     * Guarda un item en una lista
     * @param {*} itemName nombre del item
     * @param {*} list nombre de la lista
     */
    saveTask: (itemName, list) => {
        if (!itemName || !list) return;
        
        const savedItems = storage.getString(list);
        const items = savedItems ? JSON.parse(savedItems) : [];

        // Encontrar el ID más alto y sumarle 1
        const maxId = items.reduce((max, item) => {
            const currentId = parseInt(item.id) || 0;
            return currentId > max ? currentId : max;
        }, 0);

        const newItem = { 
            id: String(maxId + 1), 
            texto: String(itemName), 
            completada: false 
        };

        const newList = [...items, newItem];
        storage.set(list, JSON.stringify(newList));
    },

    /**
     * Obtiene todas los items de una lista
     * @param {*} list Nombre de la lista
     * @returns 
     */
    getTasks: (list) => {
        if (!list) return [];
        
        const savedItems = storage.getString(list);
        return savedItems ? JSON.parse(savedItems) : [];
    },


    /**
     * Obtiene un item de una lista
     * @param {*} id id del item
     * @param {*} list nombre de la lista
     * @returns 
     */
    getTask: (id, list) => {
        if (!id || !list) return null;
        
        const items = mmkvHelper.getTasks(list);
        const normalizedId = normalizeId(id);
        return items.find(item => normalizeId(item.id) === normalizedId) || null;
    },
    
    /**
     * Elimina un item de una lista
     * @param {*} id id del item
     * @param {*} list nombre de la lista
     */
    deleteTask: (id, list) => {
        if (!id || !list) return;
        
        const savedItems = storage.getString(list);
        const items = savedItems ? JSON.parse(savedItems) : [];
        const normalizedId = normalizeId(id);
        
        const newSavedItems = items.filter(item => normalizeId(item.id) !== normalizedId);
        storage.set(list, JSON.stringify(newSavedItems));
    },
    

     /**
      * Actualiza un item de una lista
      * @param {*} id id del item
      * @param {*} item item
      * @param {*} list nombre de la lista
      */
    completeTask: (id, list) => {
        if (!id || !list) return;
        
        const savedItems = storage.getString(list);
        const items = savedItems ? JSON.parse(savedItems) : [];
        const normalizedId = normalizeId(id);
        
        const index = items.findIndex(item => normalizeId(item.id) === normalizedId);
        if (index !== -1) {
            items[index].completada = !items[index].completada;
            storage.set(list, JSON.stringify(items));
        }
    },


    deleteList: (id) => {
        if(!id) return;

        const itemsInList = mmkvHelper.getTasks(id)
        itemsInList.map(item => {
            mmkvHelper.deleteTask(item.id,id)
        });

        mmkvHelper.deleteTask(id,'listas')

    },

    saveList: (listName) => {
        if (!listName) return;
        
        const savedLists = storage.getString('listas');
        const lists = savedLists ? JSON.parse(savedLists) : [];
        // Encontrar el ID más alto y sumarle 1
        const maxId = lists.reduce((max, item) => {
            const currentId = parseInt(item.id) || 0;
            return currentId > max ? currentId : max;
        }, 0);

        const newList = { 
            id: String(maxId + 1), 
            texto: String(listName), 
            items: [] 
        };
        const newListas = [...lists, newList];
        
        storage.set('listas', JSON.stringify(newListas));
    },

    getAllLists: () => {
        const savedItems = storage.getString('listas');
        return savedItems ? JSON.parse(savedItems) : [];
    },

    deleteAll: () => {
        storage.clearAll()
    }
}
