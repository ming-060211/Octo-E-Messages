<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import toast, { Toaster } from 'svelte-french-toast';

    export let parent: SvelteComponent;
    const modalStore = getModalStore();

    let setemail = JSON.stringify($modalStore[0].meta.useremail)
    setemail = setemail.replace(/"/g, '')

    let getvalue
    async function handlesubmit(){
        console.log("this is input msg", getvalue)
        console.log("this is the argemail", setemail)

        const response = await fetch('/../../api/sendemail',{
            method: 'POST',
            body: JSON.stringify({ getvalue , setemail}),
            headers: {
                'content-type': 'application/json',
            },
        })

        let result = await response.json()

        console.log(result)
        if(result === "Something Wrong Try Again Later"){
            toast.error(result)
        }else {
            toast.success(result)
        }
        modalStore.close();
    }

    // Base Classes
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

</script>
{#if $modalStore[0]}

    <div class="modal-example-form {cBase} bg-white">
        <header class={cHeader}>{'Enter Message'}</header>
        <form class="modal-form {cForm}">
            <label class="label">
                <span>Please Enter Message</span>
                <input class="input" type="text" id="msginput" placeholder=" Enter Message " bind:value={getvalue}/>
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
<!--            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>-->
            <button class="btn {parent.buttonPositive}" on:click|preventDefault={handlesubmit}>Submit Form</button>
        </footer>
    </div>
{/if}