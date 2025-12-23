<script>
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";
    import TSection from "$lib/components/TSection.svelte";
    import Accentize from "$lib/components/Accentize.svelte";
    import InfoCard from "$lib/components/InfoCard.svelte";
    import ConnectionCard from "$lib/components/ConnectionCard.svelte";
    import { projs } from "$lib/projects";
    import { config } from "$lib/config";

    let projCount = $state(projs.length);
</script>

<svelte:head>
    <title>Home – @tixonochek's</title>
</svelte:head>

<div class="flex justify-center items-center flex-col">
    <div class="text-center border-1 {config.winterTheme ? "border-[#ffffff]/40 bg-[#ffffff]/5" : "border-gray-800 bg-gray-950"} p-3 lg:p-10 m-3 rounded-xl">
        <h1 class="text-4xl lg:text-6xl text-tYELLOW font-bold">
            Hello, I'm <span class="text-tBLUE">tixonochek</span>.
        </h1>

        <div class="flex justify-center items-center text-xl mt-3 lg:m-3 space-y-2 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row text-stone-100">
            <span>Web Developer</span>
            <span class="hidden lg:flex">~</span>
            <span>Languages Creator</span>
            <span class="hidden lg:flex">~</span>
            <span>Open Source Advocate</span>
            <span class="hidden lg:flex">~</span>
            <span>Passionate Programmer</span>
        </div>

        <div class="flex justify-evenly items-center flex-col lg:flex-row lg:p-4 space-y-8 lg:space-y-0 lg:space-x-16 m-4 lg:mb-0 lg:pb-0 mt-7 [&>div]:text-xl">
            <div>
                <span class="text-tBLUE font-semibold text-4xl">25+</span> <br />
                languages explored
            </div>

            <div>
                <span class="text-tBLUE font-semibold text-4xl">7+</span> <br />
                years of experience
            </div>

            <div>
                <span class="text-tBLUE font-semibold text-4xl">4</span> <br />
                programming languages created
            </div>

            <div class="border-zinc-700 bg-zinc-950 p-3 border-1 rounded-xl">
                <span class="text-tYELLOW font-semibold text-4xl">{projCount}</span> <br />
                projects built
            </div>
        </div>
    </div>
</div>

<div class="p-3 m-3">
    <TSection title="Welcome to my corner of the internet">
        This is my personal website, where you can find lots of information regarding me and my projects. Feel free to explore my portfolio, read about my experience, or get in touch if you'd like to contact me. 
    </TSection> <br /> <br />

    <TSection title="TL;DR">
        I'm a passionate programmer – coded since I was eight. I have used many programming languages over the years. There is no definitive language that I love the most, but my most favourite ones are <Accentize>JS</Accentize>, <Accentize>Lua</Accentize> and <Accentize>C</Accentize>. Everything about technology interests and excites me.
    </TSection>

    <div class="flex justify-center items-center mt-5 flex-col lg:flex-row">
        <InfoCard emoji="💻" title="Web Development">
            I enjoy building interactive, responsive web apps and crafting clean, efficient code
        </InfoCard>

        <InfoCard emoji="🌍" title="Open Source Advocate">
            I always strive to contribute to free, open source software
        </InfoCard>

        <InfoCard emoji="🚀" title="Languages Enthusiast">
            I have created multiple languages in the past myself
        </InfoCard>
    </div>

    <div class="text-center p-3 text-2xl font-semibold">
        🇺🇦 From Ukraine <span class="hidden lg:inline">•</span> <br class="lg:hiddenm" /> <em>#STOP–WAR–IN–UKRAINE</em>
    </div> <br />

    <TSection title="My programming journey" class="lg:p-10 lg:pt-0">
        <Timeline>
            <TimelineItem title="The Beginning">
                I was experimenting with technology since I was eight years old. Since then, I fell in love with everything related to it, including programming, which is my favourite thing to do.
            </TimelineItem>

            <TimelineItem title="Language Exploration">
                Over the years I have coded in many programming languages including <Accentize>Python</Accentize>, <Accentize>JS</Accentize>, <Accentize>C#</Accentize>, <Accentize>C</Accentize> & <Accentize>C++</Accentize>, <Accentize>Rust</Accentize>, <Accentize>Java</Accentize>, <Accentize>Haskell</Accentize>, <Accentize>Lua</Accentize> and more.
            </TimelineItem>

            <TimelineItem title="Finding My Favorites">
                Certain languages like <Accentize>Java</Accentize> were brief experiments. Others like <Accentize>Haskell</Accentize> and <Accentize>Rust</Accentize> were longer journeys. <Accentize>C#</Accentize> and <Accentize>JS</Accentize> became my go-to choices for extended periods.
            </TimelineItem>

            <TimelineItem isLast title="The Present">
                It's hard for me to pick a language that I use much more than the others - I always try to pick the best technology for the specific task. On top of that, I just experiment a lot. If I had to specify some of the languages I use the most, those will be <Accentize>JS</Accentize> and <Accentize>Lua</Accentize> with <Accentize>C</Accentize> being a language I want to learn and use more. 
            </TimelineItem>
        </Timeline>
    </TSection>

    <TSection title="What I create">
        I build different kinds of projects, however in this section I'd like to underline my love for programming languages. I have created several of them in the past, such as
        <Accentize>T^ (TGlyph)</Accentize>, <Accentize>T* (TOSTER)</Accentize>, <Accentize>mini-rip</Accentize> & <Accentize>oko-lang</Accentize>. The whole process of creating a language (often an esoteric one) just makes me go wild. 

        <div class="text-center flex justify-center items-center m-3 mb-10 text-2xl">
            <a href="/projects/" class="group p-3 rounded-xl border-1 border-tBLUE/20 text-tBLUE bg-tBLUE/5 hover:border-tBLUE/40 hover:bg-tBLUE/10 font-bold shadow-lg shadow-tBLUE/5 hover:shadow-tBLUE/15 transition ease-in-out duration-300 hover:-translate-y-1">
                View All Projects <span class="-ml-1 inline-block transition ease-in-out duration-300 group-hover:translate-x-[2.5px]">➞</span>
            </a>
        </div>

        <p class="italic">
            I believe that all software should be free to use and that open-source should be the global standard. I always attempt to create and contribute to innovative and promising projects.
        </p>
    </TSection>

    <TSection title="Get in touch">
        Want to get in touch with me? No problem — I would be happy to collaborate with you or answer some questions.

        <div class="m-3 flex justify-center items-center flex-col lg:flex-row">
            <ConnectionCard href="https://discord.gg/NSK7YJ2R6j" emoji="💬" title="Discord Community" description="Most reliable way, I chat there daily"/>
            <ConnectionCard href="https://t.me/tixonochek" emoji="📱" title="Telegram" description="Quick messages and responses"/>
            <ConnectionCard href="mailto:awonderfulwise@gmail.com" emoji="✉️" title="Email" description="For formal inquiries and projects"/>
        </div>
    </TSection>
</div>