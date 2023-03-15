import { useState } from "react";
import QUARTERS from "../../helpers/quarters";

type taskType = {
    taskName: string;
    startDate: Date;
    endDate: Date;
};

const getCurrentQuarter = () => {
    const date = new Date();
    const currentMonth = date.getMonth();

    if (currentMonth <= 2) return 0;
    if (currentMonth <= 5) return 1;
    if (currentMonth <= 8) return 2;
    return 3;
};

const useApp = () => {
    const date = new Date();
    const [currentQuarter, setCurrentQuarter] = useState(getCurrentQuarter());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [taskList, setTaskList] = useState([]);

    const validateQuarter = (quarter: number): number => {
        if (quarter > 3) {
            setCurrentYear(currentYear + 1);
            return 0;
        } else if (quarter < 0) {
            setCurrentYear(currentYear - 1);
            return 3;
        }
        return quarter;
    };

    const goToNextQuarter = () => {
        const nextQuarter = currentQuarter + 1;

        setCurrentQuarter(validateQuarter(nextQuarter));
    };

    const goToPrevQuarter = () => {
        const nextQuarter = currentQuarter - 1;

        setCurrentQuarter(validateQuarter(nextQuarter));
    };

    const newTask = (task: taskType) => {
        setTaskList([...taskList, task]);
    };

    const currentMonths = QUARTERS[currentQuarter];

    return {
        currentQuarter: currentQuarter + 1,
        setCurrentQuarter,
        goToNextQuarter,
        goToPrevQuarter,
        currentYear,
        currentMonths,
        newTask,
        taskList,
    };
};

export default useApp;
