<script>
  import { icons } from "$lib/icons";

  let { name, width = "4", color = "tBLUE" } = $props();
</script>

<div class="inline-flex w-{width} mx-1 [&>*]:fill-{color}">
  {@html icons[name]}
</div>
