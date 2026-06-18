// 站点级交互：中英文切换、深浅色切换、导航高亮，以及统一内容源渲染。
const translations = {
  common: {
    en: {
      navHome: "Home",
      navExperience: "Experience",
      navProjects: "Projects",
      navPublications: "Publications",
      navPersonalIntro: "Personal Intro",
      navMusic: "Music",
      citePaper: "Cite this paper",
      copied: "Copied",
      langToggle: "中文",
      themeToggleLight: "Dark",
      themeToggleDark: "Light",
      contactSchoolOne: "Purdue University",
      contactSchoolTwo: "Indiana University",
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
          "This is not vibe coding or casual exploration. It describes what I can build with agentic AI tools through Test-Driven Development (TDD), Spec-Driven Development (SDD), verification, reproducible implementation, debugging, and maintainable production-grade engineering. The Technical Skills section is a conservative baseline for technologies I can understand, inspect, debug, modify, and maintain directly; with agentic AI assistance, the practical implementation scope becomes broader, while my role shifts toward specification, verification, integration, and engineering review rather than memorizing every implementation detail.",
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
          "这不是 vibe coding 或随意探索，而是说明在 agentic AI 工具辅助下我能够写出和交付什么：通过测试驱动开发（Test-Driven Development, TDD）、规格驱动开发（Spec-Driven Development, SDD）、验证、复现、调试和可维护的工业级工程实现来编程与学习。Technical Skills / 技术技能部分是更保守的个人基础能力边界：我能够直接理解、检查、调试、修改和维护这些技术；在 agentic AI 辅助下，实际可实现和交付的范围会更广，但我的角色重点会转向规格定义、验证、集成和工程审查，而不是记住每一个实现细节并全部手写。",
        highlightsTitle: "代表性亮点",
      },
    },
    experience: {
      en: {
        pageTag: "Full CV-style experience page.",
        researchTitle: "Research Interests",
        skillsTitle: "Technical Skills",
        aiSkillsTitle: "AI-Augmented Engineering Scope",
        aiSkillsNote:
          "This is not vibe coding or casual exploration. It describes what I can build with agentic AI tools through Test-Driven Development (TDD), Spec-Driven Development (SDD), verification, reproducible implementation, debugging, and maintainable production-grade engineering. The Technical Skills section is a conservative baseline for technologies I can understand, inspect, debug, modify, and maintain directly; with agentic AI assistance, the practical implementation scope becomes broader, while my role shifts toward specification, verification, integration, and engineering review rather than memorizing every implementation detail.",
        industryTitle: "Industry Experience",
        researchExpTitle: "Research Experience",
        educationTitle: "Education",
      },
      zh: {
        pageTag: "完整在线简历式经历页面。",
        researchTitle: "研究兴趣",
        skillsTitle: "技术技能",
        aiSkillsTitle: "AI 辅助下的工程能力范围",
        aiSkillsNote:
          "这不是 vibe coding 或随意探索，而是说明在 agentic AI 工具辅助下我能够写出和交付什么：通过测试驱动开发（Test-Driven Development, TDD）、规格驱动开发（Spec-Driven Development, SDD）、验证、复现、调试和可维护的工业级工程实现来编程与学习。Technical Skills / 技术技能部分是更保守的个人基础能力边界：我能够直接理解、检查、调试、修改和维护这些技术；在 agentic AI 辅助下，实际可实现和交付的范围会更广，但我的角色重点会转向规格定义、验证、集成和工程审查，而不是记住每一个实现细节并全部手写。",
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
          "The first section is ordered by current relevance to my Artificial Intelligence (AI) / Machine Learning (ML) / research-engineering profile. The complete repository index below includes every public repository I was able to read from GitHub.",
        allTitle: "Complete Repository Index",
        allNote:
          "Every public repository visible in the current GitHub readout. This list follows the latest successful read.",
      },
      zh: {
        pageTag: "完整公开 GitHub 仓库列表，前面先按重要性排序。部分项目是对旧项目或经典项目的复现 / 重新实现，并不是原始项目。",
        rankingTitle: "项目重要性排序",
        rankingNote:
          "前一部分按照我当前人工智能（Artificial Intelligence, AI）/ 机器学习（Machine Learning, ML）/ 研究工程方向的相关性排序。后一部分保留本次成功读取到的全部公开仓库。",
        allTitle: "完整仓库索引",
        allNote: "下面保留本次 GitHub 读取中可见的全部公开仓库，并按读取顺序列出。",
      },
    },
    publications: {
      en: {
        pageTag: "Representative publications first, followed by the complete publication list.",
        selectedTitle: "Selected Publications",
        selectedNote:
          "This section is ordered by representative value for my current profile: first-author work, formally published work, and papers most relevant to Artificial Intelligence (AI) / Machine Learning (ML) / Large Language Model (LLM) / sensing / medical AI roles.",
        archiveTitle: "All Publications",
        archiveNote:
          "The full publication list below is reformatted from the current BibTeX source into a human-readable bibliography.",
        publishedGroupTitle: "Published",
        preprintGroupTitle: "arXiv / Preprint",
        unpublishedGroupTitle: "Unpublished / In Preparation",
      },
      zh: {
        pageTag: "先看代表性论文，后面是完整论文列表。",
        selectedTitle: "代表性论文",
        selectedNote:
          "这里优先按我当前方向的代表性排序：第一作者工作、正式发表论文，以及最贴近人工智能（Artificial Intelligence, AI）/ 机器学习（Machine Learning, ML）/ 大语言模型（Large Language Model, LLM）/ 感知 / 医学 AI 求职方向的论文。",
        archiveTitle: "完整论文列表",
        archiveNote: "下面的完整论文列表由当前 BibTeX 源文件整理成人类可读格式，不再直接展示原始条目。",
        publishedGroupTitle: "已发表",
        preprintGroupTitle: "arXiv / 预印本",
        unpublishedGroupTitle: "未发表 / 准备中",
      },
    },
    personal: {
      en: {
        pageTag: "A personal page beyond research and projects.",
        personalIntroTitle: "Personal Intro",
        hobbyTitle: "Hobby",
        hobbyNavItems: [
          { href: "#electronics-making", label: "Electronics Making" },
          { href: "#ai-full-stack-architect", label: "AI Full-Stack Architect" },
          { href: "#piano", label: "Piano" },
          { href: "#cheese", label: "Cheese" },
          { href: "#juice-forward-drinks", label: "Juice-Forward Drinks" },
        ],
        aiArchitectTitle: "AI Full-Stack Architect",
        aiArchitectText:
          "One of my current long-term hobbies is training myself into an AI full-stack architect: using AI-assisted engineering through TDD, SDD, and verification-driven workflows, rather than vibe coding or intuition-only programming, to produce industrial-grade code and to design, build, verify, and maintain complete internet technology infrastructure end to end, from product logic and frontend interfaces to backend services, deployment, observability, automation, and long-term operations.",
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
          { href: "#piano", label: "钢琴" },
          { href: "#cheese", label: "奶酪" },
          { href: "#juice-forward-drinks", label: "果汁型饮料和气泡酒" },
        ],
        aiArchitectTitle: "AI 全栈架构师",
        aiArchitectText:
          "我现在的一个长期爱好，是把自己训练成 AI 全栈架构师：借助 AI 辅助工程能力，通过 TDD、SDD 和验证驱动的工程流程，而不是 vibe coding 或凭感觉编程，产出工业级代码，并从产品逻辑、前端界面、后端服务、部署、可观测性、自动化到长期运维，完成整套互联网技术设施的设计、搭建、验证和维护。",
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

const pageTitles = {
  home: { en: "Ziqian Bi | Home", zh: "毕梓仟 | 首页" },
  experience: { en: "Ziqian Bi | Experience", zh: "毕梓仟 | 经历" },
  projects: { en: "Ziqian Bi | Projects", zh: "毕梓仟 | 项目" },
  publications: { en: "Ziqian Bi | Publications", zh: "毕梓仟 | 论文" },
  personal: { en: "Ziqian Bi | Personal Intro", zh: "毕梓仟 | 个人介绍" },
  music: { en: "Ziqian Bi | Music", zh: "毕梓仟 | 音乐" },
};

const root = document.documentElement;
const body = document.body;
const pageKey = body.dataset.page;
const siteContent = window.siteContent || {};
const musicLibrary = window.musicLibrary || { tracks: [] };
const musicState = {
  currentIndex: Number(localStorage.getItem("site-music-index") || "0"),
  volume: Number(localStorage.getItem("site-midi-volume") || "0.2"),
  widgetOpen: false,
  widgetInitialized: false,
  restoreTime: 0,
  shouldResume: false,
  saveTimer: null,
};
const musicPlaybackStorageKey = "site-music-playback";
const sharedHeaderPath = "./partials/header.html";
const mobileMediaQuery = window.matchMedia("(max-width: 760px), (hover: none) and (pointer: coarse)");
const selectedPublicationKeys = [
  "bi2025physical",
  "bi2026exploring",
  "bi2025generalbench",
  "xu2023mmlock",
  "bi2025subspace",
  "niu2024large",
  "liang2026comprehensive",
  "korada2025temporal",
  "pan2025cd9",
  "huang2025use",
  "singha2024securing",
  "wang2026predicting",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getLangBtn() {
  return document.getElementById("lang-toggle");
}

function getThemeBtn() {
  return document.getElementById("theme-toggle");
}

function normalizeAuthorName(author) {
  const cleaned = String(author).trim();
  if (!cleaned || cleaned.toLowerCase() === "others") return "";
  if (!cleaned.includes(",")) return cleaned;

  const parts = cleaned.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return cleaned;
  return `${parts.slice(1).join(" ")} ${parts[0]}`.trim();
}

function getLangValue(item, lang, baseName) {
  if (!item) return "";
  if (!baseName) return item[lang] || "";
  if (item[baseName] && typeof item[baseName] === "object") {
    return item[baseName][lang] || "";
  }
  const suffix = lang === "zh" ? "Zh" : "En";
  return item[`${baseName}${suffix}`] || item[baseName] || "";
}

function splitTopLevelList(value) {
  const text = String(value || "");
  const items = [];
  let current = "";
  let depth = 0;

  for (const char of text) {
    if (char === "(" || char === "（") depth += 1;
    if (char === ")" || char === "）") depth = Math.max(0, depth - 1);

    if (depth === 0 && [",", "、", ";", "；"].includes(char)) {
      const item = current.trim();
      if (item) items.push(item);
      current = "";
    } else {
      current += char;
    }
  }

  const last = current.trim();
  if (last) items.push(last);
  return items;
}

function buildPills(items, className) {
  return `<div class="${className}">${items
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("")}</div>`;
}

function buildInterestPills(lang) {
  const interests = getLangValue(siteContent.shared || {}, lang, "researchInterests");
  const items = Array.isArray(interests) ? interests : splitTopLevelList(interests);
  return buildPills(items, "interest-pills");
}

function buildSkillBlocks(lang) {
  const shared = siteContent.shared || {};
  const skillData = shared.skills || { left: [], right: [] };
  const items = [...(skillData.left || []), ...(skillData.right || [])];

  return `<div class="skill-list">${items
    .map((item) => {
      const label = getLangValue(item, lang, "label");
      const values = splitTopLevelList(getLangValue(item, lang, "value"));
      return `
        <div class="skill-group">
          <div class="skill-label">${escapeHtml(label)}</div>
          ${buildPills(values, "skill-pills")}
        </div>
      `;
    })
    .join("")}</div>`;
}

function buildAiSkillBlocks(lang) {
  const items = siteContent.shared?.aiSkills || [];
  return `<div class="skill-list ai-skill-list">${items
    .map((item) => {
      const label = getLangValue(item, lang, "label");
      const values = splitTopLevelList(getLangValue(item, lang, "value"));
      return `
        <div class="skill-group">
          <div class="skill-label">${escapeHtml(label)}</div>
          ${buildPills(values, "skill-pills ai-skill-pills")}
        </div>
      `;
    })
    .join("")}</div>`;
}

function buildEntries(entries, lang) {
  return entries
    .map((entry) => {
      const bullets = (entry.bullets || [])
        .map((bullet) => `<li>${escapeHtml(getLangValue(bullet, lang, ""))}</li>`)
        .join("");
      const note = getLangValue(entry, lang, "note");
      return `
        <div class="entry">
          <div class="entry-heading">
            <h3 class="entry-title">${escapeHtml(getLangValue(entry, lang, "title"))}</h3>
            <div class="entry-meta">${escapeHtml(entry.meta || "")}</div>
          </div>
          <div class="entry-role">${escapeHtml(getLangValue(entry, lang, "role"))}</div>
          ${bullets ? `<ul>${bullets}</ul>` : ""}
          ${note ? `<div class="item-note">${escapeHtml(note)}</div>` : ""}
        </div>
      `;
    })
    .join("");
}

function formatProjectLanguage(language, lang) {
  if (language === "none") {
    return lang === "zh" ? "未标注主要语言" : "No primary language listed";
  }
  return language || "";
}

function resolveProjectItem(item) {
  const projects = siteContent.projects || {};
  const catalog = projects.catalog || {};

  if (typeof item === "string") {
    return catalog[item] || { name: item };
  }

  if (item && item.name && catalog[item.name]) {
    return { ...catalog[item.name], ...item };
  }

  return item || {};
}

function buildProjectList(items, lang, showUpdated) {
  return items
    .map((rawItem) => {
      const item = resolveProjectItem(rawItem);
      const language = formatProjectLanguage(item.language, lang);
      const updated = showUpdated && item.updated
        ? `${lang === "zh" ? "更新于" : "updated"} ${item.updated}`
        : "";
      const note = getLangValue(item, lang, "note");
      return `
        <li>
          <div class="repo-line"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(
            item.name,
          )}</a> <span class="project-language-pill">${escapeHtml(language)}</span>${
            updated ? ` <span class="inline-meta">${escapeHtml(updated)}</span>` : ""
          }</div>
          ${note ? `<div class="item-note">${escapeHtml(note)}</div>` : ""}
        </li>
      `;
    })
    .join("");
}

function renderHome(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const shared = siteContent.shared || {};
  const home = siteContent.home || {};
  const focusItems = (home.focus || [])
    .map((item) => `<li>${escapeHtml(getLangValue(item, lang, ""))}</li>`)
    .join("");
  const highlightItems = (home.highlights || [])
    .map((item) => `<li>${escapeHtml(getLangValue(item, lang, ""))}</li>`)
    .join("");

  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].guideTitle)}</h2>
      <div class="home-grid">
        <div class="home-panel">
          <h3><a href="./experience.html">${escapeHtml(translations.common[lang].navExperience)}</a></h3>
          <p>${escapeHtml(translations.page.home[lang].guideExperience)}</p>
        </div>
        <div class="home-panel">
          <h3><a href="./projects.html">${escapeHtml(translations.common[lang].navProjects)}</a></h3>
          <p>${escapeHtml(translations.page.home[lang].guideProjects)}</p>
        </div>
        <div class="home-panel">
          <h3><a href="./publications.html">${escapeHtml(translations.common[lang].navPublications)}</a></h3>
          <p>${escapeHtml(translations.page.home[lang].guidePublications)}</p>
        </div>
        <div class="home-panel">
          <h3>${escapeHtml(translations.page.home[lang].guideFocus)}</h3>
          <ul class="plain-list">${focusItems}</ul>
        </div>
      </div>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].researchTitle)}</h2>
      ${buildInterestPills(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].skillsTitle)}</h2>
      ${buildSkillBlocks(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].highlightsTitle)}</h2>
      <ul class="plain-list">${highlightItems}</ul>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].aiSkillsTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.home[lang].aiSkillsNote)}</p>
      ${buildAiSkillBlocks(lang)}
    </section>
  `;
}

function renderPersonal(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const page = translations.page.personal[lang];
  const krogerCheeseItems = page.krogerCheeseItems
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const festivalCheeseItems = page.festivalCheeseItems
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const hobbyNavItems = page.hobbyNavItems
    .map(
      (item) => `
        <li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>
      `,
    )
    .join("");
  const electronicsProjects = page.electronicsProjects
    .map((project) => {
      const projectImages = project.images
        ? `
          <div class="project-image-grid">
            ${project.images
              .map(
                (image) => `
                  <figure class="project-image">
                    <button class="project-image-button" type="button" data-lightbox-src="${escapeHtml(
                      image.src,
                    )}" data-lightbox-caption="${escapeHtml(image.caption)}" aria-label="${escapeHtml(
                      image.caption,
                    )}">
                      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption)}" loading="lazy" />
                    </button>
                    <figcaption>${escapeHtml(image.caption)}</figcaption>
                  </figure>
                `,
              )
              .join("")}
          </div>
        `
        : "";
      const donatedNote = project.images
        ? ""
        : `<p class="project-donation-note">${
            lang === "zh" ? "已捐赠给北京工业大学" : "Donated to Beijing University of Technology."
          }</p>`;
      return `
        <div class="home-panel">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.text)}</p>
          ${donatedNote}
          ${projectImages}
        </div>
      `;
    })
    .join("");
  const pianoGroups = page.pianoGroups
    .map(
      (group) => `
        <div class="home-panel">
          <h3>${escapeHtml(group.title)}</h3>
          <ul class="plain-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `,
    )
    .join("");
  const drinkGroups = page.drinkGroups
    .map(
      (group) => `
        <div class="home-panel">
          <h3>${escapeHtml(group.title)}</h3>
          <ul class="plain-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `,
    )
    .join("");
  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(page.hobbyTitle)}</h2>
      <div class="home-panel">
        <ul class="hobby-nav-list">${hobbyNavItems}</ul>
      </div>
    </section>
    <section id="electronics-making">
      <h2 class="section-title">${escapeHtml(page.electronicsTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.electronicsText)}</p>
      </div>
      <div class="home-grid">${electronicsProjects}</div>
    </section>
    <section id="ai-full-stack-architect">
      <h2 class="section-title">${escapeHtml(page.aiArchitectTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.aiArchitectText)}</p>
      </div>
    </section>
    <section id="piano">
      <h2 class="section-title">${escapeHtml(page.pianoTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.pianoIntro)}</p>
      </div>
      <div class="home-grid">${pianoGroups}</div>
    </section>
    <section id="cheese">
      <h2 class="section-title">${escapeHtml(page.cheeseTitle)}</h2>
      <div class="home-panel">
        <h3>${escapeHtml(page.krogerCheeseTitle)}</h3>
        <p>${escapeHtml(page.hobbyText)}</p>
        <ul class="plain-list">${krogerCheeseItems}</ul>
      </div>
      <div class="home-panel">
        <h3>${escapeHtml(page.festivalCheeseTitle)}</h3>
        <ul class="plain-list">${festivalCheeseItems}</ul>
      </div>
    </section>
    <section id="juice-forward-drinks">
      <h2 class="section-title">${escapeHtml(page.drinkTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.drinkIntro)}</p>
      </div>
      <div class="home-grid">${drinkGroups}</div>
    </section>
  `;
}

function renderExperience(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const shared = siteContent.shared || {};
  const page = siteContent.experience || {};
  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].researchTitle)}</h2>
      ${buildInterestPills(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].skillsTitle)}</h2>
      ${buildSkillBlocks(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].industryTitle)}</h2>
      ${buildEntries(page.industry || [], lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].researchExpTitle)}</h2>
      ${buildEntries(page.research || [], lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].educationTitle)}</h2>
      ${buildEntries(page.education || [], lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].aiSkillsTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.experience[lang].aiSkillsNote)}</p>
      ${buildAiSkillBlocks(lang)}
    </section>
  `;
}

