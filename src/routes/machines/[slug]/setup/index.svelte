<script lang="ts">
	import SetupNav from './_SetupNav.svelte';
	import type { MachineType } from 'src/types/machine.type';

	export let machine: MachineType;
</script>

<SetupNav {machine} />

<div class="default-width-padding">hej</div>
