<script lang="ts">
	import SetupNav from '../../_SetupNav.svelte';

	const machine = {
		name: 'laser'
	};

	const steps = [
		{
			step: 1,
			done: true
		},
		{
			step: 2,
			done: true
		},
		{
			step: 3,
			done: true
		},
		{
			step: 4,
			done: false
		},
		{
			step: 5,
			done: false
		},
		{
			step: 6,
			done: false
		},
		{
			step: 7,
			done: false
		}
	];

	let step = 1;
</script>

<SetupNav {machine} {steps} />

<div class="default-width-padding">hej</div>
