<script lang="ts">
	import type { Character } from '$lib/characters';
	import EncounterInput from '$lib/components/EncounterInput.svelte';
	import type { Participant } from '$lib/encounters';
	import type { PageServerData } from './$types';
	import { v4 as uuidv4 } from 'uuid';

	export let data: PageServerData;
	let extras: Participant[] = [];
	const addNew = () => {
		let temp = [...extras];
		temp.push({
			name: 'New Participant',
			acTotal: { acTotal: 0 },
			condition: 'Normal',
			hitPoints: 0,
			initiative: 0,
			id: uuidv4()
		});
		extras = temp;
	};
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
</script>

<div>
	<form>
		<div class="form-control max-w-xs">
			<label class="label" for="name">
				<span class="label-text">Encounter Name</span>
			</label>
			<input id="name" name="name" class="input input-bordered" />
		</div>
		{#if data.characters}
			{#each data.characters as character}
				<EncounterInput
					character={{
						id: uuidv4(),
						name: character.build.name,
						acTotal: character.build.acTotal,
						condition: 'normal',
						hitPoints: calcHitpoints(character.build),
						initiative: 0
					}}
				/>
			{/each}
		{/if}
		{#each extras as npc}
			<EncounterInput character={npc} />
		{/each}
		<button class="btn" type="submit">Save</button>
	</form>
	<button class="btn" on:click={() => addNew()}>Add</button>
</div>
