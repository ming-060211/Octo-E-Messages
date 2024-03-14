<script lang="ts">
    import { getModalStore } from '@skeletonlabs/skeleton';
    import {onMount} from "svelte";


    const modalStore = getModalStore();

    function sendit(arg){
        const modal: ModalSettings = {
            type: 'component',
            component: 'SendMsg',
            meta: {useremail: arg},
        }
        modalStore.trigger(modal)

    }

    function editit(id, first_name, last_name , email, phone_no , enable_email , enable_phone){
        const modal: ModalSettings = {
            type: 'component',
            component: 'updatefrom',
            meta: {id: id, first_name: first_name, last_name: last_name, email: email, phone_no: phone_no, enable_email: enable_email, enable_phone: enable_phone}
        }
        modalStore.trigger(modal)
    }

    function deleteit(id, first_name, last_name){
        const modal: ModalSettings = {
            type: 'component',
            component: 'deleteform',
            meta: {id: id, first_name: first_name, last_name: last_name}
        }
        modalStore.trigger(modal)
    }

    // onMount(async () => {
    //     let response = await fetch('/api/loaduser')
    //     let result = await response.json()
    //     // console.log(result[0].first_name)
    //     for(let i=0 ; i<result.length ;i++){
    //         console.log(result[i])
    //     }
    // })

    export let data

    $: user = data.user

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
                                #</th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                First Name
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Last Name
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Email
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Phone-Number
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Enable Email
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Enable Phone
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">
                                Actions
                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">

                            </th>
                            <th scope="col" class="border-r px-6 py-4 dark:border-slate-600">

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each user as user, index}
                            <tr class="border-b dark:border-neutral-500 bg-gray-100">
                                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{index + 1}</td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    {user.first_name}
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    {user.last_name}
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    {user.email}
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    {user.phone_no}
                                </td >
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <input type="checkbox" checked={user.enable_email} disabled="disabled">
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <input type="checkbox" checked={user.enable_phone} disabled="disabled">
                                </td >
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <button class="py-2 px-6 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" on:click={() => sendit("ming.xuan.leong@wazp.io")}>
                                        Send
                                    </button>
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <button class="py-2 px-6 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" on:click={() => editit( user.id,user.first_name, user.last_name, user.email, user.phone_no, user.enable_email, user.enable_phone )}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button class="py-2 px-6 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" on:click={() => deleteit( user.id,user.first_name, user.last_name )}>
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

