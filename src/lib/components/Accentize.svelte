<script>
    let {
        children
    } = $props();
</script>

<span class="text-tBLUE font-semibold bg-tBLUE/10 p-1 rounded border-1 border-tBLUE/40">
    {@render children?.()}
</span>