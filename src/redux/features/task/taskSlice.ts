import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: '123',
            title: 'Initial Frontend',
            description: 'Create Home page, and Routing',
            dueDate: '2024-05-24',
            isCompleted: false,
            priority: 'High'
        },
        {
            id: '456',
            title: 'Create Github Repo',
            description: 'Create stage branch',
            dueDate: '2021-09-25',
            isCompleted: false,
            priority: 'Medium'
        },
        {
            id: '789',
            title: 'Create Redux App',
            description: 'This is a Todo App using Redux',
            dueDate: '2023-03-13',
            isCompleted: true,
            priority: 'Low'
        }
    ]
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
});

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
};

export default taskSlice.reducer;