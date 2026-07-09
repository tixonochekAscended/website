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

    {#if projects.length % 2 == 0}
        <div class="columns-1 lg:columns-2 space-y-4">
            {#each projects as proj (proj.name)}
                <ProjectCard 
                    href={proj.url} 
                    name={proj.name} 
                    description={proj.description} 
                    img={proj.img}
                />
            {/each}
        </div>
    {:else}
        <div class="columns-1 lg:columns-2 space-y-4">
            {#each projects.slice(0, -1) as proj (proj.name)}
                <ProjectCard 
                    href={proj.url} 
                    name={proj.name} 
                    description={proj.description} 
                    img={proj.img}
                />
            {/each}
        </div>

        <div class="flex justify-center items-center">
            <ProjectCard 
                href={projects.at(-1).url} 
                name={projects.at(-1).name} 
                description={projects.at(-1).description} 
                img={projects.at(-1).img}
            />
        </div>
    {/if}
</div>