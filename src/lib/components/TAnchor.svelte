<script>
  let props = $props();
</script>

<a class="underline text-tBLUE hover:text-tBLUE-light duration-150 transition-all {props.class}" href={props.href}>
  {@render props.children?.()}
</a>