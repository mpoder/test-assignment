type propsTypes = {
    newTask: Function;
    toggleModal: Function;
};

const useNewTaskForm = (props: propsTypes) => {
    const { newTask, toggleModal } = props;

    const handleForm = (event: React.FormEvent) => {
        event.preventDefault();

        const form: any = event.target;
        const formData = new FormData(form);

        if (formData) {
            const startDate: string = formData.get("startDate")?.toString();
            const endDate: string = formData.get("endDate")?.toString();
            const taskName = formData.get("taskName");

            newTask({
                taskName,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            });
            toggleModal();
        }
    };

    return { handleForm };
};

export default useNewTaskForm;
