import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTask);
    console.log(tasks);

    return (
        <div className="max-w-7xl mx-auto px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal />
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) =>
                        <TaskCard task={task} key={task.id}/>
                    )
                }
            </div>
        </div>
    );
};

export default Tasks;