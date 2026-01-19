// AI Tools Hub - Main JavaScript (Category Filtering Removed)

class AIToolsHub {
  constructor() {
    // Complete merged AI tools database with 102 unique tools
    this.tools = [
      // TEXT & CHAT (8 tools)
      {id:1,name:"ChatGPT",category:"Text & Chat",pricing:"Freemium",description:"OpenAI's flagship conversational AI with advanced reasoning capabilities.",features:["GPT-5","Custom GPTs","Canvas mode","Voice conversations","Deep thinking mode"],url:"https://chatgpt.com",icon:"💬",rating:4.9},
      {id:4,name:"Claude",category:"Text & Chat",pricing:"Freemium",description:"Anthropic's safe and helpful AI assistant.",features:["Projects","Artifacts","Deep analysis","Document processing","Code assistance"],url:"https://claude.ai",icon:"🤖",rating:4.8},
      {id:5,name:"Gemini",category:"Multimodal",pricing:"Freemium",description:"Google's advanced multimodal AI system.",features:["2M+ token context","Flash model","Extensions","Workspace integration","Multi-turn conversations"],url:"https://gemini.google.com",icon:"🌐",rating:4.6},
      {id:49,name:"Grok",category:"Text & Chat",pricing:"Paid",description:"Real-time information engine built by xAI with direct access to X data.",features:["Real-time data","X integration","Multimodal","Fast responses","Current events"],url:"https://x.ai",icon:"🚀",rating:4.7},
      {id:50,name:"DeepSeek",category:"Text & Chat",pricing:"Freemium",description:"High-performance, cost-effective reasoning model.",features:["R2 model","Cost-effective","Deep reasoning","Code generation","Math solving"],url:"https://deepseek.com",icon:"🧠",rating:4.7},
      {id:51,name:"Meta AI",category:"Text & Chat",pricing:"Free",description:"Free assistant integrated across WhatsApp, Instagram, and Facebook.",features:["Social integration","WhatsApp bot","Image generation","Free access","Cross-platform"],url:"https://ai.meta.com",icon:"📘",rating:4.5},
      {id:52,name:"Le Chat Mistral",category:"Text & Chat",pricing:"Freemium",description:"Leading European AI known for multilingual precision.",features:["Multilingual","European AI","Privacy-focused","Advanced reasoning","Code generation"],url:"https://chat.mistral.ai",icon:"🇪🇺",rating:4.6},
      {id:53,name:"Duck.ai",category:"Text & Chat",pricing:"Free",description:"Privacy-focused browser wrapper for accessing multiple LLMs.",features:["Privacy-first","Multi-model","Anonymous","No tracking","Browser-based"],url:"https://duck.ai",icon:"🦆",rating:4.5},
      
      // SEARCH & RESEARCH (10 tools)
      {id:6,name:"Perplexity",category:"Search",pricing:"Freemium",description:"AI-powered search with real-time citations.",features:["Pro Search","Collections","Focus modes","API access","Source citations"],url:"https://perplexity.ai",icon:"🔍",rating:4.9},
      {id:54,name:"NotebookLM",category:"Research",pricing:"Free",description:"Upload your files and let the AI become an expert on your data.",features:["Document analysis","Audio overviews","Source grounding","Note generation","Multi-file"],url:"https://notebooklm.google.com",icon:"📓",rating:4.8},
      {id:55,name:"Consensus",category:"Research",pricing:"Freemium",description:"Find answers to scientific questions backed by peer-reviewed papers.",features:["Scientific search","Paper analysis","Citations","Research synthesis","Academic focus"],url:"https://consensus.app",icon:"🔬",rating:4.7},
      {id:56,name:"Elicit",category:"Research",pricing:"Freemium",description:"Automates the literature review process for academics.",features:["Literature review","Paper extraction","Data synthesis","Research workflows","Academic tools"],url:"https://elicit.com",icon:"📚",rating:4.6},
      {id:57,name:"Glean",category:"Research",pricing:"Paid",description:"Enterprise search for internal company documents and Slack messages.",features:["Enterprise search","Integration","Knowledge graph","Personalization","Security"],url:"https://glean.com",icon:"🔎",rating:4.7},
      {id:58,name:"Mendeley AI",category:"Research",pricing:"Freemium",description:"Smart citation management and paper discovery.",features:["Citation management","Reference library","PDF annotation","Research discovery","Collaboration"],url:"https://mendeley.com",icon:"📖",rating:4.5},
      {id:59,name:"ChatPDF",category:"Research",pricing:"Freemium",description:"Specialized tool for talking to and extracting data from PDFs.",features:["PDF chat","Data extraction","Multi-file","Summarization","Q&A"],url:"https://chatpdf.com",icon:"📄",rating:4.6},
      {id:60,name:"ResearchRabbit",category:"Research",pricing:"Free",description:"Visual map tool for finding related academic research.",features:["Visual mapping","Paper discovery","Collections","Collaboration","Recommendations"],url:"https://researchrabbit.ai",icon:"🐰",rating:4.7},
      {id:61,name:"SciSpace",category:"Research",pricing:"Freemium",description:"Simplifies complex research papers with real-time explanations.",features:["Paper explanations","Copilot","Paraphraser","Literature review","Citation generator"],url:"https://scispace.com",icon:"🔭",rating:4.6},
      {id:62,name:"Lateral",category:"Research",pricing:"Freemium",description:"Organizes massive amounts of reading into a structured knowledge grid.",features:["Knowledge organization","Document analysis","Visual workspace","Collections","Search"],url:"https://lateral.io",icon:"📊",rating:4.5},
      
      // WRITING & CONTENT (10 tools)
      {id:16,name:"Jasper AI",category:"Writing",pricing:"Paid",description:"Enterprise-grade platform for maintaining brand voice across marketing.",features:["Brand Voice","50+ Templates","SEO mode","Plagiarism checker","Team collaboration"],url:"https://jasper.ai",icon:"✍️",rating:4.5},
      {id:17,name:"Copy.ai",category:"Writing",pricing:"Freemium",description:"Specialized in sales copy and high-volume marketing workflows.",features:["Workflows","A/B Testing","Templates","Team access","Multilingual"],url:"https://copy.ai",icon:"📄",rating:4.4},
      {id:18,name:"Anyword",category:"Writing",pricing:"Paid",description:"Uses predictive analytics to score how well your copy will perform.",features:["Performance Prediction","SEO optimization","Brand guidelines","Analytics","Copy intelligence"],url:"https://anyword.com",icon:"📈",rating:4.6},
      {id:19,name:"Writesonic",category:"Writing",pricing:"Freemium",description:"Best for generating SEO-optimized articles with real-time web data.",features:["ChatSonic","Botsonic","Article writer","SEO checker","Bulk generation"],url:"https://writesonic.com",icon:"🖋️",rating:4.5},
      {id:20,name:"Rytr",category:"Writing",pricing:"Freemium",description:"A lightweight, fast assistant for social media captions and emails.",features:["40+ Use Cases","SEO analyzer","Plagiarism check","Tone control","Chrome extension"],url:"https://rytr.me",icon:"📝",rating:4.4},
      {id:63,name:"Grammarly Business",category:"Writing",pricing:"Paid",description:"AI that ensures tone consistency and grammatical perfection.",features:["Grammar check","Tone detection","Plagiarism","Brand voice","Team features"],url:"https://grammarly.com/business",icon:"✅",rating:4.7},
      {id:64,name:"QuillBot",category:"Writing",pricing:"Freemium",description:"The most advanced web-based paraphraser and summarizer.",features:["Paraphraser","Summarizer","Grammar checker","Citation generator","Translator"],url:"https://quillbot.com",icon:"🪶",rating:4.6},
      {id:65,name:"Sudowrite",category:"Writing",pricing:"Paid",description:"The go-to tool for fiction writers and creative storytellers.",features:["Story engine","Character development","Brainstorming","Rewriting","Describing"],url:"https://sudowrite.com",icon:"📚",rating:4.7},
      {id:66,name:"Hemingway Editor Plus",category:"Writing",pricing:"Paid",description:"Simplifies complex prose using AI readability scores.",features:["Readability analysis","Sentence simplification","Grammar","Style suggestions","Publishing"],url:"https://hemingwayapp.com",icon:"✒️",rating:4.5},
      {id:67,name:"Wordtune",category:"Writing",pricing:"Freemium",description:"Focuses on rewriting sentences to change tone and flow.",features:["Rewriting","Tone adjustment","Summarization","Translation","Browser extension"],url:"https://wordtune.com",icon:"🎯",rating:4.6},
      
      // IMAGE GENERATION & DESIGN (13 tools)
      {id:2,name:"Midjourney",category:"Image Generation",pricing:"Paid",description:"The peak of AI artistry with full web-based editor.",features:["V7 Model","Web editor","Remix mode","Style references","High resolution"],url:"https://midjourney.com",icon:"🎨",rating:4.8},
      {id:68,name:"DALL-E 3",category:"Image Generation",pricing:"Freemium",description:"Highly intuitive generation built directly into ChatGPT.",features:["Text to image","ChatGPT integration","High quality","Editing","Safety features"],url:"https://openai.com/dall-e-3",icon:"🖼️",rating:4.7},
      {id:69,name:"Adobe Firefly",category:"Image Generation",pricing:"Freemium",description:"Safe-for-commercial-use generation inside Photoshop.",features:["Commercial safe","Photoshop integration","Generative fill","Text effects","Vector recolor"],url:"https://firefly.adobe.com",icon:"🔥",rating:4.6},
      {id:70,name:"Leonardo.ai",category:"Image Generation",pricing:"Freemium",description:"Advanced studio for fine-tuning styles and character consistency.",features:["Character consistency","Style control","Canvas editor","Real-time generation","API"],url:"https://leonardo.ai",icon:"🎭",rating:4.7},
      {id:71,name:"Ideogram",category:"Image Generation",pricing:"Freemium",description:"World leader in rendering perfect text within images.",features:["Text rendering","Multiple styles","Magic prompt","Remix","High resolution"],url:"https://ideogram.ai",icon:"🔤",rating:4.8},
      {id:72,name:"Flux.1",category:"Image Generation",pricing:"Free",description:"An open-source heavyweight rivaling Midjourney in realism.",features:["Open source","Photorealism","Fast generation","Multiple models","Local hosting"],url:"https://blackforestlabs.ai",icon:"⚡",rating:4.7},
      {id:3,name:"Canva Magic Studio",category:"Design",pricing:"Freemium",description:"One-click design automation for social media graphics.",features:["Magic Design","Background Remover","Text to Image","Brand Kit","Templates"],url:"https://canva.com/magic",icon:"✨",rating:4.7},
      {id:73,name:"Photoroom",category:"Design",pricing:"Freemium",description:"AI photo studio for removing backgrounds and lighting products.",features:["Background removal","Product photos","Batch editing","Templates","API"],url:"https://photoroom.com",icon:"📸",rating:4.7},
      {id:74,name:"Looka",category:"Design",pricing:"Paid",description:"Generates full brand identities and logos in seconds.",features:["Logo design","Brand kit","Business cards","Social media","Marketing materials"],url:"https://looka.com",icon:"🏷️",rating:4.6},
      {id:28,name:"Remove.bg",category:"Design",pricing:"Freemium",description:"AI background removal.",features:["Batch processing","API access","High resolution","Auto-detection","Instant results"],url:"https://remove.bg",icon:"🗑️",rating:4.9},
      {id:30,name:"Uizard",category:"Design",pricing:"Freemium",description:"Converts hand-drawn sketches into professional UI designs.",features:["Screenshot to design","Wireframes","Prototypes","Collaboration","Export code"],url:"https://uizard.io",icon:"🪄",rating:4.7},
      {id:29,name:"Framer AI",category:"Design",pricing:"Freemium",description:"AI website builder.",features:["Canvas generation","Components","Responsive","CMS","Hosting"],url:"https://framer.com/ai",icon:"🖥️",rating:4.8},
      {id:46,name:"Lex",category:"Design",pricing:"Freemium",description:"AI design assistant.",features:["UI Generation","Prototyping","Components","Export","Collaboration"],url:"https://lex.design",icon:"🎨",rating:4.6},
      
      // VIDEO & MOTION (13 tools)
      {id:75,name:"Sora",category:"Video",pricing:"Paid",description:"OpenAI's engine for high-fidelity cinematic video generation.",features:["Cinematic quality","Long videos","Complex scenes","Physics simulation","Prompting control"],url:"https://openai.com/sora",icon:"🎬",rating:4.9},
      {id:7,name:"Runway ML",category:"Video",pricing:"Freemium",description:"Features Act-One for mapping facial expressions to characters.",features:["Gen-4","Act-One","Text-to-Video","Motion tracking","Green screen"],url:"https://runwayml.com",icon:"🎥",rating:4.7},
      {id:76,name:"Luma Dream Machine",category:"Video",pricing:"Freemium",description:"Known for its realistic physics and fast rendering.",features:["Realistic physics","Fast generation","Text to video","Image to video","Camera control"],url:"https://lumalabs.ai",icon:"💫",rating:4.7},
      {id:77,name:"Google Veo",category:"Video",pricing:"Freemium",description:"DeepMind's cinematic tool with integrated audio generation.",features:["Cinematic quality","Audio generation","Long videos","High resolution","Google integration"],url:"https://deepmind.google/technologies/veo",icon:"🎥",rating:4.7},
      {id:24,name:"Synthesia",category:"Video",pricing:"Paid",description:"The leader in AI avatars for corporate training and news.",features:["100+ Avatars","Multilingual","Custom avatars","Screen recorder","Templates"],url:"https://synthesia.io",icon:"🤵",rating:4.7},
      {id:25,name:"HeyGen",category:"Video",pricing:"Freemium",description:"Creates lifelike video translations with perfect lip-syncing.",features:["Talking avatars","Lip sync","Video translation","Templates","API access"],url:"https://heygen.com",icon:"🎥",rating:4.8},
      {id:78,name:"Pika Labs",category:"Video",pricing:"Freemium",description:"Specializes in animation and physics-defying effects.",features:["Creative effects","Animation","Video editing","Modify regions","Lip sync"],url:"https://pika.art",icon:"🌟",rating:4.6},
      {id:79,name:"OpusClip",category:"Video",pricing:"Freemium",description:"Automatically turns 1 long video into 10 viral short clips.",features:["Auto-clipping","Viral scoring","Captions","Scheduling","Multi-platform"],url:"https://opusclip.com",icon:"✂️",rating:4.6},
      {id:23,name:"Descript",category:"Video",pricing:"Freemium",description:"Edit video by simply editing the text of the transcript.",features:["Overdub","Screen recording","Transcription","Studio sound","Multi-track"],url:"https://descript.com",icon:"🎬",rating:4.8},
      {id:80,name:"Kling AI",category:"Video",pricing:"Freemium",description:"A powerhouse for ultra-realistic human movements in video.",features:["Realistic motion","Long videos","High quality","Motion control","Chinese AI"],url:"https://klingai.com",icon:"🎭",rating:4.7},
      {id:41,name:"Fliki",category:"Video",pricing:"Freemium",description:"Text-to-video platform.",features:["Blog to video","AI Voiceovers","Stock media","Subtitles","Templates"],url:"https://fliki.ai",icon:"📹",rating:4.5},
      {id:42,name:"InVideo",category:"Video",pricing:"Freemium",description:"AI video editor.",features:["Templates","Stock media","Text overlays","Transitions","Export options"],url:"https://invideo.io",icon:"🎞️",rating:4.6},
      {id:43,name:"Colossyan",category:"Video",pricing:"Paid",description:"Enterprise AI video platform.",features:["Custom avatars","API","Localization","Templates","Collaboration"],url:"https://colossyan.com",icon:"🏢",rating:4.6},
      
      // VOICE, AUDIO & MUSIC (10 tools)
      {id:8,name:"ElevenLabs",category:"Voice",pricing:"Freemium",description:"The industry standard for voice cloning and text-to-speech.",features:["Voice Cloning","29+ languages","Emotion control","Speech synthesis","API access"],url:"https://elevenlabs.io",icon:"🎙️",rating:4.9},
      {id:81,name:"Suno",category:"Music",pricing:"Freemium",description:"Generates complete 4-minute songs with vocals and lyrics.",features:["Full songs","Vocals & lyrics","Multiple genres","Extend songs","Custom mode"],url:"https://suno.ai",icon:"🎵",rating:4.8},
      {id:82,name:"Udio",category:"Music",pricing:"Freemium",description:"High-fidelity music production for professional artists.",features:["Professional quality","Genre variety","Stem downloads","Extended songs","Remix"],url:"https://udio.com",icon:"🎼",rating:4.7},
      {id:83,name:"Adobe Podcast",category:"Audio",pricing:"Free",description:"AI voice enhancement that makes any mic sound professional.",features:["Audio enhancement","Noise removal","Studio quality","Free","Cloud-based"],url:"https://podcast.adobe.com",icon:"🎧",rating:4.7},
      {id:84,name:"LALAL.AI",category:"Audio",pricing:"Freemium",description:"Stem splitter that separates vocals from instruments with high precision.",features:["Stem separation","Vocal extraction","Multiple stems","High quality","Batch processing"],url:"https://lalal.ai",icon:"🎹",rating:4.6},
      {id:85,name:"AIVA",category:"Music",pricing:"Freemium",description:"AI composer for background music and soundtracks.",features:["Soundtrack creation","Multiple genres","Customization","MIDI download","Royalty-free"],url:"https://aiva.ai",icon:"🎻",rating:4.5},
      {id:36,name:"Murf.ai",category:"Voice",pricing:"Freemium",description:"Studio-quality AI voices for ads and presentations.",features:["Emotion control","API access","120+ voices","Pitch control","Video sync"],url:"https://murf.ai",icon:"🎤",rating:4.7},
      {id:86,name:"Soundraw",category:"Music",pricing:"Freemium",description:"Customizable royalty-free music for content creators.",features:["Royalty-free","Customization","Unlimited downloads","Beats & tempo","Content creation"],url:"https://soundraw.io",icon:"🎶",rating:4.6},
      {id:87,name:"Hume AI",category:"Voice",pricing:"Paid",description:"An empathic voice assistant that understands human emotions.",features:["Emotion detection","Empathic responses","Voice API","Real-time","Expression analysis"],url:"https://hume.ai",icon:"💝",rating:4.6},
      {id:37,name:"Speechify",category:"Voice",pricing:"Freemium",description:"Turns any text on the web into a high-quality audiobook.",features:["Natural voices","Speed control","Highlighting","Multi-format","Mobile apps"],url:"https://speechify.com",icon:"🔊",rating:4.6},
      
      // CODE & DEVELOPMENT (13 tools)
      {id:32,name:"Cursor",category:"Code",pricing:"Freemium",description:"An AI-native IDE that is currently the top choice for developers.",features:["Composer","Chat assistance","Tab completion","Debugging","Multi-file editing"],url:"https://cursor.com",icon:"💻",rating:4.9},
      {id:33,name:"GitHub Copilot",category:"Code",pricing:"Paid",description:"The most widely used pair programmer in the world.",features:["Autocomplete","Chat","Workspace","CLI","Multi-language"],url:"https://github.com/features/copilot",icon:"🐙",rating:4.8},
      {id:88,name:"Lovable",category:"Code",pricing:"Freemium",description:"A vibe-coding tool that builds full-stack apps from a prompt.",features:["Full-stack apps","Natural language","Instant preview","Deploy","Iterate"],url:"https://lovable.dev",icon:"💖",rating:4.7},
      {id:89,name:"Bolt.new",category:"Code",pricing:"Freemium",description:"Instantly builds, previews, and deploys web apps in the browser.",features:["Browser-based","Instant preview","Deploy","Full-stack","No setup"],url:"https://bolt.new",icon:"⚡",rating:4.8},
      {id:90,name:"Replit Agent",category:"Code",pricing:"Paid",description:"An autonomous bot that handles the backend and database for you.",features:["Autonomous coding","Database setup","Backend logic","Natural language","Deploy"],url:"https://replit.com/agent",icon:"🤖",rating:4.7},
      {id:91,name:"Windsurf",category:"Code",pricing:"Freemium",description:"An agentic code editor by Codeium that plans multi-file changes.",features:["Multi-file edits","Agentic coding","Code planning","Context-aware","Codeium powered"],url:"https://codeium.com/windsurf",icon:"🏄",rating:4.7},
      {id:92,name:"Claude Code",category:"Code",pricing:"Freemium",description:"A terminal-based assistant for high-speed engineering.",features:["Terminal-based","Fast execution","File editing","Command running","Engineering focus"],url:"https://claude.ai/code",icon:"⌨️",rating:4.6},
      {id:40,name:"V0 by Vercel",category:"Code",pricing:"Free",description:"Generates high-end UI components using React and Tailwind.",features:["React components","shadcn/ui","Customization","Copy code","Iterations"],url:"https://v0.dev",icon:"⚡",rating:4.9},
      {id:93,name:"Blackbox AI",category:"Code",pricing:"Freemium",description:"Specialized in searching and generating code from public repos.",features:["Code search","Repository search","Code generation","Chrome extension","VS Code"],url:"https://blackbox.ai",icon:"⬛",rating:4.5},
      {id:38,name:"Bubble",category:"No-Code",pricing:"Freemium",description:"No-code platform that uses AI to build complex logic.",features:["AI toolkit","Database","Workflows","Responsive","Plugins"],url:"https://bubble.io",icon:"🫧",rating:4.5},
      {id:34,name:"Codeium",category:"Code",pricing:"Free",description:"Free AI coding assistant.",features:["100+ Languages","Local models","Chat","Search","Context-aware"],url:"https://codeium.com",icon:"⚡",rating:4.7},
      {id:35,name:"Replit Ghostwriter",category:"Code",pricing:"Freemium",description:"AI in Replit IDE.",features:["Code explanation","Debugging","Generation","Chat","Completion"],url:"https://replit.com",icon:"🔮",rating:4.6},
      {id:94,name:"Cognition Devin",category:"Code",pricing:"Paid",description:"An autonomous AI software engineer for hire.",features:["Autonomous engineer","End-to-end development","Bug fixing","Feature building","Software projects"],url:"https://cognition.ai",icon:"👨‍💻",rating:4.8},
      
      // NO-CODE & WEB BUILDERS (1 tool)
      {id:39,name:"Webflow AI",category:"No-Code",pricing:"Freemium",description:"AI website generator.",features:["Site builder","CMS","Hosting","E-commerce","Interactions"],url:"https://webflow.com",icon:"🌐",rating:4.8},
      
      // PRODUCTIVITY & OFFICE (9 tools)
      {id:9,name:"Copilot",category:"Productivity",pricing:"Freemium",description:"The ultimate tool for Office 365 users.",features:["PowerPoint generation","Excel formulas","Word editing","Teams integration","Data analysis"],url:"https://copilot.microsoft.com",icon:"📊",rating:4.7},
      {id:10,name:"Notion AI",category:"Productivity",pricing:"Freemium",description:"An AI that has memorized everything inside your Notion workspace.",features:["Q&A","Writing Assistant","Summaries","Translations","Action items"],url:"https://notion.so",icon:"📝",rating:4.6},
      {id:95,name:"Reclaim.ai",category:"Productivity",pricing:"Freemium",description:"Automatically blocks time on your calendar for habits and tasks.",features:["Smart scheduling","Habits","Task management","Calendar sync","Time blocking"],url:"https://reclaim.ai",icon:"📅",rating:4.7},
      {id:96,name:"Motion",category:"Productivity",pricing:"Paid",description:"A smart planner that rebuilds your schedule as your day changes.",features:["Auto-scheduling","Task prioritization","Calendar management","Team coordination","AI planning"],url:"https://usemotion.com",icon:"🎯",rating:4.8},
      {id:97,name:"Shortwave",category:"Productivity",pricing:"Freemium",description:"Uses AI to summarize, draft, and organize your Gmail inbox.",features:["Email AI","Smart inbox","Summaries","Draft replies","Search"],url:"https://shortwave.com",icon:"📧",rating:4.6},
      {id:98,name:"Superhuman AI",category:"Productivity",pricing:"Paid",description:"High-speed email triage and automated drafting.",features:["Fast email","AI writing","Snippets","Read receipts","Keyboard shortcuts"],url:"https://superhuman.com",icon:"⚡",rating:4.7},
      {id:99,name:"Granola",category:"Productivity",pricing:"Freemium",description:"An AI notepad that helps you write notes without a bot joining the call.",features:["Meeting notes","No bot needed","Smart templates","Transcription","Summaries"],url:"https://granola.ai",icon:"📒",rating:4.6},
      {id:100,name:"Mem",category:"Productivity",pricing:"Freemium",description:"A self-organizing note-taking app that uses AI to link ideas.",features:["Auto-organization","Knowledge graph","Smart search","Collections","AI chat"],url:"https://mem.ai",icon:"🧠",rating:4.5},
      {id:101,name:"Taskade",category:"Productivity",pricing:"Freemium",description:"AI-powered project management with built-in agent workflows.",features:["Project management","AI agents","Workflows","Templates","Collaboration"],url:"https://taskade.com",icon:"✅",rating:4.6},
      
      // PRESENTATIONS (5 tools)
      {id:11,name:"Tome",category:"Presentations",pricing:"Freemium",description:"AI storytelling and presentation builder.",features:["Narrative Builder","Auto-layout","Image generation","Themes","Collaboration"],url:"https://tome.app",icon:"📈",rating:4.8},
      {id:12,name:"Gamma",category:"Presentations",pricing:"Freemium",description:"Creates professional slide decks and websites in 60 seconds.",features:["One-click creation","Analytics","Templates","Collaboration","Export options"],url:"https://gamma.app",icon:"📊",rating:4.7},
      {id:13,name:"Pitch",category:"Presentations",pricing:"Freemium",description:"AI pitch deck creator for teams.",features:["Real-time collaboration","Smart templates","Presenter mode","Analytics","Video recording"],url:"https://pitch.com",icon:"🎯",rating:4.6},
      {id:14,name:"SlidesAI",category:"Presentations",pricing:"Freemium",description:"Google Slides AI extension.",features:["Text-to-Slides","Customization","Templates","Auto-formatting","Quick generation"],url:"https://slidesai.io",icon:"💻",rating:4.5},
      {id:15,name:"Beautiful.ai",category:"Presentations",pricing:"Freemium",description:"Smart presentation software that handles design layouts.",features:["Adaptive layouts","Smart charts","Team library","Brand consistency","Collaboration"],url:"https://beautiful.ai",icon:"✨",rating:4.6},
      
      // MEETING NOTES & TRANSCRIPTION (5 tools)
      {id:21,name:"Otter.ai",category:"Meeting Notes",pricing:"Freemium",description:"Real-time transcription and summary for live meetings.",features:["Real-time notes","Speaker identification","Action items","Integration","Search"],url:"https://otter.ai",icon:"🎤",rating:4.7},
      {id:22,name:"Fireflies.ai",category:"Meeting Notes",pricing:"Freemium",description:"Records and analyzes voice conversations across all platforms.",features:["Auto-join","Searchable notes","CRM integration","Analytics","Conversation intelligence"],url:"https://fireflies.ai",icon:"🔥",rating:4.6},
      {id:102,name:"Fathom",category:"Meeting Notes",pricing:"Free",description:"A free AI meeting recorder that highlights key action items.",features:["Free","Auto-recording","Highlights","Action items","Multi-platform"],url:"https://fathom.video",icon:"📹",rating:4.7},
      {id:47,name:"Krutrim",category:"Meeting Notes",pricing:"Freemium",description:"Indian AI meeting tool.",features:["Multilingual","Transcription","Summaries","Action items","Local support"],url:"https://krutrim.com",icon:"🇮🇳",rating:4.4},
      {id:48,name:"MeetGeek",category:"Meeting Notes",pricing:"Freemium",description:"AI meeting recorder and analyzer.",features:["Auto-recording","Highlights","Integration","Search","Teams"],url:"https://meetgeek.ai",icon:"📋",rating:4.5},
      
      // MARKETING & SOCIAL MEDIA (3 tools)
      {id:31,name:"AdCreative.ai",category:"Marketing",pricing:"Paid",description:"AI ad creatives generator.",features:["Performance scoring","Variations","Text generation","Brand assets","Integration"],url:"https://adcreative.ai",icon:"📣",rating:4.7},
      {id:44,name:"TweetHunter",category:"Marketing",pricing:"Paid",description:"Twitter growth AI tool.",features:["Thread generator","Scheduler","Analytics","CRM","Inspiration"],url:"https://tweethunter.io",icon:"🐦",rating:4.6},
      {id:45,name:"Typefully",category:"Marketing",pricing:"Freemium",description:"Twitter writing tool.",features:["Analytics","Scheduling","Drafts","Collaboration","Cross-posting"],url:"https://typefully.com",icon:"📝",rating:4.5}
    ];
    
    this.filteredTools = [...this.tools];
    this.currentView = 'grid';
    this.searchQuery = '';
    this.favorites = this.loadFavorites();
    this.currentSort = 'default';
    this.currentToolInModal = null;
    this.currentTheme = this.loadTheme();
    this.showFavoritesOnly = false;
    this.showMostUsedOnly = false;
    
    // New features
    this.savedTools = this.loadSavedTools();
    this.toolUsage = this.loadToolUsage();
    this.quickNotes = this.loadQuickNotes();
    this.visitorCount = this.loadVisitorCount();
    
    this.init();
  }

