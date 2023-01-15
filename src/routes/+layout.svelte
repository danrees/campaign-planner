<script>
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
	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
