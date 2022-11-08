import React from "react";

import TaskItem from "./TaskItem";

const TaskList = ({ taskList,deleteTask }) => (
    <ul className="list-group">
        {taskList.map(task => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>
        ))}
    </ul>
)

export default TaskList