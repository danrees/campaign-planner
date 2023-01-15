<script lang="ts">
	import FormControl from '$lib/components/FormControl.svelte';
</script>

<form method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
	<FormControl name="username" title="Username/Password" />
	<FormControl name="password" title="Password" inputType="password" />
</form>
