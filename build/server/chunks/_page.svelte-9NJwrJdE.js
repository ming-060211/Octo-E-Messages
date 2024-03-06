import { c as create_ssr_component, q as add_attribute } from './exports-ufrN4Xy_.js';
import './client-ACYpDBYE.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const alldata = data.itemarray;
  const printer_id = alldata[0];
  let printer_name = alldata[1];
  const key_id = alldata[2];
  let key_name = alldata[3];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<form method="POST" action="?/updateitem" class="max-w-sm mx-auto m-5"><div class="mb-5"><label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1n1l67z">ID</label> <input name="id" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"${add_attribute("value", printer_id, 0)} readonly></div> <div class="mb-5"><label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1kgpibj">Name</label> <input name="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required${add_attribute("value", printer_name, 0)}></div> <div class="mb-5"><label for="key_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1fs2n64">Key ID</label> <input name="key_id" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"${add_attribute("value", key_id, 0)} readonly></div> <div class="mb-5"><label for="key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-q4baa7">Key</label> <input name="key" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required${add_attribute("value", key_name, 0)}></div> <div class="flex items-start mb-5" data-svelte-h="svelte-ixgvoc"></div> <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-svelte-h="svelte-ia4324">Make Change</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9NJwrJdE.js.map
