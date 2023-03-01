<script>
	import Dots from './Dots.svelte';
	import dayjs from 'dayjs';
	import { getContext } from 'svelte';
	import ScheduleItemModal from './ScheduleItemModal.svelte';

	export let isActive = true;
	export let title = '';
	export let subtitle = '';
	export let description = '';
	export let time = dayjs();
	export let end = null;

	const { open } = getContext('simple-modal');
	const openAboutInfo = () => open(ScheduleItemModal, { title, subtitle, description, time, end });

	$: timeStr = end ? time.format('h:mm a') + ' - ' + end.format('h:mm a') : time.format('h:mm a');
</script>

<div
	class="w-[91%] md:max-w-[400px] p-6 min-h-[125px] rounded-2xl flex items-center flex-row justify-between relative hover:brightness-75 cursor-pointer transition-all duration-100 ease-in-out {isActive
		? 'bg-theme-100 text-black'
		: 'bg-black text-white'}"
	on:click={openAboutInfo}
>
	<Dots
		color={isActive ? '#2D2A40' : '#333a70'}
		class="absolute right-0 bottom-0 scale-50 origin-bottom-right"
	/>
	<div class="z-5">
		<h2 class="font-black text-3xl">{title}</h2>
		{#if subtitle}
			<h3 class="font-medium text-xl">{subtitle}</h3>
		{/if}
		<h2 class="font-medium font-mono text-xl mt-1">{timeStr}</h2>
	</div>
</div>
