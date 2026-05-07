const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const languageMenu = document.getElementById('languageMenu');
const langOptions = document.querySelectorAll('.lang-option');

const languages = ['es', 'zh', 'en'];
let currentLangIndex = 0;

const translations = {
  es: {
    title: "Plantilla Frontend de Hackathon",
    brand: "HackSprint",
    nav0: "Inicio",
    nav1: "Características",
    nav2: "Demo",
    nav3: "Contacto",
    menuToggle: "Alternar menú",
    eyebrow: "Plantilla de Hackathon",
    h1: "Inicia rápidamente tu proyecto frontend",
    heroP: "Una plantilla frontend ligera, responsiva y extensible, ideal para prototipos y páginas de presentación de hackathons.",
    viewFeatures: "Ver Características",
    toggleTheme: "Cambiar Tema",
    liveDemo: "Demo en Vivo",
    demoDesc: "La interfaz predeterminada incluye navegación, cuadrícula responsiva, botones, tarjetas y lógica de interacción simple.",
    coreFeatures: "Características Principales",
    responsive: "Diseño Responsivo",
    responsiveDesc: "Se adapta automáticamente a pantallas móviles, tabletas y de escritorio, facilitando el desarrollo rápido de prototipos.",
    modular: "Estilos Modulares",
    modularDesc: "Estructura CSS clara, fácil de extender y personalizar colores.",
    light: "Interacciones Ligeras",
    lightDesc: "Funciones integradas de alternancia de menú y cambio de tema, para mejorar rápidamente la experiencia del usuario.",
    quickDemo: "Demo Rápido",
    highlights: "Puntos Destacados del Proyecto",
    highlights0: "Desarrollo nativo con HTML + CSS + JavaScript",
    highlights1: "Se puede empaquetar e implementar inmediatamente en GitHub Pages",
    highlights2: "Fácil migración a React/Vue/Svelte",
    suggestions: "Extensiones Sugeridas",
    suggestions0: "Agregar formularios y solicitudes API",
    suggestions1: "Integrar bibliotecas de componentes y gráficos",
    suggestions2: "Incorporar animaciones e interacciones avanzadas",
    start: "Comienza tu Hackathon",
    startDesc: "Copia esta plantilla, reemplaza el contenido, ajusta los colores y úsala como tu página de presentación MVP.",
    viewCode: "Ver Código Fuente",
    backTop: "Volver Arriba",
    footer: "© 2026 Plantilla HackSprint · Para prototipos de hackathons",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro"
  },
  zh: {
    title: "黑客松前端模板",
    brand: "HackSprint",
    nav0: "首页",
    nav1: "特性",
    nav2: "演示",
    nav3: "联系",
    menuToggle: "切换菜单",
    eyebrow: "黑客松模板",
    h1: "快速启动你的前端项目",
    heroP: "一个轻量、响应式、可扩展的前端模板，适合黑客松原型与展示页面。",
    viewFeatures: "查看特性",
    toggleTheme: "切换主题",
    liveDemo: "实时演示",
    demoDesc: "默认界面包含导航、响应式网格、按钮、卡片和简单的交互逻辑。",
    coreFeatures: "核心特性",
    responsive: "响应式布局",
    responsiveDesc: "自动适配移动端、平板和桌面屏幕，方便快速原型开发。",
    modular: "模块化样式",
    modularDesc: "清晰的 CSS 结构，易于扩展与定制化配色。",
    light: "轻量交互",
    lightDesc: "内置菜单切换与主题切换功能，方便快速增强用户体验。",
    quickDemo: "快速演示",
    highlights: "项目亮点",
    highlights0: "HTML + CSS + JavaScript 原生开发",
    highlights1: "可立即打包部署到 GitHub Pages",
    highlights2: "易于迁移到 React/Vue/Svelte",
    suggestions: "建议扩展",
    suggestions0: "添加表单与 API 请求",
    suggestions1: "集成组件库与图表",
    suggestions2: "加入动画与进阶交互",
    start: "开始你的黑客松",
    startDesc: "复制此模板，替换内容，调整配色，并将其作为你的 MVP 展示页面。",
    viewCode: "查看源码",
    backTop: "返回顶部",
    footer: "© 2026 HackSprint 模板 · 适用于黑客松原型",
    lightMode: "浅色模式",
    darkMode: "暗色模式"
  },
  en: {
    title: "Hackathon Frontend Template",
    brand: "HackSprint",
    nav0: "Home",
    nav1: "Features",
    nav2: "Demo",
    nav3: "Contact",
    menuToggle: "Toggle Menu",
    eyebrow: "Hackathon Template",
    h1: "Kickstart Your Frontend Project",
    heroP: "A lightweight, responsive, and extensible frontend template perfect for hackathon prototypes and showcase pages.",
    viewFeatures: "View Features",
    toggleTheme: "Toggle Theme",
    liveDemo: "Live Demo",
    demoDesc: "The default interface includes navigation, responsive grid, buttons, cards, and simple interaction logic.",
    coreFeatures: "Core Features",
    responsive: "Responsive Design",
    responsiveDesc: "Automatically adapts to mobile, tablet, and desktop screens, facilitating rapid prototype development.",
    modular: "Modular Styles",
    modularDesc: "Clear CSS structure, easy to extend and customize colors.",
    light: "Light Interactions",
    lightDesc: "Built-in menu toggle and theme switch functions to quickly enhance user experience.",
    quickDemo: "Quick Demo",
    highlights: "Project Highlights",
    highlights0: "Native development with HTML + CSS + JavaScript",
    highlights1: "Can be packaged and deployed immediately to GitHub Pages",
    highlights2: "Easy migration to React/Vue/Svelte",
    suggestions: "Suggested Extensions",
    suggestions0: "Add forms and API requests",
    suggestions1: "Integrate component libraries and charts",
    suggestions2: "Incorporate animations and advanced interactions",
    start: "Start Your Hackathon",
    startDesc: "Copy this template, replace the content, adjust the colors, and use it as your MVP showcase page.",
    viewCode: "View Source Code",
    backTop: "Back to Top",
    footer: "© 2026 HackSprint Template · For Hackathon Prototypes",
    lightMode: "Light Mode",
    darkMode: "Dark Mode"
  }
};

const updateLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.title = '0.0.0 - ' + translations[lang].title;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      if (el.id === 'themeToggle') {
        // 跳过主题按钮，保留emoji
        return;
      } else if (el.getAttribute('aria-label')) {
        el.setAttribute('aria-label', translations[lang][key]);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  localStorage.setItem('hackathonLang', lang);
};

menuToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('open');
});

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hackathonTheme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
};

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

const updateActiveLanguageButton = (lang) => {
  langOptions.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
};

langToggle?.addEventListener('click', () => {
  languageMenu.classList.toggle('active');
});

langOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    updateLanguage(lang);
    currentLangIndex = languages.indexOf(lang);
    updateActiveLanguageButton(lang);
    languageMenu.classList.remove('active');
  });
});

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-dropdown')) {
    languageMenu.classList.remove('active');
  }
});

const savedTheme = localStorage.getItem('hackathonTheme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

const savedLang = localStorage.getItem('hackathonLang');
if (savedLang) {
  currentLangIndex = languages.indexOf(savedLang);
  if (currentLangIndex === -1) currentLangIndex = 0;
  updateLanguage(savedLang);
  updateActiveLanguageButton(savedLang);
} else {
  updateLanguage('es');
  updateActiveLanguageButton('es');
}
