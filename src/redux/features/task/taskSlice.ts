import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[];
}

const initialState: InitialState = {
    task: [
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

export default taskSlice.reducer;