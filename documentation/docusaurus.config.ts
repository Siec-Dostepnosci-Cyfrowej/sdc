import 'dotenv/config';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMermaidStatic from '@barrierenlos/docusaurus-prerender-mermaid/remark';
import { getRemarkPlugin } from 'docusaurus-plugin-glossary';

import path from 'path';

const baseUrl = process.env.BASE_URL || '/sdc/';
const basePath = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');

const glossaryOptions = {
    glossaryPath: 'slownik/slownik.json',
    routePath: `${basePath}/slownik`,
    expandAcronymsOnFirstUse: true,
};

const glossaryRemarkPlugin = getRemarkPlugin(glossaryOptions, {
    siteDir: __dirname,
});

// ==============================
//  KONFIGURACJA GŁÓWNA SIECI
// ==============================

const config: Config = {
    title: 'Sieć Dostępności Cyfrowej',
    tagline: 'Dostępność to Twoje prawo!',
    favicon: 'img/favicon.ico',
    url: 'https://siec-dostepnosci-cyfrowej.github.io',
    baseUrl,
    organizationName: 'Siec-Dostepnosci-Cyfrowej',
    projectName: 'sdc',
    trailingSlash: false,
    staticDirectories: ['static'],

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    future: {
        v4: false,
    },

    i18n: { defaultLocale: 'pl', locales: ['pl'] },


    // =====================================
    //  PLUGINS
    // =====================================

    plugins: [
        path.resolve(__dirname, 'plugins/alias-plugin'),

        [
            '@barrierenlos/docusaurus-prerender-mermaid',
            {
                contentPaths: ['docs'],
                outputDir: 'img/diagrams',
                outputFormat: 'svg',
                mmdcArgs: [
                    '-b',
                    'transparent',
                    '--puppeteerConfigFile',
                    './puppeteer.config.json',
                ],
            },
        ],

        ['docusaurus-plugin-glossary', glossaryOptions],
    ],

    // =====================================
    //  PRESETS
    // =====================================

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc/edit/main/documentation/',

                    beforeDefaultRemarkPlugins: [remarkMermaidStatic],

                    remarkPlugins: [glossaryRemarkPlugin],
                },

                pages: {
                    remarkPlugins: [glossaryRemarkPlugin],
                },

                blog: {
                    showReadingTime: true,

                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },

                    editUrl:
                        'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc/edit/main/documentation/',

                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',

                    blogTitle: 'Spotkania Sieci Dostępności Cyfrowej',
                    blogDescription:
                        'Informacje o spotkaniach Sieci Dostępności Cyfrowej',

                    remarkPlugins: [glossaryRemarkPlugin],
                },

                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],


    // =====================================
    //  UI: NAVBAR, FOOTER, THEMES, PRISM
    // =====================================
    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        colorMode: { respectPrefersColorScheme: false },

        mermaid: {
            theme: {
                light: 'neutral',
                dark: 'dark',
            },
            options: {
                fontFamily: 'Arial, sans-serif',
            },
        },

        navbar: {
            title: 'Sieć Dostępności Cyfrowej',
            logo: {
                alt: 'Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'o-sieci/projekt/o-projekcie-sdc',
                    position: 'left',
                    label: 'O Sieci',
                    className: 'osieci',
                },

                {
                    label: 'Wymiary',
                    position: 'left',
                    items: [
                        { label: 'Komunikacja', to: '/docs/komunikacja/wymiar-komunikacja/o-wymiarze-komunikacja' },
                        { label: 'Cykl życia TIK', to: '/docs/cykltik/wymiar-cykl-zycia-tik/o-wymiarze-cykl-zycia-tik' },
                        { label: 'Wiedza i umiejętności', to: '/docs/wiedza/wymiar-wiedza-i-umiejetnosci/o-wymiarze-wiedza-i-umiejetnosci' },
                        { label: 'Zarządzanie i kultura', to: '/docs/kultura/wymiar-zarzadzanie-i-kultura/o-wymiarze-zarzadzanie-i-kultura' },
                        { label: 'Pracownicy', to: '/docs/pracownicy/wymiar-pracownicy/o-wymiarze-pracownicy' },
                        { label: 'Zaopatrzenie', to: '/docs/zaopatrzenie/wymiar-zaopatrzenie/o-wymiarze-zaopatrzenie' },
                        { label: 'Wsparcie', to: '/docs/wsparcie/wymiar-wsparcie/o-wymiarze-wsparcie' },
                    ],
                },


                {
                    label: 'Generatory',
                    position: 'left',
                    items: [
                        { label: 'Generator zaleceń', to: '/generator-zalecen' },
                        { label: 'Generator opisów praktyk', to: '/generator-dobrej-praktyki' },
                        { label: 'Word na Markdown', to: '/generator-docx-markdown' },

                    ],
                },
                { to: '/slownik', label: 'Słownik', position: 'left' },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc',
                    position: 'right',
                    icon: 'github',
                    label: 'GitHub',
                    className: 'header-github-link',
                    'aria-label': 'Repozytorium Sieci Dostępności Cyfrowej w serwisie GitHub',

                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Dokumenty',
                    items: [
                        { label: 'Komunikacja', to: '/docs/komunikacja/wymiar-komunikacja/o-wymiarze-komunikacja' },
                        { label: 'Cykl życia TIK', to: '/docs/cykltik/wymiar-cykl-zycia-tik/o-wymiarze-cykl-zycia-tik' },
                        { label: 'Wiedza i umiejętności', to: '/docs/wiedza/wymiar-wiedza-i-umiejetnosci/o-wymiarze-wiedza-i-umiejetnosci' },
                        { label: 'Zarządzanie i kultura', to: '/docs/kultura/wymiar-zarzadzanie-i-kultura/o-wymiarze-zarzadzanie-i-kultura' },
                        { label: 'Pracownicy', to: '/docs/pracownicy/wymiar-pracownicy/o-wymiarze-pracownicy' },
                        { label: 'Zaopatrzenie', to: '/docs/zaopatrzenie/wymiar-zaopatrzenie/o-wymiarze-zaopatrzenie' },
                        { label: 'Wsparcie', to: '/docs/wsparcie/wymiar-wsparcie/o-wymiarze-wsparcie' },
                    ],
                },
                {
                    title: 'Więcej',
                    items: [
                        { label: 'Blog', to: '/blog' },
                        { label: 'GitHub', href: 'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc' },
                        { label: 'Portal Dostępność cyfrowa', href: 'https://www.gov.pl/web/dostepnosc-cyfrowa/' },
                    ],
                },
                {
                    title: 'Ważne adresy',
                    items: [
                        { label: 'WCAG 2.2 (projekt tłumaczenia)', href: 'https://wcag.irdpl.pl/guidelines/22/' },
                        { label: 'Objaśnienia WCAG 2.2', href: 'https://wcag.irdpl.pl/understanding/' },
                        { label: 'Biblioteka Liderów Dostępności', href: 'https://biblio.irdpl.pl/#/tytul' },
                        { label: 'Accessibility Maturity Model', href: 'https://www.w3.org/TR/maturity-model/' },
                        { label: 'WAI W3C: Planning and Policies', href: 'https://www.w3.org/WAI/planning/' },
                        { label: 'Ramy strategii dostępności WebAIM', href: 'https://lepszyweb.pl/blog2/ramy-strategii-dostepnosci-webaim' },
                        { label: 'Business Accessibility Forum', href: 'https://baforum.pl/' },
                    ],
                },
            ],
            copyright:
                `Copyright © ${new Date().getFullYear()} Sieć Dostępności Cyfrowej w Polsce. ` +
                `Działa na <a href="https://docusaurus.io/" target="_blank" class="footer__link-item">Docusaurus</a>.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['bash', 'json', 'tsx', 'typescript'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
