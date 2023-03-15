export const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month - 1, 0).getDate();
};

export const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month - 1, 1).getDay();
};

export const getWeeksInMonth = (month: number, year: number): number => {
    const firstDay = getFirstDayOfMonth(month, year);
    const monthLength = getDaysInMonth(month, year);

    const monthStartsOnSat = firstDay === 6;
    const monthStartsOnSun = firstDay === 0;

    /**
     * Thinking:
     * If month is 28 days long and starts on a Monday (1), then it's 4 weeks.
     * If month is 31 days and starts on Sat (6) or Sun (0), then it's 6 weeks, otherwise 5
     * If month is 30 days and starts on a Sun (0), it's 6 weeks, otherwise 5
     */

    if (monthLength === 31) {
        if (monthStartsOnSat || monthStartsOnSun) {
            return 6;
        } else {
            return 5;
        }
    }

    if (monthLength === 30) {
        if (monthStartsOnSun) return 6;
        return 5;
    }

    if (monthLength === 28) {
        /**
         * This is a special case for Februaries,
         * where we could have a perfect 4-week month
         * if it starts on a Monday.
         */
        if (firstDay === 1) return 4;
        return 5;
    }

    /**
     * This would be the case for a 29-day February,
     * in which case it would be tough to fit 29 days in 4 weeks.
     */
    return 5;
};
