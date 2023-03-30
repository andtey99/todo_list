import React, { useState } from "react";
import Header from "./header"
import TaskList from "./taskList";
import AddItemModule from "./addItemModule";
import CompletedTaskList from "./completedTaskList";
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
    const [completedTasks, setCompletedTasks] = useState([]);
    
    function addNewTask(newTask) {
        setTasks([...tasks, {id: tasks.length, ...newTask}])
    }
    function handleDelete(id) {
        let tasksMod = tasks.filter( item => item.id !== id);
        setTasks(tasksMod);
    }
    function handleChange(item) {
        let tmpTasks = [...tasks];
        for (let i = 0; i < tasks.length; i++) {
            if (tmpTasks[i].id === item.id) tmpTasks[i] = Object.assign({}, item);
        }
        setTasks(tmpTasks);
    }
    function handleComplete(id) {
        let completedArray = tasks.filter( item => item.id === id);
        let tasksMod = tasks.filter( item => item.id !== id);
        setTasks(tasksMod);
        setCompletedTasks([...completedTasks, ...completedArray]);
    }

    return (
        <>
            <Header />
            <button className="addItem__btn" title="Добавить задачу" onClick={() => setBtnStatus(true)}>+</button>
            <AddItemModule addNewTask={addNewTask} btnStatus={btnStatus} activationStatus={setBtnStatus}>Новая задача? Это хорошо!</AddItemModule>
            <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleChange} onComplete={handleComplete} completedTasks={completedTasks.length}/>
            <CompletedTaskList completedTasks={completedTasks} />
        </>
    )
}

export default App;