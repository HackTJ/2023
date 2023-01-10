<script>
	import { onMount } from 'svelte';

	export let zoom = 18;
	export let latlng = { lat: 38.92208058473404, lng: -77.23336741553179 }; // Cvent Location

	// TODO: Styling Map
	onMount(async () => {
		let google = window.google;
		let mapCanvas = document.getElementById('map-canvas');

		mapCanvas = new google.maps.Map(mapCanvas, { zoom, center: latlng });

		new google.maps.Marker({
			map: mapCanvas,
			position: latlng,
			animation: google.maps.Animation.DROP
		});
	});
</script>

<div class="w-full h-[400px] rounded-2xl" id="map-canvas" />
