<script lang="ts">
	import { browser } from '$app/environment';
	import type { Character } from '$lib/characters';
	import EncounterManager from '$lib/components/EncounterManager.svelte';
	import type { Encounter, Participant } from '$lib/encounters';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';

	type Initiative = Character & Participant;

	const abilityBonus = (score: number): number => {
		return Math.floor((score - 10) / 2);
	};

	const saveEncounter = async (encounter: Encounter) => {
		const resp = await fetch('/api/encounter', {
			method: 'POST',
			body: JSON.stringify(encounter)
		});
		if (!resp.ok) {
			console.log(resp.json());
		}
	};

	const reset = () => {
		if (data.encounter) {
			encounter = data.encounter;
		}
	};

	export let data: PageServerData;
	let encounter: Encounter;
	onMount(() => {
		if (data.encounter && browser) {
			const item = localStorage.getItem(data.encounter?.id || '');
			if (!item) {
				// If we don't have local storage, use page data
				encounter = { ...data.encounter };
				// then we save the encounter by it's id to local storage
				localStorage.setItem(data.encounter?.id || 'encounter', JSON.stringify(encounter));
			} else {
				// If we already have local storage, just load it
				encounter = JSON.parse(item);
			}
		}
	});
	$: {
		if (encounter && encounter.id && browser) {
			localStorage.setItem(encounter.id, JSON.stringify(encounter));
		}
	}
</script>

<div class="">
	{#if encounter}
		<input
			class="input input-bordered w-full max-w-xs"
			bind:value={encounter.name}
			placeholder="Name"
		/>
		<EncounterManager bind:participants={encounter.participants} />
		<button
			class="btn"
			on:click={async () => {
				if (encounter) {
					await saveEncounter(encounter);
				} else {
					throw new Error('no encounter available to save');
				}
			}}>Save</button
		>
		<button class="btn" on:click={() => reset()}>Reset</button>
	{/if}
</div>
