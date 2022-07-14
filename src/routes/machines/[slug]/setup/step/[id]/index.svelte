<script lang="ts">
	import SetupNav from '../../_SetupNav.svelte';
	import type { MachineType } from '$lib/types/machine.type';

	export let currentMachine: MachineType;
	export let currentStep: number;
</script>

<SetupNav {currentMachine} {currentStep} />

<div class="default-width-padding" />
