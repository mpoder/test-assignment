import { useMemo } from "react";
import taskType from "../../components/TaskList/taskType";
import { getWeekByDate } from "../../helpers/getWeekByDate";

type propsTypes = {
    taskList: Array<taskType>;
};

const useAgenda = (props: propsTypes) => {
    const { taskList } = props;

    const parsedList = useMemo(() => {
        if (taskList.length > 0) {
            return taskList.map((task) => {
                const startWeek = getWeekByDate(task.startDate);
                const endWeek = getWeekByDate(task.endDate);

                return {
                    name: task.taskName,
                    startDate: task.startDate,
                    endDate: task.endDate,
                    start: {
                        year: task.startDate.getFullYear(),
                        month: task.startDate.getMonth() + 1,
                        week: startWeek,
                    },
                    end: {
                        year: task.endDate.getFullYear(),
                        month: task.endDate.getMonth() + 1,
                        week: endWeek,
                    },
                };
            });
        } else return [];
    }, [taskList]);

    return { parsedList };
};

export default useAgenda;
