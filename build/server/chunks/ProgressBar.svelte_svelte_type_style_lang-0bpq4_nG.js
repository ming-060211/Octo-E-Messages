import { r as readable, w as writable } from './index2-iLwaiB2T.js';
import { l as get_store_value, j as getContext, s as setContext } from './exports-ufrN4Xy_.js';

const MODAL_STORE_KEY = "modalStore";
function getModalStore() {
  const modalStore = getContext(MODAL_STORE_KEY);
  if (!modalStore)
    throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return modalStore;
}
function initializeModalStore() {
  const modalStore = modalService();
  return setContext(MODAL_STORE_KEY, modalStore);
}
function modalService() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
});

export { getModalStore as g, initializeModalStore as i, prefersReducedMotionStore as p };
//# sourceMappingURL=ProgressBar.svelte_svelte_type_style_lang-0bpq4_nG.js.map
