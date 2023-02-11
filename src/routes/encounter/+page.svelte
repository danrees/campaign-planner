<script lang="ts">
	import type { Build, Character } from '$lib/characters';
	import EncounterManager from '$lib/components/EncounterManager.svelte';
	import type { Participant } from '$lib/encounters';
	import { onDestroy, onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import crypto from 'crypto';
	import { v4 as uuidv4 } from 'uuid';
	import { participants } from '$lib/stores';

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

	const resetPage = () => {
		const c = data.characters.map((c) => {
			let newC: Initiative = {
				...c.build,
				id: uuidv4(),
				hitPoints: calcHitpoints(c.build),
				condition: 'normal',
				initiative: 0
			};
			return newC;
		});
		participants.set(c);
	};

	export let data: PageServerData;

	onMount(() => {
		const c = data.characters.map((c) => {
			let newC: Initiative = {
				...c.build,
				id: uuidv4(),
				hitPoints: calcHitpoints(c.build),
				condition: 'normal',
				initiative: 0
			};
			return newC;
		});

		participants.update((p) => {
			const toUpdate = [...p];
			const setThese = c.filter((i) => toUpdate.find((j) => j.name === i.name) === undefined);
			console.log(setThese);
			toUpdate.push(...setThese);
			return toUpdate;
		});
	});
</script>

<div class="container mx-auto">
	<EncounterManager bind:participants={$participants} />
	<button
		class="btn"
		on:click={() => {
			resetPage();
		}}>Reset</button
	>
</div>
