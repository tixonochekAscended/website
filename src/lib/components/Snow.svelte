<script>
    import { onMount } from "svelte";

    let canvas;
    let ctx;
    let flakes = [];
    let w, h;

    const flakeCount = 200;
    const minSpeed = 0.5;
    const maxSpeed = 1.5;

    function initFlakes() {
        flakes = Array.from({ length: flakeCount }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 0.5, // Smaller flakes
            speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
            sway: Math.random() * 1, // Individual sway frequency
            offset: Math.random() * Math.PI * 2, // Random starting phase
            opacity: Math.random() * 0.4 + 0.1, // Much lighter/softer
        }));
    }

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);

        for (let f of flakes) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
            // Create a soft glow effect for each flake
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            ctx.fill();
        }
        update();
    }

    function update() {
        for (let f of flakes) {
            // Vertical movement
            f.y += f.speed;
            // Horizontal sway - very gentle sine wave
            f.x += Math.sin(f.offset) * 0.3;
            f.offset += 0.01;

            // Reset flake when it hits bottom or leaves sides
            if (f.y > h + 10) {
                f.y = -10;
                f.x = Math.random() * w;
            }
            if (f.x > w + 10) f.x = -5;
            if (f.x < -10) f.x = w + 5;
        }
    }

    onMount(() => {
        ctx = canvas.getContext("2d");
        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            initFlakes();
        };

        window.addEventListener("resize", resize);
        resize();

        let frame;
        const loop = () => {
            draw();
            frame = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    });
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<canvas bind:this={canvas} class="fixed inset-0 pointer-events-none z-[9998]" />
