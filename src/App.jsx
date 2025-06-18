import React from "react";
import { useTasks } from "./hooks/useTasks";
import { useTaskManager } from "./hooks/useTaskManager";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import "./styles/tasks.css";

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    clearAllTasks,
  } = useTasks();

  const {
    filter,
    setFilter,
    getVisibleTasks,
  } = useTaskManager();

  const visibleTasks = getVisibleTasks(tasks);

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>

      <TaskForm onAddTask={addTask} />

      <FilterBar activeFilter={filter} onChange={setFilter} />

      <TaskList
        tasks={visibleTasks}
        onToggleTask={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />

      {tasks.length > 0 && (
        <button className="clear-tasks" onClick={clearAllTasks}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
