import { writable } from 'svelte/store';

export const store = writable({
  isMultiPage: false,
  isMultiLink: false,
  isMultiEdition: false
});
