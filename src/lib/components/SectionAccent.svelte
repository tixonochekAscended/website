<script>
    import { config } from "$lib/config";
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div style="
width: 60px;
height: 4px;
background: {config.winterTheme ? "linear-gradient(90deg, #ed7b7b,#ed7b7b4d)" : "linear-gradient(90deg, #add8e6,#add8e64d)"};
margin-top: 2px;
border-radius: 2px;
" />