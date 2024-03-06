<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import toast, { Toaster } from 'svelte-french-toast';
    import {invalidateAll} from "$app/navigation";

    export let parent: SvelteComponent;
    const modalStore = getModalStore();

    let id = JSON.stringify($modalStore[0].meta.id)
    let first_name = JSON.stringify($modalStore[0].meta.first_name)
    let last_name = JSON.stringify($modalStore[0].meta.last_name)
    let email = JSON.stringify($modalStore[0].meta.email)
    let phone_number = JSON.stringify($modalStore[0].meta.phone_no)
    let enable_email = JSON.stringify($modalStore[0].meta.enable_email)
    let enable_phone = JSON.stringify($modalStore[0].meta.enable_phone)

    // console.log(first_name)
    // console.log(phone_no)

    id = id.replace(/"/g, '')
    first_name = first_name.replace(/"/g, '')
    last_name = last_name.replace(/"/g, '')
    email = email.replace(/"/g, '')
    phone_number = phone_number.replace(/"/g, '')
    enable_email = enable_email.replace(/"/g, '')
    enable_phone = enable_phone.replace(/"/g, '')


    async function onFormSubmit(){
        const response = await fetch('/../../api/updateuser', {
            method: "POST",
            body: JSON.stringify({id, first_name, last_name, email, phone_number, enable_email, enable_phone}),
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
        <header class={cHeader}>{'Edit User '}</header>
        <form class="modal-form {cForm}">
            <label class="label">
                <span>First Name</span>
                <input class="input" type="text" placeholder=" Enter first name..." bind:value={first_name} required/>
            </label>
            <label class="label">
                <span>Last Name</span>
                <input class="input" type="text" placeholder=" Enter last name..." bind:value={last_name} required/>
            </label>
            <label class="label">
                <span>Email</span>
                <input class="input" type="email" placeholder=" Enter email..." bind:value={email} required/>
            </label>
            <label class="label">
                <span>Phone Number</span>
                <input class="input" type="text" placeholder=" Enter Phone No..." bind:value={phone_number}  required/>
            </label>
            <label class="label">
                <span>Enable Email</span>
                <select class="select" required bind:value={enable_email}>
                    <option disabled selected style="display: none">Select an Option</option>
                    <option value="true">Enable</option>
                    <option value="false">Disable</option>
                </select>
            </label>
            <label class="label">
                <span>Enable Phone</span>
                <select class="select" required bind:value={enable_phone}>
                    <option disabled selected style="display: none">Select an Option</option>
                    <option value="true">Enable</option>
                    <option value="false">Disable</option>
                </select>
            </label>
        </form>
        <!-- prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
        </footer>
    </div>
{/if}