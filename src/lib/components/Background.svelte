<script>
    import { config } from "$lib/config";
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
{#if config.winterTheme}
<div class="-z-1000 fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#050505]/95 via-[#050509] to-[#040407]"/>
{:else}
<div class="-z-1000 fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e0e18] via-[#050509] to-[#040407]"/>
{/if}