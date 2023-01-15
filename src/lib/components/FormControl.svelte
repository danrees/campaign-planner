<script lang="ts">
	export let title: string;
	export let name: string;
	export let inputType = 'text';
</script>

<div class="form-control w-full max-w-md">
	<label class="label font-medium pb-1" for={name}>
		<span class="label-text">{title}</span>
	</label>
	<input
		type={inputType}
		placeholder="Type here"
		class="input input-bordered w-full max-w-md"
		{name}
	/>
</div>
