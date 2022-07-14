<script lang="ts">
	import SetupNav from '../../_SetupNav.svelte';
	import type { MachineType } from 'src/types/machine.type';

	export let machine: MachineType;
	export let currentStep: number;
</script>

<SetupNav {machine} {currentStep} />

<div class="default-width-padding" />

<form action="/machines/{machine.slug}/setup/step/{currentStep}/done" method="post">
	<input type="hidden" name="done" value="{machine.setupSte}"
	<button title="toggle" type="submit">toggle</button>
</form>
