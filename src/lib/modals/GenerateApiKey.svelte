<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import toast, { Toaster } from 'svelte-french-toast';

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

        console.log(hashHex)

        apikey = hashHex
        // modalStore.close();
    }

    function copyvalue(){
        var apiKeyInput = document.getElementById("msginput");
        apiKeyInput.select();
        document.execCommand("copy");
        alert("API key copied: " + apiKeyInput.value);
    }



    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

</script>

{#if $modalStore[0]}

    <div class="modal-example-form {cBase} bg-white">
        <header class={cHeader}>{'Generate API Key'}</header>
        <label>
            <span>Please copy down the API key as it does not safe in Database</span>
        </label>
        <form class="modal-form {cForm}">
            <label class="label">
                <span>Please Click Generate and Copy the Key</span>
                <input class="input" type="text" id="msginput" value="{apikey}" readonly/>
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonNeutral}" on:click={() => copyvalue()}>Copy</button>
            <!--            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>-->
            <button class="btn {parent.buttonPositive}" on:click|preventDefault={handlesubmit}>Generate</button>
        </footer>
    </div>
{/if}