function renderProjects(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const projects = siteContent.projects || {};
  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.projects[lang].rankingTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.projects[lang].rankingNote)}</p>
      <ol class="repo-list">${buildProjectList(projects.ranked || [], lang, true)}</ol>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.projects[lang].allTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.projects[lang].allNote)}</p>
      <ol class="repo-list">${buildProjectList(projects.all || [], lang, false)}</ol>
    </section>
  `;
}

function getMusicTrackLabel(track, lang) {
  return lang === "zh" ? track.titleZh || track.titleEn : track.titleEn;
}

function getMusicComposerLabel(track, lang) {
  return lang === "zh" ? track.composerZh || track.composerEn : track.composerEn;
}

function getActiveMidiPlayer() {
  return document.getElementById("floating-audio-player") || document.getElementById("audio-player");
}

function shouldDisableMusicWidget() {
  return mobileMediaQuery.matches || pageKey === "music";
}

function destroyFloatingMusicWidget() {
  const widget = document.getElementById("music-widget");
  const player = document.getElementById("floating-audio-player");

  if (player && !player.paused) {
    player.pause();
  }
  if (musicState.saveTimer) {
    window.clearInterval(musicState.saveTimer);
    musicState.saveTimer = null;
  }
  if (widget) {
    widget.remove();
  }

  musicState.widgetInitialized = false;
  musicState.widgetOpen = false;
}

function readSavedMusicPlayback() {
  try {
    const raw = sessionStorage.getItem(musicPlaybackStorageKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("Failed to read saved music playback state.", error);
    return null;
  }
}

function saveMusicPlaybackState() {
  const player = getActiveMidiPlayer();
  if (!player) return;

  const payload = {
    index: musicState.currentIndex,
    time: Number(player.currentTime || 0),
    playing: Boolean(!player.paused),
    volume: musicState.volume,
    savedAt: Date.now(),
  };

  try {
    sessionStorage.setItem(musicPlaybackStorageKey, JSON.stringify(payload));
  } catch (error) {
    console.warn("Failed to save music playback state.", error);
  }
}

function applySavedMusicPlayback() {
  const saved = readSavedMusicPlayback();
  if (!saved) return;

  if (Number.isFinite(saved.index)) {
    musicState.currentIndex = Math.max(0, Number(saved.index));
  }
  if (Number.isFinite(saved.volume)) {
    musicState.volume = Math.min(1, Math.max(0, Number(saved.volume)));
  }

  musicState.restoreTime = Number(saved.time) || 0;
  musicState.shouldResume = Boolean(saved.playing);
}

function setMidiVolume(level) {
  musicState.volume = Math.min(1, Math.max(0, level));
  localStorage.setItem("site-midi-volume", String(musicState.volume));

  updateMidiOutputLevel();
}

function updateMidiOutputLevel() {
  const finalLevel = Math.min(1, Math.max(0, musicState.volume));
  const player = getActiveMidiPlayer();

  if (player && "volume" in player) {
    player.volume = finalLevel;
  }
}

function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateMusicProgress() {
  const player = getActiveMidiPlayer();
  const progress = document.getElementById("music-progress");
  const elapsed = document.getElementById("music-progress-elapsed");
  const duration = document.getElementById("music-progress-duration");

  if (!player || !progress) return;

  const trackDuration = Number.isFinite(player.duration) ? player.duration : 0;
  const currentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
  progress.max = trackDuration > 0 ? String(Math.floor(trackDuration)) : "0";
  progress.value = trackDuration > 0 ? String(Math.min(Math.floor(currentTime), Math.floor(trackDuration))) : "0";

  if (elapsed) elapsed.textContent = formatMusicTime(currentTime);
  if (duration) duration.textContent = formatMusicTime(trackDuration);
}

function bindMusicProgressControls() {
  const progress = document.getElementById("music-progress");
  const player = getActiveMidiPlayer();
  if (!progress || !player || progress.dataset.bound === "true") return;

  progress.addEventListener("input", (event) => {
    const nextTime = Number(event.target.value || "0");
    if (Number.isFinite(nextTime)) {
      player.currentTime = nextTime;
      updateMusicProgress();
      saveMusicPlaybackState();
    }
  });

  progress.dataset.bound = "true";
  updateMusicProgress();
}

function pickRandomTrackIndex() {
  const tracks = musicLibrary.tracks || [];
  if (tracks.length <= 1) return 0;

  let nextIndex = musicState.currentIndex;
  while (nextIndex === musicState.currentIndex) {
    nextIndex = Math.floor(Math.random() * tracks.length);
  }
  return nextIndex;
}

function updateMusicPanel(lang) {
  const tracks = musicLibrary.tracks || [];
  const current = tracks[musicState.currentIndex];
  if (!current) return;

  const titleHost = document.getElementById("music-current-title");
  const metaHost = document.getElementById("music-current-meta");
  const slider = document.getElementById("music-volume");
  const volumeValue = document.getElementById("music-volume-value");

  if (titleHost) titleHost.textContent = getMusicTrackLabel(current, lang);
  if (metaHost) metaHost.textContent = getMusicComposerLabel(current, lang);
  if (slider) slider.value = String(Math.round(musicState.volume * 100));
  if (volumeValue) volumeValue.textContent = `${Math.round(musicState.volume * 100)}%`;
  updateMusicProgress();

  document.querySelectorAll(".playlist-item").forEach((button, index) => {
    button.classList.toggle("is-active", index === musicState.currentIndex);
    button.setAttribute("aria-pressed", index === musicState.currentIndex ? "true" : "false");
  });
}

function switchMusicTrack(index, autoplay) {
  const tracks = musicLibrary.tracks || [];
  const player = getActiveMidiPlayer();
  if (!player || !tracks[index]) return;

  musicState.currentIndex = index;
  localStorage.setItem("site-music-index", String(index));

  const nextSrc = tracks[index].file;
  const startPlayback = () => {
    if (autoplay) {
      player.play().catch?.(() => {});
    }
  };

  player.pause();
  player.src = nextSrc;
  player.load();
  player.addEventListener(
    "loadedmetadata",
    () => {
      musicState.restoreTime = 0;
      musicState.shouldResume = false;
      startPlayback();
    },
    { once: true },
  );

  const lang = localStorage.getItem("site-lang") || "en";
  updateMusicPanel(lang);
  saveMusicPlaybackState();
}

function ensureFloatingMusicWidget() {
  if (shouldDisableMusicWidget()) return null;
  if (!musicLibrary.tracks || musicLibrary.tracks.length === 0) return null;

  let widget = document.getElementById("music-widget");
  if (widget) return widget;

  widget = document.createElement("aside");
  widget.id = "music-widget";
  widget.className = "music-widget";
  widget.innerHTML = `
    <div class="music-widget-panel">
      <div class="music-widget-head">
        <div id="music-widget-title" class="music-widget-title">Music</div>
      </div>
      <div class="music-widget-body">
        <div id="music-widget-nowplaying-label" class="music-label">Now Playing</div>
        <div id="music-current-title" class="music-current-title"></div>
        <div id="music-current-meta" class="music-current-meta"></div>
        <div class="music-mini-controls">
          <button id="music-play-toggle" class="pub-copy-btn" type="button">Play</button>
          <button id="music-random" class="pub-copy-btn" type="button">Shuffle Next</button>
        </div>
        <div class="music-progress-row">
          <span id="music-progress-elapsed" class="music-progress-time music-progress-elapsed">0:00</span>
          <input id="music-progress" class="music-progress" type="range" min="0" max="0" step="1" value="0" aria-label="Playback progress" />
          <span id="music-progress-duration" class="music-progress-time">0:00</span>
        </div>
        <div class="music-volume-row">
          <label id="music-volume-label" class="music-volume-label" for="music-volume">Volume</label>
          <input id="music-volume" class="music-volume" type="range" min="0" max="100" step="1" value="20" />
          <span id="music-volume-value" class="music-volume-value">20%</span>
        </div>
        <ol id="music-mini-playlist" class="playlist-list music-mini-playlist"></ol>
        <p id="music-source-note" class="music-source-note"></p>
      </div>
      <audio id="floating-audio-player" class="music-core-player" preload="metadata"></audio>
    </div>
  `;
  document.body.appendChild(widget);
  return widget;
}

function setMusicWidgetOpen(open) {
  const widget = document.getElementById("music-widget");
  if (!widget) return;

  musicState.widgetOpen = open;
  widget.classList.toggle("is-collapsed", !open);
}

function updateMusicPlayButton(lang) {
  const button = document.getElementById("music-play-toggle");
  const player = getActiveMidiPlayer();
  if (!button) return;

  const isPlaying = Boolean(player && !player.paused);
  button.textContent = isPlaying
    ? lang === "zh"
      ? "暂停"
      : "Pause"
    : lang === "zh"
      ? "播放"
      : "Play";
}

function renderFloatingPlaylist(lang) {
  const host = document.getElementById("music-mini-playlist");
  if (!host) return;

  host.innerHTML = (musicLibrary.tracks || [])
    .map(
      (track, index) => `
        <li>
          <button class="playlist-item playlist-item-compact" type="button" data-index="${index}">
            <span class="playlist-title">${escapeHtml(getMusicTrackLabel(track, lang))}</span>
            <span class="playlist-meta">${escapeHtml(getMusicComposerLabel(track, lang))}</span>
          </button>
        </li>
      `,
    )
    .join("");
}

function updateFloatingMusicWidget(lang) {
  if (shouldDisableMusicWidget()) {
    destroyFloatingMusicWidget();
    return;
  }

  const widget = ensureFloatingMusicWidget();
  if (!widget) return;

  const title = document.getElementById("music-widget-title");
  const nowPlaying = document.getElementById("music-widget-nowplaying-label");
  const volumeLabel = document.getElementById("music-volume-label");
  const randomButton = document.getElementById("music-random");
  const sourceNote = document.getElementById("music-source-note");

  if (title) title.textContent = translations.common[lang].navMusic;
  if (nowPlaying) nowPlaying.textContent = translations.page.music[lang].nowPlaying;
  if (volumeLabel) volumeLabel.textContent = translations.page.music[lang].volumeLabel;
  if (randomButton) randomButton.textContent = translations.page.music[lang].randomLabel;
  if (sourceNote) {
    sourceNote.textContent =
      lang === "zh" ? musicLibrary.sourceNoteZh || "" : musicLibrary.sourceNoteEn || "";
  }

  renderFloatingPlaylist(lang);
  updateMusicPanel(lang);
  updateMusicPlayButton(lang);
}

function initFloatingMusicWidget() {
  if (shouldDisableMusicWidget()) {
    destroyFloatingMusicWidget();
    return;
  }

  if (musicState.widgetInitialized) return;

  const widget = ensureFloatingMusicWidget();
  const tracks = musicLibrary.tracks || [];
  if (!widget || !tracks.length) return;

  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  applySavedMusicPlayback();
  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const player = document.getElementById("floating-audio-player");
  const playToggle = document.getElementById("music-play-toggle");
  const randomBtn = document.getElementById("music-random");
  const volumeSlider = document.getElementById("music-volume");

  player.src = tracks[musicState.currentIndex].file;
  player.load();
  setMidiVolume(musicState.volume);
  bindMusicProgressControls();
  setMusicWidgetOpen(true);

  playToggle?.addEventListener("click", () => {
    if (player.paused) player.play().catch?.(() => {});
    else player.pause();
  });

  randomBtn?.addEventListener("click", () => {
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  volumeSlider?.addEventListener("input", (event) => {
    const level = Number(event.target.value || "20") / 100;
    setMidiVolume(level);
    updateMusicPanel(localStorage.getItem("site-lang") || "en");
  });

  widget.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest(".playlist-item-compact");
    if (!(button instanceof HTMLElement)) return;
    const index = Number(button.dataset.index || "0");
    switchMusicTrack(index, true);
  });

  player.addEventListener("loadedmetadata", () => {
    updateMidiOutputLevel();
    if (musicState.restoreTime > 0) {
      player.currentTime = musicState.restoreTime;
    }
    if (musicState.shouldResume) {
      player.play().catch?.(() => {});
      musicState.shouldResume = false;
    }
    updateMusicPanel(localStorage.getItem("site-lang") || "en");
    updateMusicProgress();
  });

  player.addEventListener("timeupdate", updateMusicProgress);
  player.addEventListener("durationchange", updateMusicProgress);

  player.addEventListener("play", () => {
    if (musicState.saveTimer) window.clearInterval(musicState.saveTimer);
    musicState.saveTimer = window.setInterval(saveMusicPlaybackState, 1000);
    saveMusicPlaybackState();
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
  });

  player.addEventListener("pause", () => {
    if (musicState.saveTimer) {
      window.clearInterval(musicState.saveTimer);
      musicState.saveTimer = null;
    }
    saveMusicPlaybackState();
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
  });

  player.addEventListener("ended", () => {
    saveMusicPlaybackState();
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  musicState.widgetInitialized = true;
}

function bindMusicPage(lang) {
  const tracks = musicLibrary.tracks || [];
  if (!tracks.length) return;

  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const player = document.getElementById("audio-player");
  if (!player) return;

  player.src = tracks[musicState.currentIndex].file;
  player.load();
  setMidiVolume(musicState.volume);
  bindMusicProgressControls();
  updateMusicPanel(lang);

  const prevBtn = document.getElementById("music-prev");
  const nextBtn = document.getElementById("music-next");
  const randomBtn = document.getElementById("music-random");
  const volumeSlider = document.getElementById("music-volume");

  prevBtn?.addEventListener("click", () => {
    const nextIndex =
      musicState.currentIndex === 0 ? tracks.length - 1 : musicState.currentIndex - 1;
    switchMusicTrack(nextIndex, true);
  });

  nextBtn?.addEventListener("click", () => {
    const nextIndex = (musicState.currentIndex + 1) % tracks.length;
    switchMusicTrack(nextIndex, true);
  });

  randomBtn?.addEventListener("click", () => {
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  volumeSlider?.addEventListener("input", (event) => {
    const level = Number(event.target.value || "20") / 100;
    setMidiVolume(level);
    updateMusicPanel(localStorage.getItem("site-lang") || "en");
  });

  document.querySelectorAll(".playlist-item").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index || "0");
      switchMusicTrack(index, true);
    });
  });

  player.addEventListener("ended", () => {
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  player.addEventListener("loadedmetadata", () => {
    updateMidiOutputLevel();
    updateMusicProgress();
  });
  player.addEventListener("timeupdate", updateMusicProgress);
  player.addEventListener("durationchange", updateMusicProgress);
}

function renderMusic(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;

  const tracks = musicLibrary.tracks || [];
  const playlist = tracks
    .map(
      (track, index) => `
        <li>
          <button class="playlist-item" type="button" data-index="${index}">
            <span class="playlist-title">${escapeHtml(getMusicTrackLabel(track, lang))}</span>
            <span class="playlist-meta">${escapeHtml(getMusicComposerLabel(track, lang))}</span>
          </button>
        </li>
      `,
    )
    .join("");

  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.music[lang].introTitle)}</h2>
      <p class="section-note">${escapeHtml(
        lang === "zh" ? musicLibrary.introZh || "" : musicLibrary.introEn || "",
      )}</p>
      <div class="music-layout">
        <div class="music-stage">
          <div class="music-nowplaying">
            <div class="music-label">${escapeHtml(translations.page.music[lang].nowPlaying)}</div>
            <div id="music-current-title" class="music-current-title"></div>
            <div id="music-current-meta" class="music-current-meta"></div>
          </div>
          <div class="music-player-wrap">
            <audio id="audio-player" class="music-page-audio" controls preload="metadata"></audio>
            <div class="music-progress-row">
              <span id="music-progress-elapsed" class="music-progress-time">0:00</span>
              <input id="music-progress" class="music-progress" type="range" min="0" max="0" step="1" value="0" aria-label="Playback progress" />
              <span id="music-progress-duration" class="music-progress-time">0:00</span>
            </div>
          </div>
          <div class="music-controls">
            <button id="music-prev" class="pub-copy-btn" type="button">${escapeHtml(
              translations.page.music[lang].prevLabel,
            )}</button>
            <button id="music-random" class="pub-copy-btn" type="button">${escapeHtml(
              translations.page.music[lang].randomLabel,
            )}</button>
            <button id="music-next" class="pub-copy-btn" type="button">${escapeHtml(
              translations.page.music[lang].nextLabel,
            )}</button>
          </div>
          <div class="music-volume-row">
            <label class="music-volume-label" for="music-volume">${escapeHtml(
              translations.page.music[lang].volumeLabel,
            )}</label>
            <input id="music-volume" class="music-volume" type="range" min="0" max="100" step="1" value="20" />
            <span id="music-volume-value" class="music-volume-value">20%</span>
          </div>
        </div>
        <div class="music-playlist">
          <h3 class="pub-group-title">${escapeHtml(translations.page.music[lang].playlistTitle)}</h3>
          <p class="section-note">${escapeHtml(translations.page.music[lang].playlistNote)}</p>
          <ol class="playlist-list">${playlist}</ol>
          <p class="music-source-note">${escapeHtml(
            lang === "zh" ? musicLibrary.sourceNoteZh || "" : musicLibrary.sourceNoteEn || "",
          )}</p>
        </div>
      </div>
    </section>
  `;

  bindMusicPage(lang);
}

