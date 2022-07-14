<script lang="ts">
	import SetupNav from './_SetupNav.svelte';
	import type { MachineType } from '$lib/types/machine.type';

	export let currentMachine: MachineType;
</script>

<SetupNav {currentMachine} />

<div class="default-width-padding">
	{#each currentMachine.setupTasks as setupTask}
		<div class="">
			{setupTask.title}
		</div>
	{/each}
</div>
