<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import SidebarPage from '$lib/components/SidebarPage.svelte';
	import '../app.postcss';
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
	<slot />
</div>
