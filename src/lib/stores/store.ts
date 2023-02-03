import type { Character } from '$lib/characters';
import type { Participant } from '$lib/encounters';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
type Initiative = Character & Participant;

const defaultValue = '[]';
const initialValue = browser
	? window.localStorage.getItem('participants') ?? defaultValue
	: defaultValue;

export const participants = writable<Initiative[]>(JSON.parse(initialValue));

participants.subscribe((p) => {
	if (browser) {
		window.localStorage.setItem('participants', JSON.stringify(p));
	}
});
