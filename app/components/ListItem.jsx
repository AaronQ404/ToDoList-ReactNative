import mmkvHelper from '../helpers/mmkvHelper';
import '../styles.css';

export default function ListItem({item,list,onCompleteTask,onDeleteTask}) {

    const {id, texto, completada} = item;

    const updateTask = (id,list) => {
        mmkvHelper.completeTask(id,list);
        onCompleteTask(id);

    }

    const deleteTask = (id,list) => {
        mmkvHelper.deleteTask(id,list);
        onDeleteTask();
    }


    console.log(completada);
    return (
        <div className="todo-item" id={id}>
                <p className={completada ? 'todo-text completed' : 'todo-text'}>{texto}</p>
                <button className="complete-button" onClick={() => updateTask(id,list)}>Complete</button>
                <button className="delete-button" onClick={() => deleteTask(id,list)}>Delete</button>
                
        </div>
    )
}
