<script>
  import img_placeholder from "$lib/assets/favicon.jpg";
  import Icon from "./Icon.svelte";

  let {
    name = "Placeholder N.",
    img = img_placeholder,
    description = "Placeholder D.",
    href = "/",
    projIcons = [],
  } = $props();

  let icons = $derived(projIcons);

  let center_opacity = 0.15;
  let gradient_smoothness = 50;
  let img_size = 40;
</script>

<a
  {href}
  class="block relative overflow-hidden border-1 rounded-xl p-4 border-tBLUE/20 bg-tBLUE-muted shadow-lg shadow-tBLUE/5 hover:shadow-tBLUE/10 transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-tBLUE-mutish hover:border-tBLUE/40 h-min"
>
  <img
    class="absolute lg:w-[{img_size}%] w-[{img_size +
      25}%] inset-0 mx-auto h-full object-cover"
    src={img}
    alt=""
    style="mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,{center_opacity}) {gradient_smoothness}%, rgba(0,0,0,{center_opacity}) {100 -
      gradient_smoothness}%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,{center_opacity}) {gradient_smoothness}%, rgba(0,0,0,{center_opacity}) {100 -
      gradient_smoothness}%, transparent 100%);"
  />

  <div class="relative z-10 pb-10">
    <div class="text-tYELLOW text-2xl font-bold">
      {name}
    </div>

    <div class="text-lg">
      {description}
    </div>
  </div>

  <div class="absolute right-0 lg:top-0 bottom-0 p-4 z-5 text-tBLUE">
    {#each icons as icon}
      <Icon name={icon} width="6" color="tBLUE" />
    {/each}
  </div>
</a>
