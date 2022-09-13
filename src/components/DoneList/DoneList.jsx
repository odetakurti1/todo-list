import React from "react";
import { completeTask } from "../../features/reducers";
import { connect } from "react-redux";

import TodoList from "../TodoList/TodoList";
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTask: (id) => dispatch(completeTask(id)),
  };
};

const Done = ({ todos, completeTodo, description }) => {
  return (
    <div className='bg-[#262338] w-full m-14 rounded-3xl px-24 py-12 overflow-y-auto'>
      {todos.map((item) => {
        return (
          item.completed === true && (
            <TodoList
              key={item.id}
              item={item}
              desc={description}
              completeTodo={completeTodo}
            />
          )
        );
      })}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Done);
