import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [isShown, setShown] = useState(false);
  const taskList = useSelector((state) => state.tasks.value);

  const sorted = [...taskList].sort((a, b) => {
    const orders = ["Urgent", "High", "Medium", "Low"];
    console.log(
      orders.indexOf(a.priority) - orders.indexOf(b.priority),
      a.priority,
      b.priority
    );
    return orders.indexOf(a.priority) - orders.indexOf(b.priority);
  });
  const showHandler = (index) => {
    setShown((prev) => {
      return prev === index ? false : index;
    });
  };

  return (
    <div className='bg-[#262338] w-full m-14 rounded-3xl px-24 py-12'>
      {sorted.map((task, index) => {
        return (
          <div
            key={index}
            className='bg-white mb-5 p-8 rounded-2xl inline-block w-full'
          >
            <div className='flex justify-between items-center'>
              <h1 className='text-4xl font-bold'>{task.title}</h1>
              <div className='flex items-center'>
                <span className='py-2 px-2 bg-[#FFABE8] text-[#9E0038] rounded-lg mr-7'>
                  {task.priority}
                </span>

                <img
                  className={`h-[28px] ${isShown === index ? "hidden" : ""}`}
                  onClick={() => {
                    showHandler(index);
                  }}
                  src='/assets/plus.svg'
                  alt='plus'
                />
                <img
                  src='/assets/minus.svg'
                  alt='minus'
                  className={`h-8 w-8 ${isShown === index ? "" : "hidden"}`}
                  onClick={() => {
                    showHandler(index);
                  }}
                />
              </div>
            </div>
            <div className={`pt-6 ${isShown === index ? "" : "hidden"}`}>
              <h1 className='pb-8'>{task.description}</h1>
              <button className='float-right px-6 text-white text-lg py-4 bg-[#4700AB] rounded-full'>
                Complete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
