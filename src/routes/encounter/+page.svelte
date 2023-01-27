<script lang="ts">
	import type { Build, Character } from '$lib/characters';
	import EncounterManager from '$lib/components/EncounterManager.svelte';
	import type { Participant } from '$lib/encounters';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import crypto from 'crypto';
	import { v4 as uuidv4 } from 'uuid';

	type Initiative = Character & Participant;
	const calcHitpoints = (character: Character): number => {
		const attr = character.attributes;
		return (attr.classhp + attr.bonushpPerLevel) * character.level + attr.ancestryhp + attr.bonushp;
	};

	export let data: PageServerData;
	let characters: Initiative[];
	onMount(() => {
		characters = data.characters.map((c) => {
			let newC: Initiative = {
				...c.build,
				id: uuidv4(),
				hitPoints: calcHitpoints(c.build),
				condition: 'normal',
				initiative: 0
			};
			return newC;
		});
	});
</script>

<div class="container mx-auto">
	<EncounterManager bind:participants={characters} />
</div>
