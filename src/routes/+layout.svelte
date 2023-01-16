<script lang="ts">
	import '../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">Campaign</a>
		</div>
		<div class="flex-none">
			<a href="/login" class="btn btn-ghost normal-case text-xl">Login</a>
		</div>
	</nav>
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
			<ul class="menu p-4 w-80 bg-base-100 text-base-content">
				<!-- Sidebar content here -->
				{#if data.pages}
					{#each data.pages as page}
						<li><a>{page.title}</a></li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</div>
