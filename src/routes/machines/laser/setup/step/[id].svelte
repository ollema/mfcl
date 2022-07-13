<script lang="ts">
	import SetupNav from '../../../_SetupNav.svelte';
	import { page } from '$app/stores';

	const machine = {
		name: 'laser'
	};

	const steps = [
		{
			done: true
		},
		{
			done: true
		},
		{
			done: true
		},
		{
			done: false
		},
		{
			done: false
		},
		{
			done: false
		},
		{
			done: false
		}
	];

	$: currentStep = +$page.params.id;
</script>

<SetupNav {machine} {steps} {currentStep} />

<div class="default-width-padding">{currentStep}</div>
