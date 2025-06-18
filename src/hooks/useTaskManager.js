import { useState } from "react";
import { isToday, isUpcoming } from "../utils/dateHelpers";

/**
 * UI-facing task filter manager
 * - Tracks active filter
 * - Returns derived task list based on filter
 */
export function useTaskManager() {
  const [filter, setFilter] = useState("all");

  function getVisibleTasks(tasks) {
    switch (filter) {
      case "completed":
        return tasks.filter((t) => t.completed);

      case "today":
        return tasks.filter(
          (t) => !t.completed && t.dueDate && isToday(t.dueDate)
        );

      case "upcoming":
        return tasks.filter(
          (t) => !t.completed && t.dueDate && isUpcoming(t.dueDate)
        );

      default:
        return tasks;
    }
  }

  return {
    filter,
    setFilter,
    getVisibleTasks,
  };
}
