<script lang="ts">
	import SetupNav from './_SetupNav.svelte';
	import type { MachineType } from '$lib/types/machine.type';
	import SetupStep from './_SetupStep.svelte';

	export let currentMachine: MachineType;
</script>

<SetupNav {currentMachine} />

<div class="default-width-padding mt-8">
	<div class="flex justify-center">
		<h1 class="font-medium text-xl">
			the setup for the <strong>{currentMachine.title.toLowerCase()}</strong> machine consists of the following steps:
		</h1>
	</div>
	<div class="flex flex-col items-center mt-8 space-y-2">
		{#each currentMachine.setupSteps as setupStep, i}
			<SetupStep {setupStep} {i} />
		{/each}
	</div>
	<div class="flex flex-col items-center mt-6">
		<a class="p-4 bg-green-600 text-white rounded-md shadow-md" href="/machines/{currentMachine.slug}/setup/step/0"
			>let's get started!
		</a>
	</div>
</div>
