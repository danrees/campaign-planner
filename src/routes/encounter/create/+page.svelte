<script lang="ts">
	import type { Character } from '$lib/characters';
	import EncounterInput from '$lib/components/EncounterInput.svelte';
	import type { Participant } from '$lib/encounters';
	import type { PageServerData } from './$types';
	import { v4 as uuidv4 } from 'uuid';

	export let data: PageServerData;

	const abilityBonus = (score: number): number => {
		return Math.floor((score - 10) / 2);
	};
	const calcHitpoints = (character: Character): number => {
		const attr = character.attributes;
		const aBonus = abilityBonus(character.abilities.con);
		return (
			(attr.classhp + attr.bonushpPerLevel + aBonus) * character.level +
			attr.ancestryhp +
			attr.bonushp
		);
	};
	let name: string = '';
	let characters = data.characters.map((b) => {
		return {
			id: uuidv4(),
			name: b.build.name,
			acTotal: { acTotal: b.build.acTotal.acTotal },
			condition: 'normal',
			hitPoints: calcHitpoints(b.build),
			initiative: 0
		};
	});
	const addNew = () => {
		let temp = [...characters];
		temp.push({
			name: 'New Participant',
			acTotal: { acTotal: 0 },
			condition: 'Normal',
			hitPoints: 0,
			initiative: 0,
			id: uuidv4()
		});
		characters = temp;
	};

	const save = async () => {
		const body = {
			name: name,
			participants: JSON.stringify(characters)
		};
		await fetch('/api/encounter', {
			method: 'POST',
			body: JSON.stringify(body)
		});
	};
</script>

<div>
	<form method="POST" action="?/save">
		<div class="form-control max-w-xs">
			<label class="label" for="name">
				<span class="label-text">Encounter Name</span>
			</label>
			<input id="name" name="name" class="input input-bordered" bind:value={name} />
		</div>
		{#if characters}
			{#each characters as character}
				<EncounterInput bind:character />
			{/each}
		{/if}
	</form>
	<button class="btn" on:click={() => save()}>Save</button>
	<button class="btn" on:click={() => addNew()}>Add</button>
</div>
