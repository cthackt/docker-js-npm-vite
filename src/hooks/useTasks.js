import { useLocalStorage } from "./useLocalStorage";
import { normalizeTask, normalizeTaskList } from "../utils/taskUtils";

/**
 * Central task management hook
 * - Handles persistent storage
 * - Provides task mutation functions
 * - Ensures consistent task shape
 */
export function useTasks() {
  const [rawTasks, setRawTasks] = useLocalStorage("tasks", []);

  // Normalize once on load
  const tasks = normalizeTaskList(rawTasks);

  function addTask(taskData) {
    const newTask = normalizeTask(taskData);
    setRawTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setRawTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTaskCompletion(id) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setRawTasks(updated);
  }

  function clearAllTasks() {
    setRawTasks([]);
  }

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    clearAllTasks,
  };
}
