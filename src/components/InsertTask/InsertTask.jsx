import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../../features/InsertTask";

const InsertTask = ({ taskList }) => {
  const handleSubmit = () => {
    dispatch(
      addTask({
        id: Math.random(),
        title,
        description,
        priority,
      })
    );
  };
  const selectHandle = (event) => {
    console.log(event.target.value);
    setPriority(event.target.value);
  };
  const dispatch = useDispatch();
  const [title, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  return (
    <div className='bg-[#262338] w-full m-14 rounded-3xl px-24 py-12'>
      <h1 className='text-white text-6xl text-center mb-5'>Insert Task</h1>
      <div>
        <label className='block'>
          <input
            type='text'
            placeholder='Title'
            className='w-full mb-10 p-4 rounded-2xl bg-[#4E4B66] placeholder:text-[#D9DBE9] text-white'
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
        </label>
        <label className='block'>
          <textarea
            placeholder='Share a Reply'
            name='textarea'
            id='textarea'
            rows='10'
            cols='20'
            className='w-full mb-10 p-4 rounded-2xl bg-[#4E4B66] placeholder:text-[#D9DBE9] text-white'
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </label>
        <div className='flex items-start justify-between'>
          <label className='w-full mr-8'>
            <select
              onChange={selectHandle}
              defaultValue='Default'
              name='select'
              id='select'
              className='w-full p-4 rounded-2xl bg-[#4E4B66] placeholder:text-[#D9DBE9] text-white'
            >
              <option disabled value='Default'>
                Priority
              </option>
              <option value='Urgent'>Urgent</option>
              <option value='High'>High</option>
              <option value='Medium'>Medium</option>
              <option value='Low'>Low</option>
            </select>
          </label>
          <button
            onClick={handleSubmit}
            type='submit'
            className='py-4 rounded-2xl bg-[#A996FF] text-[#4700AB] font-semibold w-3/4'
          >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsertTask;
