const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const languageMenu = document.getElementById('languageMenu');
const langOptions = document.querySelectorAll('.lang-option');
const registrationGate = document.getElementById('registrationGate');
const registrationForm = document.getElementById('registrationForm');
const preferredLanguage = document.getElementById('preferredLanguage');
const formError = document.getElementById('formError');
const accountPill = document.getElementById('accountPill');
const signOutButton = document.getElementById('signOutButton');
const showBusinessForm = document.getElementById('showBusinessForm');
const businessWorkflow = document.getElementById('businessWorkflow');
const businessForm = document.getElementById('businessForm');
const businessResult = document.getElementById('businessResult');
const adminAccessKey = 'turismoAdminAccess';
const adminSetupToken = 'dueno-durango-9f2c7a';
const initialUrlParams = new URLSearchParams(window.location.search);
const initialHashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
const isAdminSetupUrl = initialUrlParams.get('admin') === adminSetupToken || initialHashParams.get('admin') === adminSetupToken;
const isAdminOffUrl = initialUrlParams.has('adminOff') || initialHashParams.has('adminOff');

if (isAdminSetupUrl) {
  localStorage.setItem(adminAccessKey, 'true');
}

if (isAdminOffUrl) {
  localStorage.removeItem(adminAccessKey);
}

const translations = {
  es: {
    title: "Turismo y Cultura",
    brand: "Raíz Durango",
    nav0: "Turismo y cultura",
    nav1: "Problema",
    nav2: "Contradicciones",
    nav3: "Impacto",
    nav4: "Comunidad",
    menuToggle: "Alternar menú",
    toggleTheme: "Cambiar tema",
    signOut: "Salir",
    eyebrow: "Durango eco-cultural",
    h1: "Turismo y Cultura",
    heroP: "Ya no se trata solo de paisajes e historias, sino de lograr que cada visita camine con suavidad y que ninguna cultura quede silenciada en el olvido.",
    primaryAction: "Ver diagnóstico",
    secondaryAction: "Explorar contradicciones",
    signalAccessTitle: "Acceso",
    signalAccessText: "Visitas suaves para todas las personas",
    signalDataTitle: "Datos",
    signalDataText: "Huella y flujo en tiempo real",
    touristProfileLabel: "Vista Turista/Visitante",
    touristProfileTitle: "Explora Durango con rutas culturales claras y suaves",
    touristProfileText: "Encuentra historias, rutas recomendadas, puntos accesibles y señales de sostenibilidad pensadas para disfrutar cada visita con contexto.",
    touristAction1: "Ver rutas sugeridas",
    touristAction2: "Consultar impacto",
    touristCard1Title: "Mapa cultural",
    touristCard1Text: "Ubica recorridos, edificios históricos y paradas comunitarias.",
    touristCard2Title: "Guía accesible",
    touristCard2Text: "Consulta contenidos claros antes de iniciar tu recorrido.",
    touristCard3Title: "Viaje responsable",
    touristCard3Text: "Revisa recomendaciones para reducir residuos y huella de carbono.",
    merchantProfileLabel: "Vista Comerciante",
    merchantProfileTitle: "Administra tu presencia cultural y conecta con visitantes",
    merchantProfileText: "Publica información de tu negocio, presenta productos locales y revisa señales útiles para integrarte a las rutas comunitarias.",
    merchantAction1: "Registrar empresa",
    merchantAction2: "Ver herramientas",
    merchantCard1Title: "Perfil comercial",
    merchantCard1Text: "Organiza horarios, servicios y productos para visitantes.",
    merchantCard2Title: "Narrativa local",
    merchantCard2Text: "Cuenta la historia de tu comercio dentro de la ruta cultural.",
    merchantCard3Title: "Flujo de visitantes",
    merchantCard3Text: "Observa qué información ayuda a planear mejor la atención.",
    businessFormLabel: "Registro empresarial",
    businessFormTitle: "Registra tu empresa o comercio cultural",
    businessNameLabel: "Nombre de la empresa",
    businessNamePlaceholder: "Nombre comercial",
    businessTypeLabel: "Tipo de negocio",
    businessTypePlaceholder: "Selecciona una opción",
    businessTypeFood: "Gastronomía",
    businessTypeCrafts: "Artesanías",
    businessTypeLodging: "Hospedaje",
    businessTypeGuide: "Guía turística",
    businessTypeTransport: "Transporte",
    businessTypeCulture: "Cultura y experiencias",
    businessInfoLabel: "Información comercial",
    businessInfoPlaceholder: "Horarios, servicios principales o contacto",
    businessLocationLabel: "Ubicación",
    businessLocationPlaceholder: "Dirección, comunidad o punto de referencia",
    businessDescriptionLabel: "Descripción",
    businessDescriptionPlaceholder: "Describe qué ofrece tu empresa y su relación con turismo y cultura",
    businessPaymentLabel: "Métodos de pago",
    businessPaymentPlaceholder: "Efectivo, tarjeta, transferencia, QR...",
    businessPhotosLabel: "Fotos de turismo y cultura",
    businessLetterLabel: "Carta de recomendación",
    businessRegisterButton: "Registrar empresa",
    businessResultTitle: "Empresa registrada",
    businessResultType: "Tipo",
    businessResultInfo: "Información comercial",
    businessResultLocation: "Ubicación",
    businessResultDescription: "Descripción",
    businessResultPayment: "Métodos de pago",
    businessResultPhotos: "Fotos",
    businessResultLetter: "Recomendación",
    businessNoFiles: "Sin archivos cargados",
    problemLabel: "Situación actual y problema",
    problemTitle: "Durango se encuentra en una encrucijada cultural, digital y ambiental",
    problemIntro: "El turismo cultural de Durango vive una tensión clara: las Rutas Comunitarias Eco-Culturales han tenido un inicio prometedor, alcanzando tres destinos en su fase piloto de 2025, pero mucha memoria cultural valiosa sigue fuera del alcance digital. Mientras un turista alza su teléfono frente a un edificio histórico, una persona en silla de ruedas quizá no pueda ni siquiera entrar. Y mientras se promueven rutas ecológicas, la huella de carbono del propio viaje erosiona silenciosamente los mismos bosques y cañones que se quieren proteger.",
    problemCard1Title: "Participación cultural desigual",
    problemCard1Text: "Las personas con discapacidad, los adultos mayores y quienes tienen bajas competencias digitales quedan prácticamente excluidos de las experiencias inmersivas. Las historias en lenguas originarias a menudo no llegan a todos por falta de adaptación a lengua de señas o a formatos de audio accesibles.",
    problemCard2Title: "Costo ecológico del crecimiento turístico",
    problemCard2Text: "Aunque las rutas comunitarias llevan la etiqueta eco, carecen de cuantificación en tiempo real y de retroalimentación sobre visitantes, transporte y residuos. La sostenibilidad se queda demasiadas veces en una intención sin datos que la respalden.",
    problemCard3Title: "Poder comunitario insuficiente",
    problemCard3Text: "El diseño y la distribución de beneficios turísticos siguen dependiendo en gran medida de plataformas externas. Las comunidades difícilmente gestionan sus narrativas culturales y su ética ambiental con herramientas tecnológicas inclusivas.",
    approachLabel: "Contradicciones centrales actuales",
    approachTitle: "El reto no es solo mostrar cultura, sino hacerla accesible, medible y comunitaria",
    approachText: "La propuesta parte de tres tensiones principales: quién puede participar, cómo se mide el costo ecológico y quién controla la narrativa cultural.",
    approach1Title: "Participación cultural desigual",
    approach1Text: "Personas con discapacidad, adultos mayores y quienes tienen bajas competencias digitales quedan excluidos de las experiencias inmersivas. Las historias en lenguas originarias no llegan a todos por falta de adaptación a lengua de señas o formatos de audio accesibles.",
    approach2Title: "Costo ecológico del crecimiento turístico",
    approach2Text: "Aunque las rutas comunitarias llevan la etiqueta \"eco\", carecen de cuantificación en tiempo real y de retroalimentación sobre el flujo de visitantes, los medios de transporte y los residuos generados. La sostenibilidad se queda en una declaración de intenciones.",
    approach3Title: "Expresión comunitaria insuficiente",
    approach3Text: "El diseño y la distribución de beneficios turísticos dependen en gran medida de plataformas externas. Las comunidades no pueden gestionar de forma autónoma sus narrativas culturales ni su ética ambiental mediante herramientas inclusivas.",
    impactLabel: "Métricas clave",
    impactTitle: "Indicadores para tomar decisiones con datos",
    metric1Value: "3",
    metric1Label: "contradicciones por resolver",
    metric2Value: "24/7",
    metric2Label: "acceso digital a historias y rutas",
    metric3Value: "0",
    metric3Label: "culturas silenciadas por falta de formato",
    communityLabel: "Poder comunitario",
    communityTitle: "La tecnología debe servir a quienes sostienen la cultura",
    communityText: "El turismo cultural necesita herramientas inclusivas para que las propias comunidades gestionen sus narrativas, midan su ética ambiental y participen en la distribución de beneficios sin depender por completo de plataformas externas.",
    backTop: "Volver arriba",
    footer: "Hackathon Turismo Sostenible Durango 2025 · Raíz Durango · Créditos y enlaces",
    registerLabel: "Registro de acceso",
    registerIntro: "Completa estos datos para entrar a la experiencia eco-cultural de Durango.",
    registerPoint1: "Acceso personalizado",
    registerPoint2: "Preferencias de idioma",
    registerPoint3: "Tipo de visitante",
    fullNameLabel: "Nombre completo",
    fullNamePlaceholder: "Escribe tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "nombre@correo.com",
    passwordLabel: "Contraseña",
    passwordPlaceholder: "Mínimo 6 caracteres",
    countryLabel: "País o región",
    countryPlaceholder: "México",
    languageLabel: "Idioma preferido",
    languageEs: "Español",
    languageZh: "简体中文",
    languageEn: "English",
    visitorTypeLabel: "Tipo de visitante",
    visitorPlaceholder: "Selecciona una opción",
    visitorTouristVisitor: "Turista/Visitante",
    visitorMerchant: "Comerciante",
    termsLabel: "Acepto usar esta experiencia con respeto hacia las comunidades y su memoria cultural.",
    registerButton: "Registrarme y entrar",
    formErrorRequired: "Completa los campos obligatorios para continuar.",
    heroSubtitle: "Cada visita camina suave, cada cultura se escucha.",
    solutionLabel: "Solución propuesta",
    solutionTitle: "Una plataforma para conectar rutas, comunidad y sostenibilidad",
    solutionIntro: "La solución convierte el diagnóstico en herramientas concretas para visitantes, comerciantes y comunidades.",
    solutionCard1Title: "Navegación AR Inclusiva y Carbono-Consciente",
    solutionCard1Text: "Al apuntar la cámara hacia un edificio del Centro Histórico de Durango, la app superpone visualizaciones históricas. Para personas ciegas: narración con audio espacial y retroalimentación háptica. Para personas sordas: avatar virtual de intérprete de lengua de señas en tiempo real. Incluye rastreador personal de huella de carbono basado en la ruta elegida.",
    solutionCard2Title: "Plataforma P2P",
    solutionCard2Text: "Conexión directa entre visitantes, comerciantes, guías y comunidades para reducir dependencia externa.",
    solutionCard3Title: "Archivo digital 2.0",
    solutionCard3Text: "Memoria cultural organizada en formatos accesibles, multilingües y fáciles de actualizar.",
    solutionCard4Title: "Gemelo de sostenibilidad",
    solutionCard4Text: "Seguimiento de flujo, residuos, transporte e impacto ambiental para tomar mejores decisiones.",
    techLabel: "Stack tecnológico",
    techTitle: "Seis capas tecnológicas para una experiencia medible",
    techCard1Title: "AR multimodal",
    techCard1Text: "Capas visuales, audio y contenidos adaptados a cada recorrido.",
    techCard2Title: "Web3",
    techCard2Text: "Registro confiable de contribuciones, beneficios y trazabilidad comunitaria.",
    techCard3Title: "IoT",
    techCard3Text: "Sensores y registros ligeros para flujo de visitantes y puntos de interés.",
    techCard4Title: "IA-NLP",
    techCard4Text: "Traducción, síntesis y adaptación de narrativas culturales.",
    techCard5Title: "Datos abiertos",
    techCard5Text: "Indicadores consultables para turismo, cultura y sostenibilidad.",
    techCard6Title: "Monitoreo comunitario",
    techCard6Text: "Participación local para validar datos, historias y criterios ambientales.",
    compareLabel: "Impacto comparativo",
    compareTitle: "Antes vs Después",
    compareIntro: "El proyecto transforma una visita fragmentada en una experiencia cultural accesible, comunitaria y medible.",
    compareBeforeLabel: "Antes",
    compareBeforeText: "Rutas dispersas, accesibilidad limitada, datos ambientales débiles y beneficios poco visibles.",
    compareAfterLabel: "Después",
    compareAfterText: "Rutas inclusivas, memoria digital viva, participación comunitaria y métricas de sostenibilidad.",
    teamLabel: "Equipo",
    teamTitle: "Perfiles necesarios para desarrollar la propuesta",
    teamCard1Title: "Diseño inclusivo",
    teamCard1Text: "Experiencias claras, accesibles y sensibles al contexto cultural.",
    teamCard2Title: "Desarrollo web",
    teamCard2Text: "Frontend, datos y flujos interactivos para usuarios y comerciantes.",
    teamCard3Title: "Gestión cultural",
    teamCard3Text: "Validación de relatos, comunidades y patrimonio local.",
    teamCard4Title: "Sostenibilidad",
    teamCard4Text: "Métricas ambientales, turismo responsable y monitoreo comunitario."
  },
  zh: {
    title: "旅游与文化",
    brand: "Raíz Durango",
    nav0: "旅游与文化",
    nav1: "问题",
    nav2: "矛盾",
    nav3: "影响",
    nav4: "社区",
    menuToggle: "切换菜单",
    toggleTheme: "切换主题",
    signOut: "退出",
    eyebrow: "杜兰戈生态文化",
    h1: "旅游与文化",
    heroP: "如今，重点不再只是风景和故事，而是让每一次到访都能温和地前行，并确保没有任何文化在遗忘中被迫沉默。",
    primaryAction: "查看诊断",
    secondaryAction: "探索矛盾",
    signalAccessTitle: "无障碍",
    signalAccessText: "面向所有人的温和参访",
    signalDataTitle: "数据",
    signalDataText: "实时追踪足迹与人流",
    touristProfileLabel: "游客/访问者界面",
    touristProfileTitle: "用清晰、温和的文化路线探索杜兰戈",
    touristProfileText: "查看故事、推荐路线、可进入地点与可持续提示，让每一次参访都更有背景和方向。",
    touristAction1: "查看推荐路线",
    touristAction2: "查看影响",
    touristCard1Title: "文化地图",
    touristCard1Text: "定位路线、历史建筑与社区停靠点。",
    touristCard2Title: "清晰导览",
    touristCard2Text: "出发前查看容易理解的内容。",
    touristCard3Title: "负责任旅行",
    touristCard3Text: "查看减少垃圾和碳足迹的建议。",
    merchantProfileLabel: "商户界面",
    merchantProfileTitle: "管理你的文化展示，并与访客建立连接",
    merchantProfileText: "发布商户信息，展示本地产品，并查看有助于融入社区路线的提示。",
    merchantAction1: "注册企业",
    merchantAction2: "查看工具",
    merchantCard1Title: "商业档案",
    merchantCard1Text: "整理营业时间、服务与面向访客的产品。",
    merchantCard2Title: "本地叙事",
    merchantCard2Text: "在文化路线中讲述你的商户故事。",
    merchantCard3Title: "访客流量",
    merchantCard3Text: "查看有助于改善接待安排的信息。",
    businessFormLabel: "企业注册",
    businessFormTitle: "注册你的文化企业或商户",
    businessNameLabel: "企业名称",
    businessNamePlaceholder: "商业名称",
    businessTypeLabel: "商业类型",
    businessTypePlaceholder: "请选择一个选项",
    businessTypeFood: "美食",
    businessTypeCrafts: "手工艺",
    businessTypeLodging: "住宿",
    businessTypeGuide: "旅游导览",
    businessTypeTransport: "交通",
    businessTypeCulture: "文化与体验",
    businessInfoLabel: "商业信息",
    businessInfoPlaceholder: "营业时间、主要服务或联系方式",
    businessLocationLabel: "地点",
    businessLocationPlaceholder: "地址、社区或参考地点",
    businessDescriptionLabel: "描述",
    businessDescriptionPlaceholder: "描述你的企业提供什么，以及它与旅游和文化的关系",
    businessPaymentLabel: "付款方式",
    businessPaymentPlaceholder: "现金、银行卡、转账、二维码等",
    businessPhotosLabel: "旅游和文化照片",
    businessLetterLabel: "推荐信",
    businessRegisterButton: "注册企业",
    businessResultTitle: "企业已注册",
    businessResultType: "类型",
    businessResultInfo: "商业信息",
    businessResultLocation: "地点",
    businessResultDescription: "描述",
    businessResultPayment: "付款方式",
    businessResultPhotos: "照片",
    businessResultLetter: "推荐信",
    businessNoFiles: "未上传文件",
    problemLabel: "当前状况与问题",
    problemTitle: "杜兰戈正处在文化、数字化与环境的十字路口",
    problemIntro: "杜兰戈的文化旅游面临清晰的张力：一方面，“生态文化社区路线”已经有了良好的开端；另一方面，大量珍贵的文化记忆仍然无法被数字化触达。当游客在历史建筑前举起手机时，坐轮椅的人也许连进入建筑都做不到。而在推广生态路线的同时，旅行本身的碳足迹也可能正在悄悄侵蚀那些原本想要保护的森林与峡谷。",
    problemCard1Title: "文化参与不平等",
    problemCard1Text: "残障人士、老年人以及数字能力较弱的人几乎被排除在沉浸式体验之外。由于缺少手语或无障碍音频格式，原住民语言中的故事往往无法抵达所有人。",
    problemCard2Title: "旅游增长的生态成本",
    problemCard2Text: "虽然社区路线带有“生态”标签，却缺乏关于游客流量、交通方式和废弃物的实时量化与反馈。可持续性太常停留在意愿声明中，而没有数据支撑。",
    problemCard3Title: "社区力量表达不足",
    problemCard3Text: "旅游设计和收益分配仍在很大程度上依赖外部平台。社区自身很难通过包容性的技术工具，自主管理文化叙事和环境伦理。",
    approachLabel: "当前的核心矛盾",
    approachTitle: "挑战不只是展示文化，而是让文化可及、可衡量，并由社区掌握",
    approachText: "方案从三组主要张力出发：谁能参与，如何衡量生态成本，以及谁掌握文化叙事。",
    approach1Title: "文化参与不平等",
    approach1Text: "残障人士、老年人和数字能力较低的人被排除在沉浸式体验之外。由于缺乏手语或无障碍音频格式的适配，原住民语言的故事无法触达所有人。",
    approach2Title: "旅游增长的生态成本",
    approach2Text: "尽管社区路线带有"生态"标签，但缺乏对游客流量、交通工具和产生废弃物的实时量化和反馈。可持续性仅停留在意愿声明层面。",
    approach3Title: "社区表达不足",
    approach3Text: "旅游设计和收益分配在很大程度上依赖外部平台。社区无法通过包容性工具自主管理其文化叙事和环境伦理。",
    impactLabel: "关键指标",
    impactTitle: "用数据支持决策的指标",
    metric1Value: "3",
    metric1Label: "需要解决的核心矛盾",
    metric2Value: "24/7",
    metric2Label: "数字化访问故事与路线",
    metric3Value: "0",
    metric3Label: "因格式缺失而被沉默的文化",
    communityLabel: "社区力量",
    communityTitle: "技术应服务于真正守护文化的人",
    communityText: "文化旅游需要包容性的工具，让社区能够自主管理自身叙事、衡量环境伦理，并参与收益分配，而不是完全依赖外部平台。",
    backTop: "返回顶部",
    footer: "2025 杜兰戈可持续旅游黑客松 · Raíz Durango · 致谢与链接",
    registerLabel: "访问注册",
    registerIntro: "填写以下信息后，即可进入杜兰戈生态文化体验。",
    registerPoint1: "个性化访问",
    registerPoint2: "语言偏好",
    registerPoint3: "访客类型",
    fullNameLabel: "姓名",
    fullNamePlaceholder: "请输入你的姓名",
    emailLabel: "电子邮箱",
    emailPlaceholder: "name@email.com",
    passwordLabel: "密码",
    passwordPlaceholder: "至少 6 个字符",
    countryLabel: "国家或地区",
    countryPlaceholder: "墨西哥",
    languageLabel: "首选语言",
    languageEs: "Español",
    languageZh: "简体中文",
    languageEn: "English",
    visitorTypeLabel: "访客类型",
    visitorPlaceholder: "请选择一个选项",
    visitorTouristVisitor: "游客/访问者",
    visitorMerchant: "商户",
    termsLabel: "我同意以尊重社区及其文化记忆的方式使用此体验。",
    registerButton: "注册并进入",
    formErrorRequired: "请填写必填项后继续。",
    heroSubtitle: "每一次到访都温和前行，每一种文化都被倾听。",
    solutionLabel: " proposed solution",
    solutionTitle: "一个连接路线、社区和可持续性的平台",
    solutionIntro: "该解决方案将诊断转化为访客、商户和社区的具体工具。",
    solutionCard1Title: "包容性AR导航与碳意识",
    solutionCard1Text: "将相机对准杜兰戈历史中心的建筑时，应用会叠加历史可视化。对于视障人士：空间音频叙述和触觉反馈。对于听障人士：实时手语翻译虚拟化身。包括基于所选路线的个人碳足迹追踪器。",
    solutionCard2Title: "P2P平台",
    solutionCard2Text: "访客、商户、导游和社区之间的直接连接，减少对外部平台的依赖。",
    solutionCard3Title: "数字档案2.0",
    solutionCard3Text: "以无障碍、多语言、易更新的格式组织文化记忆。",
    solutionCard4Title: "可持续性孪生",
    solutionCard4Text: "跟踪人流、废弃物、交通和环境影响，以做出更好的决策。",
    techLabel: "技术栈",
    techTitle: "六层技术架构，实现可衡量的体验",
    techCard1Title: "多模态AR",
    techCard1Text: "针对每次行程调整的视觉层、音频和内容。",
    techCard2Title: "Web3",
    techCard2Text: "可靠记录贡献、收益和社区可追溯性。",
    techCard3Title: "物联网",
    techCard3Text: "用于访客流量和兴趣点的轻量级传感器和记录。",
    techCard4Title: "AI-NLP",
    techCard4Text: "文化叙事的翻译、合成和改编。",
    techCard5Title: "开放数据",
    techCard5Text: "可查询的旅游、文化和可持续性指标。",
    techCard6Title: "社区监测",
    techCard6Text: "本地参与验证数据、故事和环境标准。",
    compareLabel: "对比影响",
    compareTitle: "前后对比",
    compareIntro: "该项目将碎片化的访问转变为无障碍、社区驱动、可衡量的文化体验。",
    compareBeforeLabel: "之前",
    compareBeforeText: "路线分散、无障碍有限、环境数据薄弱、收益不明显。",
    compareAfterLabel: "之后",
    compareAfterText: "包容性路线、活跃的数字记忆、社区参与和可持续性指标。",
    teamLabel: "团队",
    teamTitle: "开发提案所需的专业角色",
    teamCard1Title: "包容性设计",
    teamCard1Text: "清晰、无障碍且敏感于文化背景的体验。",
    teamCard2Title: "Web开发",
    teamCard2Text: "为用户和商户提供前端、数据和交互流程。",
    teamCard3Title: "文化管理",
    teamCard3Text: "验证故事、社区和本地遗产。",
    teamCard4Title: "可持续性",
    teamCard4Text: "环境指标、负责任旅游和社区监测。"
  },
  en: {
    title: "Tourism and Culture",
    brand: "Raíz Durango",
    nav0: "Tourism and culture",
    nav1: "Problem",
    nav2: "Contradictions",
    nav3: "Impact",
    nav4: "Community",
    menuToggle: "Toggle menu",
    toggleTheme: "Toggle theme",
    signOut: "Exit",
    eyebrow: "Eco-cultural Durango",
    h1: "Tourism and Culture",
    heroP: "It is no longer only about landscapes and stories, but about making every visit move gently and ensuring that no culture is silenced by oblivion.",
    primaryAction: "View diagnosis",
    secondaryAction: "Explore contradictions",
    signalAccessTitle: "Access",
    signalAccessText: "Gentle visits for every person",
    signalDataTitle: "Data",
    signalDataText: "Real-time footprint and flow",
    touristProfileLabel: "Tourist/Visitor View",
    touristProfileTitle: "Explore Durango through clear and gentle cultural routes",
    touristProfileText: "Find stories, recommended routes, accessible points, and sustainability signals designed to give every visit context.",
    touristAction1: "View suggested routes",
    touristAction2: "Check impact",
    touristCard1Title: "Cultural map",
    touristCard1Text: "Locate routes, historic buildings, and community stops.",
    touristCard2Title: "Accessible guide",
    touristCard2Text: "Review clear content before starting your route.",
    touristCard3Title: "Responsible travel",
    touristCard3Text: "See recommendations to reduce waste and carbon footprint.",
    merchantProfileLabel: "Merchant View",
    merchantProfileTitle: "Manage your cultural presence and connect with visitors",
    merchantProfileText: "Publish your business information, present local products, and review useful signals for joining community routes.",
    merchantAction1: "Register business",
    merchantAction2: "View tools",
    merchantCard1Title: "Business profile",
    merchantCard1Text: "Organize hours, services, and products for visitors.",
    merchantCard2Title: "Local narrative",
    merchantCard2Text: "Tell your business story within the cultural route.",
    merchantCard3Title: "Visitor flow",
    merchantCard3Text: "Review information that helps improve planning and attention.",
    businessFormLabel: "Business registration",
    businessFormTitle: "Register your cultural business or company",
    businessNameLabel: "Business name",
    businessNamePlaceholder: "Commercial name",
    businessTypeLabel: "Business type",
    businessTypePlaceholder: "Select one option",
    businessTypeFood: "Food",
    businessTypeCrafts: "Crafts",
    businessTypeLodging: "Lodging",
    businessTypeGuide: "Tour guide",
    businessTypeTransport: "Transport",
    businessTypeCulture: "Culture and experiences",
    businessInfoLabel: "Business information",
    businessInfoPlaceholder: "Hours, main services, or contact",
    businessLocationLabel: "Location",
    businessLocationPlaceholder: "Address, community, or reference point",
    businessDescriptionLabel: "Description",
    businessDescriptionPlaceholder: "Describe what your business offers and how it connects to tourism and culture",
    businessPaymentLabel: "Payment methods",
    businessPaymentPlaceholder: "Cash, card, transfer, QR...",
    businessPhotosLabel: "Tourism and culture photos",
    businessLetterLabel: "Recommendation letter",
    businessRegisterButton: "Register business",
    businessResultTitle: "Business registered",
    businessResultType: "Type",
    businessResultInfo: "Business information",
    businessResultLocation: "Location",
    businessResultDescription: "Description",
    businessResultPayment: "Payment methods",
    businessResultPhotos: "Photos",
    businessResultLetter: "Recommendation",
    businessNoFiles: "No files uploaded",
    problemLabel: "Current situation and problem",
    problemTitle: "Durango stands at a cultural, digital, and environmental crossroads",
    problemIntro: "Cultural tourism in Durango faces a clear tension: the Eco-Cultural Community Routes have had a promising start, yet a great deal of valuable cultural memory remains outside digital reach. While one tourist raises a phone in front of a historic building, a person in a wheelchair may not even be able to enter. And while ecological routes are promoted, the carbon footprint of the journey itself may be silently eroding the forests and canyons they aim to protect.",
    problemCard1Title: "Unequal cultural participation",
    problemCard1Text: "People with disabilities, older adults, and those with low digital skills are practically excluded from immersive experiences. Stories in Indigenous languages often do not reach everyone because they are not adapted to sign language or accessible audio formats.",
    problemCard2Title: "Ecological cost of tourism growth",
    problemCard2Text: "Although community routes carry the eco label, they lack real-time measurement and feedback on visitor flow, transport, and waste. Sustainability too often remains a statement of intent without data to support it.",
    problemCard3Title: "Insufficient community power",
    problemCard3Text: "Tourism design and benefit distribution still depend heavily on external platforms. Communities struggle to manage their cultural narratives and environmental ethics autonomously through inclusive technology.",
    approachLabel: "Current central contradictions",
    approachTitle: "The challenge is not only to show culture, but to make it accessible, measurable, and community-led",
    approachText: "The proposal begins with three main tensions: who can participate, how ecological cost is measured, and who controls the cultural narrative.",
    approach1Title: "Unequal cultural participation",
    approach1Text: "People with disabilities, older adults, and those with low digital skills are excluded from immersive experiences. Stories in Indigenous languages do not reach everyone due to lack of adaptation to sign language or accessible audio formats.",
    approach2Title: "Ecological cost of tourism growth",
    approach2Text: "Although community routes carry the \"eco\" label, they lack real-time quantification and feedback on visitor flow, means of transport, and waste generated. Sustainability remains a declaration of intent.",
    approach3Title: "Insufficient community expression",
    approach3Text: "Tourism design and benefit distribution depend largely on external platforms. Communities cannot autonomously manage their cultural narratives or environmental ethics through inclusive tools.",
    impactLabel: "Key metrics",
    impactTitle: "Indicators for data-based decisions",
    metric1Value: "3",
    metric1Label: "central contradictions to solve",
    metric2Value: "24/7",
    metric2Label: "digital access to stories and routes",
    metric3Value: "0",
    metric3Label: "cultures silenced by missing formats",
    communityLabel: "Community power",
    communityTitle: "Technology should serve those who sustain culture",
    communityText: "Cultural tourism needs inclusive tools so communities can manage their own narratives, measure their environmental ethics, and participate in benefit distribution without depending entirely on external platforms.",
    backTop: "Back to top",
    footer: "Hackathon Sustainable Tourism Durango 2025 · Raíz Durango · Credits and links",
    registerLabel: "Access registration",
    registerIntro: "Complete these details to enter Durango's eco-cultural experience.",
    registerPoint1: "Personalized access",
    registerPoint2: "Language preferences",
    registerPoint3: "Visitor type",
    fullNameLabel: "Full name",
    fullNamePlaceholder: "Write your name",
    emailLabel: "Email",
    emailPlaceholder: "name@email.com",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 6 characters",
    countryLabel: "Country or region",
    countryPlaceholder: "Mexico",
    languageLabel: "Preferred language",
    languageEs: "Español",
    languageZh: "简体中文",
    languageEn: "English",
    visitorTypeLabel: "Visitor type",
    visitorPlaceholder: "Select one option",
    visitorTouristVisitor: "Tourist/Visitor",
    visitorMerchant: "Merchant",
    termsLabel: "I agree to use this experience with respect for communities and their cultural memory.",
    registerButton: "Register and enter",
    formErrorRequired: "Complete the required fields to continue.",
    heroSubtitle: "Every visit moves gently, every culture is heard.",
    solutionLabel: "Proposed solution",
    solutionTitle: "A platform to connect routes, community and sustainability",
    solutionIntro: "The solution turns the diagnosis into concrete tools for visitors, merchants and communities.",
    solutionCard1Title: "Inclusive AR Navigation & Carbon-Conscious",
    solutionCard1Text: "When pointing the camera at a building in Durango's Historic Center, the app overlays historical visualizations. For blind people: spatial audio narration and haptic feedback. For deaf people: real-time sign language interpreter avatar. Includes personal carbon footprint tracker based on chosen route.",
    solutionCard2Title: "P2P platform",
    solutionCard2Text: "Direct connection between visitors, merchants, guides and communities to reduce external dependence.",
    solutionCard3Title: "Digital archive 2.0",
    solutionCard3Text: "Cultural memory organized in accessible, multilingual and easy-to-update formats.",
    solutionCard4Title: "Sustainability twin",
    solutionCard4Text: "Tracking flow, waste, transport and environmental impact to make better decisions.",
    techLabel: "Technology stack",
    techTitle: "Six technology layers for a measurable experience",
    techCard1Title: "Multimodal AR",
    techCard1Text: "Visual layers, audio and content adapted to each route.",
    techCard2Title: "Web3",
    techCard2Text: "Reliable recording of contributions, benefits and community traceability.",
    techCard3Title: "IoT",
    techCard3Text: "Lightweight sensors and records for visitor flow and points of interest.",
    techCard4Title: "AI-NLP",
    techCard4Text: "Translation, synthesis and adaptation of cultural narratives.",
    techCard5Title: "Open data",
    techCard5Text: "Queryable indicators for tourism, culture and sustainability.",
    techCard6Title: "Community monitoring",
    techCard6Text: "Local participation to validate data, stories and environmental criteria.",
    compareLabel: "Comparative impact",
    compareTitle: "Before vs After",
    compareIntro: "The project transforms a fragmented visit into an accessible, community-driven and measurable cultural experience.",
    compareBeforeLabel: "Before",
    compareBeforeText: "Dispersed routes, limited accessibility, weak environmental data and barely visible benefits.",
    compareAfterLabel: "After",
    compareAfterText: "Inclusive routes, living digital memory, community participation and sustainability metrics.",
    teamLabel: "Team",
    teamTitle: "Profiles needed to develop the proposal",
    teamCard1Title: "Inclusive design",
    teamCard1Text: "Clear, accessible experiences sensitive to cultural context.",
    teamCard2Title: "Web development",
    teamCard2Text: "Frontend, data and interactive flows for users and merchants.",
    teamCard3Title: "Cultural management",
    teamCard3Text: "Validation of stories, communities and local heritage.",
    teamCard4Title: "Sustainability",
    teamCard4Text: "Environmental metrics, responsible tourism and community monitoring."
  }
};

