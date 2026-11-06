// =====================================================================
// ВСЁ СОДЕРЖИМОЕ САЙТА — ЗДЕСЬ. Меняйте тексты, проекты, контакты только в этом файле.
// Каждый текст задан на трёх языках: ru / uz / en.
// =====================================================================

export type Lang = 'ru' | 'uz' | 'en';
export type T = Record<Lang, string>;

export const contacts = {
  telegram: 'qqw3130',
  phone: '+998 97 521 31 30',
  email: 'muhammadzoirov174@gmail.com',
  github: 'zoirovdevm',
};

export const profile = {
  name: { ru: 'Мухаммаджон Зоиров', uz: 'Muhammadjon Zoirov', en: 'Muhammadjon Zoirov' } as T,
  role: { ru: 'Fullstack-разработчик', uz: 'Fullstack dasturchi', en: 'Fullstack Developer' } as T,
  stack: 'Node.js · NestJS · Next.js · TypeScript',
  pitch: {
    ru: 'Проектирую и запускаю веб-продукты целиком — от схемы базы данных и API до интерфейса и деплоя. Пишу на TypeScript, люблю чистую архитектуру и системы, которые выдерживают реальную нагрузку.',
    uz: "Veb-mahsulotlarni to'liq loyihalab, ishga tushiraman — ma'lumotlar bazasi sxemasi va API'dan tortib interfeys va deploygacha. TypeScript'da yozaman, toza arxitektura va real yuklamaga chidaydigan tizimlarni yaxshi ko'raman.",
    en: 'I design and ship web products end to end — from the database schema and API to the interface and deployment. I write TypeScript and care about clean architecture and systems that hold up under real load.',
  } as T,
  location: { ru: 'Узбекистан · удалённо или релокация', uz: "O'zbekiston · masofaviy yoki relokatsiya", en: 'Uzbekistan · remote or relocation' } as T,
  available: { ru: 'Открыт к предложениям', uz: 'Takliflarga ochiqman', en: 'Open to offers' } as T,
};

export const stats: { value: string; label: T }[] = [
  { value: '3', label: { ru: 'года коммерческого опыта', uz: 'yillik tijorat tajribasi', en: 'years of commercial experience' } },
  { value: '2', label: { ru: 'компании', uz: 'ta kompaniya', en: 'companies' } },
  { value: '6+', label: { ru: 'проектов в продакшене', uz: 'ta loyiha production’da', en: 'projects in production' } },
];

export const about: T = {
  ru: 'Я fullstack-разработчик с упором на backend. Последние годы проектирую API на NestJS, строю realtime-функции на WebSocket, разворачиваю сервисы в Docker и NGINX и делаю фронтенд на Next.js. Умею вести проект от ER-модели и блок-схем до релиза, работаю в монорепозиториях и с GraphQL/REST. Ценю понятный код, ревью и автоматизацию.',
  uz: "Men backend'ga urg'u beradigan fullstack dasturchiman. So'nggi yillarda NestJS'da API loyihalayman, WebSocket asosida realtime funksiyalar quraman, servislarni Docker va NGINX'da ishga tushiraman va Next.js'da frontend yozaman. Loyihani ER-modeldan va blok-sxemalardan to relizgacha olib bora olaman, monorepozitoriylar hamda GraphQL/REST bilan ishlayman. Tushunarli kod, code review va avtomatlashtirishni qadrlayman.",
  en: 'I am a fullstack developer with a backend focus. Over the last years I have been designing APIs with NestJS, building realtime features over WebSocket, deploying services with Docker and NGINX, and building frontends with Next.js. I can take a project from ER modelling and flowcharts to release, and I work in monorepos with GraphQL and REST. I value readable code, reviews and automation.',
};

export const languages: { name: T; level: T }[] = [
  { name: { ru: 'Узбекский', uz: "O'zbek tili", en: 'Uzbek' }, level: { ru: 'Родной', uz: 'Ona tili', en: 'Native' } },
  { name: { ru: 'Русский', uz: 'Rus tili', en: 'Russian' }, level: { ru: 'B2', uz: 'B2', en: 'B2' } },
  { name: { ru: 'Английский', uz: 'Ingliz tili', en: 'English' }, level: { ru: 'B2', uz: 'B2', en: 'B2' } },
  { name: { ru: 'Корейский', uz: 'Koreys tili', en: 'Korean' }, level: { ru: 'TOPIK II', uz: 'TOPIK II', en: 'TOPIK II' } },
];

