function TaskItem({ task, onToggle, onDelete }) {
  const { title, dueDate, completed } = task;

  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      <label className="task-check">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <span className="checkmark" />
      </label>

      <div className="task-content">
        <span className="task-title">{title}</span>
        {dueDate && (
          <span className="task-date">
            {formatDate(dueDate)}
          </span>
        )}
      </div>

      <button className="task-delete" onClick={onDelete}>
        ✕
      </button>
    </li>
  );
}

export default TaskItem;

// Helper (inline for now — we can refactor later)
function formatDate(date) {
  const d = new Date(date);
  if (isNaN(d)) return "";
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