const getRegisteredUser = () => {
  if (localStorage.getItem(adminAccessKey) === 'true') {
    return {
      fullName: 'Admin',
      email: 'owner@local',
      preferredLanguage: localStorage.getItem('turismoLang') || 'es',
      visitorType: 'admin'
    };
  }

  try {
    return JSON.parse(localStorage.getItem('turismoRegisteredUser'));
  } catch {
    return null;
  }
};

const updateRegistrationState = () => {
  const user = getRegisteredUser();
  const isRegistered = Boolean(user?.email);
  const visitorType = user?.visitorType || '';
  document.body.classList.toggle('registration-locked', !isRegistered);
  document.body.classList.toggle('profile-tourist', isRegistered && visitorType === 'tourist_visitor');
  document.body.classList.toggle('profile-merchant', isRegistered && visitorType === 'merchant');
  document.body.classList.toggle('profile-admin', isRegistered && visitorType === 'admin');
  registrationGate?.setAttribute('aria-hidden', String(isRegistered));

  if (accountPill) {
    accountPill.hidden = !isRegistered;
    accountPill.textContent = isRegistered ? user.fullName.split(' ')[0] : '';
  }

  if (signOutButton) {
    signOutButton.hidden = !isRegistered;
  }
};

const setText = (lang) => {
  const copy = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.title = copy.title;

  document.querySelectorAll('[data-key]').forEach((element) => {
    const key = element.dataset.key;
    const value = copy[key];
    if (!value) return;

    if (element.hasAttribute('aria-label')) {
      element.setAttribute('aria-label', value);
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-placeholder-key]').forEach((element) => {
    const key = element.dataset.placeholderKey;
    const value = copy[key];
    if (value) element.setAttribute('placeholder', value);
  });

  if (preferredLanguage && preferredLanguage.value !== lang) {
    preferredLanguage.value = lang;
  }

  localStorage.setItem('turismoLang', lang);
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('turismoTheme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
};

const setActiveLanguage = (lang) => {
  langOptions.forEach((option) => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });
};