function formatPublicationAuthors(authors) {
  if (!authors || authors.length === 0) return "";

  const normalizedAuthors = authors
    .map(normalizeAuthorName)
    .filter(Boolean);

  if (normalizedAuthors.length === 0) return "";

  const highlight = (author) =>
    author === "Ziqian Bi"
      ? `<span class="pub-highlight">${escapeHtml(author)}</span>`
      : escapeHtml(author);

  if (normalizedAuthors.length < 3) {
    return normalizedAuthors.map(highlight).join(", ");
  }

  const firstTwoAuthors = normalizedAuthors.slice(0, 2);
  const firstTwo = firstTwoAuthors.map(highlight).join(", ");

  if (firstTwoAuthors.includes("Ziqian Bi")) {
    return `${firstTwo}, et al.`;
  }

  return `${firstTwo}, et al., <span class="pub-highlight">Ziqian Bi</span>, et al.`;
}

function formatVenueAndYear(item, lang) {
  const venue = getLangValue(item, lang, "venue");
  if (venue && item.year) return `${escapeHtml(venue)}, ${escapeHtml(item.year)}.`;
  if (venue) return `${escapeHtml(venue)}.`;
  if (item.year) return `${escapeHtml(item.year)}.`;
  return "";
}

function getPublicationTitle(item, lang) {
  if (lang === "zh" && window.publicationTitleTranslations) {
    return window.publicationTitleTranslations[item.title] || item.title || "";
  }
  return item.title || "";
}

