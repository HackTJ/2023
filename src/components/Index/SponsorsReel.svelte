<script>
	import SponsorsCard from './SponsorsCard.svelte';

	export let title = '';
	export let cardsData = [];
	export let bg;
</script>

<!-- TODO: Carousel buttons & Gradient for scrolling -->
<div class="{bg} w-full pt-8 md:pt-12">
	<h3 class="font-bold text-2xl text-black opacity-50 pl-8">{title}</h3>
	{#if cardsData && cardsData.length}
		<div
			class="flex w-full space-x-4 px-8 pb-8 md:pb-12 overflow-auto scrollbar-thin scrollbar-thumb-blueberry-200 scrollbar-track-blackberry-500"
		>
			{#each cardsData as { src, alt, href }}
				<SponsorsCard srcLogo={src} {alt} {href} />
			{/each}
		</div>
	{/if}
</div>
