<script>
  import { config } from "$lib/config";
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import icon from "$lib/assets/favicon.jpg";
  import icon_xmas from "$lib/assets/favicon_xmas.jpg";
  import Icon from "./Icon.svelte";

  let isOpen = $state(false);
  let isBlurred = $state(false);

  function flipOpen() {
    isOpen = !isOpen;
  }

  function blurOnScroll() {
    if (window.scrollY > 0) {
      isBlurred = true;
      return;
    }

    isBlurred = false;
  }

  afterNavigate(() => {
    isOpen = false;
  });

  onMount(() => {
    blurOnScroll();
    window.addEventListener("scroll", blurOnScroll);

    return () => {
      window.removeEventListener("scroll", blurOnScroll);
    };
  });
</script>

<nav
  class="z-1000 h-30 [&_a]:underline [&_a]:hover:text-tYELLOW-light [&_a]:active:text-tYELLOW-light [&_a]:transition [&_a]:duration-150 fixed top-0 left-0 w-full m-2 lg:m-4 text-tYELLOW"
>
  <div
    class="flex justify-between lg:justify-center items-center space-x-12 h-full w-full"
  >
    <a class="h-full lg:absolute lg:left-0 p-5 lg:p-3" href="/">
      <img
        src={config.winterTheme ? icon_xmas : icon}
        alt="(Logo)"
        class="h-full rounded-3xl"
      />
    </a>

    {#each config.navItems as navItem}
      <a class="hidden lg:flex" href={navItem.href}>{navItem.name}</a>
    {/each}

    <button
      onclick={flipOpen}
      class="transition duration-300 ease-in-out rotate-{isOpen
        ? '360'
        : '0'} origin-center cursor-pointer lg:absolute lg:right-0 p-7 text-7xl flex lg:hidden"
    >
      ☰
    </button>
  </div>

  <div
    class="fixed bottom-0 left-0 flex flex-col w-full items-center space-y-8 pb-5 pt-5 border-t-1 {config.winterTheme
      ? 'border-zinc-800'
      : 'border-gray-800'} {config.winterTheme
      ? 'bg-zinc-950'
      : 'bg-gray-950'} justify-center lg:hidden translate-y-{isOpen
      ? '0'
      : 'full'} transition duration-300 ease-in-out"
  >
    {#each config.navItems as navItem}
      <a onclick={() => {
        isOpen = false
      }} href={navItem.href}>{navItem.name}</a>
    {/each}
  </div>

  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div
    class="{config.winterTheme
      ? 'border-zinc-800'
      : 'border-tBLUE/20'} w-full fixed top-0 left-0 h-35 lg:h-39 -z-5 backdrop-blur-{isBlurred
      ? `xs ${config.winterTheme ? 'bg-zinc-950/60' : 'bg-gray-950/60'} border-b-1`
      : '0'} transition duration-400"
  />
</nav>
