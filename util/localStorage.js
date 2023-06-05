export function getLocalStorage(key) {
  window.localStorage.getItem(key);
}

export function setLocalStorage(key, value) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
}
