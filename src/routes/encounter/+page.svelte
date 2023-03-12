<script lang="ts">
	import { List, type Build, type Character } from '$lib/characters';
	import EncounterManager from '$lib/components/EncounterManager.svelte';
	import type { Participant } from '$lib/encounters';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import { v4 as uuidv4 } from 'uuid';
	import { participants } from '$lib/stores';

	export let data: PageServerData;
	let characters: string[] = [];
</script>

<div class="container mx-auto">
	<div class="py-5">
		<h2 class="text-3xl py-2">Encounters</h2>
		<ul class="list">
			{#if data.encounters}
				{#each data.encounters as encounter}
					<li class="list-item">
						<a class="link" href={`/encounter/${encounter.id}`}>{encounter.name}</a>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="py-5">
		<h2 class="text-3xl py-2">Create New</h2>
		{#if data.characters}
			<select class="select" multiple bind:value={characters}>
				{#each data.characters as char}
					<option>{char}</option>
				{/each}
			</select>
			<a class="btn" href={`/encounter/create?${characters.map((c) => `name=${c}`).join('&')}`}
				>Create Encounter</a
			>
		{/if}
	</div>
</div>
