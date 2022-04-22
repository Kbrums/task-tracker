import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: {}
    },
    reducers: {
        addTask: (state, action) => {
            /* payload has { id, title, descr, topicId } */
            const { id } = action.payload;
            state.tasks[id] = {
                ...action.payload,
                inProgress: false,
                isCompleted: false
            }
        },
        //startTask:
        
        //completeTask:

        removeTask: (state, action) => {
            /* payload has { id, topicId } */
            const { id } = action.payload;
            delete state.tasks[id];
        }
    },
});

export const selectTasks = (state) => state.tasks.tasks;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
