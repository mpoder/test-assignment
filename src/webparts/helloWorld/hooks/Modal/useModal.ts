import { useState, useRef, useEffect } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const timeoutRef = useRef<ReturnType <typeof setTimeout>>()

    const toggleModal = () => {
        if (!isOpen) {
            setIsOpen(true);
            setShouldRender(true);
        } else {
            setIsOpen(false);
            timeoutRef.current = setTimeout(() => setShouldRender(false), 500);
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return { isOpen, shouldRender, toggleModal };
};

export default useModal;
