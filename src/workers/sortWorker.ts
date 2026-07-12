// Simple web worker that sorts an array of items by a given key.
// Usage (main thread):
// const worker = new Worker(new URL('@/workers/sortWorker.ts', import.meta.url));
// worker.postMessage({ items, key: 'name' });
// worker.onmessage = (e) => { const sorted = e.data; }

self.addEventListener('message', (e: MessageEvent) => {
  const { items, key } = e.data as { items: any[]; key: string };
  if (!Array.isArray(items)) {
    // Return original if unexpected payload
    // @ts-ignore
    self.postMessage(items);
    return;
  }

  try {
    const sorted = [...items].sort((a, b) => {
      const av = a?.[key] ?? '';
      const bv = b?.[key] ?? '';
      if (av < bv) return -1;
      if (av > bv) return 1;
      return 0;
    });
    // @ts-ignore
    self.postMessage(sorted);
  } catch (err) {
    // @ts-ignore
    self.postMessage(items);
  }
});

export {};
