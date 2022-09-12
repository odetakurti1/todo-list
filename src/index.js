import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import InsertTask from "./components/InsertTask/InsertTask";
import TodoList from "./components/TodoList/TodoList";
import DoneList from "./components/DoneList/DoneList";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import taskReducer from "./features/InsertTask";
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className='flex h-auto'>
        <SideBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/insert-task' element={<InsertTask />} />
          <Route path='/to-do' element={<TodoList />} />
          <Route path='/done' element={<DoneList />} />
        </Routes>
      </div>
    </Provider>
  </BrowserRouter>
);
