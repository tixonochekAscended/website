<script>
    import { onMount } from "svelte";

    let {
        trailLength = 10,
        size = 12,
        spacing = 0.15
    } = $props();

    let cursor = { x: 0, y: 0 };
    let trail = $state(
        Array(trailLength).fill({ x: 0, y: 0 })
    );

    function handleMouseMove(event) {
        cursor = { x: event.clientX, y: event.clientY };
    }

    onMount(() => {
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            let prev = cursor;
            trail = trail.map((point, i) => {
                const x = point.x + (prev.x - point.x) * spacing;
                const y = point.y + (prev.y - point.y) * spacing;
                prev = { x, y };
                return { x, y };
            });

            requestAnimationFrame(animate);
        };
        animate();

        return () => window.removeEventListener("mousemove", handleMouseMove);
    });
</script>

{#each trail as point, i}
    <div
        class="fixed pointer-events-none rounded-full z-[9999] opacity-20"
        style="
    width: {size}px;
    height: {size}px;
    transform: translate3d({point.x - size / 2}px, {point.y - size / 2}px, 0);
    background: rgba(41, 37, 36, {(i + 1) / trailLength});
  "
    ></div>
{/each}
