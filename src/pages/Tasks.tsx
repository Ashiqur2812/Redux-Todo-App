import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTask);
    console.log(tasks);

    return (
        <div className="max-w-7xl mx-auto px-5 mt-20">
            <div>
                <h1>Tasks</h1>
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) =>
                        <TaskCard task={task} />
                    )
                }
            </div>
        </div>
    );
};

export default Tasks;