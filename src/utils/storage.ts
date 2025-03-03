/**
 * Typed wrapper for sessionStorage with automatic JSON serialization/deserialization
 */
const namespace = "jouw-id:";
const storage = {
  get<T>(key: string, defaultValue: T) {
    try {
      const value = sessionStorage.getItem(namespace + key);
      if (value === null) {
        return defaultValue;
      }
      return JSON.parse(value);
    } catch (e) {
      console.warn("Reading from sessionStorage failed", e);
      return defaultValue;
    }
  },
  set<T>(key: string, value: T) {
    try {
      sessionStorage.setItem(namespace + key, JSON.stringify(value));
    } catch (e) {
      console.warn("Saving to sessionStorage failed", e);
    }
  },
  remove(key: string) {
    try {
      sessionStorage.removeItem(namespace + key);
    } catch (e) {
      console.warn("Removing from sessionStorage failed", e);
    }
  },
  isAvailable() {
    const key = "has-sessionStorage";
    storage.set(key, true);
    const returnValue = storage.get(key, null);
    storage.remove(key);

    return !!returnValue;
  },
};

export default storage;
