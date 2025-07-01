export interface ITask {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: 'High' | 'Medium' | 'Low',
    assignTo: string | null
}

export interface IUser {
    name: string;
    id: string;
}