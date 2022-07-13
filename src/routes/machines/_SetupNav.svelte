<script lang="ts">
	import type { SetupStepType } from 'src/types/setupStep.type';
	import type { Machine } from 'src/types/machine.type';

	export let machine: Machine;
	export let steps: SetupStepType[];

	export let currentStep: number = 0;
</script>

<div class="bg-gray-800">
	<div class="default-width-padding">
		<div class="flex items-center justify-center h-8 text-white">
			<div class="flex-grow basis-0">
				<a href="/machines/laser">user: 1234567</a>
			</div>
			{#if currentStep >= 1}
				<div class="flex justify-center flex-grow basis-0">
					<div>progress:&nbsp;</div>
					{#each steps as step, i}
						<div class="px-0.5">
							<a class="text-gray-500" class:text-green-500={step.done} href="/machines/{machine.name}/setup/step/{i}"
								>█</a
							>
						</div>
					{/each}
				</div>
				<div class="flex-grow basis-0 text-end">
					<a class="text-white justify-center" href="/machines/{machine.name}/setup/step/{currentStep + 1}">skip step</a
					>
				</div>
			{:else}
				<div class="flex justify-center flex-grow basis-0" />
				<div class="flex-grow basis-0 text-end">
					<a class="text-white justify-center" href="/machines/{machine.name}/setup/step/1">start</a>
				</div>
			{/if}
		</div>
	</div>
</div>
