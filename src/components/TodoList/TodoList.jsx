import React from "react";
import { useState } from "react";

const TodoList = (props) => {
  const { item, completeTodo, index } = props;
  const [isShown, setShown] = useState(false);

  const showHandler = (index) => {
    setShown((prev) => {
      return prev === index ? false : index;
    });
  };

  return (
    <div
      key={index}
      className='bg-white mb-5 p-8 rounded-2xl inline-block w-full'
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>{item.title}</h1>
        <div className='flex items-center'>
          <span className='py-2 px-2 bg-[#FFABE8] text-[#9E0038] rounded-lg mr-7'>
            {item.priority}
          </span>
          {
            <div>
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
          }
        </div>
      </div>
      <div className={`pt-6 ${isShown === index ? "" : "hidden"}`}>
        <h1 className='pb-8'>{item.description}</h1>
        <div className='relative'>
          {item.completed === false && (
            <button
              className='relative z-0 float-right px-6 text-white text-lg py-4 bg-[#4700AB] rounded-full'
              onClick={() => completeTodo(item.id)}
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
