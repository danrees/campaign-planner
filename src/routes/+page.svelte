<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>Temp</h1>
<ul>
	{#if data.campaigns}
		{#each data.campaigns as campaign}
			<li><a href={`/campaign/${campaign.id}`}>{campaign.title}</a></li>
		{/each}
	{/if}
</ul>
