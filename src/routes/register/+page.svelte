<script lang="ts">
    import {getFlash, updateFlash} from "sveltekit-flash-message";
    import {page} from "$app/stores";
    import toast, { Toaster } from 'svelte-french-toast';

    const flash = getFlash(page);

    async function submitform(e : Event){
        const form = e.target as HTMLFormElement
        const body = new FormData(e.target as HTMLFormElement)

        let res = await fetch(form.action, { method: 'POST', body })

        // let result = await res.json()
        // let split = result.data.replace(/^\["(.+)"\]$/, '$1')
        // toast(split)
        form.reset()
        await updateFlash(page)

    }

</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-10 w-auto" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="?/register" method="post" on:submit|preventDefault={submitform}>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
                <div class="flex items-center justify-between">
                    <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                </div>
                <div class="mt-2">
                    <input id="confirm_password" name="confirm_password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            A member?
            <a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
        </p>
    </div>
</div>