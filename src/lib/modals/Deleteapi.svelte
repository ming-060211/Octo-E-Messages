<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import toast, { Toaster } from 'svelte-french-toast';
    import {invalidateAll} from "$app/navigation";

    export let parent: SvelteComponent;
    const modalStore = getModalStore();

    let keys = JSON.stringify($modalStore[0].meta.key)
    let id = JSON.stringify($modalStore[0].meta.id)

    // console.log("in deletemodal", keys)

    keys = keys.replace(/"/g, '')
    id = id.replace(/"/g, '')

    // console.log(keys)


    // let getvalue
    async function handlesubmit(){

        const response = await fetch('/../../api/deleteapi',{
            method: 'POST',
            body: JSON.stringify({id, keys}),
            headers: {
                'content-type': 'application/json',
            },
        })

        let result = await response.json()
        toast(result)
        modalStore.close();
        invalidateAll()
    }

    // Base Classes
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

</script>
{#if $modalStore[0]}

    <div class="modal-example-form {cBase} bg-white">
        <header class={cHeader}>{'Are you sure want to Delete'}</header>
        <!--        <form class="modal-form {cForm}">-->
        <label class="label">
            <span>{keys}</span>
        </label>
        <!--        </form>-->
        <!-- prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <!--            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>-->
            <button class="btn {parent.buttonPositive}" on:click|preventDefault={handlesubmit}>Confirm</button>
        </footer>
    </div>
{/if}