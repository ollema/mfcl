<script lang="ts">
    import Nav from '.././_Nav.svelte';
	import type { UserType } from '$lib/models/user';

    export let users: UserType[]
</script>

<Nav />

{#each users as user}
    {user.name}
{/each}
