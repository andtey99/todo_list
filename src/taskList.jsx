import React from "react";
import TaskItem from "./taskItem";
import "./styles/taskList.css"

const TaskList = ({
    tasks,
    onDelete,
    onChange,
    onComplete
}) => {

    return (
        <div className="taskList">
            {tasks.length === 0 ? <span>Задач не запланировано</span> : tasks.map( (item, index) => <TaskItem number={index} info={item} key={index} onDelete={onDelete} onChange={onChange} onComplete={onComplete}/>)}
        </div>
    );
}

export default TaskList;