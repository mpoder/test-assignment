import { useState } from "react";

const useAgendaCell = () => {
    const [isBeingHovered, setIsBeingHovered] = useState(false);

    const onMouseOver = () => {
        setIsBeingHovered(true);
    };

    const onMouseOut = () => {
        setIsBeingHovered(false);
    };

    return { isBeingHovered, onMouseOut, onMouseOver };
};

export default useAgendaCell;
