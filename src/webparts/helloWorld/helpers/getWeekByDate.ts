export const getWeekByDate = (date: Date): number => {
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1);

    const startOfYearInMS = startOfYear.getTime();
    const dateInMS = date.getTime();

    return Math.ceil(
        ((dateInMS - startOfYearInMS) / 86400000 + startOfYear.getDay() + 1) / 7
    );
};
