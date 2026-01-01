<script>
	let { children } = $props();
	
	import icon from "$lib/assets/favicon.jpg";
	import icon_xmas from "$lib/assets/favicon_xmas.jpg"
    import Background from "$lib/components/Background.svelte";
    import CursorEff from "$lib/components/CursorEff.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import Snow from "$lib/components/Snow.svelte";
	import { config } from "$lib/config";
</script>

<svelte:head>
	{#if config.winterTheme}
	<link rel="icon" href={icon_xmas}>
	{:else}
	<link rel="icon" href={icon}>
	{/if}

	{#if config.winterTheme}
	<style type="text/tailwindcss">
		@theme {
			--color-tYELLOW: #b1edb4;
			--color-tBLUE: #ed7b7b;
		}
	</style>
	{:else}
	<style type="text/tailwindcss">
		@theme {
			--color-tYELLOW: #f5deb3;
			--color-tBLUE: #add8e6;
		}
	</style>
	{/if}
</svelte:head>

<Background />
{#if config.winterTheme}
	<Snow />
{/if}

<div class="hidden lg:flex">
	<CursorEff spacing="0.4" />
</div>

<div class="text-2xl">
	<NavBar />
</div>

<main class="p-3 lg:p-5 mt-35 text-stone-300">
	{@render children?.()}
</main>