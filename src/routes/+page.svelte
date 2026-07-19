<script>
  import Timeline from "$lib/components/Timeline.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import TSection from "$lib/components/TSection.svelte";
  import Acc from "$lib/components/Accentize.svelte";
  import InfoCard from "$lib/components/InfoCard.svelte";
  import ConnectionCard from "$lib/components/ConnectionCard.svelte";
  import { projs } from "$lib/projects";
  import { config } from "$lib/config";
    import TAnchor from "$lib/components/TAnchor.svelte";
    import Icon from "$lib/components/Icon.svelte";

  let projCount = $state(projs.length);
</script>

<svelte:head>
  <title>Home — @tixonochek's</title>
</svelte:head>

<div class="flex justify-center items-center flex-col">
  <div
    class="min-[960px]:max-[1150px]:scale-85 text-center border-1 {config.winterTheme
      ? 'border-[#ffffff]/40 bg-[#131316]'
      : 'border-tBLUE/20 bg-gray-950'} p-3 lg:p-10 m-3 rounded-xl"
  >
    <h1 class="text-4xl lg:text-6xl text-tYELLOW font-bold">
      Hello, I'm <span class="text-tBLUE">tixonochek</span>.
    </h1>

    <div
      class="flex justify-center items-center text-xl mt-3 lg:m-3 space-y-2 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row text-stone-100"
    >
      <span>Passionate Programmer</span>
      <span class="hidden lg:flex">~</span>
      <span>Hardworking Student</span>
      <span class="hidden lg:flex">~</span>
      <span>Programming Languages Creator</span>
    </div>

    <div
      class="flex justify-evenly items-center flex-col lg:flex-row lg:p-4 space-y-8 lg:space-y-0 lg:space-x-16 m-4 lg:mb-0 lg:pb-0 mt-7 [&>div]:text-xl"
    >
      <div>
        <span class="text-tBLUE font-semibold text-4xl">25+</span> <br />
        languages explored
      </div>

      <div>
        <span class="text-tBLUE font-semibold text-4xl">8+</span> <br />
        years of programming
      </div>

      <div>
        <span
          class="text-tBLUE font-semibold text-4xl inline-flex items-center"
        >
          1
          <span
            class="inline-flex flex-col text-[0.5em] leading-none align-middle mx-1 text-center"
          >
            <span class="border-b-2 border-current pb-0.5">1</span>
            <span class="pt-0.5">2</span>
          </span>
          +
        </span>
        <br />
        years of commercial
        <span class="whitespace-nowrap">Web Dev experience</span>
      </div>

      <div>
        <span class="text-tBLUE font-semibold text-4xl">4</span> <br />
        programming <span class="whitespace-nowrap">languages created</span>
      </div>

      <div class="border-zinc-700 bg-zinc-950 p-3 border-1 rounded-xl">
        <span class="text-tYELLOW font-semibold text-4xl">{projCount}</span>
        <br />
        projects built
      </div>
    </div>
  </div>
</div>

<TSection title="TL;DR">
  My name is Tykhon. Driven by curiosity, I started coding at 8 years old. Rather than focusing on a single niche or building a large portfolio, I have spent my time exploring a wide range of languages and technologies, which sparked my passion for programming language creation. I have also created a thriving Ukrainian Discord community for developers. I am a native speaker of Ukrainian, Russian, and Polish, fluent in English, and a dedicated student who is currently researching possible career paths, while leaning towards embedded systems. I wholeheartedly support open-source software.
</TSection>

<div class="lg:grid lg:grid-cols-4 mt-2">
  <InfoCard emoji="🛠️" title="Tech Explorer">
    Instead of sticking to one niche, I experiment with diverse technologies and programming languages.
  </InfoCard>

  <InfoCard emoji="🚀" title="Language Creator">
    I have a passion for designing and building my own programming languages from the ground up.
  </InfoCard>

  <InfoCard emoji="🔌" title="Embedded Systems">
    I am currently researching low-level engineering and embedded programming.
  </InfoCard>

  <InfoCard emoji="🌍" title="Open Source">
    I am a supporter of free, <span class="whitespace-nowrap">open-source software.</span>
  </InfoCard>
</div>

<div class="text-center p-3 text-2xl font-semibold"> 
  🇺🇦 From Ukraine <span class="hidden lg:inline">•</span>
  <br class="lg:hidden" /> <em class="whitespace-nowrap">#STOP_WAR_IN_UKRAINE</em>
