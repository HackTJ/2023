<script>
	import Menu from '@svicons/ionicons-solid/menu.svelte';
	import Close from '@svicons/ionicons-solid/close.svelte';

	export let navItems = [];
	let mobileNavOpen = false;

	function toggleNav() {
		mobileNavOpen = !mobileNavOpen;
	}

	// Taken from https://svelte.dev/repl/0a9f812027da4d99b253f39a1941986c?version=3.31.0
	function handleNavAnchorClick(event) {
		event.preventDefault();
		mobileNavOpen = false;

		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<nav
	class="lg:h-24 px-8 lg:px-12 py-8 text-white text-lg font-black bg-blackberry-800 lg:bg-transparent w-full h-full z-10 lg:static {mobileNavOpen
		? 'fixed'
		: 'static'}"
>
	<!-- TODO: Mobile dropdown -->
	<div on:click={toggleNav}>
		<svelte:component
			this={mobileNavOpen ? Close : Menu}
			width="32px"
			class="static lg:hidden text-white hover:text-theme-100"
		/>
	</div>
	<div
		class="justify-start flex lg:flex flex-col lg:flex-row items-center mt-8 lg:mt-0 space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 {mobileNavOpen
			? ''
			: 'hidden'}"
	>
		<div
			class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-8"
		>
			{#each navItems as { href, text, button }}
				{#if !button}
					<a {href} on:click={handleNavAnchorClick} class="hover:text-theme-100">{text}</a>
				{/if}
			{/each}
		</div>
		<div
			class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 w-full"
		>
			{#each navItems as { href, text, button }}
				{#if button}
					<a
						{href}
						class="block text-center py-2 px-6 text-blueberry-800 font-bold rounded-2xl w-full lg:w-auto {button.class}"
						>{text}</a
					>
				{/if}
			{/each}
		</div>
	</div>
</nav>
