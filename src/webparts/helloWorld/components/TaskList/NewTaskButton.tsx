import React from "react";

import useModal from "../../hooks/Modal/useModal";

import Modal from "../Modal/Modal";
import NewTaskForm from "./NewTaskForm";

import "./taskList.css";

export const NewTaskModal = (props: {
    newTask: Function;
    isOpen: boolean;
    shouldRender: boolean;
    toggleModal: Function;
}): JSX.Element => {
    const { newTask, isOpen, shouldRender, toggleModal } = props;

    return (
        <Modal
            isOpen={isOpen}
            shouldRender={shouldRender}
            toggleModal={toggleModal}
            title="New Task"
        >
            <NewTaskForm newTask={newTask} toggleModal={toggleModal} />
        </Modal>
    );
};

export const NewTaskButton = (props: { newTask: any }): JSX.Element => {
    const { isOpen, shouldRender, toggleModal } = useModal();

    const { newTask } = props;

    return (
        <>
            <button className="button" onClick={toggleModal}>
                {"New Task"}
            </button>
            <NewTaskModal
                isOpen={isOpen}
                shouldRender={shouldRender}
                toggleModal={toggleModal}
                newTask={newTask}
            />
        </>
    );
};
