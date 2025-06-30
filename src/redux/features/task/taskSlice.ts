import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low';
}

const initialState: InitialState = {
    tasks: [],
    filter: 'all'
};

type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority'>;

type UpdateTaskPayload = {
    id: string,
    title?: string,
    description?: string,
    dueDate?: string,
    priority?: 'High' | 'Medium' | 'Low';
};

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task) => task.id === action.payload
                ? task.isCompleted = !task.isCompleted
                : task);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<UpdateTaskPayload>) => {
            console.log(action);
            const { id, ...updatedFields } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                Object.assign(task, updatedFields);
            }
        }
    }
});

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
};

export const { addTask, toggleCompleteState, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
