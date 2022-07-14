<script lang="ts">
	import type { SetupTaskStep } from '$lib/types/machine.type';

	export let setupTaskStep: SetupTaskStep;
	export let i: number;
</script>

<div class="flex items-center w-full max-w-2xl bg-gray-200 rounded-lg shadow-md p-4">
	{i + 1}: {setupTaskStep.title.toLowerCase()}
</div>