const getCurrentCopy = () => {
  const lang = localStorage.getItem('turismoLang') || 'es';
  return translations[lang] || translations.es;
};

const formatFiles = (files) => {
  if (!files || files.length === 0) return getCurrentCopy().businessNoFiles;
  return Array.from(files).map((file) => file.name).join(', ');
};

const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}[char]));

const getBusinessTypeLabel = (value) => {
  const copy = getCurrentCopy();
  const labels = {
    food: copy.businessTypeFood,
    crafts: copy.businessTypeCrafts,
    lodging: copy.businessTypeLodging,
    guide: copy.businessTypeGuide,
    transport: copy.businessTypeTransport,
    culture: copy.businessTypeCulture
  };
  return labels[value] || value;
};

const renderBusinessResult = (business) => {
  if (!businessResult || !business) return;
  const copy = getCurrentCopy();
  businessResult.hidden = false;
  businessResult.innerHTML = `
    <p class="section-label">${copy.businessResultTitle}</p>
    <h3>${escapeHtml(business.name)}</h3>
    <dl>
      <div><dt>${copy.businessResultType}</dt><dd>${escapeHtml(getBusinessTypeLabel(business.type))}</dd></div>
      <div><dt>${copy.businessResultInfo}</dt><dd>${escapeHtml(business.info)}</dd></div>
      <div><dt>${copy.businessResultLocation}</dt><dd>${escapeHtml(business.location)}</dd></div>
      <div><dt>${copy.businessResultDescription}</dt><dd>${escapeHtml(business.description)}</dd></div>
      <div><dt>${copy.businessResultPayment}</dt><dd>${escapeHtml(business.payment)}</dd></div>
      <div><dt>${copy.businessResultPhotos}</dt><dd>${escapeHtml(business.photos || copy.businessNoFiles)}</dd></div>
      <div><dt>${copy.businessResultLetter}</dt><dd>${escapeHtml(business.letter || copy.businessNoFiles)}</dd></div>
    </dl>
  `;
};

menuToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('open');
  document.body.classList.toggle('menu-open', Boolean(isOpen));
});

navMenu?.addEventListener('click', (event) => {
  const link = event.target instanceof Element ? event.target.closest('a') : null;
  if (link) {
    navMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

langToggle?.addEventListener('click', (event) => {
  event.stopPropagation();
  languageMenu?.classList.toggle('active');
});

langOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const lang = option.dataset.lang || 'es';
    setText(lang);
    setActiveLanguage(lang);
    languageMenu?.classList.remove('active');
  });
});

preferredLanguage?.addEventListener('change', () => {
  const lang = preferredLanguage.value || 'es';
  setText(lang);
  setActiveLanguage(lang);
});

registrationForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(registrationForm);
  const lang = preferredLanguage?.value || localStorage.getItem('turismoLang') || 'es';
  const copy = translations[lang] || translations.es;

  if (!registrationForm.checkValidity()) {
    if (formError) formError.textContent = copy.formErrorRequired;
    registrationForm.reportValidity();
    return;
  }

  const user = {
    fullName: String(formData.get('fullName') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    country: String(formData.get('country') || '').trim(),
    preferredLanguage: lang,
    visitorType: String(formData.get('visitorType') || ''),
    registeredAt: new Date().toISOString()
  };

  localStorage.setItem('turismoRegisteredUser', JSON.stringify(user));
  if (formError) formError.textContent = '';
  setText(lang);
  setActiveLanguage(lang);
  updateRegistrationState();
});

