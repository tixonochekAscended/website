<script>
	let { children } = $props();
	
	import icon from "$lib/assets/favicon.jpg";
    import Background from "$lib/components/Background.svelte";
    import CursorEff from "$lib/components/CursorEff.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<svelte:head>
	<link rel="icon" href={icon}>
</svelte:head>

<Background />

<div class="hidden lg:flex">
	<CursorEff spacing="0.4" />
</div>

<div class="text-2xl">
	<NavBar />
</div>

<main class="p-3 lg:p-5 mt-35 text-stone-300">
	{@render children?.()}
</main>