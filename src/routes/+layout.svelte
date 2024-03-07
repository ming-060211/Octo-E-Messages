<script lang="ts">
    import '../app.css'
    import {goto, invalidate} from '$app/navigation'
    import { onMount } from 'svelte'
    import {type SubmitFunction} from "@sveltejs/kit";
    import {enhance} from "$app/forms";
    import {getFlash} from "sveltekit-flash-message";
    import {page} from "$app/stores";
    import {getToastStore, initializeStores, Modal, Toast, type ToastSettings} from "@skeletonlabs/skeleton";
    import "../app.css";
    import {getModalStore} from '@skeletonlabs/skeleton';
    import AddNewForm from "../lib/modals/AddNewForm.svelte";
    import SendMsg from "../lib/modals/SendMsg.svelte";
    import {Toaster} from "svelte-french-toast";
    import EditForm from "../lib/modals/EditForm.svelte";
    import DeleteForm from "../lib/modals/DeleteForm.svelte";

    initializeStores();
    const flash = getFlash(page)
    const toastStore = getToastStore()

    $: if ($flash){
        const t : ToastSettings ={
            message: $flash.message,
            background: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white',
            classes: 'border-4'
        }
        toastStore.trigger(t)
        $flash = undefined
    }

    const modalRegistry: Record<string, ModalComponent> = {
        addnewcom: {ref: AddNewForm},
        SendMsg: {ref: SendMsg},
        updatefrom: { ref: EditForm},
        deleteform: { ref : DeleteForm}
    }

    const modalStore = getModalStore();

    function getmodaladdnewuser(){
        const modal: ModalSettings = {
            type: 'component',
            component: 'addnewcom'
        }
        modalStore.trigger(modal)
    }
    export let data

    let { supabase, session } = data
    $: ({ supabase, session } = data)

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth')
            }
        })

        return () => subscription.unsubscribe()
    });

    const submitlogout: SubmitFunction = async ({ cancel }) => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(error)
        }
        cancel()//stop submit to the server (IDK why)
        await goto( '/login')
    }
</script>

<Toaster />
<Toast />
<Modal components={modalRegistry}/>
<nav class="relative px-4 py-4 flex justify-between items-center bg-white">
    <a class="text-3xl font-bold leading-none" href="#">
        <svg class="h-10" xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                <defs></defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 84.963 45 c 2.606 -1.41 4.38 -4.168 4.38 -7.333 c 0 -4.595 -3.738 -8.333 -8.334 -8.333 h -0.797 c 1.791 -1.53 2.932 -3.799 2.932 -6.333 c 0 -4.595 -3.738 -8.333 -8.334 -8.333 h -2.078 c 1.791 -1.53 2.931 -3.799 2.931 -6.333 C 75.663 3.738 71.925 0 67.33 0 H 22.67 c -4.595 0 -8.333 3.738 -8.333 8.333 c 0 2.534 1.141 4.803 2.931 6.333 H 15.19 c -4.595 0 -8.333 3.738 -8.333 8.333 c 0 2.534 1.141 4.804 2.932 6.333 H 8.991 c -4.595 0 -8.333 3.738 -8.333 8.333 c 0 3.165 1.774 5.923 4.379 7.333 c -2.605 1.41 -4.379 4.168 -4.379 7.333 c 0 4.596 3.738 8.334 8.333 8.334 h 0.798 C 7.998 62.197 6.857 64.466 6.857 67 c 0 4.595 3.738 8.333 8.333 8.333 h 2.078 c -1.791 1.53 -2.931 3.799 -2.931 6.334 c 0 4.595 3.738 8.333 8.333 8.333 h 44.66 c 4.595 0 8.333 -3.738 8.333 -8.333 c 0 -2.535 -1.141 -4.804 -2.931 -6.334 h 2.078 c 4.596 0 8.334 -3.738 8.334 -8.333 c 0 -2.534 -1.141 -4.803 -2.932 -6.333 h 0.797 c 4.596 0 8.334 -3.738 8.334 -8.334 C 89.343 49.168 87.569 46.41 84.963 45 z M 16.337 8.333 C 16.337 4.841 19.178 2 22.67 2 h 44.66 c 3.492 0 6.333 2.841 6.333 6.333 s -2.841 6.333 -6.333 6.333 H 22.67 C 19.178 14.667 16.337 11.826 16.337 8.333 z M 8.857 23 c 0 -3.492 2.841 -6.333 6.333 -6.333 h 7.479 h 44.66 h 7.479 c 3.492 0 6.334 2.841 6.334 6.333 s -2.842 6.333 -6.334 6.333 H 15.19 C 11.698 29.333 8.857 26.492 8.857 23 z M 2.658 37.667 c 0 -3.492 2.841 -6.333 6.333 -6.333 h 6.2 H 74.81 h 6.199 c 3.492 0 6.334 2.841 6.334 6.333 S 84.501 44 81.009 44 H 8.991 C 5.499 44 2.658 41.159 2.658 37.667 z M 73.663 81.667 c 0 3.492 -2.841 6.333 -6.333 6.333 H 22.67 c -3.492 0 -6.333 -2.841 -6.333 -6.333 s 2.841 -6.334 6.333 -6.334 h 44.66 C 70.822 75.333 73.663 78.175 73.663 81.667 z M 81.009 58.667 H 74.81 h -2.011 H 60.978 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 11.821 h 2.011 c 3.492 0 6.334 2.841 6.334 6.333 s -2.842 6.333 -6.334 6.333 H 67.33 H 22.67 H 15.19 c -3.492 0 -6.333 -2.841 -6.333 -6.333 s 2.841 -6.333 6.333 -6.333 h 7.137 h 6.695 c 0.552 0 1 -0.447 1 -1 s -0.448 -1 -1 -1 h -6.695 H 15.19 h -6.2 c -3.492 0 -6.333 -2.842 -6.333 -6.334 S 5.499 46 8.991 46 h 72.018 c 3.492 0 6.334 2.841 6.334 6.333 S 84.501 58.667 81.009 58.667 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 50.428 c -4.322 0 -7.837 3.516 -7.837 7.837 v 9.642 c 0 0.553 0.448 1 1 1 h 13.674 c 0.553 0 1 -0.447 1 -1 v -9.642 C 52.837 53.943 49.321 50.428 45 50.428 z M 50.837 66.906 H 39.163 v -8.642 c 0 -3.219 2.619 -5.837 5.837 -5.837 s 5.837 2.618 5.837 5.837 V 66.906 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
            </svg>
    </a>
    <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="/">Home</a></li>
        {#if data.session}
        <li class="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
            <li><button class="text-sm text-blue-600 font-bold" on:click={() => getmodaladdnewuser()}>Add New User</button></li>
        {/if}
        <li class="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
    </ul>
    {#if !data.session}
        <a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="/login">Sign In</a>
        <a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="/register">Sign up</a>
    {:else }
        <form action="/logout" method="post" use:enhance={submitlogout}><button type="submit" class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">Sign Out</button></form>
    {/if}
</nav>
<slot />