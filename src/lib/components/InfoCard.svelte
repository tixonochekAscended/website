<script>
    import { config } from "$lib/config";

    let {
        children,
        title = "Placeholder",
        emoji = "P"
    } = $props();
</script>

<div class="transition ease-in-out duration-300 hover:-translate-y-1 shadow-xl text-center border-1 border-tBLUE/20 bg-tBLUE-muted p-2 m-3 rounded-2xl flex flex-col justify-center items-center">
    <div class="text-4xl p-3">{emoji}</div>
    <div class="text-tYELLOW font-semibold text-xl">{title}</div>
    
    <p class="p-2">
        {@render children?.()}
    </p>
</div>