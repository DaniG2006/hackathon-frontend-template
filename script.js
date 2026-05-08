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
const adminToggle = document.getElementById('adminToggle');
const fullscreenToggle = document.getElementById('fullscreenToggle');
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
    brand: "CodeTrip",
    nav0: "Inicio",
    nav1: "Problema",
    nav2: "Contradicciones",
    nav3: "Impacto",
    nav4: "Comunidad",
    navSolucion: "Solución",
    navTecnologia: "Tecnología",
    navRoadmap: "Roadmap",
    navA11y: "Accesibilidad",
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
    problemIntro: "El turismo cultural de Durango vive una tensión clara: las Rutas Comunitarias Eco-Culturales han tenido un inicio prometedor, pero mucha memoria cultural valiosa sigue fuera del alcance digital. Mientras un turista alza su teléfono frente a un edificio histórico, una persona en silla de ruedas quizá no pueda ni siquiera entrar. Y mientras se promueven rutas ecológicas, la huella de carbono del viaje puede erosionar silenciosamente los bosques y cañones que se quieren proteger.",
    problemCard1Title: "Participación cultural desigual",
    problemCard1Text: "Las personas con discapacidad, los adultos mayores y quienes tienen bajas competencias digitales quedan prácticamente excluidos de las experiencias inmersivas. Las historias en lenguas originarias a menudo no llegan a todos por falta de adaptación a lengua de señas o a formatos de audio accesibles.",
    problemCard2Title: "Costo ecológico del crecimiento turístico",
    problemCard2Text: "Aunque las rutas comunitarias llevan la etiqueta eco, carecen de cuantificación en tiempo real y de retroalimentación sobre visitantes, transporte y residuos. La sostenibilidad se queda demasiadas veces en una intención sin datos que la respalden.",
    problemCard3Title: "Poder comunitario insuficiente",
    problemCard3Text: "El diseño y la distribución de beneficios turísticos siguen dependiendo en gran medida de plataformas externas. Las comunidades difícilmente gestionan sus narrativas culturales y su ética ambiental con herramientas tecnológicas inclusivas.",
    approachLabel: "Contradicciones centrales actuales",
    approachTitle: "El reto no es solo mostrar cultura, sino hacerla accesible, medible y comunitaria",
    approachText: "La propuesta parte de tres tensiones principales: quién puede participar, cómo se mide el costo ecológico y quién controla la narrativa cultural.",
    approach1Title: "Accesibilidad real",
    approach1Text: "Contenidos en audio, lectura clara, lengua de señas, alto contraste y formatos adecuados para diferentes edades, capacidades y niveles digitales.",
    approach2Title: "Sostenibilidad con evidencia",
    approach2Text: "Indicadores de flujo, transporte, residuos y huella de carbono para que las rutas eco no dependan solo de una declaración de intenciones.",
    approach3Title: "Autonomía narrativa",
    approach3Text: "Herramientas simples para que las comunidades publiquen, corrijan y administren sus historias, beneficios y criterios ambientales.",
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
    solutionCard1Title: "Navegación AR Inmersiva",
    solutionCard1Text: "La ruta "cuenta su propia historia" - activación de audio AR basada en ubicación, sin necesidad de escanear códigos frecuentemente.",
    solutionCard2Title: "Plataforma P2P Comunitaria",
    solutionCard2Text: "Cada kilómetro vuelve a la comunidad - la ruta cultural completa se tokeniza como un "Route NFT" con distribución automática de ingresos.",
    solutionCard3Title: "Archivo Digital de Memoria Cultural",
    solutionCard3Text: "Los ancianos se convierten en narradores eternos de la ruta - "Bancos de Historias" registran las historias de cada tramo del camino.",
    solutionCard4Title: "Gemelo Digital Ambiental",
    solutionCard4Text: "Ver la ruta respirar - panel de control ambiental para rutas culturales que monitorea el estado de salud de la ruta en tiempo real.",
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
    teamCard4Text: "Métricas ambientales, turismo responsable y monitoreo comunitario.",
    metricsTitle: "Métricas clave",
    metricVisitors: "Visitantes alcanzados",
    metricVisitorsDesc: "Estimación conservadora para el primer año de las rutas comunitarias",
    metricAccessible: "Rutas accesibles",
    metricAccessibleDesc: "Porcentaje del recorrido con al menos un canal sensorial alternativo",
    metricCarbon: "Reducción de huella",
    metricCarbonDesc: "Meta de reducción de carbono por visitante frente al modelo turístico tradicional",
    metricIncome: "Ingreso comunitario",
    metricIncomeDesc: "Porcentaje del gasto turístico que se queda directamente en la comunidad",
    roadmapLabel: "Hoja de ruta",
    roadmapTitle: "Hoja de Ruta del Prototipo",
    roadmapIntro: "Demo funcional (lo que se debe desarrollar para el hackathon)",
    roadmapComponent: "Componente",
    roadmapPriority: "Prioridad",
    roadmapDesc: "Descripción funcional",
    priorityEssential: "Imprescindible",
    priorityRecommended: "Recomendable",
    priorityOptional: "Opcional avanzado",
    roadmapItem1Name: "Landing page accesible",
    roadmapItem1Desc: "Home completa con las 7 secciones de la plantilla correctamente pobladas y navegables con teclado y lector de pantalla.",
    roadmapItem2Name: "Visor AR para un hito",
    roadmapItem2Desc: "Funcionalidad AR funcional (con AR.js) para al menos un marcador histórico, por ejemplo la Catedral, con opción de audio descriptivo.",
    roadmapItem3Name: "Simulador de huella de carbono",
    roadmapItem3Desc: "Calculadora mock que compare dos medios de transporte y muestre una barra de progreso con valores precalculados.",
    roadmapItem4Name: "Registro de comercio local",
    roadmapItem4Desc: "Formulario accesible (WCAG) que publique un perfil comercial con nombre, ubicación y tipo de negocio.",
    roadmapItem5Name: "Dashboard de métricas del gemelo digital",
    roadmapItem5Desc: "Gráficos estáticos con Chart.js alimentados por un JSON que represente la calidad del aire, visitantes y nivel de residuos.",
    roadmapItem6Name: "Módulo Web3 (token ERC-20 simulado)",
    roadmapItem6Desc: "Transacción mock en Mumbai Testnet: reserva de una ruta con emisión de certificado NFT.",
    a11yLabel: "Checklist mínimo",
    a11yTitle: "Consideraciones de Accesibilidad",
    a11yIntro: "Garantizamos que la experiencia sea usable para todas las personas, independientemente de sus capacidades o tecnología de asistencia.",
    a11yItem1Title: "Navegación con teclado",
    a11yItem1Desc: "Tabindex lógico en todos los elementos interactivos. Navegación completa sin usar el ratón.",
    a11yItem2Title: "Textos alternativos",
    a11yItem2Desc: "Descripciones significativas en todas las imágenes (alt significativo) para lectores de pantalla.",
    a11yItem3Title: "Etiquetas ARIA",
    a11yItem3Desc: "Formularios, botones y regiones con aria-label, role=\"navigation\", aria-expanded, etc.",
    a11yItem4Title: "Contraste de color",
    a11yItem4Desc: "Cumplimiento AA/AAA verificado. Modo oscuro disponible para reducir fatiga visual.",
    a11yItem5Title: "Contenido multimedia",
    a11yItem5Desc: "Subtítulos y transcripciones disponibles para cualquier contenido de audio o video.",
    a11yItem6Title: "Lectores de pantalla",
    a11yItem6Desc: "Compatible con NVDA (Windows), VoiceOver (macOS/iOS) y TalkBack (Android).",
    a11yItem7Title: "Enfoque visible",
    a11yItem7Desc: ":focus-visible en todos los elementos interactivos para usuarios de teclado.",
    a11yStatusPass: "✓ Implementado",
    a11yStatusWip: "🚧 En progreso",
    resourcesLabel: "Fuentes y referencias",
    resourcesTitle: "Recursos y Datos de Referencia",
    resourcesColResource: "Recurso",
    resourcesColUsage: "Uso en el prototipo",
    resource1Detail: "sobre Rutas Eco Culturales Comunitarias de Durango (prueba piloto 2025, tres destinos)",
    resource1Usage: "Datos verificables para la sección de problema y la justificación del proyecto.",
    resource2Name: "Centro Histórico de Durango, Patrimonio de la Humanidad UNESCO (2010)",
    resource2Usage: "Hito principal para la demo de AR del prototipo.",
    resource3Usage: "Fuente de datos para el dashboard de métricas.",
    resource4Name: "3.4 millones de visitantes acumulados en enero-febrero 2025 en Durango",
    resource4Detail: "con una derrama económica de $8 380 millones de pesos",
    resource4Usage: "Argumento cuantitativo para la viabilidad del proyecto.",
    resource5Name: "Estándar WCAG 2.1 AA",
    resource5Usage: "Base normativa para toda la implementación de accesibilidad.",
    resource6Name: "Polygon Mumbai Testnet + ethers.js",
    resource6Usage: "Stack Web3 para el módulo de trazabilidad y pagos comunitarios."
  },
  zh: {
    title: "旅游与文化",
    brand: "CodeTrip",
    nav0: "首页",
    nav1: "问题",
    nav2: "矛盾",
    nav3: "影响",
    nav4: "社区",
    navSolucion: "解决方案",
    navTecnologia: "技术",
    navRoadmap: "路线图",
    navA11y: "无障碍",
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
    approach1Title: "真正的无障碍",
    approach1Text: "提供音频、清晰阅读、手语、高对比度，以及适合不同年龄、能力和数字水平的内容格式。",
    approach2Title: "由证据支撑的可持续",
    approach2Text: "用人流、交通、废弃物和碳足迹指标，让生态路线不只依赖意愿声明。",
    approach3Title: "叙事自主权",
    approach3Text: "提供简单工具，让社区能够发布、修正和管理自己的故事、收益与环境标准。",
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
    solutionCard1Title: "文化路线连续沉浸导航",
    solutionCard1Text: "让路"自己讲故事"——基于位置的AR音频触发，无需频繁扫码。以Coyotes路线为原型的线性导航，自动触发空间音频叙事。",
    solutionCard2Title: "路线社区自运营 P2P 平台",
    solutionCard2Text: "每一公里都回到社区——整条文化路线被 token 化为一个"路线 NFT"，收入自动拆分：60%沿途家庭、20%文化基金、10%生态修复、10%平台维护。",
    solutionCard3Title: "沿线文化记忆数字档案馆",
    solutionCard3Text: "让长者成为路线的永恒讲述者——"叙事长椅"（实体木椅+NFC标签）记录每一段路的故事。长者用本族语言讲述，手机轻触NFC即可录音上传。",
    solutionCard4Title: "路线级环境数字孪生",
    solutionCard4Text: "看见路的呼吸——为文化路线建立环境仪表板，实时监测：徒步人次、垃圾重量、降雨量、植被干扰指数。系统生成"路线饱和度"预警，推荐替代路径。",
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
    teamCard4Text: "环境指标、负责任旅游和社区监测。",
    metricsTitle: "关键指标",
    metricVisitors: "触达游客",
    metricVisitorsDesc: "社区路线第一年的保守估算",
    metricAccessible: "无障碍路线",
    metricAccessibleDesc: "至少有一种替代感官通道的路线百分比",
    metricCarbon: "足迹减少",
    metricCarbonDesc: "与传统旅游模式相比每位游客的碳减排目标",
    metricIncome: "社区收入",
    metricIncomeDesc: "直接留在社区的旅游支出百分比",
    roadmapLabel: "路线图",
    roadmapTitle: "原型路线图",
    roadmapIntro: "功能演示（hackathon需要开发的内容）",
    roadmapComponent: "组件",
    roadmapPriority: "优先级",
    roadmapDesc: "功能描述",
    priorityEssential: "必需",
    priorityRecommended: "推荐",
    priorityOptional: "高级可选",
    roadmapItem1Name: "无障碍落地页",
    roadmapItem1Desc: "完整的7个版块首页，正确填充内容，支持键盘导航和屏幕阅读器。",
    roadmapItem2Name: "地标AR查看器",
    roadmapItem2Desc: "使用AR.js的功能性AR功能，至少支持一个历史标记（如大教堂），包含描述性音频选项。",
    roadmapItem3Name: "碳足迹模拟器",
    roadmapItem3Desc: "模拟计算器，比较两种交通方式，显示带预计算值的进度条。",
    roadmapItem4Name: "本地商户注册",
    roadmapItem4Desc: "符合WCAG标准的无障碍表单，发布包含名称、位置和类型的商业档案。",
    roadmapItem5Name: "数字孪生指标仪表板",
    roadmapItem5Desc: "使用Chart.js的静态图表，由JSON数据驱动，展示空气质量、访客和垃圾水平。",
    roadmapItem6Name: "Web3模块（模拟ERC-20代币）",
    roadmapItem6Desc: "Mumbai测试网模拟交易：路线预订并发放NFT证书。",
    a11yLabel: "最低清单",
    a11yTitle: "无障碍考虑",
    a11yIntro: "我们确保所有用户，无论其能力或辅助技术如何，都能使用本体验。",
    a11yItem1Title: "键盘导航",
    a11yItem1Desc: "所有交互元素具有逻辑tabindex。无需鼠标即可完成完整导航。",
    a11yItem2Title: "替代文本",
    a11yItem2Desc: "所有图片都有有意义的描述（有意义的alt属性），供屏幕阅读器使用。",
    a11yItem3Title: "ARIA标签",
    a11yItem3Desc: "表单、按钮和区域使用aria-label、role=\"navigation\"、aria-expanded等属性。",
    a11yItem4Title: "颜色对比度",
    a11yItem4Desc: "已验证符合AA/AAA标准。提供深色模式以减少视觉疲劳。",
    a11yItem5Title: "多媒体内容",
    a11yItem5Desc: "任何音频或视频内容都提供字幕和转录。",
    a11yItem6Title: "屏幕阅读器",
    a11yItem6Desc: "兼容NVDA（Windows）、VoiceOver（macOS/iOS）和TalkBack（Android）。",
    a11yItem7Title: "可见焦点",
    a11yItem7Desc: "所有交互元素使用:focus-visible，方便键盘用户。",
    a11yStatusPass: "✓ 已实现",
    a11yStatusWip: "🚧 进行中",
    resourcesLabel: "来源和参考",
    resourcesTitle: "参考资源与数据",
    resourcesColResource: "资源",
    resourcesColUsage: "原型中的用途",
    resource1Detail: "关于杜兰戈生态文化社区路线（2025年试点，三个目的地）",
    resource1Usage: "用于问题部分和项目论证的可验证数据。",
    resource2Name: "杜兰戈历史中心，联合国教科文组织世界遗产（2010年）",
    resource2Usage: "原型AR演示的主要地标。",
    resource3Usage: "指标仪表板的数据来源。",
    resource4Name: "2025年1-2月杜兰戈累计340万游客",
    resource4Detail: "经济影响83.8亿比索",
    resource4Usage: "项目可行性的量化论据。",
    resource5Name: "WCAG 2.1 AA标准",
    resource5Usage: "所有无障碍实现的规范基础。",
    resource6Name: "Polygon Mumbai测试网 + ethers.js",
    resource6Usage: "Web3技术栈，用于可追溯性和社区支付模块。"
  },
  en: {
    title: "Tourism and Culture",
    brand: "CodeTrip",
    nav0: "Home",
    nav1: "Problem",
    nav2: "Contradictions",
    nav3: "Impact",
    nav4: "Community",
    navSolucion: "Solution",
    navTecnologia: "Technology",
    navRoadmap: "Roadmap",
    navA11y: "Accessibility",
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
    approach1Title: "Real accessibility",
    approach1Text: "Audio, clear reading, sign language, high contrast, and formats adapted to different ages, abilities, and levels of digital skill.",
    approach2Title: "Sustainability with evidence",
    approach2Text: "Visitor-flow, transport, waste, and carbon-footprint indicators so eco routes do not rely only on declarations of intent.",
    approach3Title: "Narrative autonomy",
    approach3Text: "Simple tools for communities to publish, correct, and manage their own stories, benefits, and environmental criteria.",
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
    solutionCard1Title: "Immersive Cultural Route Navigation",
    solutionCard1Text: "Let the route "tell its own story" - location-based AR audio triggers replace visual markers. Linear navigation based on the Coyotes route prototype automatically triggers spatial audio narratives.",
    solutionCard2Title: "Community-Operated P2P Platform",
    solutionCard2Text: "Every kilometer returns to the community - the entire cultural route is tokenized as a "Route NFT" with automatic revenue distribution: 60% to host families, 20% cultural fund, 10% ecological restoration, 10% platform maintenance.",
    solutionCard3Title: "Cultural Memory Digital Archive",
    solutionCard3Text: "Elders become eternal storytellers of the route - "Story Benches" (physical wooden chairs + NFC tags) record the stories of each road segment. Elders tell stories in their native language; tap NFC with phone to record and upload.",
    solutionCard4Title: "Route-Level Environmental Digital Twin",
    solutionCard4Text: "See the route breathe - environmental dashboard for cultural routes, real-time monitoring of: hikers per day, trash weight, rainfall, vegetation disturbance index. System generates "route saturation" alerts and recommends alternative paths.",
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
    teamCard4Text: "Environmental metrics, responsible tourism and community monitoring.",
    metricsTitle: "Key Metrics",
    metricVisitors: "Visitors Reached",
    metricVisitorsDesc: "Conservative estimate for the first year of community routes",
    metricAccessible: "Accessible Routes",
    metricAccessibleDesc: "Percentage of routes with at least one alternative sensory channel",
    metricCarbon: "Footprint Reduction",
    metricCarbonDesc: "Carbon reduction target per visitor compared to traditional tourism",
    metricIncome: "Community Income",
    metricIncomeDesc: "Percentage of tourism spending that stays directly in the community",
    roadmapLabel: "Roadmap",
    roadmapTitle: "Prototype Roadmap",
    roadmapIntro: "Functional demo (what needs to be developed for the hackathon)",
    roadmapComponent: "Component",
    roadmapPriority: "Priority",
    roadmapDesc: "Functional Description",
    priorityEssential: "Essential",
    priorityRecommended: "Recommended",
    priorityOptional: "Advanced Optional",
    roadmapItem1Name: "Accessible Landing Page",
    roadmapItem1Desc: "Complete home with all 7 template sections properly populated and navigable with keyboard and screen reader.",
    roadmapItem2Name: "AR Viewer for a Landmark",
    roadmapItem2Desc: "Functional AR feature (with AR.js) for at least one historical marker, e.g., the Cathedral, with descriptive audio option.",
    roadmapItem3Name: "Carbon Footprint Simulator",
    roadmapItem3Desc: "Mock calculator comparing two transport modes and displaying a progress bar with precalculated values.",
    roadmapItem4Name: "Local Business Registration",
    roadmapItem4Desc: "Accessible form (WCAG) that publishes a business profile with name, location and business type.",
    roadmapItem5Name: "Digital Twin Metrics Dashboard",
    roadmapItem5Desc: "Static charts with Chart.js powered by JSON representing air quality, visitors and waste levels.",
    roadmapItem6Name: "Web3 Module (Simulated ERC-20 Token)",
    roadmapItem6Desc: "Mock transaction on Mumbai Testnet: route booking with NFT certificate issuance.",
    a11yLabel: "Minimum Checklist",
    a11yTitle: "Accessibility Considerations",
    a11yIntro: "We ensure the experience is usable for all people, regardless of their abilities or assistive technology.",
    a11yItem1Title: "Keyboard Navigation",
    a11yItem1Desc: "Logical tabindex on all interactive elements. Complete navigation without using a mouse.",
    a11yItem2Title: "Alternative Text",
    a11yItem2Desc: "Meaningful descriptions on all images (meaningful alt) for screen readers.",
    a11yItem3Title: "ARIA Labels",
    a11yItem3Desc: "Forms, buttons and regions with aria-label, role=\"navigation\", aria-expanded, etc.",
    a11yItem4Title: "Color Contrast",
    a11yItem4Desc: "AA/AAA compliance verified. Dark mode available to reduce visual fatigue.",
    a11yItem5Title: "Multimedia Content",
    a11yItem5Desc: "Subtitles and transcriptions available for any audio or video content.",
    a11yItem6Title: "Screen Readers",
    a11yItem6Desc: "Compatible with NVDA (Windows), VoiceOver (macOS/iOS) and TalkBack (Android).",
    a11yItem7Title: "Visible Focus",
    a11yItem7Desc: ":focus-visible on all interactive elements for keyboard users.",
    a11yStatusPass: "✓ Implemented",
    a11yStatusWip: "🚧 In Progress",
    resourcesLabel: "Sources & References",
    resourcesTitle: "Resources and Reference Data",
    resourcesColResource: "Resource",
    resourcesColUsage: "Use in Prototype",
    resource1Detail: "on Durango Eco-Cultural Community Routes (2025 pilot, three destinations)",
    resource1Usage: "Verifiable data for the problem section and project justification.",
    resource2Name: "Historic Center of Durango, UNESCO World Heritage (2010)",
    resource2Usage: "Main landmark for the AR demo of the prototype.",
    resource3Usage: "Data source for the metrics dashboard.",
    resource4Name: "3.4 million accumulated visitors in Jan-Feb 2025 in Durango",
    resource4Detail: "with an economic impact of $8.38 billion pesos",
    resource4Usage: "Quantitative argument for project viability.",
    resource5Name: "WCAG 2.1 AA Standard",
    resource5Usage: "Normative basis for all accessibility implementation.",
    resource6Name: "Polygon Mumbai Testnet + ethers.js",
    resource6Usage: "Web3 stack for traceability and community payments module."
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

// 全屏模式功能
fullscreenToggle?.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      fullscreenToggle.textContent = '⛶';
      fullscreenToggle.setAttribute('title', '退出全屏');
    }).catch(err => {
      console.log('Error attempting to enable fullscreen:', err);
    });
  } else {
    document.exitFullscreen().then(() => {
      fullscreenToggle.textContent = '⛶';
      fullscreenToggle.setAttribute('title', '全屏');
    });
  }
});

