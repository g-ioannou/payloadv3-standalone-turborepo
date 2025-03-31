<script lang="ts">
	export let data;
</script>

<h1>Web</h1>
<pre>{JSON.stringify(data, null, 4)}</pre>
{#if data.media?.docs}
	{#each data.media.docs as media (media.id)}
		<img src="{media.url}" alt={media.alt} />
	{/each}
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
