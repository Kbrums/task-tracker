import { createSlice } from "@reduxjs/toolkit";
import { addTask, removeTask } from "../tasks/tasksSlice";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            /* payload has { id, title} */
            const { id } = action.payload;
            state.topics[id] = {
                ...action.payload,
                taskIds: [],
                showCompleted: false,
            }
        },
        toggleShowCompleted: (state, action) => {
            const { id } = action.payload;
            state.topics[id] = {
                ...state.topics[id],
                showCompleted: !(state.topics[id].showCompleted)
            }
        },
        //make sure to iterate over taskIds and dispatch removeTask wherever removeTopic is dispatched
        removeTopic: (state, action) => {
            const { id } = action.payload;
            delete state.topics[id];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTask, (state, action) => {
                const { id, topicId } = action.payload;
                state.topics[topicId].taskIds.push(id);
            })
            .addCase(removeTask, (state, action) => {
                const { id, topicId } = action.payload;
                state.topics[topicId].taskIds = state.topics[topicId].taskIds.filter(taskId => taskId !== id);
            })

    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, toggleShowCompleted, removeTopic } = topicsSlice.actions;
export default topicsSlice.reducer;