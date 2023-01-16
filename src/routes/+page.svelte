<script lang="ts">
	import EditPage from '$lib/components/EditPage.svelte';
	import ViewPage from '$lib/components/ViewPage.svelte';
	import type { Page } from '$lib/pages';

	let edit = false;

	let page: Page = {
		title: 'My Page',
		content: `# My Page

**Some content**`,
		id: 'id'
	};
</script>

<div class="form-control w-full max-w-sm">
	<label class="label cursor-pointer">
		<span class="label-text">Edit</span>
		<input type="checkbox" class="toggle" bind:checked={edit} />
	</label>
</div>
<div>
	{#if edit}
		<EditPage bind:value={page.content} />
	{:else}
		<ViewPage bind:markdown={page.content} />
	{/if}
</div>
