<script lang="ts">
	import { page, navigating } from '$app/stores';
	import '../app.css';
	import Nav from '$lib/Nav.svelte';

	$: section = $page.url.pathname.split('/')[1];
</script>

<Nav {section} />

<main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
	<slot />
</main>
