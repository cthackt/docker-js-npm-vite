import { useState, useEffect } from "react";

/**
 * Custom hook for syncing state with localStorage using JSON.
 * @param {string} key - The localStorage key to use.
 * @param {*} defaultValue - The fallback value if none is found or invalid.
 */
export function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : defaultValue;
    } catch (err) {
      console.warn(`Error reading localStorage key "${key}":`, err);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.warn(`Error writing to localStorage key "${key}":`, err);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
