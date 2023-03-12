<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div>
	<h1 class="text-3xl">Campaigns</h1>
	{#if data.campaigns}
		<ul class="list list-disc">
			{#each data.campaigns as campaign}
				<li class="list-item">
					<a class="link" href={`/campaign/${campaign.id}`}>{campaign.title}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
