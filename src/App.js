import React, { useState } from "react";
import Header from "./header"
import TaskList from "./taskList";
import AddItemModule from "./addItemModule";
import "./styles/addItem_btn.css"

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            title: "Проверить работу Task Manager",
            description: "Проверить работу всех опций, оценить функционал и сделать для себя какой-то вывод :)"
        },
        {
            id: 1,
            title: "Дополнительный пункт",
            description: "Просто дополнительный пункт."
        },
        {
            id: 2,
            title: "Задача на день, которую необходимо выполнить",
            description: "Выполнить нужно любой ценой и несмотря ни на что, потому что так надо и не нужно задавать лишних вопросов, просто делай."
        }
    ]);
    const [btnStatus, setBtnStatus] = useState(false);
    
    function addNewTask(newTask) {
        setTasks([...tasks, {id: tasks.length, ...newTask}])
    }
    function handleDelete(id) {
        let tasksMod = tasks.filter( item => item.id !== id);
        setTasks(tasksMod);
    }
    function handleChange(id) {

    }
    function handleComplete(id) {

    }

    return (
        <>
            <Header />
            <button className="addItem__btn" title="Добавить задачу" onClick={() => setBtnStatus(true)}>+</button>
            <AddItemModule addNewTask={addNewTask} btnStatus={btnStatus} activationStatus={setBtnStatus}/>
            <TaskList tasks={tasks} onDelete={handleDelete} onChange={handleChange} onComplete={handleComplete}/>
        </>
    )
}

export default App;