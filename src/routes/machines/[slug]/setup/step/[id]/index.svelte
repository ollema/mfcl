<script lang="ts">
	import SetupNav from '../../_SetupNav.svelte';
	import type { MachineType } from '$lib/types/machine.type';
	import SetupTaskStep from './_SetupTaskStep.svelte';

	export let currentMachine: MachineType;
	export let currentStep: number;
</script>

<SetupNav {currentMachine} {currentStep} />

<div class="default-width-padding mt-8">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			setup task: <strong>{currentMachine.setupTasks[currentStep].title.toLowerCase()}</strong>
		</h1>
	</div>
	<div class="flex flex-col items-center mt-8 space-y-2">
		{#each currentMachine.setupTasks[currentStep].setupTaskSteps as setupTaskStep, i}
			<SetupTaskStep {setupTaskStep} {i} />
		{/each}
	</div>
	<div class="flex flex-col items-center mt-6">
		<a class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{currentMachine.slug}/setup/step/0"
			>finish setup task
		</a>
	</div>
</div>
