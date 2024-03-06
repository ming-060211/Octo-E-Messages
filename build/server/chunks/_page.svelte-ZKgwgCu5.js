import { c as create_ssr_component, w as each, p as escape, q as add_attribute } from './exports-ufrN4Xy_.js';
import './client-ACYpDBYE.js';
import { g as getModalStore } from './ProgressBar.svelte_svelte_type_style_lang-0bpq4_nG.js';
import './index2-iLwaiB2T.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let printerdata;
  getModalStore();
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  printerdata = data.data;
  return `<div class="flex justify-center items-center bg-white p-4 rounded-lg "><div class="table-auto w-full border border-gray-300 mx-12"><table class="table-auto w-full border border-black"><thead class="border border-black" data-svelte-h="svelte-9ggg32"><tr class="border"><th class="px-4 py-2 border w-1/12">ID</th> <th class="px-4 py-2 border w-1/4">Name</th> <th class="px-4 py-2 border w-1/4">Key ID</th> <th class="">Actions</th></tr></thead> <tbody class="">${each(printerdata, (data2) => {
    return `<tr class="border"><td class="px-4 py-2 text-center border">${escape(data2.id)}</td> <td class="px-4 py-2 text-center border">${escape(data2.name)}</td> <td class="px-4 py-2 text-center border">${escape(data2.key_id)}</td> <td class="px-4 py-2 text-center border w-1/12"><a href="${"/editpage/" + escape(data2.id, true) + "/" + escape(data2.key_id, true)}"><button class="text-blue-600 hover:text-purple-600" data-svelte-h="svelte-xwoss3">Edit</button></a></td>  <td class="px-4 py-2 text-center border w-1/12"><form method="post" id="${"deleteform" + escape(data2.id, true)}" action="?/deletedata"><input type="hidden" name="gettheid"${add_attribute("value", data2.id, 0)}><input type="hidden" name="getthekeyid"${add_attribute("value", data2.key_id, 0)}><button class="text-blue-600 hover:text-purple-600" data-svelte-h="svelte-nshhw8">Delete</button></form></td> <td class="px-4 py-2 text-center border w-1/12" data-svelte-h="svelte-1uk5p91"><button class="text-blue-600 hover:text-purple-600">View</button></td> </tr>`;
  })}</tbody></table></div></div>      `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ZKgwgCu5.js.map