export interface Job {
  company: string;
  role: T;
  period: T;
  duration: T;
  points: T[];
  tags: string[];
}

export const experience: Job[] = [
  {
    company: 'Inova Tech',
    role: { ru: 'Fullstack-разработчик', uz: 'Fullstack dasturchi', en: 'Fullstack Developer' },
    period: { ru: 'Октябрь 2024 — Март 2026', uz: 'Oktabr 2024 — Mart 2026', en: 'Oct 2024 — Mar 2026' },
    duration: { ru: '1 год 6 мес.', uz: '1 yil 6 oy', en: '1 yr 6 mos' },
    points: [
      { ru: 'Вёл планирование проектов: ER-моделирование и блок-схемы.', uz: 'Loyihalarni rejalashtirishga rahbarlik qildim: ER-modellash va blok-sxemalar.', en: 'Led project planning, including ER modelling and flowcharts.' },
      { ru: 'Внедрял архитектурные паттерны: MVC, middleware, dependency injection.', uz: 'MVC, middleware, dependency injection kabi arxitektura patternlarini joriy qildim.', en: 'Applied architectural patterns such as MVC, middleware and dependency injection.' },
      { ru: 'Проектировал API на Node.js, TypeScript и NestJS.', uz: "Node.js, TypeScript va NestJS'da API loyihaladim.", en: 'Designed APIs with Node.js, TypeScript and NestJS.' },
      { ru: 'Руководил монорепозиторием: GraphQL/REST-серверы, пакетная обработка, краулинг.', uz: 'Monorepozitoriyni boshqardim: GraphQL/REST serverlar, paketli qayta ishlash, krauling.', en: 'Led a monorepo with GraphQL/REST servers, batch processing and crawling systems.' },
      { ru: 'Делал realtime-функции на WebSocket и Socket.IO.', uz: 'WebSocket va Socket.IO asosida realtime funksiyalar yaratdim.', en: 'Built realtime features with WebSocket and Socket.IO.' },
      { ru: 'Разрабатывал фронтенд на Next.js (App Router и Pages Router), интеграции через Axios, Fetch, Apollo Client.', uz: "Next.js'da (App Router va Pages Router) frontend yozdim, Axios, Fetch, Apollo Client orqali integratsiyalar qildim.", en: 'Built frontends with Next.js (App and Pages Router); integrated APIs via Axios, Fetch and Apollo Client.' },
      { ru: 'Разворачивал приложения через Docker, Docker Compose, PM2 и NGINX.', uz: 'Ilovalarni Docker, Docker Compose, PM2 va NGINX orqali deploy qildim.', en: 'Deployed apps with Docker, Docker Compose, PM2 and NGINX.' },
    ],
    tags: ['NestJS', 'Next.js', 'GraphQL', 'Socket.IO', 'Docker', 'NGINX'],
  },
  {
    company: 'LeverX International',
    role: { ru: 'Backend-разработчик', uz: 'Backend dasturchi', en: 'Backend Developer' },
    period: { ru: 'Июль 2023 — Сентябрь 2024', uz: 'Iyul 2023 — Sentabr 2024', en: 'Jul 2023 — Sep 2024' },
    duration: { ru: '1 год 3 мес.', uz: '1 yil 3 oy', en: '1 yr 3 mos' },
    points: [
      { ru: 'Структурировал backend-сервисы по паттернам CQRS и MVC.', uz: 'Backend servislarni CQRS va MVC patternlari asosida tuzdim.', en: 'Structured backend services using CQRS and MVC.' },
      { ru: 'Проектировал и оптимизировал пакетные задачи обработки данных, реализовал веб-краулинг.', uz: "Ma'lumotlarni qayta ishlovchi paketli vazifalarni loyihalab, optimallashtirdim, veb-krauling yozdim.", en: 'Designed and optimised batch data-processing jobs; implemented web crawling.' },
      { ru: 'Интегрировал и поддерживал RESTful API для фронтенда.', uz: "Frontend uchun RESTful API'larni integratsiya qildim va qo'llab-quvvatladim.", en: 'Integrated and maintained RESTful APIs for the frontend.' },
      { ru: 'Разрабатывал функционал на React, TypeScript и Redux.', uz: 'React, TypeScript va Redux’da funksionallar ishlab chiqdim.', en: 'Built features with React, TypeScript and Redux.' },
      { ru: 'Загрузка файлов и медиа через Multer, автоматизация задач скриптами ShellJS.', uz: 'Multer orqali fayl va media yuklash, ShellJS skriptlari bilan vazifalarni avtomatlashtirish.', en: 'Handled file and media uploads with Multer; automated workflows with ShellJS scripts.' },
      { ru: 'Docker-окружения и CI/CD-пайплайны для ускорения релизов.', uz: 'Relizlarni tezlashtirish uchun Docker muhitlari va CI/CD pipeline’lar.', en: 'Maintained Docker environments and CI/CD pipelines to speed up releases.' },
      { ru: 'Повышал качество кода через ревью, тесты и практики Git.', uz: 'Code review, testlar va Git amaliyotlari orqali kod sifatini oshirdim.', en: 'Improved code quality through reviews, testing and Git best practices.' },
    ],
    tags: ['Node.js', 'CQRS', 'REST', 'React', 'Redux', 'CI/CD'],
  },
];

