<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import Footer from '../components/Footer.svelte';
	import { faq } from '../eventdata';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12">
		<a href="{base}/"><Home width="32px" class="text-theme-100 hover:text-theme-200" /></a>
		<div class="flex items-center mt-8">
			<div class="flex bg-theme-100 rounded-2xl h-16 w-16 items-center mr-4">
				<div class="m-auto font-black text-blackberry-800 text-center text-4xl">?</div>
			</div>
			<h1 class="text-5xl font-black text-white">FAQ</h1>
		</div>
		<div class="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
			{#each faq as { question, answer, answerComponent }}
				<div class="text-white">
					<h3 class="font-bold text-xl whitespace-pre-wrap">{question}</h3>
					<div class="mt-1">
						{#if answer}
							<p>{answer}</p>
						{:else if answerComponent}
							<svelte:component this={answerComponent} />
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<Footer class="mt-8" />
</section>
