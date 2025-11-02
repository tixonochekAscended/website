<script>
    import { projs } from "$lib/projects";
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    let search = $state("");
    let projects = $derived(
        projs.filter(v => v.name.toLowerCase().includes(search.toLowerCase()))
    );
</script>

<svelte:head>
    <title>Projects – @tixonochek's</title>
</svelte:head>

<div class="flex justify-center items-center flex-col space-y-4">
    <input bind:value={search} class="font-semibold focus:outline-none lg:w-1/2 w-full text-xl border-1 border-tBLUE/20 bg-tBLUE/5 rounded-xl p-3 text-tYELLOW transition ease-in-out duration-300 hover:border-tBLUE/40 hover:bg-tBLUE/10" type="text" placeholder="🔎 Search projects...">
    <p class="italic">Showing {projects.length} projects</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {#each projects as proj (proj.name)}
        <ProjectCard 
            href={proj.url} 
            name={proj.name} 
            description={proj.description} 
            img={proj.img}
            class={projects.indexOf(proj) === projects.length - 1 && projects.length % 2 !== 0 ? "lg:col-span-2 lg:justify-self-center lg:max-w-[50%]" : ""}
        />
    {/each}
    </div>
</div>