<script>
    let {
        children,
        title = "Placeholder",
        emoji = "P"
    } = $props();
</script>

<div class="transition ease-in-out duration-300 hover:-translate-y-1 shadow-xl text-center border-1 border-gray-800 bg-gray-950 p-2 m-3 rounded-2xl">
    <div class="text-4xl p-3">{emoji}</div>
    <div class="text-tYELLOW font-semibold text-xl mb-3">{title}</div>
    
    <p>
        {@render children?.()}
    </p>
</div>