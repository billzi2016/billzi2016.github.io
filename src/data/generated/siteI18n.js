// 站点级中英文文案和页面标题。
export const siteTranslations = {
  common: {
    en: {
      navHome: "Home",
      navExperience: "Experience",
      navProjects: "Projects",
      navPublications: "Publications",
      navPersonalIntro: "Personal Introduction",
      navMusic: "Music",
      citePaper: "Cite this paper",
      copied: "Copied",
      langToggle: "中文",
      themeToggleLight: "Dark",
      themeToggleDark: "Light",
      contactSchoolOne: "Purdue University",
      contactSchoolTwo: "Indiana University",
      footerAbout: "About This Website",
      footerDocs: "Maintenance Docs",
      footerSource: "Source",
      footerTech:
        "Custom-Built with Astro, Tailwind CSS, PNPM, MkDocs, Prettier, Stylelint, Playwright, GitHub Actions, and Spec-Driven Development (SDD).",
      footerAvailability: "Local Assets and No CDN Dependency for Stronger Network Availability.",
      footerAi:
        "AI-Friendly Engineering: Complete Specs, Clear Structure, Layered Agent Guidance, and Context-Efficient Maintenance.",
    },
    zh: {
      navHome: "首页",
      navExperience: "经历",
      navProjects: "项目",
      navPublications: "论文",
      navPersonalIntro: "个人介绍",
      navMusic: "音乐",
      citePaper: "引用这篇论文",
      copied: "已复制",
      langToggle: "EN",
      themeToggleLight: "深色",
      themeToggleDark: "浅色",
      contactSchoolOne: "普渡大学",
      contactSchoolTwo: "印第安纳大学",
      footerAbout: "关于本站",
      footerDocs: "维护文档",
      footerSource: "源代码",
      footerTech:
        "本站使用 Astro、Tailwind CSS、pnpm、MkDocs、Prettier、Stylelint、Playwright、GitHub Actions 和规格驱动开发（SDD）定制构建。",
      footerAvailability: "通过本地资产与无 CDN 依赖提高网络可用性。",
      footerAi: "AI 构建友好：规格齐全、结构分明、Agents 分层明确，并尽量节省上下文。",
    },
  },
  page: {
    home: {
      en: {
        lead:
          'I am a Ph.D. candidate working across <strong>Large Language Models (LLMs)</strong>, <strong>multimodal Artificial Intelligence (AI)</strong>, medical AI, sensing security, embedded hardware, sensing platforms, <strong>intelligent manufacturing systems</strong>, Machine Learning (ML) systems, and end-to-end AI deployment. <span class="lead-role-line"><strong>Target roles:</strong> Research Engineer, Applied Scientist, ML Engineer, LLM / AI Systems, hardware AI, and intelligent manufacturing systems roles.</span> My background also combines model development, system optimization, retrieval pipelines, embedded integration, hardware-aware experimentation, and bilingual communication for AI products, intelligent systems, manufacturing, and research.',
        guideTitle: "Site Guide",
        guideExperience:
          "Full CV-style page with research interests, technical skills, industry experience, research experience, and education.",
        guideProjects:
          "Ranked GitHub repository index, from the most job-relevant AI / systems work to the full repository archive.",
        guidePublications:
          "Representative publications first, followed by the complete publication list formatted for reading.",
        guideMusic:
          "A local classical audio room with shuffled playback, lightweight controls, and a small listening queue.",
        guideFocus: "Current Focus",
        researchTitle: "Research Interests",
        skillsTitle: "Technical Skills",
        aiSkillsTitle: "AI-Augmented Engineering Scope",
        aiSkillsNote:
          "This is not Vibe Coding or casual exploration. It describes what I can build with Agentic AI tools through Test-Driven Development (TDD), Spec-Driven Development (SDD), Verification, reproducible implementation, Debugging, and maintainable production-grade engineering. The Technical Skills section is a conservative baseline for technologies I can understand, inspect, debug, modify, and maintain directly; with Agentic AI assistance, the practical implementation scope becomes broader, while my role shifts toward Specification, Verification, Integration, and Engineering Review rather than memorizing every implementation detail.",
        highlightsTitle: "Selected Highlights",
      },
      zh: {
        lead:
          '我目前是博士阶段学生，研究方向覆盖<strong>大语言模型（Large Language Models, LLMs）</strong>、<strong>多模态人工智能（Artificial Intelligence, AI）</strong>、医学 AI、感知安全、嵌入式硬件、感知平台、<strong>智能制造系统</strong>、机器学习（Machine Learning, ML）系统和端到端 AI 部署。 <span class="lead-role-line"><strong>目标岗位：</strong>Research Engineer、Applied Scientist、ML Engineer、LLM / AI Systems、硬件 AI 和智能制造系统相关职位。</span> 我的背景也结合了模型开发、系统优化、检索流水线、嵌入式集成、硬件感知实验，以及面向 AI 产品、智能系统、制造业和科研场景的中英文沟通能力。',
        guideTitle: "站点导览",
        guideExperience: "完整在线简历页面，包含研究兴趣、技术技能、工业经历、研究经历和教育背景。",
        guideProjects: "按重要性排序的 GitHub 项目索引，以及完整仓库列表。",
        guidePublications: "先展示代表性论文，再展示完整且可读的论文清单。",
        guideMusic: "本地古典音频小播放器，支持随机播放、简单控制和轻量播放列表。",
        guideFocus: "当前重点",
        researchTitle: "研究兴趣",
        skillsTitle: "技术技能",
        aiSkillsTitle: "AI 辅助下的工程能力范围",
        aiSkillsNote:
          "这不是 Vibe Coding 或随意探索，而是说明在 Agentic AI 工具辅助下我能够写出和交付什么：通过测试驱动开发（Test-Driven Development, TDD）、规格驱动开发（Spec-Driven Development, SDD）、验证、复现、调试和可维护的工业级工程实现来编程与学习。Technical Skills / 技术技能部分是更保守的个人基础能力边界：我能够直接理解、检查、调试、修改和维护这些技术；在 Agentic AI 辅助下，实际可实现和交付的范围会更广，但我的角色重点会转向规格定义、验证、集成和工程审查，而不是记住每一个实现细节并全部手写。",
        highlightsTitle: "代表性亮点",
      },
    },
    experience: {
      en: {
        pageTag: "Full CV-style experience page.",
        researchTitle: "Research Interests",
        skillsTitle: "Technical Skills",
        industryTitle: "Industry Experience",
        researchExpTitle: "Research Experience",
        educationTitle: "Education",
      },
      zh: {
        pageTag: "完整在线简历式经历页面。",
        researchTitle: "研究兴趣",
        skillsTitle: "技术技能",
        industryTitle: "工业界经历",
        researchExpTitle: "研究经历",
        educationTitle: "教育背景",
      },
    },
    projects: {
      en: {
        pageTag:
          "Complete public GitHub repository list, ordered by importance first. Some entries are reproductions or reimplementations of older or classic projects rather than original projects.",
        rankingTitle: "Repository Ranking",
        rankingNote:
          "The first section is ordered by current relevance to my Artificial Intelligence (AI) / Machine Learning (ML) / research-engineering profile. The remaining repository index below excludes projects already shown in this selected section.",
        allTitle: "Remaining Repository Index",
        allNote:
          "The list below excludes the selected projects already shown above and keeps the remaining public repositories in the latest successful GitHub read order.",
      },
      zh: {
        pageTag: "完整公开 GitHub 仓库列表，前面先按重要性排序。部分项目是对旧项目或经典项目的复现 / 重新实现，并不是原始项目。",
        rankingTitle: "项目重要性排序",
        rankingNote:
          "前一部分按照我当前人工智能（Artificial Intelligence, AI）/ 机器学习（Machine Learning, ML）/ 研究工程方向的相关性排序。后一部分会排除上方已经展示过的精选项目。",
        allTitle: "其余仓库索引",
        allNote: "下面列表已排除上方精选项目，并保留其余公开仓库在最近一次成功 GitHub 读取中的顺序。",
      },
    },
    publications: {
      en: {
        pageTag: "Representative publications first, followed by the remaining publication list without duplicates.",
        selectedTitle: "Selected Publications",
        selectedNote:
          "This section is ordered by representative value for my current profile: first-author work, formally published work, and papers most relevant to Artificial Intelligence (AI) / Machine Learning (ML) / Large Language Model (LLM) / sensing / medical AI roles.",
        archiveTitle: "Remaining Publications",
        archiveNote:
          "The list below excludes the selected publications already shown above and is reformatted from the current BibTeX source into a human-readable bibliography.",
        publishedGroupTitle: "Published",
        preprintGroupTitle: "arXiv / Preprint",
        unpublishedGroupTitle: "Unpublished / In Preparation",
      },
      zh: {
        pageTag: "先看代表性论文，后面是已排除精选论文的其余论文列表。",
        selectedTitle: "代表性论文",
        selectedNote:
          "这里优先按我当前方向的代表性排序：第一作者工作、正式发表论文，以及最贴近人工智能（Artificial Intelligence, AI）/ 机器学习（Machine Learning, ML）/ 大语言模型（Large Language Model, LLM）/ 感知 / 医学 AI 求职方向的论文。",
        archiveTitle: "其余论文列表",
        archiveNote: "下面列表已排除上方精选论文，并由当前 BibTeX 源文件整理成人类可读格式，不再直接展示原始条目。",
        publishedGroupTitle: "已发表",
        preprintGroupTitle: "arXiv / 预印本",
        unpublishedGroupTitle: "未发表 / 准备中",
      },
    },
    personal: {
      en: {
        pageTag: "A personal page beyond research and projects.",
        personalIntroTitle: "Personal Introduction",
        hobbyTitle: "Hobby",
        hobbyNavItems: [
          { href: "#electronics-making", label: "Electronics Making" },
          { href: "#ai-full-stack-architect", label: "AI Full-Stack Architect" },
          { href: "#cat", label: "Cat" },
          { href: "#piano", label: "Piano" },
          { href: "#cheese", label: "Cheese" },
          { href: "#juice-forward-drinks", label: "Juice-Forward Drinks" },
        ],
        aiArchitectTitle: "AI Full-Stack Architect",
        aiArchitectParagraphs: [
          "One of my current long-term hobbies is training myself into an AI Full-Stack Architect: using AI-assisted engineering through Test-Driven Development (TDD), Spec-Driven Development (SDD), and Verification-Driven workflows, rather than Vibe Coding or intuition-only programming, to produce industrial-grade code and to design, build, verify, and maintain complete internet technology infrastructure end to end, from product logic and frontend interfaces to backend services, deployment, observability, automation, and long-term operations.",
          "Since May 2025, I have used AI tools at large scale and built substantial AI-Augmented Engineering Scope collaboration experience. I have directly encountered many recurring failure modes in AI-assisted engineering, so my focus is on clear Specifications, careful Review, Debugging, Integration, and Verification instead of simply accepting generated code.",
          "The work is not about blindly generating pages or code. I use Codex / Claude Code inside a Human-in-the-Loop workflow and push the collaboration through Spec-First, Review-Driven execution, with Test-Driven Development (TDD), Spec-Driven Development (SDD), and Continuous Integration / Continuous Delivery (CI/CD) practices used to improve readability, cross-platform support, maintainability, long-term maintenance efficiency, security, and stability.",
          "AI assistance greatly accelerates the overall pace of restructuring and cleanup, and when dealing with large, interdependent documentation sets, it has a natural advantage in structural organization, terminology alignment, and cross-document revision. That helps reduce the common problem of updating one section while leaving related documentation behind.",
          "My view is that AI-assisted programming depends on architectural ability and continuous trial and error. Only by working with AI at very high volume can a person understand where AI is strong, where it fails, and how to adjust the collaboration model in time. Vibe Coding is closer to giving AI a vague one-line request such as \"build me a website like Amazon.\" TDD and SDD are different: they require decomposing the work first, making tasks as small and explicit as possible so the AI context window does not overload and produce serious hallucinations.",
          "Doing that well requires an architect who understands microservice architecture, system boundaries, and code coupling points, rather than blindly asking AI to improvise. That is the real core of AI-assisted engineering. If a written Spec still causes generated function names, class names, or variable names to change every time and create confusion, then the Spec is the problem: it is not detailed enough. A Spec should let AI handle fine-grained implementation details and repetitive labor, not let AI independently decide the architecture or choose whether a place should follow KISS, DRY, or another design tradeoff.",
          "Architecture must still be designed by the human. AI is a Worker and Accelerator, not the owner of system judgment. It can speed up repetitive implementation, restructuring, documentation cleanup, and other forms of engineering labor, but the thinking must remain human. The human must always know what is being built, why it is being built, and how the system is supposed to hold together; if that clarity is lost, the project is already drifting toward failure and should often be deleted and rebuilt rather than patched blindly.",
          "The architect must understand the whole system from the beginning; otherwise the final system will inevitably drift in the wrong direction. AI-assisted programming is already a major trend, and repetitive work will inevitably be replaced. At the same time, SDD and TDD burn an extreme amount of tokens, because everything follows the Spec: when the Spec changes, the code often has to be deleted and rewritten at scale, at least across major versions, and old code needs to be distilled back into reusable Skills and Specs.",
          "Spec-First engineering used to be something many engineers deeply hated, because Specs were often obsolete documents full of version drift, written only because a release process forced them to exist. In AI-assisted engineering, that mindset has to be inverted. Otherwise, a person will be left behind by the era. The engineer has to move from being only the person who executes the work into a role closer to a PM, Architect, and Specification Owner. This is an extremely difficult transition.",
          "It is not outsourcing the brain to AI; it requires real engineering understanding, real project experience, and the ability to think purely and deeply about why systems collapse, then distill those lessons into better Specifications and Workflows. The most important thing becomes understanding every technology stack and every implementation detail before using it, because AI is much less likely to make the right decision if the human does not understand the toolchain first.",
          "At the same time, project decisions, acceptance, consolidation, and final editorial control remain Human-in-the-Loop, forming a strict barrier against AI hallucinations and preventing unverified information from entering the final content.",
          "AI collaboration can become an endless battle against cognitive load, pushing the limits of how much architectural pressure the mind can hold. A Spec must be something the human can read first, understand deeply first, and use to anticipate the real problems first. That requires architectural ability: knowing which wheels should not be reinvented, and knowing which mature wheels already exist. Maybe one day AI will fully replace humans and even produce complete architecture by itself, but that would require extreme context capacity and extreme needle-in-a-haystack retrieval ability. Current AI still seems far from that level, and even if it becomes possible in the future, it will likely be very expensive.",
        ],
        aiArchitectTokenCaption:
          "Monthly token usage on my personal account since May 2025, reflecting sustained AI-augmented engineering practice.",
        aiArchitectUsageImages: [
          {
            src: "./assets/images/ai-usage/Snipaste_2026-07-02_18-00-23.png",
            caption: "Cross-model token consumption",
          },
          {
            src: "./assets/images/ai-usage/Snipaste_2026-07-02_18-01-39.png",
            caption: "Conversation turns by model",
          },
          {
            src: "./assets/images/ai-usage/Snipaste_2026-07-02_18-02-39.png",
            caption: "Lines of code generated",
          },
        ],
        aiArchitectShowcaseIntro:
          "These public-facing snapshots show how the surrounding documentation sites, repository presentation, and project entry points are being shaped into a more readable engineering surface.",
        aiArchitectShowcaseImages: [
          {
            src: "./assets/images/ai-usage/mkdocs.png",
            caption: "MkDocs documentation site: python-git-reproduction",
          },
          {
            src: "./assets/images/ai-usage/sphinx.png",
            caption: "Sphinx documentation site: DeepChrInteract-v2",
          },
          {
            src: "./assets/images/ai-usage/html.png",
            caption: "Static site: billzi2016.github.io",
          },
          {
            src: "./assets/images/ai-usage/git.png",
            caption: "Repository README and documentation system: python-git-reproduction",
          },
          {
            src: "./assets/images/ai-usage/awesome.png",
            caption: "Curated repository presentation: Awesome Flow Matching",
          },
        ],
        catTitle: "Cat",
        catText: "This is my cat, Charlie. He was abandoned at Petco and later adopted by me.",
        catImages: [
          { src: "./assets/images/cat/1.jpg", caption: "Charlie scratching" },
          { src: "./assets/images/cat/2.jpg", caption: "Charlie zoning out" },
          { src: "./assets/images/cat/3.jpg", caption: "Charlie resting" },
        ],
        electronicsTitle: "Electronics Making",
        electronicsText:
          "My electronics work ranges from discrete transistor logic to relay-driven mechanisms and CM600HA-24H IGBT-module-driven DRSSTC systems. I like discrete-component circuits with many visible parts, clean physical structure, and the visual order that comes from components arranged neatly.",
        electronicsProjects: [
          {
            title: "Hardware Music Box",
            text:
              "A hardware music box built entirely from transistors, without integrated circuits. The interest is in making timing, switching, and sound generation work through discrete components instead of hiding the logic inside chips.",
          },
          {
            title: "Relay Mechanical Clock",
            text:
              "A relay-based clock that uses transistors for driving and flyback diodes for relay protection, so the relays can switch reliably without damaging the driving circuit.",
            images: [
              {
                src: "./assets/images/relay-clock/hexadecimal-counter-board.png",
                caption: "Hexadecimal Counter board",
              },
              {
                src: "./assets/images/relay-clock/bcd-display-decoder-board.png",
                caption: "BCD display decoder board",
              },
              {
                src: "./assets/images/relay-clock/one-hz-clock-source-board.png",
                caption: "1 Hz clock source board",
              },
              {
                src: "./assets/images/relay-clock/and-not-logic-board.png",
                caption: "A&B / NOTA relay logic board",
              },
              {
                src: "./assets/images/relay-clock/clock-adjuster-board.png",
                caption: "Clock adjuster board",
              },
              {
                src: "./assets/images/relay-clock/power-distribution-board.png",
                caption: "Power distribution board",
              },
              {
                src: "./assets/images/relay-clock/1.jpg",
                caption: "Relay clock top view with display and adjuster boards",
              },
              {
                src: "./assets/images/relay-clock/2.jpg",
                caption: "Stacked relay clock assembly side view",
              },
              {
                src: "./assets/images/relay-clock/3.jpg",
                caption: "Front view of the relay clock module stack",
              },
              {
                src: "./assets/images/relay-clock/4.jpg",
                caption: "Relay clock running inside the acrylic enclosure",
              },
              {
                src: "./assets/images/relay-clock/5.jpg",
                caption: "Relay clock powered on inside the acrylic enclosure",
              },
            ],
          },
          {
            title: "Relay ALU",
            text:
              "A relay-based ALU project where Arduino handles the remaining CPU-side control while the ALU itself is implemented with relays. ULN2803 driver arrays are used to drive the relay coils cleanly from logic-level control signals.",
            images: [
              {
                src: "./assets/images/relay-alu/relay-alu-front.png",
                caption: "4-bit relay ALU PCB front side",
              },
              {
                src: "./assets/images/relay-alu/relay-alu-back.png",
                caption: "4-bit relay ALU PCB back side",
              },
            ],
          },
          {
            title: "IRFP260N ZVS High-Frequency Driver",
            text:
              "A ZVS high-frequency driver built with IRFP260N TO-247 power MOSFETs, used for high-current resonant drive and induction-heating-style experiments. The project focuses on power device selection, resonant tank behavior, thermal handling, and heavy-current wiring.",
          },
          {
            title: "CM600HA-24H DRSSTC",
            text:
              "A Dual Resonant Solid State Tesla Coil built around CM600HA-24H IGBT modules. This project involves high-voltage resonance, power electronics, gate driving, protection circuits, tuning, and real hardware debugging.",
            images: [
              {
                src: "./assets/images/drsstc/1.jpg",
                caption: "Full DRSSTC assembly with toroidal top load and secondary coil",
              },
              {
                src: "./assets/images/drsstc/2.jpg",
                caption: "Full-height DRSSTC view showing the large toroid and base assembly",
              },
              {
                src: "./assets/images/drsstc/3.jpg",
                caption: "Heavy power stage with IGBT module, heatsink, breaker, and analog meters",
              },
              {
                src: "./assets/images/drsstc/4.jpg",
                caption: "DC bus section with large electrolytic capacitors and heavy wiring",
              },
              {
                src: "./assets/images/drsstc/5.jpg",
                caption: "Dawn / Tianming DTR resonant capacitor bank with copper busbars",
              },
              {
                src: "./assets/images/drsstc/6.jpg",
                caption: "Primary power wiring with busbars, gate-drive wiring, and current transformer",
              },
            ],
          },
          {
            title: "CM600HA-24H VVVF",
            text:
              "A VVVF inverter project based on CM600HA-24H IGBT modules, covering three-phase inversion, PWM modulation, DC bus power, gate driving, and motor-control debugging. This project leans toward heavy industrial power electronics.",
          },
        ],
        pianoTitle: "Piano",
        pianoIntro:
          "I like Romantic piano music, especially Chopin and Liszt. I tend to enjoy music with a clear singing line, dramatic contrast, and enough technical brilliance to feel alive without losing lyricism.",
        pianoGroups: [
          {
            title: "Mozart",
            items: [
              "Piano Sonata No. 11 in A major, K. 331",
              "Piano Sonata No. 16 in C major, K. 545",
              "Lacrimosa from Requiem, K. 626",
            ],
          },
          {
            title: "Beethoven",
            items: [
              "Beethoven - Piano Sonata No. 8 in C minor, Op. 13 (Pathetique)",
              "Beethoven - Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2 (Moonlight)",
              "Beethoven - Piano Sonata No. 17 in D minor, Op. 31 No. 2 (Tempest)",
            ],
          },
          {
            title: "Chopin",
            items: [
              "Nocturne Op. 9 No. 2",
              "Nocturne Op. 9 No. 1",
              "Nocturne Op. 55",
              "Chopin - Nocturne Op. 48 No. 1",
              "Waltz Op. 34",
              "Chopin - Waltz Op. 64 No. 1",
              "Chopin - Waltz Op. 64 No. 2",
              "Chopin - Waltz in A minor, B. 150, Op. posth.",
              "Grande Valse Brillante Op. 18",
              "Fantaisie-Impromptu Op. 66",
              "Ballade No. 1 Op. 23",
              "Chopin - Etude Op. 10 No. 5 (Black Key)",
              "Chopin - Etude Op. 25 No. 5 (Wrong Note)",
              "Chopin - Etude Op. 10 No. 12 (Revolutionary)",
              "Chopin - Etude Op. 10 No. 4 (Torrent)",
              "Chopin - Etude Op. 10 No. 1 (Waterfall)",
            ],
          },
          {
            title: "Liszt",
            items: [
              "Liebestraum No. 3",
              "Un Sospiro",
              "Consolation No. 3",
              "Liszt - Grandes Etudes de Paganini No. 3 (La Campanella)",
              "Hungarian Rhapsody No. 2",
              "Liszt - Transcendental Etude No. 4 (Mazeppa)",
            ],
          },
          {
            title: "Ragtime",
            items: [
              "Scott Joplin - Maple Leaf Rag",
              "Scott Joplin - The Entertainer",
              "Scott Joplin - Peacherine Rag",
              "Scott Joplin - Magnetic Rag",
              "Temptation Rag",
              "Jelly Roll Morton - The Crave",
              "Randy Newman - You've Got a Friend in Me",
              "Alan Menken - Friend Like Me",
            ],
          },
        ],
        cheeseTitle: "Cheese",
        hobbyText:
          "One thing I enjoy is going to Kroger and looking through different cheeses. I have tried a lot, and honestly many of them taste closer to each other than people make them sound, but I still like noticing the small differences. Most of the time I use cheese for sandwiches, and I usually prefer clean, original flavors or slightly sweet ones. My current favorites are aged cheddar and Swiss.",
        krogerCheeseTitle: "Kroger Cheese Notes",
        krogerCheeseItems: [
          "Aged Cheddar / Extra Sharp Cheddar: sharp, dense, nutty, and sometimes a little crystalline when aged. This is one of my current favorites.",
          "Swiss / Emmental: mild, nutty, and easy to use in sandwiches. The classic holes make it recognizable, but I mostly like its clean taste.",
          "Gruyere: a stronger Alpine-style cheese with nutty, savory flavor and excellent melting texture.",
          "Brie: soft, creamy, and mild, with an edible bloomy rind. Good when paired with crackers, honey, or jam.",
          "Gouda / Aged Gouda: young Gouda is smooth and slightly sweet; aged Gouda can become firmer, nuttier, and more caramel-like.",
          "Parmesan / Parmigiano-Reggiano: hard, salty, and umami-heavy. I see it more as a finishing cheese for pasta, salad, or soup than a sandwich cheese.",
          "Raclette: built for melting, rich and savory, good with potatoes or grilled sandwiches.",
          "Fontina: mild, creamy, and very melt-friendly, useful as a base when I want a softer sandwich texture.",
          "Goat Cheese / Chevre: tangy, soft, and fresh-tasting. Better with honey, fruit, or salad than in my usual sandwich routine.",
          "Fresh Mozzarella / Burrata: milky and fresh; burrata is creamier inside and works best with tomato, olive oil, and basil.",
          "Feta: salty, crumbly, and tangy, more Mediterranean-style than sandwich-style for me.",
          "Oaxaca: stringy and melty, useful for quesadillas or hot sandwiches.",
          "Havarti: soft, mild, and creamy, an easy everyday sandwich cheese.",
          "Dubliner / Irish-style Cheddar: sharper and nuttier than basic cheddar, with a slight sweetness.",
        ],
        festivalCheeseTitle: "Cheese Festival Trial",
        festivalCheeseItems: [
          "Blue Cheese: I tried this at a cheese festival, not as a Kroger regular. The blue-green mold veins make it salty, funky, and much more intense. I can appreciate it, but it is too expensive and not my everyday sandwich choice.",
        ],
        drinkTitle: "Juice-Forward Drinks",
        drinkIntro:
          "I also like making light, sparkling, juice-forward drinks at home. I usually buy sparkling wine or mixers from Costco, then make something refreshing myself. The point is not heavy alcohol; I prefer drinks that taste like fruit juice first, with only a small amount of alcohol when I use it.",
        drinkGroups: [
          {
            title: "Salt and Citrus",
            items: [
              "Paloma: tequila, lime, grapefruit soda, and a salt rim. I like the grapefruit bitterness, citrus, salt, and bubbles together.",
              "Salty Dog: vodka or gin with grapefruit juice and a heavy salt rim. The salt makes the grapefruit taste cleaner and hides the alcohol edge.",
              "Margarita: tequila, lime, orange liqueur, and a salt rim. I like it more as a bright citrus drink than as a strong cocktail.",
            ],
          },
          {
            title: "Sugar Rim and Sweet-Sour Balance",
            items: [
              "Lemon Drop Martini: vodka, lemon juice, syrup, and a sugar rim. It tastes close to a polished lemon candy when made lightly.",
              "Sidecar: cognac, orange liqueur, lemon juice, and a sugar rim. I like the orange-jam direction, though I would still make it lighter.",
            ],
          },
          {
            title: "Fruit and Low-Alcohol",
            items: [
              "Yuzushu: yuzu-based Japanese fruit liqueur. It is close to umeshu in spirit, but brighter and more citrus-forward.",
              "Sangria: wine, fruit, and sometimes soda. This fits my preference well because it is fruit-first, easy to dilute, and good for sharing.",
              "Sparkling wine spritz: Costco sparkling wine plus fruit juice or citrus soda. This is the most practical version for me at home.",
            ],
          },
        ],
      },
      zh: {
        pageTag: "研究和项目之外的一点个人介绍。",
        personalIntroTitle: "个人介绍",
        hobbyTitle: "Hobby",
        hobbyNavItems: [
          { href: "#electronics-making", label: "电子制作" },
          { href: "#ai-full-stack-architect", label: "AI 全栈架构师" },
          { href: "#cat", label: "猫" },
          { href: "#piano", label: "钢琴" },
          { href: "#cheese", label: "奶酪" },
          { href: "#juice-forward-drinks", label: "果汁型饮料和气泡酒" },
        ],
        aiArchitectTitle: "AI 全栈架构师",
        aiArchitectParagraphs: [
          "我现在的一个长期爱好，是把自己训练成 AI 全栈架构师：借助 AI 辅助工程能力，通过测试驱动开发（Test-Driven Development, TDD）、规格驱动开发（Spec-Driven Development, SDD）和 Verification-Driven 的工程流程，而不是 Vibe Coding 或凭感觉编程，产出工业级代码，并从产品逻辑、前端界面、后端服务、部署、可观测性、自动化到长期运维，完成整套互联网技术设施的设计、搭建、验证和维护。",
          "从 2025 年 5 月开始，我就以大规模方式使用 AI 工具，积累了充分的 AI-Augmented Engineering Scope 合作经验。很多 AI 辅助工程中常见的问题和失效模式，我都已经在实际协作中反复遇到过，因此我的重点不是简单接受生成代码，而是进行清晰规格定义、审查、调试、集成和验证。",
          "这项工作并不是为了盲目生成页面或代码。我把 Codex / Claude Code 放在 Human-in-the-Loop 的工作流里使用，并通过 Spec-First、Review-Driven 的方式推进，同时持续引入测试驱动开发（Test-Driven Development, TDD）、规格驱动开发（Spec-Driven Development, SDD）和持续集成 / 持续交付（Continuous Integration / Continuous Delivery, CI/CD）等工程实践，去提升可读性、多平台支持能力、可维护性、后续维护效率、安全性和稳定性。",
          "AI 辅助极大提升了整体整理和重构速度，而在面对数量众多、相互关联的文档时，AI 也天然更擅长做结构梳理、术语统一和跨文档联动修订，从而减少“这一处改了、另一处没跟上”的问题。",
          "我的理解是，AI 辅助编程真正需要的是架构能力和持续不断的试错。只有持续、巨量地和 AI 一起工作，才能真正掌握 AI 工作的优势和问题，并及时调整自己适应 AI 协同工作的模式。Vibe Coding 更像是丢给 AI 一句非常模糊的话，例如“给我做个类似 Amazon 的网站”。而 TDD 和 SDD 不同，它们要求先拆分任务，把任务拆得尽可能细，避免 AI 的上下文窗口爆掉并产生严重幻觉。",
          "要把任务拆得足够细，需要架构师对微服务架构、系统边界和代码耦合位置足够熟悉，而不是盲目让 AI 胡作。这才是使用 AI 辅助编程的核心所在。如果写了 Spec 之后，每次生成的函数名称、类名称、变量名称都不同，并且造成严重困扰，这通常说明 Spec 本身写得有问题，不够详细。Spec 是让 AI 去做细枝末节、需要大量人力和重复劳动的地方，而不是让 AI 自己设计，也不是让 AI 自己决定这里应该用 KISS 还是 DRY。",
          "架构仍然必须由人来设计和搭建。AI 是 Worker，是 Accelerator，但不是系统判断权的拥有者。它可以显著加快重复实现、结构整理、文档补全和各种苦力劳动，但真正的思考必须始终由人来完成。人必须始终知道自己在做什么、为什么这样做、系统整体应当如何成立；如果这一点已经丢失，那么这个项目往往就不是继续盲修盲补的问题，而是应该整体删除后重新设计。",
          "架构师一定要在开始的时候就对整个系统有充分了解，否则做出来的系统一定会是歪的。AI 辅助编程已经是大势所趋，以后重复性工作必然被替代。同时，SDD 和 TDD 会极度烧 token，因为一切以 Spec 为主，Spec 变了，代码就要大规模删改，至少在大版本上会完全删改；老代码也需要被蒸馏成可复用的 Skill 或 Spec，这本身也是极度燃烧 token 的过程。",
          "以 Spec 为主，曾经是工程师极度痛恨的事情，因为 Spec 往往是完全过时的文档，里面版本丛生，如果不是为了硬着头皮发布，几乎完全没法看。但在 AI 辅助工程里，现在的思维模式必须颠倒过来，否则就会被时代淘汰。工程师要从单纯干活的人，转变成更接近 PM、架构师和规格负责人的角色。这是一个极难的转变。",
          "这不是大脑外包，而是必须真正理解工程、真正做过工程，才能达成的事情。它反而要求更纯粹、更深度的思考，并且要把项目垮塌、系统失控、协作失败的经验教训不断总结成更好的 Spec 和工作流。所以最重要的事情变成了：你使用的每一个技术栈、每一个实现细节，你都必须先懂，AI 才不容易做错。",
          "与此同时，项目取舍、内容验收、结构收敛以及最终编辑控制始终保持 Human-in-the-Loop，以对 AI 幻觉形成严格抑制，避免未经验证的信息进入最终内容。",
          "AI 协作会变成一场永无止境、考验大脑极限承压能力的无边战争。Spec 也必须是自己先看懂、先深度理解、先知道所有问题的东西，而不是随手丢给 AI 的文本。这要求真正的架构能力：知道什么轮子不应该自己造，也知道有哪些成熟的轮子可以用。也许有一天 AI 会完全取代人类，连架构都能自己做出来，但这需要极限上下文能力和极限的大海捞针能力。依靠目前的 AI 似乎还做不到。即使未来能做到，也会非常昂贵。",
        ],
        aiArchitectTokenCaption:
          "自 2025 年 5 月以来个人账号的月度 token 使用量，体现持续的 AI 辅助工程实践。",
        aiArchitectUsageImages: [
          {
            src: "./assets/images/ai-usage/Snipaste_2026-07-02_18-00-23.png",
            caption: "跨模型 token 消耗",
          },
          {
            src: "./assets/images/ai-usage/Snipaste_2026-07-02_18-01-39.png",
            caption: "按模型统计的对话轮次",
          },
          {
            src: "./assets/images/ai-usage/Snipaste_2026-07-02_18-02-39.png",
            caption: "累计生成代码行数",
          },
        ],
        aiArchitectShowcaseIntro:
          "这些门面截图集中展示了文档站、仓库呈现方式和项目入口是如何被整理成更易读的工程展示面的。",
        aiArchitectShowcaseImages: [
          {
            src: "./assets/images/ai-usage/mkdocs.png",
            caption: "MkDocs 文档站：python-git-reproduction",
          },
          {
            src: "./assets/images/ai-usage/sphinx.png",
            caption: "Sphinx 文档站：DeepChrInteract-v2",
          },
          {
            src: "./assets/images/ai-usage/html.png",
            caption: "原生静态站：billzi2016.github.io",
          },
          {
            src: "./assets/images/ai-usage/git.png",
            caption: "仓库 README 与文档系统示例：python-git-reproduction",
          },
          {
            src: "./assets/images/ai-usage/awesome.png",
            caption: "整理型仓库展示：Awesome Flow Matching",
          },
        ],
        catTitle: "猫",
        catText: "这是我的小猫查理。它是被人遗弃在 Petco 后由我收养的。",
        catImages: [
          { src: "./assets/images/cat/1.jpg", caption: "瘙痒中的查理" },
          { src: "./assets/images/cat/2.jpg", caption: "发呆中的查理" },
          { src: "./assets/images/cat/3.jpg", caption: "休息中的查理" },
        ],
        electronicsTitle: "电子制作",
        electronicsText:
          "我的电子制作从分立三极管逻辑、继电器机械结构，到 CM600HA-24H IGBT 模块驱动的 DRSSTC 都有涉及。我喜欢做那种分立式、有元器件数量之美、元件整齐排列的电路。",
        electronicsProjects: [
          {
            title: "硬件八音盒",
            text:
              "全三极管实现的硬件八音盒，没有使用任何集成电路。重点是用分立元件完成时序、开关和发声逻辑，而不是把逻辑藏在芯片里。",
          },
          {
            title: "纯继电器机械表",
            text:
              "以继电器为核心的机械表，同时使用三极管做驱动、二极管做续流保护，避免继电器切换时反冲电压损坏驱动电路。",
            images: [
              {
                src: "./assets/images/relay-clock/hexadecimal-counter-board.png",
                caption: "Hexadecimal Counter 分频 / 计数板",
              },
              {
                src: "./assets/images/relay-clock/bcd-display-decoder-board.png",
                caption: "BCD 显示译码板",
              },
              {
                src: "./assets/images/relay-clock/one-hz-clock-source-board.png",
                caption: "1 Hz 晶振时钟源板",
              },
              {
                src: "./assets/images/relay-clock/and-not-logic-board.png",
                caption: "A&B / NOTA 继电器逻辑板",
              },
              {
                src: "./assets/images/relay-clock/clock-adjuster-board.png",
                caption: "调表板",
              },
              {
                src: "./assets/images/relay-clock/power-distribution-board.png",
                caption: "电源分配板",
              },
              {
                src: "./assets/images/relay-clock/1.jpg",
                caption: "继电器机械表显示板与调表板俯视图",
              },
              {
                src: "./assets/images/relay-clock/2.jpg",
                caption: "继电器机械表多层结构侧视图",
              },
              {
                src: "./assets/images/relay-clock/3.jpg",
                caption: "继电器机械表模块堆叠正面图",
              },
              {
                src: "./assets/images/relay-clock/4.jpg",
                caption: "透明亚克力外壳内的通电运行状态",
              },
              {
                src: "./assets/images/relay-clock/5.jpg",
                caption: "透明亚克力外壳内通电运行的继电器机械表",
              },
            ],
          },
          {
            title: "继电器 ALU",
            text:
              "用 Arduino 完成 CPU 其他部分的控制，ALU 本体由继电器实现，并使用 ULN2803 做继电器线圈驱动，把逻辑控制信号和继电器负载更稳定地接起来。",
            images: [
              {
                src: "./assets/images/relay-alu/relay-alu-front.png",
                caption: "4-bit 继电器 ALU PCB 正面",
              },
              {
                src: "./assets/images/relay-alu/relay-alu-back.png",
                caption: "4-bit 继电器 ALU PCB 反面",
              },
            ],
          },
          {
            title: "IRFP260N ZVS 高频驱动",
            text:
              "基于 IRFP260N TO-247 封装功率 MOSFET 的 ZVS 高频驱动电路，用于大电流谐振驱动和感应加热类实验。这个项目重点在功率器件选型、谐振网络、散热和大电流布线。",
          },
          {
            title: "CM600HA-24H DRSSTC",
            text:
              "围绕 CM600HA-24H IGBT 模块驱动的 DRSSTC（Dual Resonant Solid State Tesla Coil）。这类项目涉及高压谐振、电力电子、门极驱动、保护电路、调谐和实机调试。",
            images: [
              {
                src: "./assets/images/drsstc/1.jpg",
                caption: "带环形顶端负载和次级线圈的 DRSSTC 整机",
              },
              {
                src: "./assets/images/drsstc/2.jpg",
                caption: "展示大型顶端负载和底座结构的 DRSSTC 全高视图",
              },
              {
                src: "./assets/images/drsstc/3.jpg",
                caption: "包含 IGBT 模块、散热器、断路器和指针表的重型功率级",
              },
              {
                src: "./assets/images/drsstc/4.jpg",
                caption: "大型电解电容和重载布线组成的直流母线区域",
              },
              {
                src: "./assets/images/drsstc/5.jpg",
                caption: "使用铜排连接的天明 DTR 谐振电容组",
              },
              {
                src: "./assets/images/drsstc/6.jpg",
                caption: "包含铜排、门极驱动线和电流互感器的初级功率布线",
              },
            ],
          },
          {
            title: "CM600HA-24H VVVF",
            text:
              "基于 CM600HA-24H IGBT 模块的 VVVF 变频驱动项目，围绕三相逆变、PWM 调制、母线供电、门极驱动和电机控制调试展开。这个项目更偏向重型工业功率电子设备。",
          },
        ],
        pianoTitle: "钢琴",
        pianoIntro:
          "我喜欢浪漫派钢琴，尤其是 Chopin 和 Liszt。相比单纯炫技，我更喜欢旋律线清楚、情绪有起伏、技术感和歌唱性同时存在的作品。",
        pianoGroups: [
          {
            title: "Mozart",
            items: [
              "Piano Sonata No. 11 in A major, K. 331",
              "Piano Sonata No. 16 in C major, K. 545",
              "Lacrimosa from Requiem, K. 626",
            ],
          },
          {
            title: "Beethoven",
            items: [
              "Beethoven - Piano Sonata No. 8 in C minor, Op. 13 (Pathetique)",
              "Beethoven - Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2 (Moonlight)",
              "Beethoven - Piano Sonata No. 17 in D minor, Op. 31 No. 2 (Tempest)",
            ],
          },
          {
            title: "Chopin",
            items: [
              "Nocturne Op. 9 No. 2",
              "Nocturne Op. 9 No. 1",
              "Nocturne Op. 55",
              "Chopin - Nocturne Op. 48 No. 1",
              "Waltz Op. 34",
              "Chopin - Waltz Op. 64 No. 1",
              "Chopin - Waltz Op. 64 No. 2",
              "Chopin - Waltz in A minor, B. 150, Op. posth.",
              "Grande Valse Brillante Op. 18",
              "Fantaisie-Impromptu Op. 66",
              "Ballade No. 1 Op. 23",
              "Chopin - Etude Op. 10 No. 5 (Black Key)",
              "Chopin - Etude Op. 25 No. 5 (Wrong Note)",
              "Chopin - Etude Op. 10 No. 12 (Revolutionary)",
              "Chopin - Etude Op. 10 No. 4 (Torrent)",
              "Chopin - Etude Op. 10 No. 1 (Waterfall)",
            ],
          },
          {
            title: "Liszt",
            items: [
              "Liebestraum No. 3",
              "Un Sospiro",
              "Consolation No. 3",
              "Liszt - Grandes Etudes de Paganini No. 3 (La Campanella)",
              "Hungarian Rhapsody No. 2",
              "Liszt - Transcendental Etude No. 4 (Mazeppa)",
            ],
          },
          {
            title: "Ragtime",
            items: [
              "Scott Joplin - Maple Leaf Rag",
              "Scott Joplin - The Entertainer",
              "Scott Joplin - Peacherine Rag",
              "Scott Joplin - Magnetic Rag",
              "Temptation Rag",
              "Jelly Roll Morton - The Crave",
              "Randy Newman - You've Got a Friend in Me",
              "Alan Menken - Friend Like Me",
            ],
          },
        ],
        cheeseTitle: "奶酪",
        hobbyText:
          "我喜欢做的一件事情是去 Kroger 看各种各样的奶酪。我吃过不少，但说实话很多吃起来区别没有别人描述得那么夸张；不过我还是喜欢观察它们之间细微的差别。我大多数时候都是拿奶酪做三明治，所以最后还是更喜欢原味、干净一点的风味，或者带一点微甜的类型。目前最喜欢的是 Aged Cheddar 和 Swiss。",
        krogerCheeseTitle: "Kroger 奶酪笔记",
        krogerCheeseItems: [
          "Aged Cheddar / Extra Sharp Cheddar：味道 sharp、浓、偏坚果香，陈年后有时会有一点结晶感。这是我目前最喜欢的类型之一。",
          "Swiss / Emmental：温和、带坚果香，很适合做三明治。洞眼很有辨识度，但我主要喜欢它干净的味道。",
          "Gruyere：更进阶一点的 Alpine 风格奶酪，坚果香和咸鲜感更明显，融化效果很好。",
          "Brie：软质白霉奶酪，奶油感强，外皮可以吃，适合配 crackers、蜂蜜或果酱。",
          "Gouda / Aged Gouda：年轻 Gouda 更顺滑、微甜；陈年 Gouda 会更硬，焦糖感和坚果感更明显。",
          "Parmesan / Parmigiano-Reggiano：硬质、咸鲜、umami 很强。我更把它当成刨在 pasta、沙拉或汤上的 finishing cheese。",
          "Raclette：典型融化型奶酪，热起来香，适合土豆或 grilled sandwich。",
          "Fontina：温和、奶香、很会融化，适合当三明治里的柔和基底。",
          "Goat Cheese / Chevre：羊奶酪，酸感更明显，质地柔软，适合配蜂蜜、水果或沙拉。",
          "Fresh Mozzarella / Burrata：新鲜、奶感强；Burrata 里面更 creamy，适合番茄、橄榄油和 basil。",
          "Feta：咸、碎、酸感明显，更偏 Mediterranean 风味，不太是我日常三明治路线。",
          "Oaxaca：拉丝感强，适合 quesadilla 或热三明治。",
          "Havarti：柔软、温和、奶香，是很容易接受的日常三明治奶酪。",
          "Dubliner / Irish-style Cheddar：比普通 cheddar 更 sharp、更坚果香，还有一点微甜。",
        ],
        festivalCheeseTitle: "奶酪节尝试过",
        festivalCheeseItems: [
          "Blue Cheese / 青霉菌奶酪：这个是我在奶酪节吃到的，不算 Kroger 日常清单。蓝绿色霉纹让它更咸、更冲、更 funky。我能理解它的特点，但它太贵了，也不是我日常做三明治会优先选的类型。",
        ],
        drinkTitle: "果汁型饮料和气泡酒",
        drinkIntro:
          "我也喜欢在家自己调一点清爽、带气泡、偏果汁型的饮料。一般是从 Costco 买气泡酒、苏打或果汁类材料回来自己调。我的偏好不是重酒精，而是像果汁饮料一样好入口；就算放酒精，也通常只放很少。",
        drinkGroups: [
          {
            title: "盐与柑橘",
            items: [
              "Paloma：龙舌兰、青柠、西柚苏打和盐边。重点是西柚的微苦、柑橘酸、盐和气泡感，不是追求酒精感。",
              "Salty Dog：伏特加或金酒、西柚汁和厚盐边。盐会让西柚更清爽，也能把酒精边缘压下去。",
              "Margarita：龙舌兰、青柠、橙皮利口酒和盐边。我更把它当成明亮的柑橘饮料，而不是很烈的鸡尾酒。",
            ],
          },
          {
            title: "糖边与酸甜平衡",
            items: [
              "Lemon Drop Martini：伏特加、柠檬汁、糖浆和糖边。调轻一点时像高级柠檬硬糖，酸甜、干净、好入口。",
              "Sidecar：干邑、橙皮利口酒、柠檬汁和糖边。它有橘子果酱一样的酸甜方向，但我会更喜欢低酒精版本。",
            ],
          },
          {
            title: "果香与微醺",
            items: [
              "Yuzushu：日本柚子酒，和梅子酒是类似方向，但更清爽、更柑橘。我喜欢这种自然果香。",
              "Sangria：红酒、水果块，有时加一点苏打。它很符合我的偏好，因为是水果优先，也容易稀释，适合分享。",
              "Sparkling wine spritz：Costco 买的气泡酒加果汁或柑橘苏打，这是我在家最实用的版本。",
            ],
          },
        ],
      },
    },
    music: {
      en: {
        pageTag: "A small listening room with a local shuffled audio playlist.",
        introTitle: "Listening Room",
        playlistTitle: "Playlist",
        playlistNote:
          "All audio files are stored locally inside this site. Playback defaults to 20% volume and keeps shuffling after each piece finishes.",
        nowPlaying: "Now Playing",
        volumeLabel: "Volume",
        randomLabel: "Shuffle Next",
        prevLabel: "Previous",
        nextLabel: "Next",
      },
      zh: {
        pageTag: "一个使用本地音频随机播放的小型听音房。",
        introTitle: "听音房",
        playlistTitle: "播放列表",
        playlistNote:
          "所有音频文件都保存在站点本地。默认音量为 20%，每首结束后会继续随机切换下一首。",
        nowPlaying: "当前播放",
        volumeLabel: "音量",
        randomLabel: "随机下一首",
        prevLabel: "上一首",
        nextLabel: "下一首",
      },
    },
  },
};

export const sitePageTitles = {
  home: { en: "Ziqian Bi | Home", zh: "毕梓仟 | 首页" },
  experience: { en: "Ziqian Bi | Experience", zh: "毕梓仟 | 经历" },
  projects: { en: "Ziqian Bi | Projects", zh: "毕梓仟 | 项目" },
  publications: { en: "Ziqian Bi | Publications", zh: "毕梓仟 | 论文" },
  personal: { en: "Ziqian Bi | Personal Introduction", zh: "毕梓仟 | 个人介绍" },
  music: { en: "Ziqian Bi | Music", zh: "毕梓仟 | 音乐" },
};
