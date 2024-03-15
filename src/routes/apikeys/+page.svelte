<script lang="ts">
    import { getModalStore } from '@skeletonlabs/skeleton';
    import {onMount} from "svelte";

    const modalStore = getModalStore();

    function deleteit(id,key){
        const modal: ModalSettings = {
            type: 'component',
            component: 'DeleteApi',
            meta: {id: id, key: key}
        }
        modalStore.trigger(modal)
    }

    export let data
    let tem = []
    $: tem = data.tem


</script>

<div class="flex flex-col bg-gray-50">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <div class="mx-4">
                    <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500 mx-auto">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                #
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                API Key
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each tem as tem1, index}
                            <tr class="border-b dark:border-neutral-500 bg-gray-100">
                                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{index + 1}</td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    {tem1.key}
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                    <button class="py-2 px-6 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" on:click={() => deleteit(tem1.id, tem1.key)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>