import React, { useContext } from "react";
import { TasksContext } from "../context";
import { initColumns } from "../providers/initData";

const Task = (props)=> {
    const { user, name, idColumn, id } = props.task

    const { moveRight, moveLeft, deleteTask } = useContext(TasksContext)
    // console.log(tasks)

    const handleMoveRightClick = () => {
        moveRight(id, initColumns)
    }

    const handleMoveLeftClick = () => {
        moveLeft(id, initColumns)
    }

    const handleDeleteClick = () => {
        deleteTask(id)
    }
    return(
        <div className="task" >
            <h4 className="task__name">{name}</h4>
            <h4 className="task__user">{user}</h4>
            <div className="task__buttons">
                <button onClick={handleMoveLeftClick} className={`task__previous task--button ${idColumn === 1 ? "task__previous--none" : null}`}>{'<'}</button>
                <button onClick={handleDeleteClick} className="task__delete task--button ">x</button>
                <button onClick={handleMoveRightClick} className={`task__next task--button ${idColumn === 7 ? "task__next--none" : null}`}>{'>'}</button>
            </div>

        </div>
    )
}

export default Task