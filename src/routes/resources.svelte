<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import ResourceCard from '../components/Resources/ResourceCard.svelte';
	import Footer from '../components/Footer.svelte';
	import resources from '../eventdata/resources';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12">
		<a href="{base}/"><Home width="32px" class="text-theme-100 hover:text-theme-200" /></a>
		<h1 class="text-5xl font-black text-white mt-8">Beginner Resources</h1>
		<div
			class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
		>
			{#each resources as { title, href, description }}
				<ResourceCard {title} {href} {description} />
			{/each}
		</div>
	</div>
	<Footer class="mt-8" />
</section>
