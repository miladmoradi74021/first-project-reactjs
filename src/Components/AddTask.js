import React, { Component } from "react";


export default class AddTask extends Component {
    state = {
        taskTitle: "",
    };

    onChangeTitle = (e) => {
        const currentValue = e.target.value;

        this.setState({ taskTitle: currentValue });
    }


    onAddTask = () => {
        const { addTask } = this.props;
        const { taskTitle } = this.state;

        addTask(taskTitle);

        this.setState({ taskTitle: "" })
    }

    render() {
        const { onChangeTitle, onAddTask } = this;
        const { taskTitle } = this.state;
        return (
            <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Add your new todo" value={taskTitle} onChange={onChangeTitle} />
                <div className="input-group-prepend primaryButton">
                    <button className="input-group-text btn px-3" disabled={!taskTitle} onClick={onAddTask}><i className="fa fa-plus"></i></button>
                </div>
            </div>
        )

    }
}