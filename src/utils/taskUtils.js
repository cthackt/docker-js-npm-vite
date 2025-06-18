import { v4 as uuidv4 } from "uuid";

/**
 * Ensures a task object conforms to the expected schema.
 * Adds missing fields, generates ID if needed, parses dates.
 */
export function normalizeTask(input) {
  return {
    id: input.id || uuidv4(),
    title: input.title?.trim() || "(Untitled)",
    dueDate: input.dueDate ? parseDate(input.dueDate) : null,
    completed: Boolean(input.completed),
  };
}

/**
 * Normalizes an entire array of tasks
 */
export function normalizeTaskList(taskArray) {
  if (!Array.isArray(taskArray)) return [];
  return taskArray.map(normalizeTask);
}

/**
 * Safely parses a date string or object
 */
function parseDate(date) {
  if (date instanceof Date) return date;
  const parsed = new Date(date);
  return isNaN(parsed) ? null : parsed;
}
