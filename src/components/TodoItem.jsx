import React from "react";

function Todo(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.task}</li>
    </div>
  );
}

export default Todo;
