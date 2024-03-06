<script>export let toast;
</script>

<div class="message" {...toast.ariaProps}>
	{#if typeof toast.message === 'string'}
		{toast.message}
	{:else}
		<svelte:component this={toast.message} {toast} />
	{/if}
</div>

<style>
	.message {
		display: flex;
		justify-content: center;
		margin: 4px 10px;
		color: inherit;
		flex: 1 1 auto;
		white-space: pre-line;
	}
</style>
