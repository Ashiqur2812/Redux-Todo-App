import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { deleteTask, toggleCompleteState } from '@/redux/features/task/taskSlice';
import { useAppDispatch } from '@/redux/hooks';
import type { ITask } from '@/types';
import { Trash2 } from 'lucide-react';

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className='border px-5 py-3 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div className={cn('size-3 rounded-full ', {
                        'bg-emerald-500': task.priority === 'Low',
                        'bg-sky-500': task.priority === 'Medium',
                        'bg-pink-500': task.priority === 'High',
                    })}>
                    </div>
                    <h1 className={cn({ 'line-through': task.isCompleted })}>{task.title}</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <Button onClick={() => dispatch(deleteTask(task.id))} variant='link' className='p-0 text-rose-500 cursor-pointer'>
                        <Trash2 />
                    </Button>
                    <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteState(task.id))} />
                </div>
            </div>
            <p className='mt-3'>{task.description}</p>
        </div>
    );
};

export default TaskCard;