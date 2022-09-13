import React from "react";
import { connect } from "react-redux";
import { addTask, completeTask } from "../../features/reducers";
import TodoList from "./TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTask(obj)),
    completeTodo: (id) => dispatch(completeTask(id)),
  };
};

const DisplayList = ({ todos, completeTodo, description }) => {
  const sorted = [...todos].sort((a, b) => {
    const orders = ["Urgent", "High", "Medium", "Low"];
    return orders.indexOf(a.priority) - orders.indexOf(b.priority);
  });

  return (
    <div className='bg-[#262338] w-full m-14 rounded-3xl px-24 py-12 overflow-y-auto'>
      {sorted.map((item) => {
        return (
          item.completed === false && (
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
