<script>
	import LogoFacebook from '@svicons/ionicons-solid/logo-facebook.svelte';
	import LogoInstagram from '@svicons/ionicons-solid/logo-instagram.svelte';
	import LogoLinkedIn from '@svicons/ionicons-solid/logo-linkedin.svelte';
	import LogoTwitter from '@svicons/ionicons-solid/logo-twitter.svelte';

	let classNames = '';
	export { classNames as class };
</script>

<div
	class="py-8 px-8 md:px-12 w-full bg-theme-100 flex justify-end items-center text-blackberry-800 ${classNames}"
>
	<div class="ml-auto flex space-x-8">
		<a href="https://twitter.com/hacktjofficial" class="hover:text-blackberry-500"
			><LogoTwitter width="30px" /></a
		>
		<a href="https://www.linkedin.com/company/hacktj" class="hover:text-blackberry-500"
			><LogoLinkedIn width="30px" /></a
		>
		<a href="https://www.instagram.com/hacktjofficial" class="hover:text-blackberry-500"
			><LogoInstagram width="30px" /></a
		>
		<a href="https://www.facebook.com/HackTJOfficial/" class="hover:text-blackberry-500"
			><LogoFacebook width="30px" /></a
		>
	</div>
</div>
