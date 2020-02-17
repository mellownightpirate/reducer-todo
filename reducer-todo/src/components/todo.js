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
          <div onClick={() => handleToggle(todo.id)} key={todo.id}>
            <p
              style={
                todo.completed
                  ? {
                      textDecoration: "line-through",
                      background: "rgba(255, 0, 0, 0.2)"
                    }
                  : null
              }
            >
              {todo.item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
