import React from "react"


const TaskItem = ({ task, deleteTask }) => {
    const [showDltBtn,setShowDltBtn] = React.useState(false)
    const handleShowDeleteBtn = () => setShowDltBtn(true)
    const handleDontShowDeleteBtn = () => setShowDltBtn(false)
    return    (
        <div className="input-group my-1" onMouseOver={handleShowDeleteBtn} onMouseLeave={handleDontShowDeleteBtn}>
            <li className="form-control list-group-item">{task.title}</li>
            <div className="input-group-prepend deleteButton" hidden={!showDltBtn}>
                <button className="input-group-text btn px-3" onClick={() => deleteTask(task.id)}><i className="fa fa-trash" ></i></button>
            </div>
        </div>
    )
}


export default TaskItem