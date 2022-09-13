import { createSlice } from "@reduxjs/toolkit";

import { DummyData } from "../components/DummyData";

const initialState = DummyData;
export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
    completeTask(state, action) {
      return state.map((tasks) => {
        if (tasks.id === action.payload) {
          return {
            ...tasks,
            completed: true,
          };
        }
        return tasks;
      });
    },
  },
});

export const { addTask, completeTask } = TaskSlice.actions;
export const reducer = TaskSlice.reducer;
