import { writable } from 'svelte/store';

interface Store {
  env: 'stg' | 'prd';
  isMultiPage: boolean;
  isMultiLink: boolean;
  isMultiEdition: boolean;
}

export const store = writable<Store>({
  env: 'stg',
  isMultiPage: false,
  isMultiLink: false,
  isMultiEdition: false
});
