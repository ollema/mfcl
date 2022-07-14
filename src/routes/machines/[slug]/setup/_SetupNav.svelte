<script lang="ts">
	import type { MachineType } from 'src/types/machine.type';

	export let machine: MachineType;
	machine = machine;

	export let currentStep: number = -1;
	currentStep = currentStep;
</script>

<div class="bg-gray-800">
	<div class="default-width-padding">
		<div class="flex items-center justify-center h-8 text-white">
			<div class="flex-grow basis-0">
				<a href="/machines/laser">user: 1234567</a>
			</div>
			{#if currentStep >= 0}
				<div class="flex justify-center flex-grow basis-0">
					<div>progress:&nbsp;</div>
					{#each machine.setupSteps as step, i}
						<div class="px-0.5">
							<a class="text-gray-500" class:text-green-500={step.done} href="/machines/{machine.slug}/setup/step/{i}"
								>█</a
							>
						</div>
					{/each}
				</div>
				{#if currentStep < machine.setupSteps.length - 1}
					<div class="flex-grow basis-0 text-end">
						<a class="text-white justify-center" href="/machines/{machine.slug}/setup/step/{currentStep + 1}"
							>skip step</a
						>
					</div>
				{:else}
					<div class="flex-grow basis-0 text-end">
						<a class="text-white justify-center" href="/machines/{machine.slug}/operate">finish setup</a>
					</div>
				{/if}
			{:else}
				<div class="flex-grow basis-0 text-end">
					<a class="text-white justify-center" href="/machines/{machine.slug}/setup/step/0">start</a>
				</div>
			{/if}
		</div>
	</div>
</div>
