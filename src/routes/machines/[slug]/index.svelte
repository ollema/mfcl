<script lang="ts">
	import MachineNav from './_MachineNav.svelte';
	import type { MachineType } from 'src/types/machine.type';

	export let machine: MachineType;
</script>

<MachineNav {machine} />

<div class="default-width-padding">
	<p>Welcome to {machine.name}</p>
</div>
