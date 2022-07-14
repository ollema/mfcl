<script lang="ts">
	import type { MachineType } from 'src/types/machine.type';

	export let machine: MachineType;
</script>

<div class="bg-gray-800">
	<div class="default-width-padding">
		<div class="flex items-center justify-center h-8 text-white">
			<div class="flex-grow basis-0">
				<a href="/">user: 1234567</a>
			</div>
			<div class="flex items-center justify-center">
				<div class="flex-grow basis-0">
					<a href="/machines/{machine.slug}/setup">setup</a>
				</div>
				<div class="flex-grow basis-0">
					<a href="/machines/{machine.slug}/operate">operate</a>
				</div>
				<div class="flex-grow basis-0">
					<a href="/machines/{machine.slug}/cleanup">cleanup</a>
				</div>
			</div>
		</div>
	</div>
</div>
