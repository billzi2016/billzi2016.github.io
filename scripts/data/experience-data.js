// Experience and education data.
window.siteExperienceContent = {
    industry: [
      {
        titleEn: "China Post (Internship)",
        titleZh: "中国邮政（实习）",
        meta: "Jan 2026 - Mar 2026",
        roleEn: "AI Algorithm Engineer, Large Language Model Direction",
        roleZh: "AI 算法工程师（大模型方向）",
        links: [
          {
            labelEn: "GitHub link: chinapost-internship",
            labelZh: "GitHub 链接：chinapost-internship",
            url: "https://github.com/billzi2016/chinapost-internship",
          },
        ],
        images: [
          {
            src: "./assets/images/projects/chinapost-internship/django_week2.png",
            captionEn: "China Post customer-service intelligent assistant interface and RAG workflow.",
            captionZh: "中国邮政客服智能助手界面与 RAG 工作流。",
          },
        ],
        bullets: [
          {
            en: "Built a China Post customer-service intelligent assistant with Django, django-ninja, Server-Sent Events (SSE), Bootstrap 5, and Tailwind CSS for the Web/API and streaming-response layer; integrated PostgreSQL + pgvector for vector storage and FAISS for local vector retrieval/indexing; used Ollama only as a local test backend for validating the LLM API adapter, with support for switching to vLLM, SGLang, OpenRouter, or OpenAI API backends for domain dialogue and ticket-generation workflows.",
            zh: "构建中国邮政客服智能助手，使用 Django、django-ninja、Server-Sent Events（SSE）、Bootstrap 5 和 Tailwind CSS 完成 Web/API 与流式响应层；集成 PostgreSQL + pgvector 作为向量存储，并使用 FAISS 支撑本地向量检索与索引；Ollama 仅作为本地测试后端，用于验证 LLM API 适配层，并支持切换 vLLM、SGLang、OpenRouter、OpenAI API 等后端模型服务，支撑邮政领域对话与工单生成流程。",
          },
          {
            en: "Because much of the original project work was completed in closed internal systems, the public GitHub repository is a later reproduction built to show the architecture, API flow, and deployable demo without exposing internal data or infrastructure.",
            zh: "由于大量原始项目工作发生在封闭内部系统中，公开 GitHub 仓库是后续复现版本，用于展示系统架构、API 流程和可部署演示，同时不暴露内部数据与基础设施。",
          },
          {
            en: "Cleaned and expanded CSDS general customer-service data, filtered 5,376 postal multi-turn dialogues with a semantic-embedding and gpt-oss-20b multi-class Agent pipeline, and constructed 8,217 postal instruction-tuning samples after data augmentation and EDA analysis.",
            zh: "清洗 CSDS 通用客服数据集，基于语义 Embedding 与 gpt-oss-20b 多分类 Agent 筛选 5,376 条邮政相关多轮对话，并经数据增强与 EDA 分析构建 8,217 条邮政专属指令微调样本。",
          },
          {
            en: "Compared Qwen2.5-3B/7B, Qwen3, Llama 4, DeepSeek-V3/R1, gpt-oss-20b, and other open-source models across Chinese customer-service fit, JSON-structured output, small-data trainability, and deployment cost; selected Qwen2.5-7B-Instruct for SFT and used gpt-oss-20b as a JSON AI Agent tool for standardized ticket generation.",
            zh: "横向评估 Qwen2.5-3B/7B、Qwen3、Llama 4、DeepSeek-V3/R1、gpt-oss-20b 等开源模型，按中文客服适配度、JSON 结构化输出、小数据可训练性和部署成本选型；选定 Qwen2.5-7B-Instruct 作为 SFT 主力模型，并使用 gpt-oss-20b 作为 JSON AI Agent 工具生成标准化工单。",
          },
          {
            en: "Designed a reusable dual-task architecture for dialogue generation and ticket generation, separated functions through system-prompt switching, and fine-tuned with 4-bit quantized LoRA for a small GPU budget, reducing training time to under 10 seconds and preserving generalization with a three-level anti-overfitting mechanism.",
            zh: "设计对话生成与工单生成双任务复用架构，通过系统提示词切换实现功能隔离，并采用 4-bit 量化 LoRA 在小显存条件下微调，将训练压缩到 10 秒以内，同时通过三级防过拟合机制保证泛化能力。",
          },
          {
            en: "Implemented a cloud-native, containerized tiered-trigger RAG knowledge base for postal domain knowledge, using PostgreSQL + pgvector as the vector-storage layer and FAISS / SQLite for local retrieval and indexing workflows; the system was designed from the start for direct cloud deployment and supported high-risk query retrieval under 200 ms, JSON validation, batch export, and enterprise-backend integration.",
            zh: "实现面向邮政领域知识的云原生、容器化分级触发 RAG 知识库，以 PostgreSQL + pgvector 作为向量存储层，并结合 FAISS / SQLite 支撑本地检索和索引流程；系统从一开始就按可直接部署到云端的方式设计，支持高风险查询检索小于 200 ms、JSON 校验、批量导出和企业后台对接。",
          },
          {
            en: "Accelerated system inference with torch.compile, pre-cached prefix KV cache, and context caching, reaching roughly 1.2 s dialogue inference and 1.7 s ticket generation while keeping output structure stable.",
            zh: "通过 torch.compile、预缓存前缀 KV cache 和上下文缓存加速系统推理，将对话推理控制在约 1.2 秒、工单生成控制在约 1.7 秒，并保持结构化输出稳定。",
          },
          {
            en: "Established a business-semantics evaluation protocol: single-turn dialogue accuracy reached 92.3%, multi-turn context understanding 87.6%, core ticket-field extraction 93.5%, hallucination rate 2.8%, expected labor cost reduction 30%, and ticket-triage efficiency improvement 80%.",
            zh: "建立业务语义准确率评估体系，单轮对话准确率达到 92.3%、多轮上下文理解 87.6%、工单核心字段提取 93.5%、幻觉率 2.8%，预计降低人力成本 30%、提升工单整理效率 80%。",
          },
        ],
      },
      {
        titleEn: "Xperf (Internship)",
        titleZh: "Xperf（实习）",
        meta: "Aug 2025 - Jan 2026",
        roleEn: "AI Research and AI/ML Optimization Engineer",
        roleZh: "AI 研究与 AI/ML 优化工程师",
        bullets: [
          {
            en: "Developed a PSO-based closed-loop optimization framework for Marvell high-speed interconnect validation workflows, supporting AEC parameter tuning across 400G / 800G product-line setups and 1.6T simulator environments.",
            zh: "面向 Marvell 高速互连验证流程开发了基于 PSO 的闭环优化框架，支持 400G / 800G 产品线配置与 1.6T 仿真环境下的 AEC 参数调优。",
          },
          {
            en: "Improved BERT measurement results from 10^-6 to 10^-12 through automated multi-objective optimization, reducing manual engineering effort by 97%.",
            zh: "通过自动化多目标优化将 BERT 测试结果从 10^-6 提升到 10^-12，并将人工工程调参工作量降低了 97%。",
          },
          {
            en: "Designed and implemented a multiprocessing-based single-machine parallel framework for scalable PSO evaluation across multidimensional cable-configuration search spaces, using adaptive scheduling to reduce convergence time from hours to minutes.",
            zh: "设计并实现了基于多进程的单机并行框架，用于在多维线缆配置搜索空间中扩展 PSO 评估，通过自适应调度将收敛时间从数小时降到数分钟。",
          },
          {
            en: "Built an end-to-end automated validation pipeline with self-developed APIs to control BERT testing, parallel parameter tuning, and I2C EEPROM programming; worked with Marvell-chip-based OSFP-DD / QSFP AEC, optical transceiver modules, and cable ecosystems.",
            zh: "构建了端到端自动化验证流水线，通过自研 API 控制 BERT 测试、并行参数调优和 I2C EEPROM 烧录；涉及基于 Marvell 芯片的 OSFP-DD / QSFP AEC、光模块与线缆生态。",
          },
          {
            en: "Applied Mask R-CNN for optical inspection of failed solder joints in DAC-related validation workflows, supporting automated defect detection with BERT-based testing.",
            zh: "在 DAC 相关验证流程中使用 Mask R-CNN 对焊点失效进行光学检测，配合 BERT 测试实现自动化缺陷识别。",
          },
        ],
      },
      {
        titleEn: "Infraeo (Internship)",
        titleZh: "Infraeo（实习）",
        meta: "May 2025 - Jan 2026",
        roleEn: "Machine Learning and Deep Learning Engineer",
        roleZh: "机器学习与深度学习工程师",
        links: [
          {
            labelEn: "GitHub link: Industrial-Query-Agent",
            labelZh: "GitHub 链接：Industrial-Query-Agent",
            url: "https://github.com/billzi2016/Industrial-Query-Agent/tree/main",
          },
        ],
        images: [
          {
            src: "https://raw.githubusercontent.com/billzi2016/Industrial-Query-Agent/main/v1_faiss/WebUI.png",
            captionEn: "Industrial Query Agent Django-template demo UI for the reproduced Infraeo-style retrieval/API system.",
            captionZh: "Industrial Query Agent 的 Django template 演示界面，用于展示后续复现的 Infraeo 风格检索/API 系统。",
          },
        ],
        bullets: [
          {
            en: "Many production details from the Infraeo internship were developed in closed internal systems, so the linked Industrial Query Agent repository is my later self-built reproduction that demonstrates the retrieval architecture, API design, and deployable service flow without exposing private code or data.",
            zh: "Infraeo 实习中的很多生产细节是在封闭内部系统中完成的，因此链接的 Industrial Query Agent 仓库是我后来自己实现的复现版本，用于展示检索架构、API 设计和可部署服务流程，同时不暴露私有代码或数据。",
          },
          {
            en: "Deployed and fine-tuned large language models up to 1000B parameters, including Qwen3 235B, Qwen3 Coder 480B, Kimi v2 1000B, Llama 3.3 70B, and GPT-OSS 120B, for domain-specific question answering with CoT prompting and RAG, reaching 89% answer accuracy.",
            zh: "部署并微调了最高 1000B 参数级别的大语言模型，包括 Qwen3 235B、Qwen3 Coder 480B、Kimi v2 1000B、Llama 3.3 70B 和 GPT-OSS 120B，用于结合 CoT 提示与 RAG 的领域问答，答案准确率达到 89%。",
          },
          {
            en: "Built semantic retrieval over 2M+ documents with FAISS-based embeddings that generated 768-dimensional vectors and a BERT reranker, achieving recall@10 of 0.94 and precision@5 of 0.87.",
            zh: "基于 FAISS 向量检索、768 维嵌入和 BERT 重排器构建了覆盖 200 万+ 文档的语义检索系统，达到 recall@10 为 0.94、precision@5 为 0.87。",
          },
          {
            en: "Fine-tuned Qwen and Llama models with LoRA and QLoRA using PyTorch, Unsloth, and Hugging Face Transformers, delivering 3.2x faster inference and 60% lower memory usage; developed backend-first AI services and API layers with FastAPI, Django, Docker, and Kubernetes supporting 500+ queries per second.",
            zh: "使用 PyTorch、Unsloth 和 Hugging Face Transformers，通过 LoRA 和 QLoRA 微调 Qwen 与 Llama 模型，实现 3.2 倍推理加速和 60% 显存降低；并用 FastAPI、Django、Docker、Kubernetes 开发以后端和 API 为核心的 AI 服务，支持 500+ QPS。",
          },
          {
            en: "Designed end-to-end machine learning pipelines processing 100GB+ of daily data, integrated vector databases (FAISS, ElasticSearch), PostgreSQL, and LangChain / LangGraph for multi-agent workflows, and packaged the reproduced system so it can be deployed directly to GCP or AWS.",
            zh: "设计端到端机器学习流水线，处理 100GB+ 日数据量，并整合 FAISS、ElasticSearch、PostgreSQL 以及 LangChain / LangGraph 多智能体流程；后续复现系统按可直接部署到 GCP 或 AWS 的方式打包。",
          },
          {
            en: "The frontend UI was not my main responsibility in the Infraeo work; my contribution focused on backend APIs, retrieval services, cloud-native packaging, and deployment architecture. In the reproduced public repository, the Django-template UI is only a lightweight demo wrapper around the backend service.",
            zh: "Infraeo 工作中的前端 UI 不是我的主要负责内容；我的贡献重点是后端 API、检索服务、云原生打包和部署架构。在后续复现的公开仓库中，Django template UI 只是围绕后端服务做的轻量级演示外壳。",
          },
        ],
      },
      {
        titleEn: "Hanergy Mobile Energy Holding Group (Internship)",
        titleZh: "汉能移动能源控股集团（实习）",
        meta: "2019",
        roleEn: "R&D Hardware Engineer",
        roleZh: "研发硬件工程师",
        bullets: [
          {
            en: "Developed a smart wireless weather monitoring system integrating STM32, LCD2004 / 12864 SPI OLED, air-pressure sensors, temperature and humidity modules, seven-segment displays, UART GPS, ESP8266 WiFi modules, Bluetooth modules, SMS modules, I2C/IIC sensors, anemometer components, lithium-battery and power-management modules, and an ultra-low-power mode.",
            zh: "开发了智能无线气象监测系统，集成 STM32、LCD2004 / 12864 SPI OLED、气压传感器、温湿度模块、数码管、UART GPS、ESP8266 WiFi 模块、蓝牙模块、SMS 模块、I2C/IIC 传感器、风速仪组件、锂电池和电源管理模块，并实现极限省电模式。",
          },
          {
            en: "Supported embedded hardware integration and system bring-up across sensing, communication, and display modules for field-oriented monitoring applications.",
            zh: "面向现场监测应用，完成了感知、通信与显示模块的嵌入式硬件集成与系统联调。",
          },
        ],
      },
      {
        titleEn: "Beijing University of Technology",
        titleZh: "北京工业大学",
        meta: "Sep 2017 - May 2019",
        roleEn: "R&D Assistant",
        roleZh: "研发助理",
        bullets: [
          {
            en: "Developed a six-degree-of-freedom robotic arm control system using STM32, stepper motors, sensors, cameras, and a custom four-layer PCB.",
            zh: "使用 STM32、步进电机、传感器、摄像头和自制四层 PCB 开发了六自由度机械臂控制系统。",
          },
          {
            en: "Built and configured an 8-node compute cluster with Intel Xeon E5-2696 v3 CPUs, NVIDIA Tesla K80 GPUs, RAID 50 storage, and VPN / SSH-enabled remote access.",
            zh: "搭建并配置了 8 节点计算集群，包含 Intel Xeon E5-2696 v3、NVIDIA Tesla K80、RAID 50 存储，以及支持 VPN / SSH 的远程访问环境。",
          },
        ],
      },
      {
        titleEn: "Chinese Academy of Sciences, Institute of Electrical Engineering (Internship)",
        titleZh: "中国科学院电工研究所（实习）",
        meta: "Sep 2017 - Nov 2017",
        roleEn: "Smart Systems Solutions and Development Engineer",
        roleZh: "智能系统解决方案与开发工程师",
        links: [
          {
            labelEn: "GitHub link: RS485-Modbus-Concrete-Sensor-Monitor",
            labelZh: "GitHub 链接：RS485-Modbus-Concrete-Sensor-Monitor",
            url: "https://github.com/billzi2016/RS485-Modbus-Concrete-Sensor-Monitor",
          },
        ],
        images: [
          {
            src: "https://raw.githubusercontent.com/billzi2016/RS485-Modbus-Concrete-Sensor-Monitor/main/platform-demo.png",
            captionEn: "Industrial RS485 / Modbus concrete-sensor monitoring platform reproduced from the closed CAS internship environment.",
            captionZh: "基于中科院封闭实习环境后续复现的工业级 RS485 / Modbus 混凝土传感器监测平台。",
          },
        ],
        bullets: [
          {
            en: "Worked on an industrial-grade large-scale sensor-network monitoring system designed for major concrete infrastructure such as dams and bridges, using reliable RS485 vibrating-wire sensors and MODBUS RTU / TCP communication to collect field measurements through gateway-oriented industrial control flows.",
            zh: "参与面向大坝、桥梁等大型混凝土基础设施的工业级大型传感器网络监测系统，依靠可靠的 RS485 振弦传感器与 MODBUS RTU / TCP 通信采集现场数据，并通过网关化工业控制链路汇聚信息。",
          },
          {
            en: "The original CAS implementation stayed on closed institute machines and could not be copied out, so the linked repository is a later self-built reproduction that preserves the architecture, data flow, and monitoring behavior without exposing internal code or deployment details.",
            zh: "原始中科院实现保留在研究所封闭电脑环境中，无法直接拷贝出来；链接的公开仓库是后续自实现复现版本，用于保留系统架构、数据流和监测行为，同时不暴露内部代码与部署细节。",
          },
          {
            en: "Designed the reproduced data path so simulated testing and production acquisition share the same backend contract: mock_server.py --feed writes 320 Redis keys per second for 20 gateways x 16 sensors with TTL=10s under monitor:sensor:{ip}:{index}, and Django RedisReader consumes the same keys for live frontend display; at the demonstrated update rate, the backend pipeline corresponds to tens of millions of sensor updates per day.",
            zh: "在复现系统中设计测试流与生产采集共用同一后端契约：mock_server.py --feed 每秒写入 320 个 Redis key（20 个网关 x 16 个传感器），TTL=10s，key 格式为 monitor:sensor:{ip}:{index}，再由 Django RedisReader 读取并实时展示到前端；按该展示更新速率估算，后端数据链路对应每天数千万次传感器更新。",
          },
          {
            en: "For the production path, RS485 sensors feed collector/modbus_client.py, which writes the same Redis key format used by the mock flow; Redis handles most real-time caching and aggregation work as a high-performance layer, while the distributed Modbus gateway and acquisition-worker design is theoretically scalable to thousands to tens of thousands of sensors by adding more gateway devices and collector instances.",
            zh: "生产路径中，RS485 传感器数据进入 collector/modbus_client.py，并写入与 mock 流完全相同的 Redis key 格式；Redis 作为高性能实时缓存与汇聚层承担绝大部分缓存任务，而分布式 Modbus 网关与采集 worker 设计在理论上可通过增加网关设备和采集实例承载千级到万级传感器。",
          },
        ],
      },
    ],
    research: [
      {
        titleEn: "Indiana University School of Medicine",
        titleZh: "印第安纳大学医学院",
        meta: "Nov 2020 - Aug 2021; Aug 2025 - May 2026",
        roleEn: "Research Assistant",
        roleZh: "研究助理",
        bullets: [
          {
            en: "Developed a two-stage generative framework combining 3D VQGAN with latent Diffusion Transformer (DiT) to synthesize volumetric sMRI scans for Alzheimer's research, leveraging DeepSpeed for distributed training.",
            zh: "开发了结合 3D VQGAN 与 latent Diffusion Transformer（DiT）的两阶段生成框架，用于合成阿尔茨海默病研究中的体积 sMRI 扫描，并使用 DeepSpeed 进行分布式训练。",
          },
          {
            en: "Implemented a self-supervised Point Transformer pipeline for 4096-point facial point clouds with SimCLR-based contrastive learning for forensic anthropometry, producing pose- and scale-robust geometric representations.",
            zh: "为 4096 点人脸点云实现了自监督 Point Transformer 流水线，结合基于 SimCLR 的对比学习服务于法医人类测量学，得到对姿态与尺度更稳健的几何表示。",
          },
          {
            en: "Contributed to DeepChrInteract, a Python deep learning toolkit for genome-wide chromatin interaction prediction, and conducted DNA / RNA analysis, enhancer-promoter prediction, and chromatin interaction prediction using 1D-CNN, 2D-CNN, LSTM, BLSTM, FCNN, flat VGG-like networks, ResNet, DenseNet, Random Forest, and SVM models.",
            zh: "参与开发了用于全基因组染色质互作预测的 Python 深度学习工具包 DeepChrInteract，并使用 1D-CNN、2D-CNN、LSTM、BLSTM、FCNN、平坦化 VGG 风格网络、ResNet、DenseNet、随机森林和 SVM 进行 DNA / RNA 分析、增强子-启动子预测与染色质互作预测。",
          },
          {
            en: "Reproduced and extended DeepChrInteract for enhancer-promoter interaction prediction, supporting one-hot, k-mer, and DNA-LLM inputs.",
            zh: "复现并扩展了 DeepChrInteract，用于增强子-启动子互作预测，支持 one-hot、k-mer 和 DNA-LLM 输入。",
          },
          {
            en: "Systematically evaluated 14 encoder architectures, including CNN, BiLSTM, mLSTM, xLSTM, Transformer, Linear Transformer, iTransformer, Mamba, RWKV, MAE, and DNA LLMs such as DNABERT, DNABERT-2, NT, and HyenaDNA; designed 6 fusion strategies including concatenation, addition, subtraction, element-wise multiplication, bilinear fusion, and concatenation-difference-product fusion; and evaluated using AUROC, AUPRC, F1, and Accuracy.",
            zh: "系统评估了 14 种编码器架构，包括 CNN、BiLSTM、mLSTM、xLSTM、Transformer、Linear Transformer、iTransformer、Mamba、RWKV、MAE，以及 DNABERT、DNABERT-2、NT、HyenaDNA 等 DNA LLM；设计了 6 种融合策略，包括拼接、相加、相减、逐元素乘法、双线性融合和拼接-差分-乘积融合，并使用 AUROC、AUPRC、F1 和 Accuracy 进行评估。",
          },
        ],
      },
      {
        titleEn: "Purdue University",
        titleZh: "普渡大学",
        meta: "Jan 2024 - Aug 2024",
        roleEn: "Research Assistant",
        roleZh: "研究助理",
        bullets: [
          {
            en: "Conducted mmWave radar research spanning image and point-cloud processing, pattern recognition, and image generation, with emphasis on model security for attack and defense.",
            zh: "开展了毫米波雷达研究，覆盖图像与点云处理、模式识别和图像生成，并重点关注模型安全中的攻击与防御问题。",
          },
          {
            en: "Performed signal analysis and window-function optimization on IWR6843, IWR1843, IWR1642, and Cascade EVM 2243x4 platforms, using FFT-based range, Doppler, and angle processing to extract point clouds and heatmaps.",
            zh: "在 IWR6843、IWR1843、IWR1642 和 Cascade EVM 2243x4 平台上完成信号分析与窗函数优化，利用基于 FFT 的距离、多普勒和角度处理提取点云与热力图。",
          },
          {
            en: "Developed and validated physical backdoor attacks against mmWave-based human activity recognition systems, advancing empirical understanding of sensing-system security vulnerabilities.",
            zh: "开发并验证了针对基于毫米波的人体活动识别系统的物理后门攻击，推进了对感知系统安全漏洞的实证理解。",
          },
        ],
      },
      {
        titleEn: "Purdue University",
        titleZh: "普渡大学",
        meta: "Aug 2024 - May 2025",
        roleEn: "Research Assistant",
        roleZh: "研究助理",
        bullets: [
          {
            en: "Conducted multimodal research across vision, audio, and text; studied deep learning security including backdoor attack implementation, defense, and adversarial robustness.",
            zh: "开展了视觉、音频和文本方向的多模态研究，并研究深度学习安全，包括后门攻击实现、防御和对抗鲁棒性。",
          },
          {
            en: "Fine-tuned and deployed large language models for downstream tasks, with emphasis on practical adaptation and robustness against adversarial attacks.",
            zh: "针对下游任务微调并部署了大语言模型，重点关注实际适配能力与对抗攻击下的鲁棒性。",
          },
        ],
      },
      {
        titleEn: "Purdue University",
        titleZh: "普渡大学",
        meta: "Jan 2021 - Jan 2024",
        roleEn: "Research Assistant",
        roleZh: "研究助理",
        bullets: [
          {
            en: "Conducted Alzheimer's research on relationships between age, education, MMSE, BMI, and brain fMRI connectivity across HCI, MCI, and AD stages; developed visualization software for high-dimensional medical data with arbitrary 2D projections and PCA traversal.",
            zh: "研究了年龄、受教育程度、MMSE、BMI 与 HCI、MCI、AD 不同阶段脑 fMRI 连接性的关系；并开发了支持任意二维投影与 PCA 遍历的高维医学数据可视化软件。",
          },
          {
            en: "Created animations for addictive-behavior analysis using nearest-neighbor, bilinear, bicubic, quintic, and affine Shepard interpolation to illustrate neurological changes.",
            zh: "使用最近邻、双线性、双三次、五次与仿射 Shepard 插值方法，为成瘾行为分析制作动画以展示神经学变化。",
          },
          {
            en: "Extracted and fine-tuned features with ResNet, EfficientNet, MobileNet, Xception, DenseNet, and CLIP (ViT) for medical imaging tasks.",
            zh: "在医学影像任务中使用 ResNet、EfficientNet、MobileNet、Xception、DenseNet 和 CLIP（ViT）进行特征提取与微调。",
          },
          {
            en: "Used NIH ABCD data to predict adolescent suicide risk and contributing factors, and applied machine learning to analyze the impact of COVID-19.",
            zh: "利用 NIH ABCD 数据预测青少年自杀风险及相关因素，并使用机器学习分析 COVID-19 的影响。",
          },
          {
            en: "Applied deep learning to discover iris-gene pattern links, used diffusion and Stable Diffusion models to generate irises for specific genotypes, and combined signal processing with deep learning for fine-grained mmWave action distinction and intention recognition under high similarity.",
            zh: "使用深度学习挖掘虹膜与基因模式之间的联系，利用扩散模型和 Stable Diffusion 为特定基因型生成虹膜图像，并结合信号处理与深度学习完成高相似场景下的细粒度毫米波动作区分与意图识别。",
          },
        ],
      },
    ],
    education: [
      {
        titleEn: "Indiana University Luddy School of Informatics, Computing, and Engineering",
        titleZh: "印第安纳大学 Luddy 信息、计算与工程学院",
        meta: "Aug 2025 - Present",
        roleEn: "Ph.D. Candidate, Computer Science (CS)",
        roleZh: "计算机科学博士候选人",
      },
      {
        titleEn: "Purdue University",
        titleZh: "普渡大学",
        meta: "Aug 2021 - May 2025",
        roleEn: "Ph.D. Candidate, Computer and Information Technology",
        roleZh: "计算与信息技术博士候选人",
        noteEn: "Transferred with advisor to Indiana University to continue doctoral study.",
        noteZh: "后随导师转入印第安纳大学继续博士阶段学习。",
      },
      {
        titleEn: "Purdue University",
        titleZh: "普渡大学",
        meta: "Aug 2019 - May 2021",
        roleEn: "M.S., Computer Science (CS)",
        roleZh: "计算机科学硕士",
      },
      {
        titleEn: "Beijing University of Technology",
        titleZh: "北京工业大学",
        meta: "Sep 2015 - May 2019",
        roleEn: "Electrical and Computer Engineering (ECE/EE)",
        roleZh: "电子与计算机工程 / 通信工程 / 多媒体通信",
      },
    ],
  };
