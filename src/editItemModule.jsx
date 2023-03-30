import React, {useState} from "react";
import "./styles/module.css"

const EditItemModule = ({ item, addNewTask, btnStatus, activationStatus, children }) => {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);

    function newTask(e) {
        e.preventDefault();
        if (title.length < 5) alert("Название задачи должно содержать не менее 5 символов");
        else {
            addNewTask({id: item.id, title, description});
            activationStatus(false);
        }
    }

    return (
        <div className={btnStatus ? "module active" : "module"} onClick={() => activationStatus(false)}>
            <div className="module_content" onClick={(e) => e.stopPropagation()}>
                <h2 className="moduleHead">{children}</h2>
                <form action="">
                    <input type="text" placeholder="Название задачи" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Детали задачи" value={description} onChange={e => setDescription(e.target.value)} />
                    <button className="addBtn" onClick={newTask}>Изменить</button>
                </form>
            </div>
        </div>
    )
}

export default EditItemModule;