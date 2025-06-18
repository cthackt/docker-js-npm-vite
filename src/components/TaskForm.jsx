import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = title.trim();
    if (!trimmed) return;

    onAddTask({
      title: trimmed,
      dueDate: dueDate || null,
    });

    setTitle("");
    setDueDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        required
      />

      <input
        className="task-date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="task-add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
