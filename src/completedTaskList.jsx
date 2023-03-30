import React from "react";
import CompletedTaskItem from "./completedTaskItem";
import "./styles/taskList.css"

const CompletedTaskList = ({ completedTasks }) => {

    if (completedTasks.length === 0) return null;

    return (
        <div className="taskList">
            <span>Выполненные задачи</span>
            {completedTasks.map( (item, index) => <CompletedTaskItem number={index} info={item} key={item.id} />)}
        </div>
    )
}

export default CompletedTaskList;