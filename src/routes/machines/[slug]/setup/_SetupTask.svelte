<script lang="ts">
	import type { SetupTask } from '$lib/types/machine.type';

	export let setupTask: SetupTask;
	export let i: number;
</script>

<div class="flex items-center w-full max-w-2xl bg-gray-200 rounded-lg shadow-md p-4">
	{i + 1}: {setupTask.title.toLowerCase()}
</div>
