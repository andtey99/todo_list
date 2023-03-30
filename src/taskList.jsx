import React from "react";
import TaskItem from "./taskItem";
import "./styles/taskList.css"

const TaskList = ({
    tasks,
    onDelete,
    onEdit,
    onComplete,
    completedTasks
}) => {


    return (
        <div className="taskList">
            {tasks.length === 0 ? <div><span>Задач не запланировано</span><img src="../assets/111.png" alt="Грустный будильник"/> </div> : tasks.map( (item, index) => <TaskItem number={index} info={item} key={index} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete}/>)}
        </div>
    );
}

export default TaskList;