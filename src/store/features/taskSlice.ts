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

    toggleIsDone: (currentTasks, action: PayloadAction<number>) =>
      currentTasks.map((task) => ({
        ...task,
        isDone: task.id === action.payload ? !task.isDone : task.isDone,
      })),

    removeTask: (currentTasks, action: PayloadAction<number>) =>
      currentTasks.filter((task) => task.id !== action.payload),
  },
});

export const tasksReducer = tasksSlice.reducer;
export const {
  loadTasks: loadTasksActionCreator,
  toggleIsDone: toggleIsDoneActionCreator,
  removeTask: removeTaskActionCreator,
} = tasksSlice.actions;
