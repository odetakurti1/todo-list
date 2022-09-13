import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../features/reducers";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTask(obj)),
  };
};
const InsertTask = (props) => {
  const [title, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const selectHandle = (event) => {
    setPriority(event.target.value);
  };
  const add = () => {
    if (title === "" && description === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: title,
        description: description,
        priority: priority,
        completed: false,
      });
      setTask("");
      setDescription("");
    }
  };

  return (
    <div className='bg-[#262338] w-full m-14 rounded-3xl px-24 py-12'>
      <h1 className='text-white text-6xl text-center mb-5'>Insert Task</h1>
      <div>
        <label className='block'>
          <input
            value={title}
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
            value={description}
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
            onClick={() => add()}
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
export default connect(mapStateToProps, mapDispatchToProps)(InsertTask);