function getAuthorRank(item) {
  const normalizedAuthors = (item.authors || [])
    .map(normalizeAuthorName)
    .filter(Boolean);
  const index = normalizedAuthors.indexOf("Ziqian Bi");
  return index === -1 ? 999 : index;
}

function getPublicationBucket(item) {
  const venue = (item.venue || "").toLowerCase();
  if (venue.includes("arxiv")) return "preprint";
  if (venue) return "published";
  return "unpublished";
}

function comparePublications(a, b) {
  const rankDiff = getAuthorRank(a) - getAuthorRank(b);
  if (rankDiff !== 0) return rankDiff;

  const yearA = Number(a.year) || 0;
  const yearB = Number(b.year) || 0;
  if (yearA !== yearB) return yearB - yearA;

  return (a.title || "").localeCompare(b.title || "");
}

function buildPublicationItem(item, lang) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="pub-item">
      <div class="pub-main">
        <div class="pub-line">
          <span class="pub-authors">${formatPublicationAuthors(item.authors)}</span>.
          <em>${escapeHtml(getPublicationTitle(item, lang))}</em>.
          ${formatVenueAndYear(item, lang)}
        </div>
      </div>
      <div class="pub-copy">
        <button class="pub-copy-btn" type="button" data-bibtex="${escapeHtml(item.bibtex)}">
          ${escapeHtml(translations.common[lang].citePaper)}
        </button>
      </div>
    </div>
  `;
  return li;
}

function bindCopyButtons(lang) {
  document.querySelectorAll(".pub-copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const bibtex = button.getAttribute("data-bibtex");
      if (!bibtex) return;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(bibtex);
        } else {
          const helper = document.createElement("textarea");
          helper.value = bibtex;
          helper.setAttribute("readonly", "readonly");
          helper.style.position = "fixed";
          helper.style.opacity = "0";
          document.body.appendChild(helper);
          helper.select();
          document.execCommand("copy");
          helper.remove();
        }
        button.textContent = translations.common[lang].copied;
        button.classList.add("is-copied");
        window.setTimeout(() => {
          const currentLang = localStorage.getItem("site-lang") || "en";
          button.textContent = translations.common[currentLang].citePaper;
          button.classList.remove("is-copied");
        }, 1400);
      } catch (error) {
        console.error("Failed to copy BibTeX.", error);
      }
    });
  });
}

function renderPublications(lang) {
  if (pageKey !== "publications" || !window.publicationsData) return;

  const selectedHost = document.getElementById("selected-publications");
  const publishedHost = document.getElementById("published-publications");
  const preprintHost = document.getElementById("preprint-publications");
  const unpublishedHost = document.getElementById("unpublished-publications");
  if (!selectedHost || !publishedHost || !preprintHost || !unpublishedHost) return;

  selectedHost.innerHTML = "";
  publishedHost.innerHTML = "";
  preprintHost.innerHTML = "";
  unpublishedHost.innerHTML = "";

  const byKey = new Map(window.publicationsData.map((item) => [item.key, item]));
  selectedPublicationKeys.forEach((key) => {
    const item = byKey.get(key);
    if (item) selectedHost.appendChild(buildPublicationItem(item, lang));
  });

  const published = [];
  const preprint = [];
  const unpublished = [];

  window.publicationsData.forEach((item) => {
    const bucket = getPublicationBucket(item);
    if (bucket === "published") published.push(item);
    else if (bucket === "preprint") preprint.push(item);
    else unpublished.push(item);
  });

  published.sort(comparePublications);
  preprint.sort(comparePublications);
  unpublished.sort(comparePublications);

  published.forEach((item) => publishedHost.appendChild(buildPublicationItem(item, lang)));
  preprint.forEach((item) => preprintHost.appendChild(buildPublicationItem(item, lang)));
  unpublished.forEach((item) => unpublishedHost.appendChild(buildPublicationItem(item, lang)));

  bindCopyButtons(lang);
}

function renderPageContent(lang) {
  if (pageKey === "home") renderHome(lang);
  if (pageKey === "experience") renderExperience(lang);
  if (pageKey === "projects") renderProjects(lang);
  if (pageKey === "publications") renderPublications(lang);
  if (pageKey === "personal") renderPersonal(lang);
  if (pageKey === "music") renderMusic(lang);
}

const siteSearchState = {
  initialized: false,
  lastResults: [],
};

function getSiteSearchCopy(lang) {
  return lang === "zh"
    ? {
        title: "站内搜索",
        subtitle: "浏览器内 regex 搜索，不区分大小写。",
        input: "搜索项目、论文、经历或技能",
        button: "搜索",
        noResults: "没有找到匹配结果。",
        resultPrefix: "搜索结果",
      }
    : {
        title: "Site Search",
        subtitle: "In-browser regex search, case-insensitive.",
        input: "Search projects, papers, experience, or skills",
        button: "Search",
        noResults: "No matching results.",
        resultPrefix: "Results",
      };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function flattenSearchValue(value, output) {
  if (value === null || value === undefined) return;
  if (typeof value === "string" || typeof value === "number") {
    const text = String(value).trim();
    if (text) output.push(text);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => flattenSearchValue(item, output));
    return;
  }
  if (typeof value === "object") {
    Object.values(value).forEach((item) => flattenSearchValue(item, output));
  }
}

function buildSearchDocuments() {
  const docs = [];
  const addDoc = (type, title, url, payload) => {
    const parts = [];
    flattenSearchValue(payload, parts);
    const text = parts.join(" ").replace(/\s+/g, " ").trim();
    if (!text) return;
    docs.push({
      type,
      title: title || type,
      url,
      text,
    });
  };

  const shared = siteContent.shared || {};
  addDoc("Profile", "Research Interests and Skills", "./experience.html", shared);

  (siteContent.experience?.industry || []).forEach((item) =>
    addDoc("Experience", getLangValue(item, "en", "title"), "./experience.html", item),
  );
  (siteContent.experience?.research || []).forEach((item) =>
    addDoc("Research", getLangValue(item, "en", "title"), "./experience.html", item),
  );
  (siteContent.experience?.education || []).forEach((item) =>
    addDoc("Education", getLangValue(item, "en", "title"), "./experience.html", item),
  );

  Object.values(siteContent.projects?.catalog || {}).forEach((item) =>
    addDoc("Project", item.name, item.url || "./projects.html", item),
  );

  (window.publicationsData || []).forEach((item) =>
    addDoc("Publication", item.title, "./publications.html", item),
  );

  (musicLibrary.tracks || []).forEach((item) =>
    addDoc("Music", item.titleEn || item.titleZh, "./music.html", item),
  );

  return docs;
}

function runRegexSearch(query) {
  const normalized = String(query || "").trim();
  if (!normalized) return [];

  const terms = normalized
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean)
    .slice(0, 8);
  const patterns = terms.map((term) => new RegExp(escapeRegExp(term), "i"));

  return buildSearchDocuments()
    .map((doc) => {
      const haystack = `${doc.title} ${doc.type} ${doc.text}`;
      const score = patterns.reduce((sum, pattern) => sum + (pattern.test(haystack) ? 1 : 0), 0);
      return { ...doc, score };
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 8);
}

function getSearchSnippet(text, query) {
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleanText) return "";
  const firstTerm = String(query || "").trim().split(/\s+/).find(Boolean);
  const index = firstTerm ? cleanText.toLowerCase().indexOf(firstTerm.toLowerCase()) : -1;
  const start = Math.max(0, index === -1 ? 0 : index - 80);
  return `${start > 0 ? "..." : ""}${cleanText.slice(start, start + 220)}${cleanText.length > start + 220 ? "..." : ""}`;
}

function renderSiteSearchResults(query, results, lang) {
  const copy = getSiteSearchCopy(lang);
  const statusHost = document.getElementById("site-search-status");
  const resultsHost = document.getElementById("site-search-results");
  if (!statusHost || !resultsHost) return;

  statusHost.textContent = `${copy.resultPrefix}: ${results.length}`;

  const resultItems = results.length
    ? results
        .map(
          (item) => `
            <li>
              <a href="${escapeHtml(item.url)}" target="${item.url.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${escapeHtml(item.title)}</a>
              <span>${escapeHtml(item.type)}</span>
              <p>${escapeHtml(getSearchSnippet(item.text, query))}</p>
            </li>
          `,
        )
        .join("")
    : `<li class="site-search-empty">${escapeHtml(copy.noResults)}</li>`;

  resultsHost.innerHTML = `
    <div class="site-search-result-title">${escapeHtml(copy.resultPrefix)} (${results.length})</div>
    <ol>${resultItems}</ol>
  `;
}

function performSiteSearch(query) {
  const lang = localStorage.getItem("site-lang") || "en";
  const results = runRegexSearch(query);
  siteSearchState.lastResults = results;
  renderSiteSearchResults(query, results, lang);
}

function updateSiteSearchLanguage(lang) {
  const widget = document.getElementById("site-search-widget");
  if (!widget) return;
  const copy = getSiteSearchCopy(lang);
  const title = document.getElementById("site-search-title");
  const subtitle = document.getElementById("site-search-subtitle");
  const input = document.getElementById("site-search-input");
  const button = document.getElementById("site-search-submit");
  const status = document.getElementById("site-search-status");
  if (title) title.textContent = copy.title;
  if (subtitle) subtitle.textContent = copy.subtitle;
  if (input) input.placeholder = copy.input;
  if (button) button.textContent = copy.button;
  if (status && siteSearchState.lastResults.length === 0) status.textContent = "";
}

function initSiteSearch() {
  if (mobileMediaQuery.matches) return;
  if (siteSearchState.initialized) return;
  siteSearchState.initialized = true;

  const lang = localStorage.getItem("site-lang") || "en";
  const copy = getSiteSearchCopy(lang);
  const widget = document.createElement("aside");
  widget.id = "site-search-widget";
  widget.className = "site-search-widget";
  widget.innerHTML = `
    <div class="site-search-panel" role="search">
      <div class="site-search-head">
        <div>
          <div id="site-search-title" class="site-search-title">${escapeHtml(copy.title)}</div>
          <div id="site-search-subtitle" class="site-search-subtitle">${escapeHtml(copy.subtitle)}</div>
        </div>
      </div>
      <form id="site-search-form" class="site-search-form">
        <input id="site-search-input" type="search" autocomplete="off" placeholder="${escapeHtml(copy.input)}" />
        <button id="site-search-submit" type="submit">${escapeHtml(copy.button)}</button>
      </form>
      <div id="site-search-status" class="site-search-status"></div>
      <div id="site-search-results" class="site-search-results"></div>
    </div>
  `;
  document.body.appendChild(widget);

  document.getElementById("site-search-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("site-search-input");
    if (!(input instanceof HTMLInputElement)) return;
    performSiteSearch(input.value);
  });
}

function syncNavState() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const active = link.dataset.page === pageKey;
    link.classList.toggle("is-active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
  });
}

function applyTheme(theme) {
  const dark = theme === "dark";
  body.classList.toggle("dark-theme", dark);
  localStorage.setItem("site-theme", dark ? "dark" : "light");
  const lang = localStorage.getItem("site-lang") || "en";
  const themeBtn = getThemeBtn();
  if (themeBtn) {
    const label = dark
      ? translations.common[lang].themeToggleDark
      : translations.common[lang].themeToggleLight;
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }
  if (window.SiteBackgrounds) {
    window.SiteBackgrounds.syncBackgrounds();
  }
}

function ensureLanguageSwitchMarkup() {
  const langBtn = getLangBtn();
  if (!langBtn || langBtn.dataset.switchReady === "true") return;
  langBtn.classList.add("language-switch");
  langBtn.innerHTML = `
    <span class="language-switch-option language-switch-option-en">EN</span>
    <span class="language-switch-option language-switch-option-zh">中文</span>
    <span class="language-switch-thumb"></span>
  `;
  langBtn.dataset.switchReady = "true";
}

function applyLanguage(lang) {
  localStorage.setItem("site-lang", lang);
  root.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const common = translations.common[lang][key];
    const page = translations.page[pageKey] && translations.page[pageKey][lang][key];
    const value = page || common;
    if (value && node.dataset.i18nRich === "true") {
      node.innerHTML = value;
    } else if (value) {
      node.textContent = value;
    }
  });

  if (pageTitles[pageKey]) {
    document.title = pageTitles[pageKey][lang];
  }

  const langBtn = getLangBtn();
  if (langBtn) {
    ensureLanguageSwitchMarkup();
    langBtn.dataset.lang = lang;
    langBtn.setAttribute("aria-label", translations.common[lang].langToggle);
    langBtn.setAttribute("title", translations.common[lang].langToggle);
  }

  const dark = body.classList.contains("dark-theme");
  const themeBtn = getThemeBtn();
  if (themeBtn) {
    const label = dark
      ? translations.common[lang].themeToggleDark
      : translations.common[lang].themeToggleLight;
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }

  renderPageContent(lang);
  bindProjectImageButtons();
  updateFloatingMusicWidget(lang);
  updateSiteSearchLanguage(lang);
}

// 页头改成通过 partial 动态加载后，按钮绑定需要在插入 DOM 之后再做。
function bindHeaderControls() {
  const langBtn = getLangBtn();
  const themeBtn = getThemeBtn();

  if (langBtn && langBtn.dataset.bound !== "true") {
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem("site-lang") || "en";
      applyLanguage(current === "en" ? "zh" : "en");
    });
    langBtn.dataset.bound = "true";
  }

  if (themeBtn && themeBtn.dataset.bound !== "true") {
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem("site-theme") || "light";
      applyTheme(current === "light" ? "dark" : "light");
    });
    themeBtn.dataset.bound = "true";
  }
}

function closeProjectImageLightbox() {
  const lightbox = document.querySelector(".project-lightbox");
  if (!lightbox) return;
  lightbox.remove();
  document.body.classList.remove("project-lightbox-open");
}

function openProjectImageLightbox(src, caption) {
  closeProjectImageLightbox();

  const lightbox = document.createElement("div");
  lightbox.className = "project-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.style.cssText =
    "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:56px 24px 24px;background:rgba(10,14,18,0.9);cursor:zoom-out;overflow:hidden;";
  lightbox.innerHTML = `
    <button class="project-lightbox-close" type="button" aria-label="Close image" style="position:fixed;top:16px;right:16px;z-index:2147483647;width:64px;height:64px;border:1px solid rgba(255,255,255,0.48);border-radius:999px;color:#fff;background:rgba(0,0,0,0.42);font-size:3rem;line-height:1;cursor:pointer;">×</button>
    <figure class="project-lightbox-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:calc(100vw - 48px);max-height:calc(100vh - 80px);margin:0;cursor:auto;">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(caption)}" style="display:block;width:auto;height:auto;max-width:100%;max-height:calc(100vh - 112px);object-fit:contain;border-radius:8px;background:rgba(255,255,255,0.95);" />
      <figcaption style="display:block;flex:0 0 auto;max-width:100%;margin-top:12px;color:#fff;font-size:1rem;line-height:1.4;text-align:center;overflow-wrap:anywhere;">${escapeHtml(caption)}</figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);
  document.body.classList.add("project-lightbox-open");
}