showBusinessForm?.addEventListener('click', () => {
  if (!businessWorkflow) return;
  businessWorkflow.hidden = false;
  businessWorkflow.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

businessForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!businessForm.checkValidity()) {
    businessForm.reportValidity();
    return;
  }

  const formData = new FormData(businessForm);
  const photosInput = businessForm.elements.businessPhotos;
  const letterInput = businessForm.elements.businessLetter;
  const business = {
    name: String(formData.get('businessName') || '').trim(),
    type: String(formData.get('businessType') || ''),
    info: String(formData.get('businessInfo') || '').trim(),
    location: String(formData.get('businessLocation') || '').trim(),
    description: String(formData.get('businessDescription') || '').trim(),
    payment: String(formData.get('businessPayment') || '').trim(),
    photos: formatFiles(photosInput?.files),
    letter: formatFiles(letterInput?.files),
    registeredAt: new Date().toISOString()
  };

  localStorage.setItem('turismoBusinessProfile', JSON.stringify(business));
  renderBusinessResult(business);
});

signOutButton?.addEventListener('click', () => {
  localStorage.removeItem('turismoRegisteredUser');
  localStorage.removeItem(adminAccessKey);
  localStorage.removeItem('turismoBusinessProfile');
  registrationForm?.reset();
  businessForm?.reset();
  if (businessWorkflow) businessWorkflow.hidden = true;
  if (businessResult) businessResult.hidden = true;
  updateRegistrationState();
});

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target?.closest('.language-dropdown')) {
    languageMenu?.classList.remove('active');
  }
});

