<script>
  let { children, data } = $props();

  import { fly, fade } from "svelte/transition";
  import icon from "$lib/assets/favicon.jpg";
  import icon_xmas from "$lib/assets/favicon_xmas.jpg";
  import Background from "$lib/components/Background.svelte";
  import CursorEff from "$lib/components/CursorEff.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import Snow from "$lib/components/Snow.svelte";
  import { config } from "$lib/config";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  {#if config.winterTheme}
    <link rel="icon" href={icon_xmas} />
  {:else}
    <link rel="icon" href={icon} />
  {/if}
  
  <!--
  <style type="text/tailwindcss">
    @theme {

    }
  </style>
  -->

  {#if config.winterTheme}
    <style type="text/tailwindcss">
      @theme {
        --color-tYELLOW: #b1edb4;
        --color-tYELLOW-light: #ecfccb;
        --color-tBLUE: #ed7b7b;
        --color-tBLUE-muted: #100a0e;
        --color-tBLUE-mutish: #1c1114;
        --color-tBLUE-light: #cfeff9;
      }
    </style>
  {:else}
    <style type="text/tailwindcss">
      @theme {
        --color-tYELLOW: #f5deb3;
        --color-tYELLOW-light: #fef3c7;
        --color-tBLUE: #add8e6;
        --color-tBLUE-muted: #0d0f14;
        --color-tBLUE-mutish: #161a1e;
        --color-tBLUE-light: #cfeff9;
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

<div class="flex flex-col min-h-dvh">
  <div class="text-2xl">
    <NavBar />
  </div>

  <main class="flex-grow">
    {#key data.pathname}
      <div
        class="p-3 lg:p-7 mt-35 text-stone-300 max-w-[1300px] mx-auto"
        in:fly={{ y: 20, duration: 300, delay: 150 }}
        out:fade={{ duration: 150 }}
      >
        {@render children?.()}
      </div>
    {/key}
  </main>

  <Footer />
</div>