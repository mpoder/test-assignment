import React from "react";
import MonthsAndWeeks from "../MonthsAndWeeks/MonthsAndWeeks";
import TaskList from "../TaskList/TaskList";
import Agenda from "../Agenda/Agenda";

import useApp from "../../hooks/App/useApp";

import "./app.css";

const App = (): JSX.Element => {
    const {
        currentQuarter,
        goToNextQuarter,
        goToPrevQuarter,
        currentMonths,
        currentYear,
        taskList,
        newTask,
    } = useApp();

    return (
        <div className="app-root">
            <div className="app-header">
                <button className="button" onClick={goToPrevQuarter}>
                    Previous
                </button>
                <h1>
                    Quarter {currentQuarter}, {currentYear}
                </h1>
                <button className="button" onClick={goToNextQuarter}>
                    Next
                </button>
            </div>
            <div className="app-monthsView">
                <MonthsAndWeeks
                    currentQuarter={currentQuarter}
                    currentMonths={currentMonths}
                    currentYear={currentYear}
                />
            </div>
            <div className="app-tasks">
                <TaskList taskList={taskList} newTask={newTask} />
            </div>
            <div className="app-agenda">
                <Agenda
                    taskList={taskList}
                    currentQuarter={currentQuarter}
                    currentMonths={currentMonths}
                    currentYear={currentYear}
                />
            </div>
        </div>
    );
};

export default App;
