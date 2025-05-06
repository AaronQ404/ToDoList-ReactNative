import { useState } from 'react';
import mmkvHelper from '../helpers/mmkvHelper';

export default function AddItemList({onAddTask}) {
    const [newTask, setNewTask] = useState(''); 
    const list = 'tareas';
    const handleAddTask = () => {
        mmkvHelper.saveTask(newTask,list);
        setNewTask('');
        onAddTask();
    }
    

    return (
        <div className="todo-form">
            <input className="todo-input" type="text" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button className="add-button" onClick={handleAddTask}>Add</button>
        </div>
    )
}
