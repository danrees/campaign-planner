<script lang="ts">
	export let title: string;
</script>

<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
	<div class="collapse-title text-md font-medium">
		{title}
	</div>
	<div class="collapse-content">
		<slot />
	</div>
</div>
