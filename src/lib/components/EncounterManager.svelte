<script lang="ts">
	import type { Participant } from '$lib/encounters';
	import { v4 as uuidv4 } from 'uuid';

	export let participants: Participant[] = [];
	// $: {
	// 	sort()
	// }

	const sort = () => {
		let p = participants.sort((a, b) => b.initiative - a.initiative);
		participants = [...p];
	};
	const addParticipant = () => {
		participants.push({
			id: uuidv4(),
			name: 'New participant',
			condition: 'normal',
			hitPoints: 0,
			initiative: 0,
			acTotal: { acTotal: 0 }
		});

		participants = [...participants];
	};
</script>

<h1>Encounter</h1>
<table class="table">
	<thead>
		<th>Name</th>
		<th>Hit Points</th>
		<th>Condition</th>
		<th>Initiative</th>
		<th>AC</th>
	</thead>
	<tbody>
		{#each participants as p (p.id)}
			<tr>
				<td><input bind:value={p.name} type="text" class="input max-w-xs" /></td>
				<td><input bind:value={p.hitPoints} type="number" class="input max-w-xs" /></td>
				<td><input bind:value={p.condition} type="text" class="input max-w-xs" /></td>
				<td
					><input
						bind:value={p.initiative}
						type="number"
						class="input max-w-xs"
						on:mouseleave={() => {
							sort();
						}}
					/></td
				>
				<td><input bind:value={p.acTotal.acTotal} type="number" class="input max-w-xs" /></td>
			</tr>
		{/each}
	</tbody>
</table>
<button class="btn" on:click={addParticipant}>Add</button>
