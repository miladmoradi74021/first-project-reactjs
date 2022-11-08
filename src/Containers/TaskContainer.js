import React, { Component } from "react";

import TaskList from "../Components/TaskList";
import AddTask from "../Components/AddTask";
import TodoListFooter from "../Components/TodoListFooter";


export default class TaskContainer extends Component {

    state = {
        taskList: [
            {
                id: "t1",
                title: "Buy a new gaming laptop"
            },
            {
                id: "t2",
                title: "Complate a previous task"
            },
            {
                id: "t3",
                title: "Create video for Youtube"
            },
            {
                id: "t4",
                title: "Create a new potfiolio site"
            },
        ]
    };

    addTask = (title => {
        const newTaskList = [...this.state.taskList];

        const newTask = {
            title,
            id: `${Date.now()}`
        };

        newTaskList.push(newTask);

        this.setState({ taskList: newTaskList });
    })

    deleteTask = (id => {
        this.setState({ taskList: this.state.taskList.filter((task) => (task.id != id)) });
    })

    deleteTasks = (() => {
        this.setState({ taskList: [] });
    })

    render() {

        const { taskList } = this.state;

        const { addTask, deleteTask, deleteTasks } = this;

        return (
            <div className=" d-flex row">
                <div className="card col-md-4 mx-auto center">
                    <div className="px-3">
                        <h1 className="my-4">Todo App</h1>
                        <AddTask addTask={addTask} />
                    </div>
                    <div className="card-body px-3 py-2">
                        <TaskList taskList={taskList} deleteTask={deleteTask} />
                    </div>
                    <div class="my-auto px-3 ">
                        <TodoListFooter taskListCount={taskList.length} deleteTasks={deleteTasks} />
                    </div>
                </div>

            </div>

        );
    }
}