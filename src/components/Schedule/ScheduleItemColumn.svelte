<script>
	import dayjs from 'dayjs';
	import ScheduleItemCard from './ScheduleItemCard.svelte';

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
				<p
					class="m-auto text-2xl font-bold {isActive
						? 'text-theme-100'
						: 'text-spruce-200'}"
				>
					{hour}
				</p>
			</div>
		</div>
		{#if cardData && columnOpen}
			<div class="flex flex-col lg:flex-row items-center justify-center xl:justify-start w-full mt-6 text-black space-y-8 lg:space-y-0 space-x-0 lg:space-x-8">
				{#each cardData as { title, subtitle, time, end }}
					<ScheduleItemCard {title} {isActive} {subtitle} {time} {end} />
				{/each}
			</div>
		{/if}
	</div>
{/if}
