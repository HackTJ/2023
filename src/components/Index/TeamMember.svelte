<script>
	import { getContext } from 'svelte';
	import TeamMemberModal from './TeamMemberModal.svelte';

	export let name;
	export let portraitSrc;
	export let description;
	let classNames = '';
	export { classNames as class };

	const { open } = getContext('simple-modal');
	const openAboutInfo = () => open(TeamMemberModal, { name, portraitSrc, description });
</script>

<!-- TODO: Dialog Popup -->
<div class={classNames}>
	<img
		class="max-h-[256px] w-full object-center object-cover rounded-2xl hover:brightness-75 cursor-pointer transition-all duration-100 ease-in-out"
		src={portraitSrc}
		alt="A team member"
		on:click={openAboutInfo}
	/>
	<div class="flex flex-row h-16 items-center justify-between mt-2">
		<h4 class="text font-medium font-mono">{name}</h4>
		<button
			on:click={openAboutInfo}
			class="flex text-center items-center justify-center h-12 w-12 bg-theme-100 hover:bg-theme-200 text-blueberry-800 text-2xl font-bold rounded-2xl"
			>+</button
		>
	</div>
</div>
