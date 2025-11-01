<script>
    import SectionAccent from "./SectionAccent.svelte";

    let props = $props();
</script>

<section class="mt-5 lg:mt-10 {props.oclass ?? ""}">
    <h2 class="text-tYELLOW text-3xl lg:text-4xl font-semibold">{props.title}</h2>
    <SectionAccent />

    <div class="mt-5 text-xl leading-relaxed {props.class}">
        {@render props.children?.()}
    </div>
</section>