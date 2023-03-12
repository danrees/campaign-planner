<script lang="ts">
	import type { Character } from '$lib/characters';
	import EncounterManager from '$lib/components/EncounterManager.svelte';
	import type { Encounter, Participant } from '$lib/encounters';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';

	type Initiative = Character & Participant;
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

	const saveEncounter = async (name: string, encounter: Encounter) => {
		//console.log(data);
		const data = { ...encounter, name: name };
		const resp = await fetch('/api/encounter', {
			method: 'POST',
			body: JSON.stringify(encounter)
		});
		if (!resp.ok) {
			console.log(resp.json());
		}
	};

	export let data: PageServerData;
	let encounter = data.encounter;
	let encounterName: string;
</script>

<div class="container mx-auto">
	<input
		class="input input-bordered w-full max-w-xs"
		bind:value={encounterName}
		placeholder="Name"
	/>
	{#if encounter}
		<EncounterManager bind:participants={encounter.participants} />
		<button
			class="btn"
			on:click={async () => {
				if (encounter) {
					await saveEncounter(encounterName, encounter);
				} else {
					throw new Error('no encounter available to save');
				}
			}}>Save</button
		>
	{/if}
</div>
