<script lang="ts">
	import type { SubPage } from '$lib/pages';
	import PageNav from './PageNav.svelte';
	export let page: SubPage;
	export let children: SubPage[] = [];
</script>

<span>{page.title}</span>
<li>
	<ul class="">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<li tabindex="0">
			{#each children as subPage}
				<PageNav page={subPage} />
			{/each}
		</li>
	</ul>
</li>
