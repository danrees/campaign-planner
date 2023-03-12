<script lang="ts">
	import type { Participant } from '$lib/encounters';

	export let character: Participant;
</script>

<fieldset class="input-group">
	<label>
		<span>Name</span>
		<input
			class="input input-bordered"
			type="text"
			id={`name-${character.name}`}
			name={`name-${character.name}`}
			value={character.name}
		/>
	</label>
	<label>
		<span>AC</span>
		<input
			class="input input-bordered"
			type="number"
			id={`ac-${character.name}`}
			name={`ac-${character.name}`}
			value={character.acTotal.acTotal}
		/>
	</label>
	<label>
		<span>HP</span>
		<input
			class="input input-bordered"
			type="number"
			id={`hp-${character.name}`}
			name={`hp-${character.name}`}
			value={character.hitPoints}
		/>
	</label>
	<label>
		<span>Cond</span>
		<input
			class="input input-bordered"
			type="text"
			id={`condition-${character.name}`}
			name={`condition-${character.name}`}
			value={character.condition}
		/>
	</label>
	<label>
		<span>Init</span>
		<input
			class="input input-bordered"
			type="number"
			id={`initiative-${character.name}`}
			name={`initiative-${character.name}`}
			value="0"
		/>
	</label>
</fieldset>
