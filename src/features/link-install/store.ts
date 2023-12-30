import { writable } from 'svelte/store';

type FlyerId = '' | string;

interface Store {
  env: 'stg' | 'prd';
  isMultiPage: boolean;
  isMultiLink: boolean;
  isMultiEdition: boolean;
  flyerIds: {
    northernKanto: FlyerId;
    southernKanto: FlyerId;
    tokai: FlyerId;
    hokuriku: FlyerId;
    kinki: FlyerId;
    chugokuShikoku: FlyerId;
  };
}

export const store = writable<Store>({
  env: 'stg',
  isMultiPage: false,
  isMultiLink: false,
  isMultiEdition: false,
  flyerIds: {
    northernKanto: '',
    southernKanto: '',
    tokai: '',
    hokuriku: '',
    kinki: '',
    chugokuShikoku: ''
  }
});