</div>
<br />

<TSection title="My programming journey" class="lg:p-10 lg:pt-5">
  <Timeline>
    <TimelineItem title="The Beginning">
      My story began at 8 years old. Since then, I've fallen in love with technology and everything related to it, including programming, which I'm fascinated by to this very day.
    </TimelineItem>

    <TimelineItem title="Language Exploration">
      Over the years, I have experimented with various programming languages, including
      <Acc><Icon name="python"/>Python</Acc>, <Acc><Icon name="js"/>JS</Acc>, <Acc><Icon name="ts"/>TS</Acc>,
      <Acc><Icon name="csharp"/>C#</Acc>, <Acc><Icon name="c"/></Acc>,
      <Acc><Icon name="cpp"/>C++</Acc>, <Acc><Icon name="rust"/>Rust</Acc>,
      <Acc><Icon name="haskell"/>Haskell</Acc>, <Acc><Icon name="fsharp"/>F#</Acc>,
      <Acc><Icon name="julia"/>Julia</Acc>, <Acc><Icon name="scala"/>Scala</Acc>,
      <Acc><Icon name="r"/>R</Acc>, <Acc><Icon name="lua"/>Lua</Acc>,
      <Acc><Icon name="apl"/>APL</Acc>, and many others. I'm by no means trying to say that I <em>"know"</em> all of them inside-out — just that I've explored them at some point.
    </TimelineItem>

    <TimelineItem title="Finding My Favorites">
      Some languages like <Acc><Icon name="java"/>Java</Acc> and <Acc> <Icon name="haskell"/>Haskell</Acc> were brief experiments. Others like <Acc><Icon name="csharp"/>C#</Acc> stayed with me much longer. <Acc><Icon name="python"/>Python</Acc> and <Acc><Icon name="ts"/>TS</Acc> became my go-to choices for extended periods.
    </TimelineItem>

    <TimelineItem isLast title="The Present">
      At the moment, I am shifting my focus from high-level exploration to lower level engineering. Embedded programming is what I am currently leaning towards and interested in the most, but it's worth keeping in mind that my preferences could still change. <Acc><Icon name="rust"/>Rust</Acc>, <Acc><Icon name="c"/></Acc> & <Acc><Icon name="cpp"/>C++</Acc> are all languages that I will need to perfect if I wanna actually succeed as an embedded systems engineer. Will I commit to that? We'll see rather soon.
    </TimelineItem>
  </Timeline>
</TSection>

<TSection title="What I build">
  As I've stated before, rather than focusing on a single niche, I have spent my time exploring a wide range of languages and technologies. That exploration sparked my passion for creating programming languages. Over the course of the last 2 years, I have built four of them — some esoteric, others more traditional. I have successfully built and organized a thriving Ukrainian Discord community for developers and programmers, which continues to be a priceless community management and leadership experience for me to this day. In light of my latest interests and lean towards embedded systems and hardware, I've recently hand-soldered and assembled a custom mechanical keyboard for myself, which makes programming more comfortable than ever before. I plan on expanding my portfolio with impressive, valuable projects as soon as possible — after all, I seem to have finally found the right direction for me.
  <TAnchor href="/projects/">Check my projects out for yourself!</TAnchor>
</TSection>

<TSection title="Get in touch" id="contact" outer_class="scroll-mt-60">
  Want to get in touch with me? No problem — I would be happy to collaborate
  with you or answer some questions.

  <div class="m-3 flex justify-center flex-col lg:flex-row">
    <ConnectionCard
      href="https://www.onlito.link/0ycmTk"
      emoji="💬"
      title="Discord Community"
      description="Most reliable way, I chat there daily"
    />
    <ConnectionCard
      href="https://t.me/tixonochek"
      emoji="📱"
      title="Telegram"
      description="Quick messages and responses"
    />
    <ConnectionCard
      href="mailto:awonderfulwise@gmail.com"
      emoji="✉️"
      title="Email"
      description="For formal inquiries and projects"
    />
  </div>

  <div class="mt-5 lg:mx-20 mx-5">
    <iframe
      src="https://discord.com/widget?id=1051655906322030592&theme=dark"
      class="w-full"
      height="400"
      allowtransparency="true"
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      title="Discord–віджет"
    ></iframe>
  </div>
</TSection>