export interface Project {
  name: string;
  url?: string;
  repo?: string;
  featured?: boolean;
  description: T;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'Wardrobe Store',
    url: 'https://wardrobestore.uz/ru',
    featured: true,
    description: {
      ru: 'Мой самый крупный проект — e-commerce платформа одежды с доставкой по всему Узбекистану. Каталог с категориями, поиск, избранное, корзина, покупка в один клик, история заказов, онлайн-оплата через Click и Payme, интерфейс на русском и узбекском.',
      uz: "Eng katta loyiham — butun O'zbekiston bo'ylab yetkazib beriladigan kiyim-kechak e-commerce platformasi. Kategoriyali katalog, qidiruv, saralanganlar, savat, bir bosishda xarid, buyurtmalar tarixi, Click va Payme orqali onlayn to'lov, rus va o'zbek tilidagi interfeys.",
      en: 'My largest project — a clothing e-commerce platform shipping across Uzbekistan. Category catalog, search, wishlist, cart, one-click checkout, order history, online payments via Click and Payme, Russian and Uzbek UI.',
    },
    tags: ['E-commerce', 'Click', 'Payme', 'i18n', 'SEO'],
  },
  {
    name: 'Mini-CRM',
    repo: 'https://github.com/zoirovdevm/mini-crm',
    description: {
      ru: 'CRM для строительной компании: роли, задачи по объектам, жизненный цикл статусов и неизменяемая история. Все права проверяются в базе через RLS и SQL-функции, покрыто автотестом из 31 проверки.',
      uz: "Qurilish kompaniyasi uchun CRM: rollar, obyektlar bo'yicha vazifalar, status hayot sikli va o'zgarmas tarix. Barcha huquqlar bazada RLS va SQL funksiyalar orqali tekshiriladi, 31 ta avtotest bilan qoplangan.",
      en: 'A CRM for a construction company: roles, tasks per site, a status lifecycle and immutable history. All permissions are enforced in the database via RLS and SQL functions, covered by 31 automated checks.',
    },
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS'],
  },
  {
    name: 'Cars.uz',
    url: 'https://mycars.uz/',
    description: {
      ru: 'Маркетплейс автомобилей с быстрым поиском и фильтрами.',
      uz: 'Tezkor qidiruv va filtrlarga ega avtomobil marketpleysi.',
      en: 'A car marketplace with fast search and filters.',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Evoss.uz',
    url: 'http://evoss.uz',
    description: {
      ru: 'Платформа цифровых заказов и управления рестораном.',
      uz: 'Restoran uchun raqamli buyurtma va boshqaruv platformasi.',
      en: 'A digital ordering and management platform for restaurants.',
    },
    tags: ['Next.js', 'NestJS', 'Tailwind'],
  },
  {
    name: 'Aroma Coffee',
    url: 'https://aroma-coffee.uz',
    description: {
      ru: 'Сайт кофейни с адаптивным дизайном и онлайн-меню.',
      uz: 'Moslashuvchan dizayn va onlayn menyuga ega qahvaxona sayti.',
      en: 'A coffee shop website with responsive design and an online menu.',
    },
    tags: ['JavaScript', 'GSAP'],
  },
  {
    name: 'Restaurant Gusto',
    url: 'https://restaurant-gusto.uz',
    description: {
      ru: 'Лендинг ресторана с бронированием столиков и галереей.',
      uz: 'Stol band qilish va galereyaga ega restoran lendingi.',
      en: 'A restaurant landing page with table booking and a gallery.',
    },
    tags: ['React', 'Framer Motion'],
  },
];