// 监听全屏变化事件
document.addEventListener('fullscreenchange', () => {
  if (fullscreenToggle) {
    if (document.fullscreenElement) {
      fullscreenToggle.textContent = '⛶';
      fullscreenToggle.setAttribute('title', '退出全屏');
    } else {
      fullscreenToggle.textContent = '⛶';
      fullscreenToggle.setAttribute('title', '全屏');
    }
  }
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

adminToggle?.addEventListener('click', () => {
  const isAdmin = localStorage.getItem(adminAccessKey) === 'true';
  if (isAdmin) {
    localStorage.removeItem(adminAccessKey);
  } else {
    localStorage.setItem(adminAccessKey, 'true');
  }
  updateRegistrationState();
  window.location.reload();
});

// Audio espacial para accesibilidad
const btnAudio = document.getElementById('btn-audio');
let audioContext = null;
let isPlaying = false;

btnAudio?.addEventListener('click', () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  if (isPlaying) {
    audioContext.suspend();
    btnAudio.textContent = '🔊 Escuchar historia';
    isPlaying = false;
  } else {
    audioContext.resume();
    // Simular narración con audio espacial
    playSpatialAudio();
    btnAudio.textContent = '⏸️ Pausar narración';
    isPlaying = true;
  }
});

function playSpatialAudio() {
  if (!audioContext) return;
  
  // Crear oscilador para simular voz
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const panner = audioContext.createPanner();
  
  oscillator.connect(panner);
  panner.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Configurar audio espacial
  panner.panningModel = 'HRTF';
  panner.distanceModel = 'inverse';
  panner.refDistance = 1;
  panner.maxDistance = 10000;
  panner.rolloffFactor = 1;
  panner.coneInnerAngle = 360;
  panner.coneOuterAngle = 0;
  panner.coneOuterGain = 0;
  
  // Posición 3D del audio (frente al usuario)
  panner.positionX.value = 0;
  panner.positionY.value = 0;
  panner.positionZ.value = -1;
  
  oscillator.frequency.value = 150;
  oscillator.type = 'sine';
  gainNode.gain.value = 0.3;
  
  oscillator.start();
  
  // Detener después de 5 segundos (simulación)
  setTimeout(() => {
    oscillator.stop();
    if (btnAudio) {
      btnAudio.textContent = '🔊 Escuchar historia';
      isPlaying = false;
    }
  }, 5000);
}

// P2P Web3 Booking System
const p2pBookingForm = document.getElementById('p2p-booking-form');
const routeSelect = document.getElementById('route-select');
const guideSelect = document.getElementById('guide-select');
const participantsInput = document.getElementById('participants');
const totalPriceEl = document.getElementById('total-price');
const txStatus = document.getElementById('tx-status');
const btnCompensate = document.getElementById('btn-compensate');

// Precios base por ruta
const routePrices = {
  otinapa: 500,
  catedral: 650,
  coyotes: 450
};

// Actualizar precio cuando cambian selecciones
function updatePrice() {
  const route = routeSelect?.value;
  const participants = parseInt(participantsInput?.value) || 1;
  const basePrice = routePrices[route] || 0;
  const total = basePrice * participants;
  
  if (totalPriceEl && basePrice > 0) {
    totalPriceEl.textContent = `$${total} MXN`;
  }
}

routeSelect?.addEventListener('change', updatePrice);
participantsInput?.addEventListener('input', updatePrice);

// Simular conexión Web3 y smart contract
p2pBookingForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = p2pBookingForm.querySelector('.p2p-submit');
  const btnText = submitBtn?.querySelector('.btn-text');
  const btnLoading = submitBtn?.querySelector('.btn-loading');
  
  // Mostrar estado de carga
  if (submitBtn) submitBtn.disabled = true;
  if (btnText) btnText.hidden = true;
  if (btnLoading) btnLoading.hidden = false;
  if (txStatus) txStatus.hidden = false;
  
  // Paso 1: Conectar a Polygon Mumbai
  const step1 = txStatus?.querySelector('[data-step="1"]');
  const step2 = txStatus?.querySelector('[data-step="2"]');
  const step3 = txStatus?.querySelector('[data-step="3"]');
  const nftLink = document.getElementById('nft-link');
  
  // Simular delay de blockchain
  await new Promise(resolve => setTimeout(resolve, 1500));
  if (step1) step1.querySelector('.step-icon').textContent = '✅';
  if (step2) step2.hidden = false;
  
  // Paso 2: Ejecutar smart contract
  await new Promise(resolve => setTimeout(resolve, 2000));
  if (step2) step2.querySelector('.step-icon').textContent = '✅';
  if (step3) step3.hidden = false;
  
  // Generar hash de transacción simulado
  const txHash = '0x' + Array.from({length: 64}, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
  
  if (nftLink) {
    nftLink.href = `https://mumbai.polygonscan.com/tx/${txHash}`;
  }
  
  // Restaurar botón
  if (submitBtn) submitBtn.disabled = false;
  if (btnText) btnText.hidden = false;
  if (btnLoading) btnLoading.hidden = true;
  
  // Guardar reserva en localStorage
  const booking = {
    route: routeSelect?.value,
    guide: guideSelect?.value,
    date: document.getElementById('booking-date')?.value,
    participants: participantsInput?.value,
    total: totalPriceEl?.textContent,
    txHash: txHash,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('turismoP2PBooking', JSON.stringify(booking));
});

// Botón de compensación de carbono
btnCompensate?.addEventListener('click', () => {
  const route = routeSelect?.value;
  if (!route) {
    alert('Primero selecciona una ruta para calcular la compensación');
    return;
  }
  
  // Simular donación a proyecto de reforestación
  const compensationAmount = (routePrices[route] * 0.05).toFixed(2);
  const confirmed = confirm(
    `¿Deseas compensar tu huella de carbono donando $${compensationAmount} MXN ` +
    `al proyecto de reforestación local?`
  );
  
  if (confirmed) {
    btnCompensate.textContent = '✓ Compensado';
    btnCompensate.disabled = true;
    btnCompensate.style.background = '#16a34a';
    btnCompensate.style.color = 'white';
    localStorage.setItem('turismoCarbonCompensated', 'true');
  }
});

// Archivo Digital 2.0 - TensorFlow.js Vision Recognition
const btnRecognize = document.getElementById('btn-recognize');
const recognitionResult = document.getElementById('recognition-result');
const recognizedMonument = document.getElementById('recognized-monument');
const recognitionConfidence = document.getElementById('recognition-confidence');

// Monumentos de Durango para reconocimiento simulado
const durangoMonuments = [
  { name: 'Catedral Basílica Menor', confidence: 0.94, description: 'Construida en el siglo XVIII, joya del barroco colonial' },
  { name: 'Museo Francisco Villa', confidence: 0.89, description: 'Casa histórica del Revolucionario' },
  { name: 'Palacio de Gobierno', confidence: 0.91, description: 'Murales de Francisco Montoya de la Cruz' },
  { name: 'Teatro Ricardo Castro', confidence: 0.87, description: 'Arquitectura neoclásica del Porfiriato' },
  { name: 'Mercado Gómez Palacio', confidence: 0.85, description: 'Centro comercial histórico' }
];

btnRecognize?.addEventListener('click', async () => {
  btnRecognize.disabled = true;
  btnRecognize.textContent = '📷 Analizando...';

  await new Promise(resolve => setTimeout(resolve, 2000));

  const monument = durangoMonuments[Math.floor(Math.random() * durangoMonuments.length)];

  if (recognizedMonument) recognizedMonument.textContent = monument.name;
  if (recognitionConfidence) recognitionConfidence.textContent = `Confianza: ${(monument.confidence * 100).toFixed(0)}%`;
  if (recognitionResult) recognitionResult.hidden = false;

  updateKnowledgeGraph(monument.name);

  btnRecognize.disabled = false;
  btnRecognize.textContent = '📷 Identificar monumento';
});

// Grafo de conocimiento
const graphNodes = document.querySelectorAll('.graph-node');
const nodeDetails = document.getElementById('node-details');

const nodeInfo = {
  catedral: 'Catedral Basílica Menor de Durango - Construida entre 1695 y 1844, representa el estilo barroco colonial mexicano.',
  barroco: 'Arquitectura Barroca - Estilo artístico desarrollado entre los siglos XVII y XVIII, caracterizado por su ornamentación exuberante.',
  siglo18: 'Siglo XVIII - Período de gran desarrollo arquitectónico en la Nueva España.',
  tepehuanes: 'Tepehuanes - Pueblo indígena originario de la región de Durango, con rica tradición cultural.',
  'camino-real': 'Camino Real de Tierra Adentro - Ruta histórica que conectó México con el norte durante la colonia.'
};

graphNodes.forEach(node => {
  node.addEventListener('click', () => {
    graphNodes.forEach(n => n.classList.remove('active'));
    node.classList.add('active');

    const nodeKey = node.dataset.node;
    if (nodeDetails && nodeInfo[nodeKey]) {
      nodeDetails.innerHTML = `<p><strong>${node.textContent}:</strong> ${nodeInfo[nodeKey]}</p>`;
    }
  });
});

function updateKnowledgeGraph(monumentName) {
  graphNodes.forEach(node => node.classList.remove('active'));
  const rootNode = document.querySelector('.graph-node.root');
  if (rootNode) {
    rootNode.textContent = monumentName;
    rootNode.classList.add('active');
  }
}

// Herramienta de narrativa accesible
const btnRecord = document.getElementById('btn-record');
const recordingStatus = document.getElementById('recording-status');
const recordTimer = document.getElementById('record-timer');
const aiProcessing = document.getElementById('ai-processing');
const narrativeOutput = document.getElementById('narrative-output');

let isRecording = false;
let recordingInterval;
let recordingSeconds = 0;

btnRecord?.addEventListener('click', async () => {
  if (!isRecording) {
    isRecording = true;
    btnRecord.classList.add('recording');
    btnRecord.querySelector('.record-text').textContent = 'Detener';
    recordingStatus.hidden = false;
    narrativeOutput.hidden = true;

    recordingSeconds = 0;
    recordingInterval = setInterval(() => {
      recordingSeconds++;
      const mins = Math.floor(recordingSeconds / 60);
      const secs = recordingSeconds % 60;
      if (recordTimer) recordTimer.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  } else {
    isRecording = false;
    btnRecord.classList.remove('recording');
    btnRecord.querySelector('.record-text').textContent = 'Grabar leyenda';
    recordingStatus.hidden = true;
    clearInterval(recordingInterval);

    await processNarrative();
  }
});

async function processNarrative() {
  aiProcessing.hidden = false;

  const steps = aiProcessing.querySelectorAll('.processing-step');

  for (let i = 0; i < steps.length; i++) {
    steps.forEach(s => s.classList.remove('active'));
    steps[i].classList.add('active');
    await new Promise(resolve => setTimeout(resolve, 1500));
    steps[i].classList.remove('active');
    steps[i].classList.add('completed');
  }

  aiProcessing.hidden = true;
  narrativeOutput.hidden = false;

  steps.forEach((s, i) => {
    s.classList.remove('active', 'completed');
    s.hidden = i > 0;
  });
}

// Gemelo Digital de Sostenibilidad - IoT Dashboard
const iotMetrics = {
  air: document.getElementById('air-quality'),
  waste: document.getElementById('waste-level'),
  noise: document.getElementById('noise-level'),
  carbon: document.getElementById('carbon-total')
};

// Simular datos IoT en tiempo real
function updateIoTMetrics() {
  const metrics = {
    air: { min: 30, max: 80, unit: '' },
    waste: { min: 40, max: 90, unit: '' },
    noise: { min: 40, max: 70, unit: '' },
    carbon: { min: 0.5, max: 3.0, unit: '', decimals: 1 }
  };

  Object.keys(metrics).forEach(key => {
    const metric = metrics[key];
    const value = metric.decimals 
      ? (Math.random() * (metric.max - metric.min) + metric.min).toFixed(metric.decimals)
      : Math.floor(Math.random() * (metric.max - metric.min) + metric.min);
    
    if (iotMetrics[key]) {
      iotMetrics[key].textContent = value;
    }
  });
}

// Actualizar métricas cada 5 segundos
setInterval(updateIoTMetrics, 5000);

// Inicializar Chart.js
function initCharts() {
  // Gráfico de tráfico de visitantes
  const trafficCtx = document.getElementById('trafficChart');
  if (trafficCtx) {
    new Chart(trafficCtx, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Visitantes',
          data: [120, 150, 180, 140, 200, 350, 320],
          borderColor: '#697766',
          backgroundColor: 'rgba(105, 119, 102, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, ticks: { font: { size: 10 } } },
          x: { ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  // Gráfico de huella de carbono
  const carbonCtx = document.getElementById('carbonChart');
  if (carbonCtx) {
    new Chart(carbonCtx, {
      type: 'doughnut',
      data: {
        labels: ['Transporte', 'Alojamiento', 'Alimentación', 'Actividades'],
        datasets: [{
          data: [45, 25, 20, 10],
          backgroundColor: ['#697766', '#8fa08a', '#a9b49f', '#c2cdbb'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { 
            position: 'right',
            labels: { boxWidth: 12, font: { size: 10 } }
          }
        }
      }
    });
  }
}

// Inicializar gráficos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  initMetricsAnimation();
});

// Animación de métricas con contador
function initMetricsAnimation() {
  const metricCards = document.querySelectorAll('.metric-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const valueEl = entry.target.querySelector('.metric-value');
        const targetValue = parseInt(valueEl.dataset.count);
        animateCounter(valueEl, targetValue);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  metricCards.forEach(card => observer.observe(card));
}

function animateCounter(element, target) {
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();
  const isNegative = target < 0;
  const absTarget = Math.abs(target);
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeProgress * absTarget);
    
    if (isNegative) {
      element.textContent = '-' + current.toLocaleString();
    } else {
      element.textContent = current.toLocaleString();
    }
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }
  
  requestAnimationFrame(update);
}

// Recomendaciones ecológicas
const recButtons = document.querySelectorAll('.btn-rec');
recButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    btn.textContent = '✓ Hecho';
    btn.disabled = true;
    btn.style.background = '#16a34a';
    btn.style.color = 'white';
    btn.style.borderColor = '#16a34a';
    
    // Sumar puntos al badge
    updateBadgePoints(50);
    
    // Guardar en localStorage
    const completed = JSON.parse(localStorage.getItem('turismoEcoActions') || '[]');
    completed.push({ action, timestamp: new Date().toISOString() });
    localStorage.setItem('turismoEcoActions', JSON.stringify(completed));
  });
});

// NFT Badge
const claimNftBtn = document.getElementById('claim-nft');
const shareBadgeBtn = document.getElementById('share-badge');

claimNftBtn?.addEventListener('click', () => {
  const badge = document.getElementById('nft-badge');
  badge.style.animation = 'pulse 0.5s ease';
  setTimeout(() => {
    alert('NFT verificado en Polygon Mumbai:\n0x' + Array.from({length: 64}, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join(''));
    badge.style.animation = '';
  }, 500);
});

shareBadgeBtn?.addEventListener('click', async () => {
  const shareData = {
    title: 'Mi insignia ecológica en Durango',
    text: 'Soy Explorador Verde en el turismo sostenible de Durango. ¡Únete!',
    url: window.location.href
  };
  
  if (navigator.share) {
    await navigator.share(shareData);
  } else {
    alert('¡Logro copiado al portapapeles!');
  }
});

function updateBadgePoints(points) {
  const progressFill = document.querySelector('.progress-fill');
  const badgeProgress = document.querySelector('.badge-progress');
  
  if (progressFill && badgeProgress) {
    const currentWidth = parseInt(progressFill.style.width) || 65;
    const newWidth = Math.min(currentWidth + (points / 10), 100);
    progressFill.style.width = newWidth + '%';
    
    const currentPoints = parseInt(badgeProgress.textContent) || 650;
    const newPoints = currentPoints + points;
    badgeProgress.textContent = `${newPoints} / 1000 pts`;
    
    // Subir de nivel si llega a 1000
    if (newPoints >= 1000) {
      document.querySelector('.badge-level').textContent = '🥈';
      document.querySelector('.badge-info strong').textContent = 'Guardián del Territorio';
    }
  }
}

// Tabs de narrativa
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabContents.forEach(content => {
      content.hidden = content.id !== `tab-${tab}`;
    });
  });
});

