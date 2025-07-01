import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low';
}

const initialState: InitialState = {
    tasks: [],
    filter: 'all'
};

type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority' | 'assignTo'>;

type UpdateTaskPayload = {
    id: string,
    title?: string,
    description?: string,
    dueDate?: string,
    priority?: 'High' | 'Medium' | 'Low',
    assignTo?: string | null;
};

const createTask = (taskData: DraftTask): ITask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignTo: taskData.assignTo ? taskData.assignTo : null,
    };
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
        },
        updateFilter: (state, action: PayloadAction<'all' | 'low' | 'medium' | 'high'>) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach((task) => task.assignTo === action.payload ?
                task.assignTo = null :
                task);
        });
    }
});

export const selectTask = (state: RootState) => {
    const filter = state.todo.filter;

    if (filter === 'low') {
        return state.todo.tasks.filter((task) => task.priority === 'Low');
    }
    else if (filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'Medium');
    }
    else if (filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'High');
    }
    else {
        return state.todo.tasks;
    }
};

export const { addTask, toggleCompleteState, deleteTask, updateTask, updateFilter } = taskSlice.actions;
export default taskSlice.reducer;