// Порядок групп и навыков = порядок на сайте. Самое сильное — первым.
export const skills: { group: T; items: string[] }[] = [
  { group: { ru: 'Backend', uz: 'Backend', en: 'Backend' }, items: ['Node.js', 'NestJS', 'TypeScript', 'Express', 'GraphQL', 'REST', 'WebSocket / Socket.IO', 'Prisma'] },
  { group: { ru: 'Frontend', uz: 'Frontend', en: 'Frontend' }, items: ['Next.js', 'React', 'Redux', 'Apollo Client', 'Tailwind CSS', 'HTML / CSS'] },
  { group: { ru: 'Базы данных', uz: "Ma'lumotlar bazalari", en: 'Databases' }, items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'Supabase'] },
  { group: { ru: 'DevOps и инструменты', uz: 'DevOps va vositalar', en: 'DevOps & tools' }, items: ['Docker', 'Docker Compose', 'NGINX', 'PM2', 'CI/CD', 'Linux', 'Git', 'Figma'] },
  { group: { ru: 'Архитектура', uz: 'Arxitektura', en: 'Architecture' }, items: ['MVC', 'CQRS', 'Dependency Injection', 'Monorepo', 'ER Modeling'] },
];

export const education: { title: T; detail: T }[] = [
  {
    title: { ru: 'Курс программирования (Корея)', uz: 'Dasturlash kursi (Koreya)', en: 'Programming course (Korea)' },
    detail: { ru: 'Базу программирования получил на корейском курсе, дальше — самостоятельно и в коммерческих проектах.', uz: "Dasturlash asoslarini koreys kursida o'rgandim, keyin mustaqil va tijorat loyihalarida rivojlandim.", en: 'Learned programming fundamentals in a Korean course, then grew through self-study and commercial projects.' },
  },
  {
    title: { ru: 'Сертификат TOPIK II', uz: 'TOPIK II sertifikati', en: 'TOPIK II certificate' },
    detail: { ru: 'Официальный экзамен по корейскому языку.', uz: 'Koreys tili bo‘yicha rasmiy imtihon.', en: 'Official Korean language proficiency test.' },
  },
];

// Подписи интерфейса
export const ui = {
  nav: {
    about: { ru: 'Обо мне', uz: 'Men haqimda', en: 'About' },
    experience: { ru: 'Опыт', uz: 'Tajriba', en: 'Experience' },
    projects: { ru: 'Проекты', uz: 'Loyihalar', en: 'Projects' },
    skills: { ru: 'Навыки', uz: "Ko'nikmalar", en: 'Skills' },
    contact: { ru: 'Контакты', uz: 'Aloqa', en: 'Contact' },
  },
  cta: {
    projects: { ru: 'Смотреть проекты', uz: "Loyihalarni ko'rish", en: 'View projects' },
    write: { ru: 'Написать в Telegram', uz: 'Telegram’da yozish', en: 'Message on Telegram' },
    resume: { ru: 'Резюме PDF', uz: 'Rezyume PDF', en: 'Résumé PDF' },
    open: { ru: 'Открыть сайт', uz: 'Saytni ochish', en: 'Open site' },
    code: { ru: 'Код на GitHub', uz: 'GitHub’dagi kod', en: 'Code on GitHub' },
  },
  titles: {
    about: { ru: 'Обо мне', uz: 'Men haqimda', en: 'About me' },
    languages: { ru: 'Языки', uz: 'Tillar', en: 'Languages' },
    experience: { ru: 'Опыт работы', uz: 'Ish tajribasi', en: 'Work experience' },
    projects: { ru: 'Проекты', uz: 'Loyihalar', en: 'Projects' },
    skills: { ru: 'Навыки', uz: "Ko'nikmalar", en: 'Skills' },
    education: { ru: 'Образование', uz: "Ta'lim", en: 'Education' },
    contact: { ru: 'Давайте работать вместе', uz: 'Keling, birga ishlaymiz', en: "Let's work together" },
  },
  featured: { ru: 'Главный проект', uz: 'Asosiy loyiha', en: 'Flagship project' },
  contactText: {
    ru: 'Ищу fullstack или backend-позицию, удалённо или с релокацией. Быстрее всего отвечаю в Telegram.',
    uz: "Fullstack yoki backend lavozimini qidiryapman — masofaviy yoki relokatsiya bilan. Telegram'da eng tez javob beraman.",
    en: "I'm looking for a fullstack or backend role, remote or with relocation. Telegram is the fastest way to reach me.",
  },
  footer: { ru: 'Сделано на React + TypeScript', uz: 'React + TypeScript’da yaratilgan', en: 'Built with React + TypeScript' },
};
