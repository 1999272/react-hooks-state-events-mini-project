import React from "react";

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task">
      <span className="text">{text}</span>
      <span className="category">{category}</span>
      <button onClick={() => onDeleteTask(text)}>Delete</button>
    </div>
  );
}

export default Task;
