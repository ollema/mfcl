<script lang="ts">
	import MachineNav from './_MachineNav.svelte';
	import type { MachineType } from '$lib/models/machine';
	import MachineButton from './_MachineButton.svelte';

	export let currentMachine: MachineType;
</script>

<MachineNav {currentMachine} />

<div class="default-width-padding mt-16">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			checklists for the <strong>{currentMachine.title.toLowerCase()}</strong> machine
		</h1>
	</div>
	<div class="flex justify-center mt-8 space-x-8">
		<div>
			<MachineButton {currentMachine} action="setup" />
		</div>
		<div>
			<MachineButton {currentMachine} action="operate" />
		</div>
		<div>
			<MachineButton {currentMachine} action="cleanup" />
		</div>
	</div>
</div>
