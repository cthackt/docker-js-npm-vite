/**
 * Returns true if the given date is today
 */
export function isToday(date) {
  const today = new Date();
  const d = new Date(date);
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  );
}

/**
 * Returns true if the given date is in the future
 */
export function isUpcoming(date) {
  const now = new Date();
  const d = new Date(date);
  return d > now && !isToday(d);
}
