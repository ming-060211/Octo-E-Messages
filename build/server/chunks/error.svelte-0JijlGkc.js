import { c as create_ssr_component, i as subscribe, p as escape } from './exports-ufrN4Xy_.js';
import { p as page } from './stores-61FOAq1o.js';
import './client-ACYpDBYE.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-0JijlGkc.js.map
