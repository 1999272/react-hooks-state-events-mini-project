import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialCategory = categories.find((c) => c !== "All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(initialCategory);

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(initialCategory);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        New Task:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((c) => c !== "All")
            .map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
