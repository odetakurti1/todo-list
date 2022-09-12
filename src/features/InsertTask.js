import { createSlice } from "@reduxjs/toolkit";

import { DummyData } from "../components/DummyData";
export const TaskSlice = createSlice({
  name: "tasks",
  initialState: { value: DummyData },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;
