import React, { useState } from "react";
import './styles/taskItem.css'
import { BsPencil } from "react-icons/bs";
import { MdDone, MdOutlineDelete } from "react-icons/md";
import EditItemModule from "./editItemModule";

const TaskItem = ({ number, info, onDelete, onEdit, onComplete }) => {
    const [btn, setBtn] = useState(false);

    return (
        <>
        <div className="taskItem">
            <div className="leftPart">
                <h2>{number + 1}. {info.title}</h2>
                <p>{info.description}</p>
            </div>
            <div className="rightPart">
                <button className="completed" title="Выполнено" onClick={() => onComplete(info.id)}><MdDone /></button>
                <button className="edit" title="Редактировать" onClick={() => setBtn(true)}><BsPencil /></button>
                <button className="delete" title="Удалить" onClick={() => onDelete(info.id)}><MdOutlineDelete /></button>
            </div>
        </div>
        <EditItemModule item={info} addNewTask={onEdit} btnStatus={btn} activationStatus={setBtn}>Редактирование задачи</EditItemModule>
        </>
    )
}

export default TaskItem;