  // Initialize the application
  init() {
    this.applyTheme(this.currentTheme);
    this.startLoader();
    this.bindEvents();
    this.createFloatingIcons();
    this.incrementVisitorCount();
    
    setTimeout(() => {
      this.loaderComplete();
      this.renderTools();
      this.updateStats();
      this.updateFavoriteCount();
      this.updateVisitorDisplay();
      this.updateFooterStats();
    }, 1800);
  }

  // Load theme from localStorage
  loadTheme() {
    try {
      const saved = localStorage.getItem('ai_tools_theme');
      return saved || 'light';
    } catch (e) {
      return 'light';
    }
  }

  // Save theme to localStorage
  saveTheme(theme) {
    try {
      localStorage.setItem('ai_tools_theme', theme);
    } catch (e) {
      console.error('Failed to save theme');
    }
  }

  // Apply theme to document
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
  }

  // Toggle theme between light and dark
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    this.saveTheme(newTheme);
    this.showToast(newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled');
  }

  // Load favorites from localStorage
  loadFavorites() {
    try {
      const saved = localStorage.getItem('ai_tools_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  // Save favorites to localStorage
  saveFavorites() {
    try {
      localStorage.setItem('ai_tools_favorites', JSON.stringify(this.favorites));
    } catch (e) {
      console.error('Failed to save favorites');
    }
  }

  // Toggle favorite status
  toggleFavorite(toolId) {
    const index = this.favorites.indexOf(toolId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.showToast('Removed from favorites');
    } else {
      this.favorites.push(toolId);
      this.showToast('Added to favorites');
    }
    this.saveFavorites();
    this.updateFavoriteCount();
    this.renderTools();
  }

  // Check if tool is favorite
  isFavorite(toolId) {
    return this.favorites.includes(toolId);
  }

  // Update favorite count display
  updateFavoriteCount() {
    const el = document.getElementById('favoriteCount');
    if (el) el.textContent = this.favorites.length;
  }

  // ============ NEW FEATURES ============

  // Load saved tools from localStorage
  loadSavedTools() {
    try {
      const saved = localStorage.getItem('ai_tools_saved');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  // Save saved tools to localStorage
  saveSavedToolsData() {
    try {
      localStorage.setItem('ai_tools_saved', JSON.stringify(this.savedTools));
    } catch (e) {
      console.error('Failed to save tools');
    }
  }

  // Toggle save to notepad
  toggleSaveToNotepad(toolId) {
    const index = this.savedTools.indexOf(toolId);
    if (index > -1) {
      this.savedTools.splice(index, 1);
      this.showToast('Removed from notepad');
    } else {
      this.savedTools.push(toolId);
      this.showToast('Saved to notepad');
    }
    this.saveSavedToolsData();
    this.renderSavedTools();
    this.renderTools();
  }

  // Check if tool is saved
  isSaved(toolId) {
    return this.savedTools.includes(toolId);
  }

  // Load tool usage from localStorage
  loadToolUsage() {
    try {
      const saved = localStorage.getItem('ai_tools_usage');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  // Save tool usage to localStorage
  saveToolUsage() {
    try {
      localStorage.setItem('ai_tools_usage', JSON.stringify(this.toolUsage));
    } catch (e) {
      console.error('Failed to save usage');
    }
  }

  // Increment tool usage count
  incrementUsage(toolId) {
    if (!this.toolUsage[toolId]) {
      this.toolUsage[toolId] = 0;
    }
    this.toolUsage[toolId]++;
    this.saveToolUsage();
    this.renderFrequentlyUsed();
  }

  // Get tool usage count
  getUsageCount(toolId) {
    return this.toolUsage[toolId] || 0;
  }

  // Load quick notes from localStorage
  loadQuickNotes() {
    try {
      return localStorage.getItem('ai_tools_notes') || '';
    } catch (e) {
      return '';
    }
  }

  // Save quick notes to localStorage
  saveQuickNotes(notes) {
    try {
      localStorage.setItem('ai_tools_notes', notes);
      this.quickNotes = notes;
    } catch (e) {
      console.error('Failed to save notes');
    }
  }

  // Load visitor count from localStorage
  loadVisitorCount() {
    try {
      const saved = localStorage.getItem('ai_tools_visitors');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  }

  // Increment visitor count
  incrementVisitorCount() {
    // Check if this session already counted
    const sessionCounted = sessionStorage.getItem('ai_tools_session_counted');
    if (!sessionCounted) {
      this.visitorCount++;
      try {
        localStorage.setItem('ai_tools_visitors', this.visitorCount.toString());
        sessionStorage.setItem('ai_tools_session_counted', 'true');
      } catch (e) {
        console.error('Failed to save visitor count');
      }
    }
  }

  // Update visitor display
  updateVisitorDisplay() {
    const el = document.getElementById('visitorNumber');
    const footerEl = document.getElementById('footerVisitorCount');
    if (el) el.textContent = this.formatNumber(this.visitorCount);
    if (footerEl) footerEl.textContent = this.formatNumber(this.visitorCount);
  }

  // Format number with commas
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Update footer stats
  updateFooterStats() {
    const toolCountEl = document.getElementById('footerToolCount');
    if (toolCountEl) toolCountEl.textContent = this.tools.length;
    this.updateVisitorDisplay();
  }

  // Render saved tools in notepad
  renderSavedTools() {
    const container = document.getElementById('savedToolsList');
    if (!container) return;

    if (this.savedTools.length === 0) {
      container.innerHTML = '<p class="empty-notepad">No tools saved yet. Click the 📌 button on any tool card to save it here.</p>';
      return;
    }

    const savedToolsData = this.savedTools
      .map(id => this.tools.find(t => t.id === id))
      .filter(Boolean);

    container.innerHTML = savedToolsData.map(tool => `
      <div class="saved-tool-item" data-tool-id="${tool.id}">
        <span class="saved-tool-icon">${tool.icon}</span>
        <div class="saved-tool-info">
          <div class="saved-tool-name">${tool.name}</div>
          <div class="saved-tool-category">${tool.category}</div>
        </div>
        <button class="remove-saved-tool" data-tool-id="${tool.id}" title="Remove">×</button>
      </div>
    `).join('');

    // Bind remove events
    container.querySelectorAll('.remove-saved-tool').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const toolId = parseInt(e.target.dataset.toolId, 10);
        this.toggleSaveToNotepad(toolId);
      });
    });

    // Bind click to open tool
    container.querySelectorAll('.saved-tool-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-saved-tool')) return;
        const toolId = parseInt(item.dataset.toolId, 10);
        const tool = this.tools.find(t => t.id === toolId);
        if (tool) {
          this.closeNotepad();
          this.openModal(tool);
        }
      });
    });
  }

  // Render frequently used tools
  renderFrequentlyUsed() {
    const container = document.getElementById('frequentlyUsedList');
    if (!container) return;

    const sortedUsage = Object.entries(this.toolUsage)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    if (sortedUsage.length === 0) {
      container.innerHTML = '<p class="empty-notepad">No usage data yet. Start exploring tools!</p>';
      return;
    }

    const frequentToolsHtml = sortedUsage.map(([toolId, count]) => {
      const tool = this.tools.find(t => t.id === parseInt(toolId, 10));
      if (!tool) return '';
      return `
        <div class="frequent-tool-item" data-tool-id="${tool.id}">
          <span class="frequent-tool-icon">${tool.icon}</span>
          <div class="frequent-tool-info">
            <div class="frequent-tool-name">${tool.name}</div>
            <div class="frequent-tool-usage">🔥 Used ${count} times</div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = frequentToolsHtml;

    // Bind click to open tool
    container.querySelectorAll('.frequent-tool-item').forEach(item => {
      item.addEventListener('click', () => {
        const toolId = parseInt(item.dataset.toolId, 10);
        const tool = this.tools.find(t => t.id === toolId);
        if (tool) {
          this.closeNotepad();
          this.openModal(tool);
        }
      });
    });
  }

  // Open notepad sidebar
  openNotepad() {
    const sidebar = document.getElementById('notepadSidebar');
    const overlay = document.getElementById('notepadOverlay');
    const notepadBtn = document.getElementById('notepadBtn');
    
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (notepadBtn) notepadBtn.classList.add('active');
    
    this.renderSavedTools();
    this.renderFrequentlyUsed();
    
    // Load quick notes
    const notesTextarea = document.getElementById('quickNotes');
    if (notesTextarea) {
      notesTextarea.value = this.quickNotes;
    }
    
    document.body.style.overflow = 'hidden';
  }

  // Close notepad sidebar
  closeNotepad() {
    const sidebar = document.getElementById('notepadSidebar');
    const overlay = document.getElementById('notepadOverlay');
    const notepadBtn = document.getElementById('notepadBtn');
    
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (notepadBtn) notepadBtn.classList.remove('active');
    
    document.body.style.overflow = '';
  }

  // ============ END NEW FEATURES ============

  // Start the loading animation
  startLoader() {
    let progress = 10;
    const loaderFill = document.getElementById('loaderFill');
    const loaderPercent = document.getElementById('loaderPercent');
    
    if (!loaderFill || !loaderPercent) return;
    
    const interval = setInterval(() => {
      progress += Math.random() * 8 + 2;
      if (progress >= 98) {
        progress = 98;
        clearInterval(interval);
      }
      loaderFill.style.width = `${progress}%`;
      loaderPercent.textContent = `${Math.floor(progress)}%`;
    }, 120);
  }

  // Complete loader and remove it
  loaderComplete() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  }

  // Bind all event listeners
  bindEvents() {
    const searchInput = document.getElementById('searchInput');
    const pricingFilter = document.getElementById('pricingFilter');
    const sortSelect = document.getElementById('sortSelect');
    const scrollTop = document.getElementById('scrollTop');
    const modalClose = document.querySelector('.modal-close');
    const favoritesBtn = document.getElementById('favoritesBtn');
    const mostUsedBtn = document.getElementById('mostUsedBtn');
    const themeToggle = document.getElementById('themeToggle');
    const notepadBtn = document.getElementById('notepadBtn');
    const notepadClose = document.getElementById('notepadClose');
    const notepadOverlay = document.getElementById('notepadOverlay');
    const saveNotesBtn = document.getElementById('saveNotesBtn');
    
    if (searchInput) {
      searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
    }
    
    if (pricingFilter) {
      pricingFilter.addEventListener('change', this.filterTools.bind(this));
    }
    
    if (sortSelect) {
      sortSelect.addEventListener('change', this.handleSort.bind(this));
    }
    
    // Theme toggle button
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Notepad button
    if (notepadBtn) {
      notepadBtn.addEventListener('click', () => this.openNotepad());
    }
    
    if (notepadClose) {
      notepadClose.addEventListener('click', () => this.closeNotepad());
    }
    
    if (notepadOverlay) {
      notepadOverlay.addEventListener('click', () => this.closeNotepad());
    }
    
    // Save notes button
    if (saveNotesBtn) {
      saveNotesBtn.addEventListener('click', () => {
        const notesTextarea = document.getElementById('quickNotes');
        if (notesTextarea) {
          this.saveQuickNotes(notesTextarea.value);
          this.showToast('Notes saved!');
        }
      });
    }
    
    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentView = e.target.dataset.view;
        this.updateView();
      });
    });
    
    // Modal overlay click
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') this.closeModal();
      });
    }
    
    // Modal buttons
    if (modalClose) {
      modalClose.addEventListener('click', () => this.closeModal());
    }
    
    const modalShareBtn = document.getElementById('modalShareBtn');
    if (modalShareBtn) {
      modalShareBtn.addEventListener('click', () => this.shareCurrentTool());
    }
    
    const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
    if (modalFavoriteBtn) {
      modalFavoriteBtn.addEventListener('click', () => {
        if (this.currentToolInModal) {
          this.toggleFavorite(this.currentToolInModal.id);
          this.updateModalFavoriteButton();
        }
      });
    }
    
    const modalSaveToNotepadBtn = document.getElementById('modalSaveToNotepadBtn');
    if (modalSaveToNotepadBtn) {
      modalSaveToNotepadBtn.addEventListener('click', () => {
        if (this.currentToolInModal) {
          this.toggleSaveToNotepad(this.currentToolInModal.id);
          this.updateModalSaveButton();
        }
      });
    }
    
    // Scroll to top button
    if (scrollTop) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          scrollTop.classList.add('show');
        } else {
          scrollTop.classList.remove('show');
        }
      });
      
      scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    
    // Favorites button - show only favorites
    if (favoritesBtn) {
      favoritesBtn.addEventListener('click', () => {
        this.showFavoritesOnly = !this.showFavoritesOnly;
        this.showMostUsedOnly = false;
        favoritesBtn.classList.toggle('active', this.showFavoritesOnly);
        if (mostUsedBtn) mostUsedBtn.classList.remove('active');
        this.filterTools();
      });
    }
    
    // Most Used button
    if (mostUsedBtn) {
      mostUsedBtn.addEventListener('click', () => {
        this.showMostUsedOnly = !this.showMostUsedOnly;
        this.showFavoritesOnly = false;
        mostUsedBtn.classList.toggle('active', this.showMostUsedOnly);
        if (favoritesBtn) favoritesBtn.classList.remove('active');
        this.filterTools();
      });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (document.getElementById('notepadSidebar')?.classList.contains('active')) {
          this.closeNotepad();
        } else if (document.getElementById('modalOverlay')?.classList.contains('active')) {
          this.closeModal();
        }
      }
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInput?.focus();
      }
      // Theme toggle shortcut (Ctrl/Cmd + Shift + D)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        this.toggleTheme();
      }
      // Notepad shortcut (Ctrl/Cmd + Shift + N)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'N') {
        e.preventDefault();
        if (document.getElementById('notepadSidebar')?.classList.contains('active')) {
          this.closeNotepad();
        } else {
          this.openNotepad();
        }
      }
    });
  }

  // Debounce utility function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Create floating background icons
  createFloatingIcons() {
    const icons = ['🤖','🧠','⚙️','💻','✨','🚀','🔮','🎨','💬','🔍'];
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    
    icons.forEach((icon, i) => {
      const span = document.createElement('span');
      span.textContent = icon;
      span.style.cssText = `position:absolute;font-size:${2 + i%3}rem;opacity:0.06;left:${Math.random()*90}%;animation:float ${20 + i*3}s linear infinite;animation-delay:${i*0.5}s;`;
      container.appendChild(span);
    });
    
    document.body.appendChild(container);
  }

  // Handle search input
  handleSearch(e) {
    this.searchQuery = e.target.value.toLowerCase();
    this.filterTools();
  }

  // Handle sort change
  handleSort(e) {
    this.currentSort = e.target.value;
    this.filterTools();
  }

  // Filter tools based on criteria (NO CATEGORY FILTERING)
  filterTools() {
    const pricingEl = document.getElementById('pricingFilter');
    const pricing = pricingEl ? pricingEl.value : '';
    
    this.filteredTools = this.tools.filter(tool => {
      const matchesSearch = !this.searchQuery || 
        tool.name.toLowerCase().includes(this.searchQuery) ||
        tool.description.toLowerCase().includes(this.searchQuery) ||
        tool.category.toLowerCase().includes(this.searchQuery) ||
        tool.features.some(f => f.toLowerCase().includes(this.searchQuery));
      
      const matchesPricing = !pricing || tool.pricing === pricing;
      
      // If showing favorites only
      if (this.showFavoritesOnly) {
        return this.isFavorite(tool.id) && matchesSearch && matchesPricing;
      }
      
      // If showing most used only
      if (this.showMostUsedOnly) {
        return this.getUsageCount(tool.id) > 0 && matchesSearch && matchesPricing;
      }
      
      return matchesSearch && matchesPricing;
    });
    
    this.sortTools();
    this.renderTools();
    this.updateStats();
  }

  // Sort tools based on selected criteria
  sortTools() {
    switch(this.currentSort) {
      case 'name':
        this.filteredTools.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        this.filteredTools.sort((a, b) => b.rating - a.rating);
        break;
      case 'category':
        this.filteredTools.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'pricing':
        this.filteredTools.sort((a, b) => a.pricing.localeCompare(b.pricing));
        break;
      case 'mostUsed':
        this.filteredTools.sort((a, b) => this.getUsageCount(b.id) - this.getUsageCount(a.id));
        break;
    }
  }

  // Update view layout
  updateView() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    
    grid.className = 'tools-grid';
    
    if (this.currentView === 'list') {
      grid.classList.add('list-view');
    } else if (this.currentView === 'compact') {
      grid.classList.add('compact-view');
    }
    
    this.renderTools();
  }

  // Render all tools
  renderTools() {
    const container = document.getElementById('toolsGrid');
    if (!container) return;
    
    container.className = 'tools-grid';
    
    if (this.currentView === 'list') {
      container.classList.add('list-view');
    } else if (this.currentView === 'compact') {
      container.classList.add('compact-view');
    }
    
    if (this.filteredTools.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-title">No tools found</div>
          <div class="empty-state-text">Try adjusting your search or filters</div>
        </div>
      `;
      return;
    }
    
    const fragment = document.createDocumentFragment();
    
    this.filteredTools.forEach((tool, index) => {
      const card = this.createToolCard(tool, index);
      fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
    
    // Trigger fade-in animation
    setTimeout(() => {
      this.filteredTools.forEach((_, index) => {
        const card = container.children[index];
        if (card) card.style.opacity = '1';
      });
    }, 50);
  }

  // Create a single tool card
  createToolCard(tool, index) {
    const div = document.createElement('div');
    div.className = 'tool-card';
    div.style.animationDelay = `${index * 0.05}s`;
    
    if (this.currentView === 'list') {
      div.classList.add('list-view-card');
    } else if (this.currentView === 'compact') {
      div.classList.add('compact-view-card');
    }
    
    const stars = '★'.repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? '½' : '');
    const isFav = this.isFavorite(tool.id);
    const isSaved = this.isSaved(tool.id);
    const usageCount = this.getUsageCount(tool.id);
    
    div.innerHTML = `
      <button class="save-notepad-btn ${isSaved ? 'active' : ''}" data-tool-id="${tool.id}" title="Save to Notepad">
        ${isSaved ? '📌' : '📍'}
      </button>
      <button class="favorite-btn ${isFav ? 'active' : ''}" data-tool-id="${tool.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      <div class="card-header">
        <div class="card-icon">${tool.icon}</div>
        <div class="card-content">
          <h3>${tool.name}</h3>
          <p class="card-description">${tool.description}</p>
          <div class="card-rating">
            <span class="stars">${stars}</span>
            <span class="rating-value">${tool.rating}</span>
          </div>
        </div>
      </div>
      <div class="card-meta">
        <span class="tag tag-category">${tool.category}</span>
        <span class="tag tag-pricing">${tool.pricing}</span>
        <span class="tag tag-features">${tool.features.length} Features</span>
        ${usageCount > 0 ? `<span class="tag tag-usage">🔥 ${usageCount}x</span>` : ''}
      </div>
    `;
    
    // Card click event
    div.addEventListener('click', (e) => {
      if (!e.target.closest('.favorite-btn') && !e.target.closest('.save-notepad-btn')) {
        this.openModal(tool);
      }
    });
    
    // Favorite button click event
    div.querySelector('.favorite-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFavorite(tool.id);
    });
    
    // Save to notepad button click event
    div.querySelector('.save-notepad-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleSaveToNotepad(tool.id);
    });
    
    return div;
  }

  // Open tool details modal
  openModal(tool) {
    this.currentToolInModal = tool;
    
    // Increment usage count when tool is opened
    this.incrementUsage(tool.id);
    
    const stars = '★'.repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? '½' : '');
    
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalStars = document.getElementById('modalStars');
    const modalRatingValue = document.getElementById('modalRatingValue');
    const modalPrimaryBtn = document.getElementById('modalPrimaryBtn');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalUsageCount = document.getElementById('modalUsageCount');
    
    if (modalIcon) modalIcon.textContent = tool.icon;
    if (modalTitle) modalTitle.textContent = tool.name;
    if (modalDescription) modalDescription.textContent = tool.description;
    if (modalStars) modalStars.textContent = stars;
    if (modalRatingValue) modalRatingValue.textContent = tool.rating;
    if (modalPrimaryBtn) modalPrimaryBtn.href = tool.url;
    if (modalUsageCount) modalUsageCount.textContent = this.getUsageCount(tool.id);
    if (modalFeatures) {
      modalFeatures.innerHTML = tool.features.map(feature => 
        `<div class="feature-item">✅ ${feature}</div>`
      ).join('');
    }
    
    this.updateModalFavoriteButton();
    this.updateModalSaveButton();
    
    if (modalOverlay) {
      modalOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  // Update modal favorite button state
  updateModalFavoriteButton() {
    const btn = document.getElementById('modalFavoriteBtn');
    if (!btn || !this.currentToolInModal) return;
    
    if (this.isFavorite(this.currentToolInModal.id)) {
      btn.innerHTML = '❤️ Remove from Favorites';
    } else {
      btn.innerHTML = '🤍 Add to Favorites';
    }
  }

  // Update modal save button state
  updateModalSaveButton() {
    const btn = document.getElementById('modalSaveToNotepadBtn');
    if (!btn || !this.currentToolInModal) return;
    
    if (this.isSaved(this.currentToolInModal.id)) {
      btn.innerHTML = '📌 Remove from Notepad';
    } else {
      btn.innerHTML = '📍 Save to Notepad';
    }
  }

  // Close modal
  closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
    this.currentToolInModal = null;
    
    // Re-render tools to update usage count display
    this.renderTools();
  }

  // Share current tool
  shareCurrentTool() {
    if (!this.currentToolInModal) return;
    
    const shareData = {
      title: this.currentToolInModal.name,
      text: this.currentToolInModal.description,
      url: this.currentToolInModal.url
    };
    
    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(this.currentToolInModal.url);
      this.showToast('Link copied to clipboard!');
    }
  }

  // Update stats display
  updateStats() {
    const stats = document.getElementById('statsDisplay');
    if (stats) {
      stats.textContent = `${this.filteredTools.length} of ${this.tools.length} tools`;
    }
  }

  // Show toast notification
  showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AIToolsHub();
});
