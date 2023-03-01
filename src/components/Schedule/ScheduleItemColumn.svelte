<script>
	import dayjs from 'dayjs';
	import ScheduleItemCard from './ScheduleItemCard.svelte';
	import Modal from 'svelte-simple-modal';
	import CloseButton from '../Index/CloseButton.svelte';

	export let cardData = [];
	export let columnTime = dayjs();
	cardData.sort((a, b) => a.time.unix() - b.time.unix());

	$: isActive = columnTime.isSame(dayjs(), 'hour');
	$: hour = columnTime.format('h A');

	let columnOpen = true;
</script>

{#if cardData.length}
	<div class="block max-w-full flex flex-col xl:flex-row items-center mt-4 space-x-8 min-h-[125px]">
		<div class="flex flex-row flex-none items-center w-16">
			<div class="justify-center text-center shrink-0 {!cardData.length ? 'opacity-50' : ''}">
				<p class="m-auto text-2xl font-bold {isActive ? 'text-theme-100' : 'text-spruce-200'}">
					{hour}
				</p>
			</div>
		</div>
		{#if cardData && columnOpen}
			<Modal
				unstyled={true}
				classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-blackberry-800/[0.8] z-10"
				classWindowWrap="relative m-4 max-h-full"
				classWindow="rounded-2xl bg-theme-100 text-black p-6 md:p-8 max-w-xl max-h-full m-auto relative"
				closeButton={CloseButton}
			>
				<div
					class="flex flex-col lg:flex-row items-center justify-center xl:justify-start w-full mt-6 text-black space-y-8 lg:space-y-0 space-x-0 lg:space-x-8"
				>
					{#each cardData as { title, subtitle, description, time, end }}
						<ScheduleItemCard {title} {isActive} {subtitle} {description} {time} {end} />
					{/each}
				</div>
			</Modal>
		{/if}
	</div>
{/if}
