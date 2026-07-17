<script>
    import { config } from "$lib/config";
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div style="
width: 80px;
height: 4px;
background: {config.winterTheme ? "linear-gradient(90deg, #ed7b7b,transparent)" : "linear-gradient(90deg, #add8e6,transparent)"};
margin-top: 5px;
border-radius: 2px;
" />