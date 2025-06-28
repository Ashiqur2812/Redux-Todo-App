import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTask);
    console.log(tasks)

    return (
        <div className="max-w-7xl mx-auto my-3">
            <h1>This is Tasks Component</h1>
        </div>
    );
};

export default Tasks;