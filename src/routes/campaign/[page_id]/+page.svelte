<script lang="ts">
	import EditPage from '$lib/components/EditPage.svelte';
	import ViewPage from '$lib/components/ViewPage.svelte';
	import type { Page } from '$lib/pages';
	import type { ActionData, LayoutServerData, PageServerData } from './$types';

	let edit = false;

	// 	let page: Page = {
	// 		title: 'My Page',
	// 		content: `# My Page

	// **Some content**`,
	// 		id: 'id'
	// 	};
	export let data: LayoutServerData;
	let page = { ...data.campaignPage };
	export let form: ActionData;
</script>

<div class="form-control w-full max-w-sm">
	<label class="label cursor-pointer">
		<span class="label-text">Edit</span>
		<input type="checkbox" class="toggle" bind:checked={edit} />
	</label>
</div>
<div>
	{#if form?.success}
		<p>Saved!</p>
	{/if}
	{#if form?.missing}
		<p>Unsuccessful, missing data</p>
	{/if}
	{#if form?.error}
		<p>Error: {form.error}</p>
	{/if}
	{#if edit}
		<form method="post">
			<button type="submit" class="btn">Save</button>
			<input type="hidden" name="id" bind:value={page.id} />
			{#if page.parent_page}
				<input type="hidden" name="parent_page_id" bind:value={page.parent_page.id} />
			{/if}
			<EditPage bind:value={page.content} />
		</form>
	{:else}
		<ViewPage bind:markdown={page.content} />
	{/if}
</div>
