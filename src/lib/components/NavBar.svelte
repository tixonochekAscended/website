<script>
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import icon from "$lib/assets/favicon.jpg";

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
        window.addEventListener("scroll", blurOnScroll);

        return () => {
            window.removeEventListener("scroll", blurOnScroll);
        }
    })
</script>

<nav class="z-1000 h-30 [&_a]:underline [&_a]:hover:text-amber-100 [&_a]:active:text-amber-100 [&_a]:transition [&_a]:duration-200 fixed top-0 left-0 w-full m-2 lg:m-4 text-tYELLOW">
    <div class="flex justify-between lg:justify-center items-center space-x-12 h-full w-full">
        <a class="h-full lg:absolute lg:left-0 p-5 lg:p-3" href="/">
            <img src={icon} alt="(Logo)" class="h-full rounded-3xl"> 
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

    <div class="fixed bottom-0 left-0 flex flex-col w-full items-center space-y-8 pb-5 pt-5 border-t-1 border-gray-800 bg-gray-950 justify-center lg:hidden translate-y-{isOpen ? "0" : "full"} transition duration-300 ease-in-out">
        <a href="/">
            Home
        </a>

        <a href="/projects/">
            Projects
        </a>
    </div>

    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div class="border-tBLUE/10 w-full fixed top-0 left-0 h-35 lg:h-39 -z-5 backdrop-blur-{isBlurred ? "xs bg-gray-950/60 border-b-1" : "0"} transition duration-400" />
</nav>