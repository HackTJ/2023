<script>
	export let title;
	export let link;
	export let linkText;
	export let disabled = false;
	export let closed = false;
</script>

<div class="flex flex-col flex-1 justify-between">
	<div>
		{#if disabled || closed}
			<h2 class="text-gray-400 text-3xl font-black mb-2">{title}</h2>
		{:else}
			<h2 class="text-theme-100 text-3xl font-black mb-2">{title}</h2>
		{/if}
		<slot />
	</div>
	{#if disabled}
		<div
			class="block mt-4 text-center py-3 px-4 bg-gray-400 text-blueberry-800 font-bold rounded-2xl"
		>
			Not Available Yet!
		</div>
	{:else if closed}
		<div
			class="block mt-4 text-center py-3 px-4 bg-gray-400 text-blueberry-800 font-bold rounded-2xl"
		>
			Registration is Closed!
		</div>
	{:else}
		<a
			href={link}
			target="_blank"
			rel="noopener noreferred"
			class="block mt-4 text-center py-3 px-4 bg-theme-100 hover:bg-theme-200 text-blueberry-800 font-bold rounded-2xl"
			>{linkText}</a
		>
	{/if}
</div>
