import 'dotenv/config';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Sieć Dostępności Cyfrowej',
    tagline: 'Dostępność to Twoje prawo!',
    favicon: 'img/favicon.ico',
	staticDirectories: ['static'],
    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://siec-dostepnosci-cyfrowej.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    
	baseUrl: process.env.BASE_URL || '/sdc/',
 
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Sieć Dostępności Cyfrowej', // Usually your GitHub org/user name.
    projectName: 'sdc/', // Usually your repo name. 

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'pl',
        locales: ['pl']
    },
	


    plugins: [
        ['@grnet/docusaurus-terminology', {
            termsDir: './docs/terms',
            docsDir: './docs/',
            glossaryFilepath: './docs/glossary.md'
        }]
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc/edit/main/documentation/',

                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc/edit/main/documentation/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: false,
        },
         navbar: {
            title: 'Sieć Dostępności Cyfrowej',
            logo: {
                alt: 'Sieć Dostępności Cyfrowej',
                src: 'img/logo.svg',
            },
           items: [
                {
                    type: 'doc',
                    docId: 'o-sieci/projekt/o-projekcie-sdc',
                    position: 'right',
                    label: 'O Sieci',
                    className: 'osieci',
                },

				
				{  label: 'Wymiary',
					position: 'right',
					items: [
					{ label: 'Komunikacja', to: 'docs/komunikacja/wymiar-komunikacja/o-wymiarze-komunikacja' },
					{ label: 'Cykl życia TIK', to: 'docs/cykltik/wymiar-cykl-zycia-tik/o-wymiarze-cykl-zycia-tik' },
					{ label: 'Wiedza i umiejętności', to: 'docs/wiedza/wymiar-wiedza-i-umiejetnosci/o-wymiarze-wiedza-i-umiejetnosci' },
					{ label: 'Zarządzanie i kultura', to: 'docs/kultura/wymiar-zarzadzanie-i-kultura/o-wymiarze-zarzadzanie-i-kultura' },
					{ label: 'Pracownicy', to: 'docs/pracownicy/wymiar-pracownicy/o-wymiarze-pracownicy' },
					{ label: 'Zaopatrzenie', to: 'docs/zaopatrzenie/wymiar-zaopatrzenie/o-wymiarze-zaopatrzenie' },
					{ label: 'Wsparcie', to: 'docs/wsparcie/wymiar-wsparcie/o-wymiarze-wsparcie' },					
					],
				},


                { to: '/blog', label: 'Blog', position: 'right' },
                {
                    href: 'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc',
                    label: 'GitHub',
                    position: 'right',
                    icon: 'github',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Dokumenty',
                    items: [
                        {
                            label: 'Komunikacja',
                            to: '/docs/komunikacja/wymiar-komunikacja/o-wymiarze-komunikacja',
                        },
                        {
                            label: 'Cykl życia TIK',
                            to: '/docs/cykltik/wymiar-cykl-zycia-tik/o-wymiarze-cykl-zycia-tik',
                        },
                        {
                            label: 'Wiedza i umiejętności',
                            to: '/docs/wiedza/wymiar-wiedza-i-umiejetnosci/o-wymiarze-wiedza-i-umiejetnosci',
                        },
                        {
                            label: 'Zarządzanie i kultura',
                            to: '/docs/kultura/wymiar-zarzadzanie-i-kultura/o-wymiarze-zarzadzanie-i-kultura',
                        },
                        {
                            label: 'Pracownicy',
                            to: '/docs/pracownicy/wymiar-pracownicy/o-wymiarze-pracownicy',
                        },
                        {
                            label: 'Zaopatrzenie',
                            to: '/docs/zaopatrzenie/wymiar-zaopatrzenie/o-wymiarze-zaopatrzenie',
                        },
                        {
                            label: 'Wsparcie',
                            to: '/docs/wsparcie/wymiar-wsparcie/o-wymiarze-wsparcie',
                        },
                    ],
                },
                {
                    title: 'Więcej',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Siec-Dostepnosci-Cyfrowej/sdc',
                        },
                        {
                            label: 'Portal Dostępność cyfrowa',
                            href: 'https://www.gov.pl/web/dostepnosc-cyfrowa/',
                        },
                    ],
                },
                {
                    title: 'Ważne adresy',
                    items: [
                        {
                            label: 'WCAG 2.2 (projekt tłumaczenia)',
                            href: 'https://wcag.irdpl.pl/guidelines/22/',
                        },
                        {
                            label: 'Objaśnienia WCAG 2.2',
                            href: 'https://wcag.irdpl.pl/understanding/',
                        },
                        {
                            label: 'Biblioteka Liderów Dostępności',
                            href: 'https://biblio.irdpl.pl/#/tytul',
                        },
                        {
                            label: 'Accessibility Maturity Model',
                            href: 'https://www.w3.org/TR/maturity-model/',
                        },

                        {
                            label: 'WAI W3C: Planning and Policies',
                            href: 'https://www.w3.org/WAI/planning/',
                        },
                        {
                            label: 'Ramy strategii dostępności WebAIM',
                            href: 'https://lepszyweb.pl/blog2/ramy-strategii-dostepnosci-webaim',
                        },
                        {
                            label: 'Business Accessibility Forum',
                            href: 'https://baforum.pl/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Sieć Dostępności Cyfrowej w Polsce. Działa na <a href="https://docusaurus.io/" target="_blank" class="footer__link-item">Docusaurus</a>.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
