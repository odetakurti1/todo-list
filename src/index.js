import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import InsertTask from "./components/InsertTask/InsertTask";
import DoneList from "./components/DoneList/DoneList";

import { Provider } from "react-redux";
import store from "./features/store";
import DisplayList from "./components/TodoList/DisplayList";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='flex h-auto'>
          <SideBar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/insert-task' element={<InsertTask />} />
            <Route path='/to-do' element={<DisplayList />} />
            <Route path='/done' element={<DoneList />} />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
