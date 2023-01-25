<script lang="ts">
	import type { SubPage } from '$lib/pages';
	import PageNav from './PageNav.svelte';
	export let page: SubPage;
	export let children: SubPage[] = [];
</script>

<ul class="menu p-4 w-80 bg-base-100 text-base-content">
	<li>
		<span>{page.title}</span>
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			{#each children as subPage}
				<li><PageNav page={subPage} /></li>
			{/each}
		</ul>
	</li>
</ul>
