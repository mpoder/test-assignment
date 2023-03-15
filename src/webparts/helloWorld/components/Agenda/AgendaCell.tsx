import React from "react";
import useAgendaCell from "../../hooks/Agenda/useAgendaCell";

import "./agenda.css";

type agendaTypes = {
    name: string;
    startDate: Date;
    endDate: Date;
    start: {
        year: number;
        month: number;
        week: number;
    };
    end: {
        year: number;
        month: number;
        week: number;
    };
};

type agendaCellTypes = {
    agenda: agendaTypes;
    isActive: boolean;
};

type agendaPopupTypes = {
    agenda: agendaTypes;
    isBeingHovered: boolean;
};

const AgendaPopup = (props: agendaPopupTypes): JSX.Element => {
    const { agenda, isBeingHovered } = props;

    const className = isBeingHovered
        ? "agenda-popup-root open"
        : "agenda-popup-root";

    return (
        <div className={className}>
            <h3>{agenda.name}</h3>
            <p>Start date: {agenda.startDate.toLocaleDateString("et-EE")}</p>
            <p>End date: {agenda.endDate.toLocaleDateString("et-EE")}</p>
        </div>
    );
};

const AgendaCell = (props: agendaCellTypes): JSX.Element => {
    const { agenda, isActive } = props;

    const { isBeingHovered, onMouseOut, onMouseOver } = useAgendaCell();

    const className = isActive ? "agenda-cell-root green" : "agenda-cell-root";

    return (
        <>
            <span
                className={className}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                <AgendaPopup
                    agenda={agenda}
                    isBeingHovered={isBeingHovered && isActive}
                />
            </span>
        </>
    );
};

export default AgendaCell;
