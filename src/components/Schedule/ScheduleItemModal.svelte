<script>
	import dayjs from 'dayjs';

	export let title = '';
	export let subtitle = '';
	export let description = '';
	export let time = dayjs();
	export let end = null;
</script>

<div class="">
	<h1 class="text-2xl font-bold mt-4">{title}</h1>
	<h2 class="text-xl font-bold mt-2">{subtitle}</h2>
	<p class="mt-1">
		{time.format('MMMM D, YYYY h:mm a')}
		{#if end}
			- {end.format('h:mm a')}
		{/if}
	</p>
	{#if description}
		<br />
		<p class="mt-1">{@html description}</p>
	{/if}
</div>