const savedTheme = localStorage.getItem('turismoTheme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

const urlParams = initialUrlParams;
const hashParams = initialHashParams;
const resetRegistration = urlParams.has('reset') || hashParams.has('reset');
const adminSetup = isAdminSetupUrl;
const adminOff = isAdminOffUrl;

if (resetRegistration) {
  localStorage.removeItem('turismoRegisteredUser');
  localStorage.removeItem(adminAccessKey);
  localStorage.removeItem('turismoBusinessProfile');
}

if (adminSetup) {
  localStorage.setItem(adminAccessKey, 'true');
}

if (adminOff) {
  localStorage.removeItem(adminAccessKey);
}

if (adminSetup || adminOff) {
  const cleanUrl = `${window.location.pathname}`;
  window.history.replaceState({}, document.title, cleanUrl);
}

const savedUser = getRegisteredUser();
const savedLang = savedUser?.preferredLanguage || localStorage.getItem('turismoLang') || 'es';
setText(translations[savedLang] ? savedLang : 'es');
setActiveLanguage(translations[savedLang] ? savedLang : 'es');
updateRegistrationState();

try {
  const savedBusiness = JSON.parse(localStorage.getItem('turismoBusinessProfile'));
  if (savedBusiness && businessWorkflow) {
    businessWorkflow.hidden = false;
    renderBusinessResult(savedBusiness);
  }
} catch {
  localStorage.removeItem('turismoBusinessProfile');
}
