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
            description: 'Create Home page, and Routing',
            dueDate: '2024-05-24',
            isCompleted: false,
            priority: 'High'
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