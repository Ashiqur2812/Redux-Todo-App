import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/api' }),
    tagTypes: ['task'],
    endpoints: (build) => ({
        getTasks: build.query({
            query: () => '/tasks',
            providesTags: ['task']
        }),
        createTask: build.mutation({
            query: (taskData) => ({
                url: '/tasks',
                method: 'POST',
                body: taskData
            }),
            invalidatesTags: ['task']
        })
    })
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi


