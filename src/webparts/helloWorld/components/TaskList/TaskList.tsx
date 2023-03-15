import React from "react";

import { NewTaskButton } from "./NewTaskButton";

import "./taskList.css";

import taskType from "./taskType";

const Task = (props: { task: taskType }): JSX.Element => {
    const { task } = props;
    return <div className="taskList-task">{task.taskName}</div>;
};

const TaskList = (props: {
    taskList: Array<taskType>;
    newTask: Function;
}): JSX.Element => {
    const { taskList, newTask } = props;

    const hasLessThan10Tasks = taskList.length < 10;

    const maybeNewTaskButton = hasLessThan10Tasks ? (
        <div className="taskList-newButton">
            <NewTaskButton newTask={newTask} />
        </div>
    ) : null;

    const taskElements = taskList.map((task: taskType) => {
        return <Task key={task.taskName} task={task} />;
    });

    return (
        <div className="taskList-root">
            {taskElements}
            {maybeNewTaskButton}
        </div>
    );
};

export default TaskList;
