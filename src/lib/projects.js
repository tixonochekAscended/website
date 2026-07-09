const img = Object.entries(import.meta.glob([
    '$lib/assets/*.{png,PNG,jpg,JPG}'
], { eager: true })).reduce((acc, [path, module]) => {
    const fullFilename = path.split('/').pop(); 
    acc[fullFilename] = module.default; 
    return acc;
}, {});

export const projs = [
    {
        "name": "Reviung41",
        "description": "🧰 A custom 40% mechanical keyboard that I've soldered and assembled myself. A hand-crafted tool that makes programming as comfortable as never before.",
        "url": "https://github.com/tixonochekAscended/my-reviung41-config",
        "img": img['reviung.jpg']
    },

    {
        "name": "My Discord Community",
        "description": "💻 Widely considered the best Ukrainian Discord community for programmers and tech enthusiasts — built by me from the ground up.",
        "url": "https://discord.gg/NSK7YJ2R6j"
    },

    {
        "name": "This Website",
        "description": "🌍 Not much to say here. My personal website which also acts as a portfolio. Home for my projects and different achievements.",
        "url": "https://github.com/tixonochekAscended/website"
    },

    {
        "name": "lastivka",
        "description": "🐦‍⬛ A discord bot for the aforementioned Discord community featuring moderation, economy and much more.",
        "url": "https://discord.gg/NSK7YJ2R6j",
        "img": img['lastivka.png']
    },

    {
        "name": "oko-lang",
        "description": "👁️ An interpreted, non-esoteric programming language. \"Language of vision\".",
        "url": "https://github.com/tixonochekAscended/oko-lang",
        "img": img['oko-lang.png']
    },
    
    {
        "name": "oko-lang VSCode",
        "description": "🔌 VSCode extension for the oko-lang programming language.",
        "url": "https://github.com/tixonochekAscended/oko-lang-vscode",
        "img": img['oko-lang-vsc.png']
    },
    
    {
        "name": "mini-rip",
        "description": "🪨 A minimal, esoteric, interpreted programming language with magical sigils that execute code.",
        "url": "https://github.com/tixonochekAscended/mini-rip",
        "img": img['mini-rip.png']
    },
    
    {
        "name": "mini-rip VSCode",
        "description": "🔌 VSCode extension for the mini-rip programming language. ",
        "url": "https://github.com/tixonochekAscended/mrip-vscode",
        "img": img['mini-rip-vsc.png']
    },
    
    {
        "name": "Luanite",
        "description": "📦 Luanite — the project builder that compiles your Lua app into a self-contained executable. Currently archived with no plans for further development.",
        "url": "https://github.com/tixonochekAscended/luanite",
        "img": img['luanite.png']
    },

    {
        "name": "Doable-Proj",
        "description": "✔️ A task manager with Google integration that helps you get things done. My first ever project built with SvelteKit.",
        "url": "https://doable-proj.vercel.app/",
        "img": img['doable.png']
    },

    {
        "name": "TGlyph (T^)",
        "description": "☕️ T^ is an esoteric interpreted programming language that is based around \"glyphs\" and \"registers\".",
        "url": "https://github.com/tixonochekAscended/TGlyph",
        "img": img['tglyph.png']
    },

    {
        "name": "TOSTER (T*)",
        "description": "✨️ An interpreted, esoteric programming language. Made to break conventions. Beware, includes magic.",
        "url": "https://github.com/tixonochekAscended/TOSTER",
        "img":  img['toster.png']
    }
];