<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	export let markdown = '';
</script>

<article class="prose">
	<SvelteMarkdown source={markdown} />
</article>
