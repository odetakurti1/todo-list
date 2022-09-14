import React, { useState } from "react";
import { completeTask } from "../../features/reducers";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    tasks: [state],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTask: (id) => dispatch(completeTask(id)),
  };
};

const Done = (props) => {
  const { tasks, completeTodo } = props;

  const [isShown, setShown] = useState(false);
  const showHandler = (index) => {
    setShown((prev) => {
      return prev === index ? false : index;
    });
  };

  console.log(tasks);
  return (
    <div className='bg-[#262338] w-full m-14 rounded-3xl px-24 py-12 sm:p-10 sm:w-auto'>
      {Object.values(tasks[0].reducer).map((item, index) => {
        return (
          item.completed === true && (
            <div
              key={item.id}
              className='bg-white mb-5 p-8 rounded-2xl inline-block w-full sm:p-6'
            >
              <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold sm:text-2xl'>{item.title}</h1>
                <div className='flex items-center'>
                  {
                    <div>
                      <img
                        className={`h-[28px] min-w-[28px] ${
                          isShown === index ? "hidden" : ""
                        }`}
                        onClick={() => {
                          showHandler(index);
                        }}
                        src='/assets/plus.svg'
                        alt='plus'
                      />
                      <img
                        src='/assets/minus.svg'
                        alt='minus'
                        className={`h-8 w-8 min-w-8 ${
                          isShown === index ? "" : "hidden"
                        }`}
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
          )
        );
      })}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Done);