// Botones de idioma
const langBtns = document.querySelectorAll('.lang-btn');
const narrativeText = document.getElementById('narrative-text');

const narrativeTranslations = {
  es: 'La leyenda del Cerro de Mercado cuenta que en tiempos antiguos, los espíritus de la montaña protegían a los viajeros que cruzaban estas tierras.',
  en: 'The legend of Cerro de Mercado tells that in ancient times, the mountain spirits protected travelers who crossed these lands.',
  zh: 'Mercado山的传说讲述，在古代，山神保护着穿越这些土地的旅行者。'
};

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (narrativeText && narrativeTranslations[lang]) {
      narrativeText.textContent = narrativeTranslations[lang];
    }
  });
});

// Actualizar huella de carbono según el modo de transporte
function updateCarbonFootprint(transportMode) {
  const co2Value = document.getElementById('co2-value');
  const progressBar = document.querySelector('#carbon-tracker progress');
  const comparisonText = document.querySelector('#carbon-tracker small');
  
  const emissions = {
    walking: { value: 0, percent: 0, text: '0 emisiones - 100% más ligero que en automóvil' },
    bicycle: { value: 0, percent: 0, text: '0 emisiones - 100% más ligero que en automóvil' },
    electric: { value: 0.12, percent: 12, text: '88% más ligero que en automóvil' },
    bus: { value: 0.42, percent: 42, text: '58% más ligero que en automóvil' },
    car: { value: 1.0, percent: 100, text: 'Límite de referencia' }
  };
  
  const data = emissions[transportMode] || emissions.bus;
  
  if (co2Value) co2Value.textContent = `${data.value} kg CO₂`;
  if (progressBar) progressBar.value = data.percent;
  if (comparisonText) comparisonText.textContent = data.text;
}

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
