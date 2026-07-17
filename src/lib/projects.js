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
      "description": "A custom 40% mechanical keyboard that I've soldered and assembled myself. A hand-crafted tool that makes programming more comfortable than ever.",
      "url": "https://github.com/tixonochekAscended/my-reviung41-config",
      "img": img['reviung.jpg'],
      "icons": ["zmk", "git"]
  },

  {
      "name": "My Discord Community",
      "description": "A thriving Ukrainian Discord community for developers and tech enthusiasts, built and organized by me from the ground up.",
      "url": "https://discord.gg/NSK7YJ2R6j",
      "icons": ["discord"]
  },

  {
      "name": "This Website",
      "description": "My personal website and portfolio, where I share my projects, achievements and tell you my story.",
      "url": "https://github.com/tixonochekAscended/website",
      "icons": ["node", "ts", "js", "svelte", "tailwind", "netlify", "git"]
  },

  {
      "name": "lastivka",
      "description": "A feature-rich Discord bot driving my community server with built-in moderation, economy, utilities & much more.",
      "url": "https://discord.gg/NSK7YJ2R6j",
      "img": img['lastivka.png'],
      "icons": ["bun", "ts", "js", "discord", "git"]
  },

  {
      "name": "oko-lang",
      "description": "An interpreted, non-esoteric programming language designed to prioritize clarity and intuitive syntax.",
      "url": "https://github.com/tixonochekAscended/oko-lang",
      "img": img['oko-lang.png'],
      "icons": ["deno", "ts", "js", "rust", "git"]
  },
  
  {
      "name": "oko-lang VSCode",
      "description": "A custom Visual Studio Code extension that adds syntax highlighting and development support for oko.",
      "url": "https://github.com/tixonochekAscended/oko-lang-vscode",
      "img": img['oko-lang-vsc.png'],
      "icons": ["vscode", "js", "git"]
  },
  
  {
      "name": "mini-rip",
      "description": "A minimal, esoteric interpreted programming language featuring a custom runtime driven by magical \"sigils\".",
      "url": "https://github.com/tixonochekAscended/mini-rip",
      "img": img['mini-rip.png'],
      "icons": ["lua", "git"]
  },
  
  {
      "name": "mini-rip VSCode",
      "description": "A custom Visual Studio Code extension that adds syntax highlighting and development support for mini-rip.",
      "url": "https://github.com/tixonochekAscended/mrip-vscode",
      "img": img['mini-rip-vsc.png'],
      "icons": ["vscode", "js", "git"]
  },
  
  {
      "name": "Luanite",
      "description": "The project builder designed to package Lua applications into standalone, self-contained executables.",
      "url": "https://github.com/tixonochekAscended/luanite",
      "img": img['luanite.png'],
      "icons": ["lua", "git"]
  },

  {
      "name": "Doable-Proj",
      "description": "A task manager with Google integration. My first ever SvelteKit project, built to practise state management.",
      "url": "https://doable-proj.vercel.app/",
      "img": img['doable.png'],
      "icons": ["node", "ts", "js", "svelte", "tailwind", "vercel", "git"]
  },

  {
      "name": "TGlyph (T^)",
      "description": "An esoteric, interpreted programming language structured around unique execution glyphs and manipulation of virtual registers.",
      "url": "https://github.com/tixonochekAscended/TGlyph",
      "img": img['tglyph.png'],
      "icons": ["python", "git"]
  },

  {
      "name": "TOSTER (T*)",
      "description": "An esoteric, interpreted programming language built to challenge conventional syntax.",
      "url": "https://github.com/tixonochekAscended/TOSTER",
      "img":  img['toster.png'],
      "icons": ["python", "git"]
  }
];