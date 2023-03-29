import React, {useState} from "react";
import "./styles/module.css"

const AddItemModule = ({ addNewTask, btnStatus, activationStatus }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function newTask(e) {
        e.preventDefault();
        if (title.length < 5) alert("Название задачи должно содержать не менее 5 символов");
        else {
            addNewTask({title, description});
            setTitle('');
            setDescription('');
            activationStatus(false);
        }
    }

    return (
        <div className={btnStatus ? "module active" : "module"} onClick={() => activationStatus(false)}>
            <div className="module_content" onClick={(e) => e.stopPropagation()}>
                <h2 className="moduleHead">Новая задача? Это хорошо!</h2>
                <form action="">
                    <input type="text" placeholder="Название задачи" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Детали задачи" value={description} onChange={e => setDescription(e.target.value)} />
                    <button className="addBtn" onClick={newTask}>Добавить</button>
                </form>
            </div>
        </div>
    )
}

export default AddItemModule;