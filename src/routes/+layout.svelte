<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import SidebarPage from '$lib/components/SidebarPage.svelte';
	import '../app.postcss';
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="navbar-start">
			<div class="">
				<a class="btn btn-ghost normal-case text-xl" href="/">Campaign-Planner</a>
			</div>
			<div class="dropdown ">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost">
					<span>Tools</span>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="menu menu-compact dropdown-content">
					<li>
						<a href="/campaign" class="btn btn-ghost normal-case text-xl">Campaigns</a>
						<a href="/encounter" class="btn btn-ghost normal-case text-xl">Encounter</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-end">
			<a href="/login" class="btn btn-ghost normal-case text-xl">Login</a>
		</div>
	</nav>
	<div class="container mx-auto">
		<slot />
	</div>
</div>
