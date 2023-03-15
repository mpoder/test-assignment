import React from "react";

import "./modal.css";

const Modal = (props: {
    title: string;
    isOpen: boolean;
    shouldRender: boolean;
    toggleModal: any;
    children?: React.ReactNode;
}): JSX.Element => {
    const { title, isOpen, shouldRender, toggleModal, children } = props;

    const rootClass = isOpen ? "modal-root" : "modal-root closed";

    if (!shouldRender) return null;

    return (
        <div className={rootClass}>
            <div className="modal-header">
                <h3>{title}</h3>
                <button onClick={toggleModal}>X</button>
            </div>
            <div className="modal-content">{children}</div>
        </div>
    );
};

export default Modal;
