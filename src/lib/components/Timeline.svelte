<script>
    let { children } = $props();
</script>

<div class="relative -z-10">
    <div
        class="absolute left-[6px] top-3 bottom-0 w-[3px] bg-gradient-to-b from-gray-700 via-zinc-700 to-transparent"
    ></div>

    {@render children?.()}
</div>
