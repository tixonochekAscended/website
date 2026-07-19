<script>
  let { children, data } = $props();

  import { fly, fade } from "svelte/transition";
  import icon from "$lib/assets/favicon.jpg";
  import icon_xmas from "$lib/assets/favicon_xmas.jpg";
  import banner from "$lib/assets/tixonochek_banner.png";
  import Background from "$lib/components/Background.svelte";
  import CursorEff from "$lib/components/CursorEff.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import Snow from "$lib/components/Snow.svelte";
  import { config } from "$lib/config";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <!-- SEO vvv -->

  <!-- Primary HTML Meta Tags -->
  <meta name="description" content="Portfolio of tixonochek, a passionate developer and hardworking student who builds open-source software and creates custom programming languages." />
  <link rel="canonical" href="https://tixonochek.dev/" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph / Facebook / Discord / Telegram Previews -->
  <meta property="og:site_name" content="tixonochek" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tixonochek.dev/" />
  <meta property="og:title" content="tixonochek — Passionate Developer & Hardworking Student" />
  <meta property="og:description" content="Explore my portfolio, get to know my story and get in touch with me." />
  <meta property="og:image" content="https://tixonochek.dev{banner}"/>

  <!-- X (Twitter) Card Previews -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:url" content="https://tixonochek.dev/" />
  <meta name="twitter:title" content="tixonochek — Passionate Developer & Hardworking Student" />
  <meta name="twitter:description" content="Explore my portfolio, get to know my story and get in touch with me." />
  <meta name="twitter:image" content="https://tixonochek.dev{banner}" />

  <!-- SEO ^^^ -->

  <link rel="icon" href={config.winterTheme ? icon_xmas : icon} />

  {#if config.winterTheme}
    <style type="text/tailwindcss">
      @theme {
        --color-tYELLOW: #b1edb4;
        --color-tYELLOW-light: #ecfccb;
        --color-tBLUE: #ed7b7b;
        --color-tBLUE-muted: #100a0e;
        --color-tBLUE-mutish: #1c1114;
        --color-tBLUE-light: #f99d9d;
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

<div class="flex flex-col min-h-screen">
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