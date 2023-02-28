<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import ScheduleItemColumn from '../components/Schedule/ScheduleItemColumn.svelte';
	import Footer from '../components/Footer.svelte';
	import schedule from '../eventdata/schedule';

	const dates = [...new Set(schedule.map(({ time }) => time.format('M/DD/YYYY')))];
	const cardData = {};

	dates.forEach((date) => {
		cardData[date] = {};
		const matchedDate = schedule.filter(({ time }) => time.format('M/DD/YYYY') === date);
		const uniqueHours = [...new Set(matchedDate.map(({ time }) => time.hour()))];

		const min = Math.min(...uniqueHours);
		const max = Math.max(...uniqueHours);

		for (let h = min; h <= max; h++) {
			const matchedHours = matchedDate.filter(({ time }) => time.hour() === h);
			// Get the time for the column label
			let columnTime = matchedDate[0].time.clone().set('hour', h);
			// Set the data
			cardData[date][h] = { columnTime, data: matchedHours };
		}
	});

	let currentDateIndex = 0;
	let currentDate = Object.keys(cardData)[currentDateIndex];
	let hourlyData = Object.values(cardData[currentDate]);

	const activeButtonClass = 'bg-theme-100 text-blueberry-800 hover:bg-theme-200';
	const inactiveButtonClass = 'border-2 border-white text-white hover:bg-blackberry-500';

	function updateIndex(i) {
		currentDateIndex = i;
		currentDate = Object.keys(cardData)[currentDateIndex];
		hourlyData = Object.values(cardData[currentDate]);
	}
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="h-full grow flex flex-col">
		<div class="px-8 md:px-12 pt-8 md:pt-12">
			<a href="{base}/"><Home width="32px" class="text-theme-100 hover:text-theme-200" /></a>
			<h1 class="pt-8 md:pt-8 text-5xl font-black text-white">Schedule</h1>
			<div class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-4">
				{#each Object.keys(cardData) as date, i}
					<button
						on:click={() => {
							updateIndex(i);
						}}
						class="text-center px-8 py-3 text-xl font-bold rounded-2xl {currentDateIndex === i
							? activeButtonClass
							: inactiveButtonClass}">{date}</button
					>
				{/each}
			</div>
		</div>
		<div class="text-blueberry-200 p-8 md:p-12">
			{#each hourlyData as { data, columnTime }}
				<ScheduleItemColumn cardData={data} {columnTime} />
			{/each}
		</div>
	</div>
	<Footer />
</section>
