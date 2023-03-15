import React from "react";

import useNewTaskForm from "../../hooks/TaskList/useNewTaskForm";

import "./newTaskForm.css";

type props = { newTask: Function; toggleModal: any };

const NewTaskForm = (props: props): JSX.Element => {
    const { newTask, toggleModal } = props;

    const { handleForm } = useNewTaskForm({ newTask, toggleModal });

    return (
        <>
            <form className="newTaskForm-root" onSubmit={handleForm}>
                <label htmlFor="taskName">Task Name</label>
                <input id="taskName" name="taskName" required />
                <label htmlFor="startDate">Start Date</label>
                <input id="startDate" name="startDate" type="date" required />
                <label htmlFor="endDate">End Date</label>
                <input id="endDate" name="endDate" type="date" required />
                <div className="newTaskForm-buttons">
                    <button
                        className="button"
                        onClick={toggleModal}
                        type="button"
                    >
                        Cancel
                    </button>
                    <input
                        className="button"
                        type="submit"
                        value="Create Task"
                    />
                </div>
            </form>
        </>
    );
};

export default NewTaskForm;
