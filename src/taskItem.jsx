import React from "react";
import './styles/taskItem.css'
import { BsPencil } from "react-icons/bs";
import { MdDone, MdOutlineDelete } from "react-icons/md";

const TaskItem = ({ number, info, onDelete, onChange, onComplete }) => {
    return (
        <div className="taskItem">
            <div className="leftPart">
                <h2>{number + 1}. {info.title}</h2>
                <p>{info.description}</p>
            </div>
            <div className="rightPart">
                <button className="completed" title="Выполнено"><MdDone /></button>
                <button className="edit" title="Редактировать"><BsPencil /></button>
                <button className="delete" title="Удалить" onClick={() => onDelete(info.id)}><MdOutlineDelete /></button>
            </div>
        </div>
    )
}

export default TaskItem;