<script>
	import dayjs from 'dayjs';
	import ScheduleItemCard from './ScheduleItemCard.svelte';

	export let cardData = [];
	export let columnTime = dayjs();
	cardData.sort((a, b) => a.time.unix() - b.time.unix());

	$: active = columnTime.isSame(dayjs(), 'hour');
	$: hour = columnTime.format('h A');

	let columnOpen = true;
	function onButtonClick() {
		columnOpen = !columnOpen;
	}
</script>

<div class="block max-w-sm shrink-0">
	<div class="flex flex-row items-center">
		<div class="justify-center text-center shrink-0 {!cardData.length ? 'opacity-50' : ''}">
			<p
				class="m-auto text-theme-100 text-2xl font-bold {active ? 'text-thene' : 'text-spruce-200'}"
			>
				{hour}
			</p>
			<button
				on:click={onButtonClick}
				disabled={!cardData.length}
				class="rounded-full text-2xl font-bold h-8 w-8 flex items-center m-auto mt-1 text-black {active
					? 'bg-theme-100 hover:bg-theme-200'
					: 'bg-spruce-200 hover:bg-spruce-300'}"
			>
				<div class="m-auto">{columnOpen && cardData.length ? '-' : '+'}</div>
			</button>
		</div>
		{#if cardData && columnOpen}
			<div
				class="w-full ml-8 bg-theme-100 h-3 rounded-full {active
					? 'bg-theme-100'
					: 'bg-spruce-200'}"
			/>
		{/if}
	</div>
	{#if cardData && columnOpen}
		<div class="flex flex-col mt-6 text-black space-y-4">
			{#each cardData as { time, title, joinLink }}
				<ScheduleItemCard {title} {active} {time} {joinLink} />
			{/each}
		</div>
	{/if}
</div>
