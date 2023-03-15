import { getDaysInMonth, getWeeksInMonth } from "./getWeeksInMonth";
import { getWeekByDate } from "./getWeekByDate";

export const getWeekNumbersForMonth = (month: number, currentYear: number): Array<number> => {
    return [...Array(getWeeksInMonth(month, currentYear))].map(
        (value, index) => {
            let dayToCheck = 1;
            const daysInMonth = getDaysInMonth(month, currentYear);
            if (index >= 1) dayToCheck = index * 7;
            if (dayToCheck > daysInMonth) dayToCheck = daysInMonth;

            const weekNumber = getWeekByDate(
                new Date(currentYear, month - 1, dayToCheck)
            );
            return weekNumber;
        }
    );
};
