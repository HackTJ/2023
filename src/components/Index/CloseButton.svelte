<script>
	import Close from '@svicons/ionicons-solid/close.svelte';

	export let onClose;
</script>

<button
	on:click={onClose}
	class="absolute right-0 mr-6 md:mr-8 rounded-xl bg-black hover:bg-gray-600 text-theme-100 flex items-center justify-center w-12 h-12 text-center"
	><Close width="32px" /></button
>
