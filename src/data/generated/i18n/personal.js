// Bilingual copy for the personal page.
export const personalPageTranslations = {
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
          {
            src: "./assets/images/projects/batch-mri-quality-control-demo.png",
            caption: "Batch MRI quality-control project demo",
          },
          {
            src: "./assets/images/projects/distributed-paxos-raft-lab-demo.png",
            caption: "Distributed Paxos / Raft lab project demo",
          },
          {
            src: "./assets/images/projects/industrial-query-agent-webui.png",
            caption: "Industrial query agent Web UI demo",
          },
          {
            src: "./assets/images/projects/maze-algorithms-demo.png",
            caption: "Maze algorithms project demo",
          },
          {
            src: "./assets/images/projects/whitebox-ml-dl-kmeans-demo.png",
            caption: "White-box ML / DL K-means demo",
          },
          {
            src: "./assets/images/projects/whitebox-ml-dl-pca-demo.png",
            caption: "White-box ML / DL PCA demo",
          },
          {
            src: "./assets/images/projects/whitebox-ml-dl-tsne-demo.png",
            caption: "White-box ML / DL t-SNE demo",
          },
        ],
        catTitle: "Cat",
        catText: "These are cats from my daily life, including Charlie, who was abandoned at Petco and later adopted by me.",
        catImages: [
          { src: "./assets/images/cat/Charlie/1.jpg", caption: "Charlie scratching" },
          { src: "./assets/images/cat/Charlie/2.jpg", caption: "Charlie zoning out" },
          { src: "./assets/images/cat/Charlie/3.jpg", caption: "Charlie resting" },
          { src: "./assets/images/cat/mimi/图片_20260730204718_2560_1.jpg", caption: "Mimi photo" },
          { src: "./assets/images/cat/mimi/图片_20260730204750_2561_1.jpg", caption: "Mimi close-up" },
          { src: "./assets/images/cat/mimi/图片_20260730205028_2564_1.jpg", caption: "Mimi resting" },
        ],
        electronicsTitle: "Electronics Making",
        electronicsText:
          "My electronics work ranges from discrete transistor logic to relay-driven mechanisms and CM600HA-24H IGBT-module-driven DRSSTC systems. I like discrete-component circuits with many visible parts, clean physical structure, and the visual order that comes from components arranged neatly.",
        electronicsProjects: [
          {
            title: "Hardware Music Box",
            text:
              "A hardware music box built entirely from transistors, without integrated circuits. The interest is in rebuilding chip-level timing, switching, and sound-generation logic with discrete components.",
            images: [
              {
                src: "./assets/images/music-box/图片_20260726221508_2464_1.jpg",
                caption: "Assembled transistor music box board",
              },
              {
                src: "./assets/images/music-box/图片_20260726221510_2465_1.jpg",
                caption: "Music box board with speaker wiring",
              },
              {
                src: "./assets/images/music-box/图片_20260726221511_2466_1.jpg",
                caption: "Transistor music box control section",
              },
              {
                src: "./assets/images/music-box/图片_20260726230841_2477_1.jpg",
                caption: "Music box timing and switching board",
              },
              {
                src: "./assets/images/music-box/图片_20260726230843_2478_1.jpg",
                caption: "Close-up of the transistor rows",
              },
              {
                src: "./assets/images/music-box/图片_20260726230846_2479_1.jpg",
                caption: "Music box wiring and component layout",
              },
              {
                src: "./assets/images/music-box/图片_20260726230847_2480_1.jpg",
                caption: "Discrete component music box assembly",
              },
              {
                src: "./assets/images/music-box/图片_20260726230849_2481_1.jpg",
                caption: "Finished music box board with the discrete signal path visible",
              },
              {
                src: "./assets/images/music-box/图片_20260726230850_2482_1.jpg",
                caption: "Music box oscillator and signal wiring",
              },
              {
                src: "./assets/images/music-box/图片_20260726230852_2483_1.jpg",
                caption: "Transistor music box module close-up",
              },
              {
                src: "./assets/images/music-box/图片_20260726230854_2484_1.jpg",
                caption: "Music box board and output wiring",
              },
              {
                src: "./assets/images/music-box/图片_20260726230855_2485_1.jpg",
                caption: "Music box power and control connections",
              },
              {
                src: "./assets/images/music-box/图片_20260730203728_2548_1.jpg",
                caption: "Music box mounted hardware view",
              },
              {
                src: "./assets/images/music-box/图片_20260730203729_2549_1.jpg",
                caption: "Completed music box circuit board from the component side",
              },
              {
                src: "./assets/images/music-box/图片_20260730203731_2550_1.jpg",
                caption: "Music box discrete circuit detail",
              },
              {
                src: "./assets/images/music-box/图片_20260730203733_2551_1.jpg",
                caption: "Completed hardware music box assembly",
              },
            ],
          },
          {
            title: "IC Clock",
            text:
              "A separate digital clock build, different from the fully discrete transistor version. It mixes ICs with transistor circuits: the ICs handle most of the counting, decoding, and display control, while transistor circuits handle the oscillator and latch-related parts. The focus is module wiring, timing behavior, and final assembly.",
            images: [
              {
                src: "./assets/images/transistor-clock/图片_20260726221520_2471_1.jpg",
                caption: "IC clock hardware photo",
              },
            ],
          },
          {
            title: "Telegraph Hardware Build",
            text:
              "A telegraph communication build using a CH340 USB-to-UART chip. It can read content from a computer serial port or from an SD card, then send it through my own Morse-code recognition and communication protocol. The AVR uses interrupts to handle input and timing so the devices can communicate with each other.",
            images: [
              {
                src: "./assets/images/telegraph/图片_20260726221517_2469_1.jpg",
                caption: "Telegraph hardware build photo",
              },
            ],
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
                caption: "Relay clock installed inside the acrylic enclosure",
              },
              {
                src: "./assets/images/relay-clock/5.jpg",
                caption: "Relay clock hardware inside the acrylic enclosure",
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
            title: "88-Channel Relay Piano Control Array",
            text:
              "An 88-channel relay array board for controlling the 88 keys of a piano. Each relay maps to one key-control channel. The focus is keeping the power, driver, and control wiring clear enough for the board to connect reliably to the later piano-control system.",
            images: [
              {
                src: "./assets/images/relay-array/图片_20260726221513_2467_1.jpg",
                caption: "Full relay piano control assembly with Arduino and wiring harness",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204042_2552_1.jpg",
                caption: "Front view of the relay rows, driver wiring, and Arduino control board",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204044_2553_1.jpg",
                caption: "Side view of the stacked relay board and indicator LEDs",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204152_2554_1.jpg",
                caption: "Close-up of the wiring harness and control headers",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204357_2555_1.jpg",
                caption: "Arduino control side next to the relay matrix",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204358_2556_1.jpg",
                caption: "Relay rows beside the control and wiring section",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204359_2557_1.jpg",
                caption: "Connector board and bundled control wiring",
              },
            ],
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
            title: "Modular Discrete Transistor Logic Clock",
            text:
              "An IC-free modular digital logic clock constructed entirely using discrete 9012 and 9013 transistors, comprising 3-input AND gate modules, master-slave JK flip-flop counter boards, BCD decoding & display modules, manual clock adjustment boards, and power distribution units.",
            images: [
              {
                src: "./assets/images/ttl-clock/3与门 红色.PNG",
                caption: "3-Input AND Gate Module (Red Board)",
              },
              {
                src: "./assets/images/ttl-clock/主从JK 蓝色.PNG",
                caption: "Master-Slave JK Flip-Flop Divider/Counter Module (Blue Board)",
              },
              {
                src: "./assets/images/ttl-clock/译码显示 黑色.PNG",
                caption: "BCD Decoder & 7-Segment Display Module (Black Board)",
              },
              {
                src: "./assets/images/ttl-clock/调表板 黄色.PNG",
                caption: "Clock Adjustment & Control Board (Purple Board, changed to purple due to low yellow contrast)",
              },
              {
                src: "./assets/images/ttl-clock/弯针电源 白色.PNG",
                caption: "Right-Angle Header Power Distribution Module (White Board)",
              },
            ],
          },
          {
            title: "TTL Chip Digital Clock",
            text:
              "A separate digital clock built with TTL logic chips. It is different from the no-IC transistor clock, and the work is mainly about wiring the logic chips, checking the count and decode stages, and assembling the display section.",
            images: [
              {
                src: "./assets/images/ttl-chip-clock/图片_20260729001204_2518_1.jpg",
                caption: "TTL chip clock display and control board",
              },
              {
                src: "./assets/images/ttl-chip-clock/图片_20260729001205_2519_1.jpg",
                caption: "TTL chip clock board wiring",
              },
              {
                src: "./assets/images/ttl-chip-clock/图片_20260730202239_2529_1.jpg",
                caption: "TTL chip clock module stack",
              },
              {
                src: "./assets/images/ttl-chip-clock/图片_20260730202449_2532_1.jpg",
                caption: "Completed TTL chip clock on the bench",
              },
            ],
          },
          {
            title: "ST7920 12864 Graphic LCD Driver & Expansion Board",
            text:
              "A dedicated interface and expansion PCB designed for ST7920-based 12864 graphic LCD displays, bridging MCU controls, contrast tuning, and dot-matrix display driving.",
            images: [
              {
                src: "./assets/images/12864/pcb.PNG",
                caption: "ST7920 12864 LCD Interface PCB Layout",
              },
              {
                src: "./assets/images/12864/图片_20260726221515_2468_1.jpg",
                caption: "ST7920 12864 LCD interface board photo",
              },
            ],
          },
          {
            title: "Voltage Comparator Pure Hardware Game of Life",
            text:
              "A pure hardware Conway's Game of Life built using voltage comparators (op-amps). Completely free of MCUs or 12864 displays, cellular state evolution is driven directly by hardware comparator logic.",
            images: [
              {
                src: "./assets/images/game-life/pcb 正面.PNG",
                caption: "Game of Life PCB Top View Render",
              },
              {
                src: "./assets/images/game-life/丝印层 正面.PNG",
                caption: "Game of Life Top Silkscreen & Trace Layer",
              },
            ],
          },
          {
            title: "8×8×8 3D LED Light Cube",
            text:
              "A 3D LED matrix light cube containing 512 LED nodes, featuring multiplexed driver circuit schematics, 3D frame refresh routines, and custom hardware assembly.",
            images: [
              {
                src: "./assets/images/light-cube-888/Schematic.png",
                caption: "8x8x8 LED Light Cube Circuit Schematic",
              },
              {
                src: "./assets/images/light-cube-888/唯一一张.PNG",
                caption: "8x8x8 LED Light Cube Hardware Photo",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726221518_2470_1.jpg",
                caption: "LED cube frame with wiring exposed",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231336_2486_1.jpg",
                caption: "LED cube vertical layer assembly",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231338_2487_1.jpg",
                caption: "LED cube soldered grid structure",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231339_2488_1.jpg",
                caption: "LED cube base wiring detail",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231340_2489_1.jpg",
                caption: "LED cube control wiring underside",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231342_2490_1.jpg",
                caption: "LED cube frame on the workbench",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231343_2491_1.jpg",
                caption: "LED cube soldering and alignment view",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730202659_2535_1.jpg",
                caption: "Finished LED cube frame and base wiring",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203108_2538_1.jpg",
                caption: "LED cube grid viewed from the front",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203109_2539_1.jpg",
                caption: "LED cube layer spacing and soldered columns",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203216_2540_1.jpg",
                caption: "LED cube frame with the full grid visible",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203218_2541_1.jpg",
                caption: "LED cube side view and vertical alignment",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203410_2543_1.jpg",
                caption: "LED cube upper grid and vertical supports",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203411_2544_1.jpg",
                caption: "LED cube layered structure from an angle",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203413_2545_1.jpg",
                caption: "LED cube full-height frame view",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203523_2546_1.jpg",
                caption: "LED cube diagonal view of the 3D grid",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203525_2547_1.jpg",
                caption: "Completed LED cube hardware view",
              },
            ],
          },
          {
            title: "IRFP260N ZVS High-Frequency Driver",
            text:
              "An IRFP260N TO-247 MOSFET ZVS high-frequency driver for high-current resonant drive and induction-heating experiments. This project focuses on power device selection, the resonant network, heat handling, and heavy-current wiring. The physical build has been donated to Beijing University of Technology.",
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
          {
            src: "./assets/images/projects/batch-mri-quality-control-demo.png",
            caption: "批量 MRI 质量控制项目 demo",
          },
          {
            src: "./assets/images/projects/distributed-paxos-raft-lab-demo.png",
            caption: "分布式 Paxos / Raft 实验项目 demo",
          },
          {
            src: "./assets/images/projects/industrial-query-agent-webui.png",
            caption: "工业查询智能体 Web UI demo",
          },
          {
            src: "./assets/images/projects/maze-algorithms-demo.png",
            caption: "迷宫算法项目 demo",
          },
          {
            src: "./assets/images/projects/whitebox-ml-dl-kmeans-demo.png",
            caption: "白盒 ML / DL K-means demo",
          },
          {
            src: "./assets/images/projects/whitebox-ml-dl-pca-demo.png",
            caption: "白盒 ML / DL PCA demo",
          },
          {
            src: "./assets/images/projects/whitebox-ml-dl-tsne-demo.png",
            caption: "白盒 ML / DL t-SNE demo",
          },
        ],
        catTitle: "猫",
        catText: "这些是我日常生活里的猫，其中包括查理。查理是被人遗弃在 Petco 后由我收养的。",
        catImages: [
          { src: "./assets/images/cat/Charlie/1.jpg", caption: "瘙痒中的查理" },
          { src: "./assets/images/cat/Charlie/2.jpg", caption: "发呆中的查理" },
          { src: "./assets/images/cat/Charlie/3.jpg", caption: "休息中的查理" },
          { src: "./assets/images/cat/mimi/图片_20260730204718_2560_1.jpg", caption: "Mimi 照片" },
          { src: "./assets/images/cat/mimi/图片_20260730204750_2561_1.jpg", caption: "Mimi 近照" },
          { src: "./assets/images/cat/mimi/图片_20260730205028_2564_1.jpg", caption: "休息中的 Mimi" },
        ],
        electronicsTitle: "电子制作",
        electronicsText:
          "我的电子制作从分立三极管逻辑、继电器机械结构，到 CM600HA-24H IGBT 模块驱动的 DRSSTC 都有涉及。我喜欢做那种分立式、有元器件数量之美、元件整齐排列的电路。",
        electronicsProjects: [
          {
            title: "硬件八音盒",
            text:
              "全三极管实现的硬件八音盒，没有使用任何集成电路。重点是把芯片里的时序、开关和发声逻辑变成分立元件电路。",
            images: [
              {
                src: "./assets/images/music-box/图片_20260726221508_2464_1.jpg",
                caption: "全三极管八音盒整机板",
              },
              {
                src: "./assets/images/music-box/图片_20260726221510_2465_1.jpg",
                caption: "带扬声器接线的八音盒电路",
              },
              {
                src: "./assets/images/music-box/图片_20260726221511_2466_1.jpg",
                caption: "八音盒控制电路区域",
              },
              {
                src: "./assets/images/music-box/图片_20260726230841_2477_1.jpg",
                caption: "八音盒时序与开关电路",
              },
              {
                src: "./assets/images/music-box/图片_20260726230843_2478_1.jpg",
                caption: "三极管排列近景",
              },
              {
                src: "./assets/images/music-box/图片_20260726230846_2479_1.jpg",
                caption: "八音盒接线和元件布局",
              },
              {
                src: "./assets/images/music-box/图片_20260726230847_2480_1.jpg",
                caption: "分立元件八音盒装配",
              },
              {
                src: "./assets/images/music-box/图片_20260726230849_2481_1.jpg",
                caption: "能看到分立信号路径的八音盒成品板",
              },
              {
                src: "./assets/images/music-box/图片_20260726230850_2482_1.jpg",
                caption: "八音盒振荡和信号接线",
              },
              {
                src: "./assets/images/music-box/图片_20260726230852_2483_1.jpg",
                caption: "三极管八音盒模块近景",
              },
              {
                src: "./assets/images/music-box/图片_20260726230854_2484_1.jpg",
                caption: "八音盒输出接线",
              },
              {
                src: "./assets/images/music-box/图片_20260726230855_2485_1.jpg",
                caption: "八音盒电源和控制连接",
              },
              {
                src: "./assets/images/music-box/图片_20260730203728_2548_1.jpg",
                caption: "八音盒硬件固定后的视图",
              },
              {
                src: "./assets/images/music-box/图片_20260730203729_2549_1.jpg",
                caption: "从元件面看到的八音盒成品电路板",
              },
              {
                src: "./assets/images/music-box/图片_20260730203731_2550_1.jpg",
                caption: "八音盒分立电路细节",
              },
              {
                src: "./assets/images/music-box/图片_20260730203733_2551_1.jpg",
                caption: "完成装配的硬件八音盒",
              },
            ],
          },
          {
            title: "集成电路时钟",
            text:
              "这是另一套数字时钟制作，不是全分立三极管版本。它混合使用了集成电路和三极管电路：计数、译码和显示控制主要由 IC 完成，振荡和锁存相关部分用三极管搭出来。重点在模块连接、时序关系和整机装配。",
            images: [
              {
                src: "./assets/images/transistor-clock/图片_20260726221520_2471_1.jpg",
                caption: "集成电路时钟硬件照片",
              },
            ],
          },
          {
            title: "电报机硬件制作",
            text:
              "一个电报通信制作，用 CH340 做 USB 转 UART。内容可以从电脑串口读取，也可以从 SD 卡读取，然后通过我写的莫尔斯码识别和通信协议在设备之间传递。AVR 这边用中断处理输入和时序，让几块设备能互相通信。",
            images: [
              {
                src: "./assets/images/telegraph/图片_20260726221517_2469_1.jpg",
                caption: "电报机硬件制作照片",
              },
            ],
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
                caption: "装进透明亚克力外壳里的继电器机械表",
              },
              {
                src: "./assets/images/relay-clock/5.jpg",
                caption: "透明亚克力外壳内的继电器机械表硬件",
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
            title: "88 路继电器钢琴控制阵列",
            text:
              "这是一块 88 路继电器阵列板，用来控制钢琴的 88 个键。每一路继电器对应一个按键控制通道，重点是把电源、驱动和控制线整理清楚，让整块板能稳定接入后面的钢琴控制系统。",
            images: [
              {
                src: "./assets/images/relay-array/图片_20260726221513_2467_1.jpg",
                caption: "带 Arduino 和接线束的钢琴继电器控制阵列整机",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204042_2552_1.jpg",
                caption: "继电器排、驱动接线和 Arduino 控制板正面",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204044_2553_1.jpg",
                caption: "继电器板侧面和指示灯排",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204152_2554_1.jpg",
                caption: "控制接线束和排针接口近景",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204357_2555_1.jpg",
                caption: "继电器矩阵旁边的 Arduino 控制侧",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204358_2556_1.jpg",
                caption: "继电器排与控制接线区域",
              },
              {
                src: "./assets/images/relay-array/图片_20260730204359_2557_1.jpg",
                caption: "接口板和整理后的控制线束",
              },
            ],
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
            title: "纯分立三极管数字逻辑时钟",
            text:
              "完全由 9012、9013 晶体三极管及分立元件拼搭搭建的无集成电路（No IC）模块化数字逻辑时钟，包含 3 输入与门板、主从 JK 触发器分频计数板、译码显示板、调表板与电源分配模块。",
            images: [
              {
                src: "./assets/images/ttl-clock/3与门 红色.PNG",
                caption: "3 输入与门逻辑模块（红板）",
              },
              {
                src: "./assets/images/ttl-clock/主从JK 蓝色.PNG",
                caption: "主从 JK 触发器分频 / 计数模块（蓝板）",
              },
              {
                src: "./assets/images/ttl-clock/译码显示 黑色.PNG",
                caption: "BCD 译码与数码管显示模块（黑板）",
              },
              {
                src: "./assets/images/ttl-clock/调表板 黄色.PNG",
                caption: "调表与校时控制板（紫板，因黄色对比度太低采用紫色可视化）",
              },
              {
                src: "./assets/images/ttl-clock/弯针电源 白色.PNG",
                caption: "弯针电源分配模块（白板）",
              },
            ],
          },
          {
            title: "TTL 芯片数字时钟",
            text:
              "这是另一套用 TTL 逻辑芯片做的数字时钟，和无集成电路的三极管时钟不是同一个项目。这个项目主要是把逻辑芯片、计数译码和显示部分接起来，再完成整机装配。",
            images: [
              {
                src: "./assets/images/ttl-chip-clock/图片_20260729001204_2518_1.jpg",
                caption: "TTL 芯片时钟显示与控制板",
              },
              {
                src: "./assets/images/ttl-chip-clock/图片_20260729001205_2519_1.jpg",
                caption: "TTL 芯片时钟板间接线",
              },
              {
                src: "./assets/images/ttl-chip-clock/图片_20260730202239_2529_1.jpg",
                caption: "TTL 芯片时钟模块堆叠",
              },
              {
                src: "./assets/images/ttl-chip-clock/图片_20260730202449_2532_1.jpg",
                caption: "桌面上的 TTL 芯片时钟成品",
              },
            ],
          },
          {
            title: "ST7920 12864 点阵液晶驱动板",
            text:
              "面向 12864 点阵液晶屏设计的专有驱动与扩展 PCB，打通微控制器接口、对比度调节与点阵显示驱动控制。",
            images: [
              {
                src: "./assets/images/12864/pcb.PNG",
                caption: "ST7920 12864 液晶接口 PCB 布局与布线",
              },
              {
                src: "./assets/images/12864/图片_20260726221515_2468_1.jpg",
                caption: "ST7920 12864 液晶接口板实物照片",
              },
            ],
          },
          {
            title: "纯硬件电压比较器康威生命游戏",
            text:
              "基于电压比较器（运放）构成的纯硬件康威生命游戏，不依赖单片机与 12864 显示屏，细胞演化状态完全由电压比较器硬件电路进行判断与自动演进。",
            images: [
              {
                src: "./assets/images/game-life/pcb 正面.PNG",
                caption: "硬件生命游戏 PCB 正面渲染图",
              },
              {
                src: "./assets/images/game-life/丝印层 正面.PNG",
                caption: "硬件生命游戏正面丝印与走线图",
              },
            ],
          },
          {
            title: "8×8×8 三维 LED 光立方",
            text:
              "拥有 512 个 LED 节点的立体三维显示光立方，包含多路复用驱动电路设计、三维动画帧刷新与硬件电路原理图设计。",
            images: [
              {
                src: "./assets/images/light-cube-888/Schematic.png",
                caption: "8×8×8 光立方电路原理图",
              },
              {
                src: "./assets/images/light-cube-888/唯一一张.PNG",
                caption: "8×8×8 光立方硬件实物展示",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726221518_2470_1.jpg",
                caption: "露出接线的光立方框架",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231336_2486_1.jpg",
                caption: "光立方竖向层结构",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231338_2487_1.jpg",
                caption: "焊接完成的 LED 网格",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231339_2488_1.jpg",
                caption: "光立方底部接线细节",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231340_2489_1.jpg",
                caption: "光立方控制线底部视图",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231342_2490_1.jpg",
                caption: "工作台上的光立方框架",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260726231343_2491_1.jpg",
                caption: "光立方焊接和对齐检查",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730202659_2535_1.jpg",
                caption: "光立方成品框架和底部接线",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203108_2538_1.jpg",
                caption: "从正面看到的光立方网格",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203109_2539_1.jpg",
                caption: "光立方层间距和焊接立柱",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203216_2540_1.jpg",
                caption: "能看到完整网格的光立方框架",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203218_2541_1.jpg",
                caption: "光立方侧面结构和垂直对齐",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203410_2543_1.jpg",
                caption: "光立方上层网格和竖向支撑",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203411_2544_1.jpg",
                caption: "斜角视图下的光立方分层结构",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203413_2545_1.jpg",
                caption: "光立方整高度框架视图",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203523_2546_1.jpg",
                caption: "光立方三维网格斜向视图",
              },
              {
                src: "./assets/images/light-cube-888/图片_20260730203525_2547_1.jpg",
                caption: "光立方成品硬件视图",
              },
            ],
          },
          {
            title: "IRFP260N ZVS 高频驱动",
            text:
              "基于 IRFP260N TO-247 功率 MOSFET 的 ZVS 高频驱动电路，用来做大电流谐振驱动和感应加热实验。这个项目重点在功率器件选型、谐振网络、散热和大电流布线。实物已经捐赠给北京工业大学。",
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
    };
