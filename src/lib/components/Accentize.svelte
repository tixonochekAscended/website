<script>
    let {
        children
    } = $props();
</script>

<span class="whitespace-nowrap text-tBLUE font-semibold bg-tBLUE/10 p-[1px] rounded border-1 border-tBLUE/40">
    {@render children?.()}
</span>