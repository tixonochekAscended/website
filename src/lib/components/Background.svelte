<script>
    import { config } from "$lib/config";
</script>

<svelte:head>
  <style>
    html {
      background-color: #1e1a30;
    }
  </style>
</svelte:head>

<!--
<svelte:head>
  {#if config.winterTheme}
    <style>
      html {
        min-height: 100%;
        background-color: #040407;
        background: linear-gradient(150deg, rgb(5 5 5 / 0.90) 0%, #050509 50%, #040407 100%);
        background-attachment: fixed;
      }
    </style>
  {:else}
    <style>
      html {
        min-height: 100%;
        background-color: #040407;
        background: linear-gradient(150deg, rgb(14 14 24 / 0.925) 0%, #050509 50%, #040407 100%);
        background-attachment: fixed;
      }
    </style>
  {/if}
</svelte:head>
-->

<!--
 svelte-ignore element_invalid_self_closing_tag
<div class="-z-1000 fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-br {config.winterTheme ? "from-[#050505]/93 via-[#050509] to-[#040407]" : "from-[#0e0e18]/93 via-[#050509] to-[#040407]"}"/>-->