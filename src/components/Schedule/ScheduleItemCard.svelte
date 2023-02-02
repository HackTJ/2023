<script>
	import Dots from './Dots.svelte';
	import dayjs from 'dayjs';

	export let active = true;
	export let title = '';
	export let time = dayjs();
	export let end = dayjs();

	$: timeStr = end ? time.format('h:mm a') + " - " + end.format('h:mm a') : time.format('h:mm a');
</script>

<div
	class="w-[300px] p-6 h-48 rounded-2xl flex flex-col justify-between items-start relative {active
		? 'bg-theme-50 text-black'
		: 'bg-black text-white'}"
>
	<Dots
		color={active ? '#DAA740' : '#333a70'}
		class="absolute right-0 bottom-0 scale-125 origin-bottom-right"
	/>
	<div class="z-10">
		<h2 class="font-black text-3xl">{title}</h2>
		<h2 class="font-medium font-mono text-xl mt-1">{timeStr}</h2>
	</div>
</div>
