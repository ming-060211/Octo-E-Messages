<script>import useToaster from "../core/use-toaster";
import ToastWrapper from "./ToastWrapper.svelte";
export let reverseOrder = false;
export let position = "top-center";
export let toastOptions = void 0;
export let gutter = 8;
export let containerStyle = void 0;
export let containerClassName = void 0;
const { toasts, handlers } = useToaster(toastOptions);
let _toasts;
$:
  _toasts = $toasts.map((toast) => ({
    ...toast,
    position: toast.position || position,
    offset: handlers.calculateOffset(toast, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
</script>

<div
	class="toaster {containerClassName || ''}"
	style={containerStyle}
	on:mouseenter={handlers.startPause}
	on:mouseleave={handlers.endPause}
	role="alert"
>
	{#each _toasts as toast (toast.id)}
		<ToastWrapper {toast} setHeight={(height) => handlers.updateHeight(toast.id, height)} />
	{/each}
</div>

<style>
	.toaster {
		--default-offset: 16px;

		position: fixed;
		z-index: 9999;
		top: var(--default-offset);
		left: var(--default-offset);
		right: var(--default-offset);
		bottom: var(--default-offset);
		pointer-events: none;
	}
</style>
