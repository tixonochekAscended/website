<script>
    import img_placeholder from "$lib/assets/favicon.jpg"

    let props = $props();
    let name = props.name ?? "Placeholder N."
    let img = props.img ?? img_placeholder
    let description = props.description ?? "Placeholder D."
    let href = props.href ?? "/"
</script>

<a href={href} class="{props.class} relative overflow-hidden border-1 rounded-xl p-3 border-tBLUE/20 bg-tBLUE/5 shadow-lg shadow-tBLUE/5 hover:shadow-tBLUE/10 transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-tBLUE/10 hover:border-tBLUE/40">
    <img 
        class="absolute w-[40%] top-0 right-0 h-full object-cover" 
        src={img} 
        alt=""
        style="mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%);"
    >
    
    <div class="relative z-10">
        <div class="text-tYELLOW text-2xl font-bold">
            {name}
        </div>
        
        <div class="text-lg">
            {description}
        </div>
    </div>
</a>