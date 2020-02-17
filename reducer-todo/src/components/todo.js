import React from "react";
import "./../App.css";

const Todo = props => {
  const handleToggle = id => {
    props.dispatch({ type: "COMPLETED", id: id });
  };

  return (
    <div className="todos">
      {props.state.map(todo => {
        return (
          <div
            style={
              todo.completed ? { textDecoration: "line-through" } : null
            }
            onClick={() => handleToggle(todo.id)}
            key={todo.id}
          >
            <p>{todo.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
