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

const translations = {
  es: {
    title: "Turismo y Cultura",
    brand: "Turismo y Cultura",
    nav0: "Problema",
    nav1: "Contradicciones",
    nav2: "Impacto",
    nav3: "Comunidad",
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
    impactLabel: "Impacto esperado",
    impactTitle: "Del recorrido turístico a una memoria viva y accesible",
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
    footer: "© 2026 Turismo y Cultura · Durango eco-cultural",
    registerLabel: "Registro de acceso",
    registerTitle: "Crea tu acceso a Turismo y Cultura",
    registerIntro: "Completa estos datos para entrar a la experiencia eco-cultural de Durango.",
    registerPoint1: "Acceso personalizado",
    registerPoint2: "Preferencias de idioma",
    registerPoint3: "Necesidades de accesibilidad",
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
    visitorTourist: "Turista",
    visitorStudent: "Estudiante",
    visitorCommunity: "Integrante de comunidad",
    visitorResearcher: "Investigador/a",
    accessNeedsLabel: "Necesidades de accesibilidad",
    accessNeedsPlaceholder: "Audio, alto contraste, lectura sencilla, lengua de señas...",
    termsLabel: "Acepto usar esta experiencia con respeto hacia las comunidades y su memoria cultural.",
    registerButton: "Registrarme y entrar",
    formErrorRequired: "Completa los campos obligatorios para continuar."
  },
  zh: {
    title: "旅游与文化",
    brand: "旅游与文化",
    nav0: "问题",
    nav1: "矛盾",
    nav2: "影响",
    nav3: "社区",
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
    impactLabel: "预期影响",
    impactTitle: "从旅游路线走向鲜活且可及的记忆",
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
    footer: "© 2026 旅游与文化 · 杜兰戈生态文化",
    registerLabel: "访问注册",
    registerTitle: "创建你的“旅游与文化”访问账号",
    registerIntro: "填写以下信息后，即可进入杜兰戈生态文化体验。",
    registerPoint1: "个性化访问",
    registerPoint2: "语言偏好",
    registerPoint3: "无障碍需求",
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
    visitorTourist: "游客",
    visitorStudent: "学生",
    visitorCommunity: "社区成员",
    visitorResearcher: "研究人员",
    accessNeedsLabel: "无障碍需求",
    accessNeedsPlaceholder: "音频、高对比度、简明阅读、手语等...",
    termsLabel: "我同意以尊重社区及其文化记忆的方式使用此体验。",
    registerButton: "注册并进入",
    formErrorRequired: "请填写必填项后继续。"
  },
  en: {
    title: "Tourism and Culture",
    brand: "Tourism and Culture",
    nav0: "Problem",
    nav1: "Contradictions",
    nav2: "Impact",
    nav3: "Community",
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
    impactLabel: "Expected impact",
    impactTitle: "From tourist route to living and accessible memory",
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
    footer: "© 2026 Tourism and Culture · Eco-cultural Durango",
    registerLabel: "Access registration",
    registerTitle: "Create your Tourism and Culture access",
    registerIntro: "Complete these details to enter Durango's eco-cultural experience.",
    registerPoint1: "Personalized access",
    registerPoint2: "Language preferences",
    registerPoint3: "Accessibility needs",
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
    visitorTourist: "Tourist",
    visitorStudent: "Student",
    visitorCommunity: "Community member",
    visitorResearcher: "Researcher",
    accessNeedsLabel: "Accessibility needs",
    accessNeedsPlaceholder: "Audio, high contrast, simple reading, sign language...",
    termsLabel: "I agree to use this experience with respect for communities and their cultural memory.",
    registerButton: "Register and enter",
    formErrorRequired: "Complete the required fields to continue."
  }
};

const getRegisteredUser = () => {
  try {
    return JSON.parse(localStorage.getItem('turismoRegisteredUser'));
  } catch {
    return null;
  }
};

const updateRegistrationState = () => {
  const user = getRegisteredUser();
  const isRegistered = Boolean(user?.email);
  document.body.classList.toggle('registration-locked', !isRegistered);
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
    accessNeeds: String(formData.get('accessNeeds') || '').trim(),
    registeredAt: new Date().toISOString()
  };

  localStorage.setItem('turismoRegisteredUser', JSON.stringify(user));
  if (formError) formError.textContent = '';
  setText(lang);
  setActiveLanguage(lang);
  updateRegistrationState();
});

signOutButton?.addEventListener('click', () => {
  localStorage.removeItem('turismoRegisteredUser');
  registrationForm?.reset();
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

const resetRegistration = new URLSearchParams(window.location.search).has('reset');
if (resetRegistration) {
  localStorage.removeItem('turismoRegisteredUser');
}

const savedUser = getRegisteredUser();
const savedLang = savedUser?.preferredLanguage || localStorage.getItem('turismoLang') || 'es';
setText(translations[savedLang] ? savedLang : 'es');
setActiveLanguage(translations[savedLang] ? savedLang : 'es');
updateRegistrationState();
