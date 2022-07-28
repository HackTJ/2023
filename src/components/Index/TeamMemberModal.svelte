<script>
	export let name;
	export let description;
	export let portraitSrc;
</script>

<div class="">
	<img
		class="rounded-2xl w-48 h-48 object-cover bg-center"
		alt="Portrait of {name}"
		src={portraitSrc}
	/>
	<h1 class="text-2xl font-bold mt-4">{name}</h1>
	<p class="mt-1">{description}</p>
</div>