function bindProjectImageButtons() {
  document.querySelectorAll(".project-image-button").forEach((button) => {
    if (button.dataset.lightboxBound === "true") return;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openProjectImageLightbox(button.dataset.lightboxSrc, button.dataset.lightboxCaption);
    });
    button.dataset.lightboxBound = "true";
  });
}

function initProjectImageLightbox() {
  if (document.body.dataset.projectLightboxBound === "true") return;

  document.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".project-image-button");
    if (imageButton) {
      openProjectImageLightbox(imageButton.dataset.lightboxSrc, imageButton.dataset.lightboxCaption);
      return;
    }

    if (event.target.closest(".project-lightbox-close")) {
      closeProjectImageLightbox();
      return;
    }

    const lightbox = event.target.closest(".project-lightbox");
    if (!lightbox) return;

    const clickedMedia = event.target.closest(".project-lightbox-content img, .project-lightbox-content figcaption");
    if (!clickedMedia) {
      closeProjectImageLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectImageLightbox();
    }
  });

  document.body.dataset.projectLightboxBound = "true";
}

// 通过 localhost 运行时，统一从 partial 加载页头，避免每个页面重复维护。
async function loadSharedHeader() {
  const slot = document.getElementById("shared-header-slot");
  if (!slot || slot.dataset.loaded === "true") return;

  try {
    const response = await fetch(sharedHeaderPath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load shared header: ${response.status}`);
    }
    slot.innerHTML = await response.text();
    slot.dataset.loaded = "true";
  } catch (error) {
    console.error("Failed to load shared header partial.", error);
  }
}

async function bootstrapSite() {
  await loadSharedHeader();
  bindHeaderControls();
  syncNavState();
  initFloatingMusicWidget();
  initProjectImageLightbox();
  ensureLanguageSwitchMarkup();
  applyTheme(localStorage.getItem("site-theme") || "light");
  applyLanguage(localStorage.getItem("site-lang") || "en");
  initSiteSearch();
}

bootstrapSite();
window.addEventListener("pagehide", saveMusicPlaybackState);
window.addEventListener("beforeunload", saveMusicPlaybackState);
