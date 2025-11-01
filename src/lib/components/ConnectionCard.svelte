<script>
    let {
        emoji = "P",
        title = "Placeholder T.",
        description = "Placeholder D.",
        href = "/"
    } = $props();
</script>

<a href={href} class="flex justify-center items-center p-3 m-3 border-1 rounded-xl border-tBLUE/20 bg-tBLUE/5 transition ease-in-out duration-300 group hover:border-tBLUE/40 hover:bg-tBLUE/10 hover:-translate-y-1 shadow-lg shadow-tBLUE/5 hover:shadow-tBLUE/10">
    <div class="p-2 lg:p-0 lg:space-x-8 flex justify-around items-center">
        <div>
            {emoji}
        </div>
    
        <div class="p-2 lg:p-0">
            <div class="text-tYELLOW font-bold">
                {title}
            </div>
        
            <div class="text-lg">
                {description}
            </div>
        </div>
    
        <div class="p-2 lg:p-0 text-tBLUE font-bold text-2xl inline-block transition ease-in-out duration-300 lg:mr-2 group-hover:translate-x-[2.5px]">
            ➞
        </div>
    </div>
</a>