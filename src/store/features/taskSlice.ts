import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksStructure } from "../../types";

const initialTasks: TasksStructure = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    loadTasks: (currentTasks, action: PayloadAction<TasksStructure>) => [
      ...action.payload,
    ],
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { loadTasks: loadTasksActionCreator } = tasksSlice.actions;
