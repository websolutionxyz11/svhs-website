export function throttle<T extends (...args: any[]) => any>(fn: T, wait = 200) {
  let last = 0;
  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      // @ts-ignore
      return fn.apply(this, args);
    }
  } as T;
}

export function debounce<T extends (...args: any[]) => any>(fn: T, wait = 200) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  } as T;
}
