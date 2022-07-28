<script>
	export let title, description, href;
</script>

<div class="p-6 bg-blueberry-200 text-blackberry-800 rounded-2xl flex flex-col justify-between">
	<div>
		<h1 class="font-bold text-2xl">{title}</h1>
		<p class="mt-2">{description}</p>
	</div>
	<a
		{href}
		target="_blank"
		rel="noopener noreferred"
		class="block mt-4 text-center py-4 px-6 font-bold rounded-xl bg-black hover:bg-blackberry-800 text-white w-full"
	>
		Open Resource
	</a>
</div>
