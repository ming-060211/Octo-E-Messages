<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import toast, { Toaster } from 'svelte-french-toast';
    import {invalidateAll} from "$app/navigation";

    export let parent: SvelteComponent;
    const modalStore = getModalStore();

    let apikey
    async function handlesubmit(){

        const randomBytes = new Uint8Array(32); // 256 bits = 32 bytes
        await crypto.getRandomValues(randomBytes);

        const hashBuffer = await crypto.subtle.digest('SHA-256', randomBytes);

        // Convert hash buffer to hex string
        const hashHex = Array.from(new Uint8Array(hashBuffer))
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');

        apikey = hashHex

        const res = await fetch('/../../api/addapikey',{
            method: 'POST',
            body: JSON.stringify({apikey}),
            headers: {
                'content-type': 'application/json'
            }
        })

        let result = await res.json()
        toast(result)
        invalidateAll()
        // modalStore.close();
    }

    function copyvalue(){
        var apiKeyInput = document.getElementById("msginput");
        apiKeyInput.select();
        document.execCommand("copy");
        // alert("API key copied: " + apiKeyInput.value);
        toast("Copied!")
    }

    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

</script>

{#if $modalStore[0]}

    <div class="modal-example-form {cBase} bg-white">
        <header class={cHeader}>{'Generate API Key'}</header>
<!--        <label>-->
<!--            <span>Please copy down the API key as it does not safe in Database</span>-->
<!--        </label>-->
        <form class="modal-form {cForm}">
            <label class="label">
                <span>Please Click Generate and Copy the Key</span>
                <input class="input" type="text" id="msginput" value="{apikey}" readonly/>
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            {#if apikey}
            <button class="btn {parent.buttonNeutral}" on:click={() => copyvalue()}>Copy</button>
            {/if}
            <!--            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>-->
            <button class="btn {parent.buttonPositive}" on:click|preventDefault={handlesubmit}>Generate</button>
        </footer>
    </div>
{/if}