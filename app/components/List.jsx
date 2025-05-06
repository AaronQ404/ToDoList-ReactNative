import { useState } from "react";
import mmkvHelper from "../helpers/mmkvHelper";
import AddItemList from "./AddItemList";
import ListItem from "./ListItem";

export default function List({listName}) {
    console.log(listName);
    
    const [list,setList] = useState(mmkvHelper.getTasks(listName));

    const updateList = () => {
        setList(mmkvHelper.getTasks(listName));
    }

    return (
        <div>
            <h1>{listName}</h1>
            <AddItemList onAddTask={updateList} />
                {
                    list.map((item) => (
                        <ListItem item={item} list={listName} onCompleteTask={updateList} onDeleteTask={updateList} />
                    ))
                }
            </div>
    )
}
