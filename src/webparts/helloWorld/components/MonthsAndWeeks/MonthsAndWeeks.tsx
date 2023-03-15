import React from "react";
import { getWeekNumbersForMonth } from "../../helpers/getWeekNumbersForMonth";

import MONTHS from "../../helpers/months";

import "./monthsAndWeeks.css";

const MonthsAndWeeks = (props: {
    currentQuarter: number;
    currentMonths: Array<number>;
    currentYear: number;
}): JSX.Element => {
    const { currentMonths, currentYear } = props;

    const months = currentMonths.map((month: number): JSX.Element => {
        const weeksInMonth = getWeekNumbersForMonth(month, currentYear);

        const weeksJSX = weeksInMonth.map((week: number): JSX.Element => {
            return (
                <span className="monthsAndWeeks-weekTitle" key={week}>
                    {week}
                </span>
            );
        });

        return (
            <div className="monthsAndWeeks-month" key={MONTHS[month]}>
                <span className="monthsAndWeeks-monthTitle">
                    {MONTHS[month]}
                </span>
                <span className="monthsAndWeeks-weekTitles">{weeksJSX}</span>
            </div>
        );
    });

    return (
        <div className="monthsAndWeeks-root">
            <div className="monthsAndWeeks-months">{months}</div>
        </div>
    );
};

export default MonthsAndWeeks;
