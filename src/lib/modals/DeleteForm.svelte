<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import toast, { Toaster } from 'svelte-french-toast';
    import {invalidateAll} from "$app/navigation";

    export let parent: SvelteComponent;
    const modalStore = getModalStore();

    let id = JSON.stringify($modalStore[0].meta.id)
    let first_name = JSON.stringify($modalStore[0].meta.first_name)
    let last_name= JSON.stringify($modalStore[0].meta.last_name)

    id = id.replace(/"/g, '')
    first_name = first_name.replace(/"/g, '')
    last_name = last_name.replace(/"/g, '')

    // let getvalue
    async function handlesubmit(){
        const response = await fetch('/../../api/deleteuser',{
            method: 'POST',
            body: JSON.stringify({id}),
            headers: {
                'content-type': 'application/json',
            },
        })

        let result = await response.json()

        if (result === "Something Wrong! Try Again Later"){
            toast.error(result)
        }else {
            toast.success(result)
        }
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
                <span>{first_name} {last_name}</span>
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