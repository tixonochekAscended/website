<script>
    let { title, isLast = false, children } = $props();
</script>

<div class="relative pl-12 pb-12 last:pb-0">
    <div
        class="absolute left-0 top-1 w-4 h-4 rounded-full ring-2 ring-{isLast ? "tYELLOW" : "tBLUE"}/20 {isLast
            ? 'bg-tYELLOW'
            : 'bg-tBLUE'}"
    ></div>

    <div>
        <h2 class="text-xl font-bold mb-4 text-tYELLOW">{title}</h2>
        <div class="text-gray-300 leading-relaxed">
            {@render children?.()}
        </div>
    </div>
</div>
