<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import SidebarPage from '$lib/components/SidebarPage.svelte';
	import '../../../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Page content here -->
		<div class="py-4">
			<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<slot />
			</div>
		</div>
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		{#if data.campaignPage}
			<ul class="menu">
				<li>
					<PageNav page={data.campaignPage} children={data.pages} />
				</li>
			</ul>
		{/if}
	</div>
</div>
