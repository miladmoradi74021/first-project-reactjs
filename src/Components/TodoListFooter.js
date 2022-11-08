import React from "react"

const TodoListFooter = ({ taskListCount, deleteTasks }) => (
    <div className="d-flex justify-content-between align-items-baseline my-3">
        <p>You have {taskListCount} pending tasks</p>
        <button className="input-group-text text-light primaryButton" onClick={() => deleteTasks()}>Clear All</button>
    </div>

)

export default TodoListFooter