<script lang="ts">
	import type { MachineType } from '$lib/types/machine.type';

	export let currentMachine: MachineType;
</script>

<div class="bg-gray-800">
	<div class="default-width-padding">
		<div class="flex items-center justify-center h-8 text-white">
			<div class="flex-grow basis-0">
				<a href="/">user: 1234567</a>
			</div>
			<div class="flex items-center justify-center space-x-4">
				<div class="flex-grow basis-0">
					<a href="/machines/{currentMachine.slug}/setup">setup</a>
				</div>
				<div class="flex-grow basis-0">
					<a href="/machines/{currentMachine.slug}/operate">operate</a>
				</div>
				<div class="flex-grow basis-0">
					<a href="/machines/{currentMachine.slug}/cleanup">cleanup</a>
				</div>
			</div>
		</div>
	</div>
</div>
