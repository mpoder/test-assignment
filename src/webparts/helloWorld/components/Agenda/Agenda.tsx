import React from "react";
import useAgenda from "../../hooks/Agenda/useAgenda";
import { getWeekNumbersForMonth } from "../../helpers/getWeekNumbersForMonth";

import taskType from "../TaskList/taskType";

import AgendaCell from "./AgendaCell";

import "./agenda.css";

type propsTypes = {
    taskList: Array<taskType>;
    currentYear: number;
    currentQuarter: number;
    currentMonths: Array<number>;
};

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

type agendaRowTypes = {
    agenda: agendaTypes;
    currentYear: number;
    currentQuarter: number;
    currentMonths: Array<number>;
};

const AgendaRow = (props: agendaRowTypes): JSX.Element => {
    const { agenda, currentYear, currentMonths } = props;

    const { start, end, name } = agenda;
    const startWeek = start.week;
    const endWeek = end.week;

    const weekView = currentMonths.map((month: number): JSX.Element => {
        const weeksInMonth = getWeekNumbersForMonth(month, currentYear);

        const weeksJSX = weeksInMonth.map((week: number): JSX.Element => {
            let isActive = false;

            const startWeekAligns = week >= startWeek;
            const endWeekAligns = week <= endWeek;
            const startMonthAligns = month >= start.month;
            const endMonthAligns = month <= end.month;

            if (
                startWeekAligns &&
                startMonthAligns &&
                endWeekAligns &&
                endMonthAligns
            ) {
                isActive = true;
            }

            return (
                <AgendaCell key={name} agenda={agenda} isActive={isActive} />
            );
        });

        return (
            <div key={name} className="agenda-row-week">
                {weeksJSX}
            </div>
        );
    });
    return (
        <div className="agenda-row">
            <div className="agenda-row-root">
                <span className="agenda-row-columns" data-name={name}>
                    {weekView}
                </span>
            </div>
        </div>
    );
};

const Agenda = (props: propsTypes): JSX.Element => {
    const { taskList, currentYear, currentQuarter, currentMonths } = props;

    const { parsedList } = useAgenda({ taskList });

    if (!parsedList)
        return <div className="agenda-root">{"< No agenda to show >"}</div>;

    const agendaRows = parsedList.map((row: agendaTypes) => {
        return (
            <AgendaRow
                key={row.name}
                agenda={row}
                currentYear={currentYear}
                currentQuarter={currentQuarter}
                currentMonths={currentMonths}
            />
        );
    });

    return <div className="agenda-root">{agendaRows}</div>;
};

export default Agenda;
