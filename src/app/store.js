import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import tasksReducer from "../features/tasks/tasksSlice";

export default configureStore({
    reducer: {
        topics: topicsReducer,
        tasks: tasksReducer
    }
});