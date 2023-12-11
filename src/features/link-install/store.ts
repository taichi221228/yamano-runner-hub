import { writable } from 'svelte/store';

export const store = writable({
  value1: false,
  value2: false,
  value3: false
});
