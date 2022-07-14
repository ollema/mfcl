<script lang="ts">
	import MachineNav from './_MachineNav.svelte';
	import type { MachineType } from '$lib/types/machine.type';

	export let currentMachine: MachineType;
</script>

<MachineNav {currentMachine} />

<div class="default-width-padding">
	<p>Welcome to {currentMachine.title}</p>
</div>
