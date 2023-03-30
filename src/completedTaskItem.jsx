import React from "react";
import './styles/taskItem.css';

const CompletedTaskItem = ({ number, info }) => {

    return (
        <div className="taskItem completedTask">
            <div className="leftPart">
                <h2>{number + 1}. {info.title}</h2>
                <p>{info.description}</p>
            </div>
        </div>
    )
}

export default CompletedTaskItem;