import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialCategory = categories.find((c) => c !== "All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(initialCategory);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    // do not reset category to preserve user choice
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task-text">New Task:</label>
      <input
        id="new-task-text"
        type="text"
        value={text}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="new-task-category">Category:</label>
      <select
        id="new-task-category"
        value={category}
        onChange={handleCategoryChange}
      >
        {categories
          .filter((c) => c !== "All")
          .map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;