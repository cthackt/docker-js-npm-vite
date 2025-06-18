import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (!tasks.length) {
    return <p className="empty-state">No tasks yet. Add one!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
