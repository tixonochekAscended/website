<script>
    import { config } from "$lib/config";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import icon from "$lib/assets/favicon.jpg";
    import icon_xmas from "$lib/assets/favicon_xmas.jpg"

    let isOpen = $state(false);
    let isBlurred = $state(false);
    let onHoverClass = config.winterTheme ? "text-lime-200" : "text-amber-100";

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
        window.addEventListener("scroll", blurOnScroll);

        return () => {
            window.removeEventListener("scroll", blurOnScroll);
        }
    })
</script>

<nav class="z-1000 h-30 [&_a]:underline [&_a]:hover:{onHoverClass} [&_a]:active:{onHoverClass} [&_a]:transition [&_a]:duration-200 fixed top-0 left-0 w-full m-2 lg:m-4 text-tYELLOW">
    <div class="flex justify-between lg:justify-center items-center space-x-12 h-full w-full">
        <a class="h-full lg:absolute lg:left-0 p-5 lg:p-3" href="/">
            {#if config.winterTheme}
                <img src={icon_xmas} alt="(Logo)" class="h-full rounded-3xl"> 
            {:else}
                <img src={icon} alt="(Logo)" class="h-full rounded-3xl"> 
            {/if}
        </a>
        
        <a class="hidden lg:flex" href="/">
            Home
        </a>

        <a class="hidden lg:flex" href="/projects/">
            Projects
        </a>

        <button onclick={flipOpen} class="transition duration-300 ease-in-out rotate-{isOpen ? '360' : '0'} origin-center cursor-pointer lg:absolute lg:right-0 p-7 text-7xl flex lg:hidden">
            ☰
        </button>
    </div>

    {#if config.winterTheme}
    <div class="fixed bottom-0 left-0 flex flex-col w-full items-center space-y-8 pb-5 pt-5 border-t-1 border-zinc-800 bg-zinc-950 justify-center lg:hidden translate-y-{isOpen ? "0" : "full"} transition duration-300 ease-in-out">
        <a href="/">
            Home
        </a>

        <a href="/projects/">
            Projects
        </a>
    </div>
    {:else}
    <div class="fixed bottom-0 left-0 flex flex-col w-full items-center space-y-8 pb-5 pt-5 border-t-1 border-gray-800 bg-gray-950 justify-center lg:hidden translate-y-{isOpen ? "0" : "full"} transition duration-300 ease-in-out">
        <a href="/">
            Home
        </a>

        <a href="/projects/">
            Projects
        </a>
    </div>
    {/if}

    <!-- svelte-ignore element_invalid_self_closing_tag -->
    {#if config.winterTheme}
    <div class="border-zinc-800 w-full fixed top-0 left-0 h-35 lg:h-39 -z-5 backdrop-blur-{isBlurred ? "xs bg-zinc-950/60 border-b-1" : "0"} transition duration-400" />
    {:else}
    <div class="border-tBLUE/10 w-full fixed top-0 left-0 h-35 lg:h-39 -z-5 backdrop-blur-{isBlurred ? "xs bg-gray-950/60 border-b-1" : "0"} transition duration-400" />
    {/if}
</nav>