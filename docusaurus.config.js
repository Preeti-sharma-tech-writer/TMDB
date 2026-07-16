// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TMDB API Reference',
  tagline: 'An independent, developer-first reference — by Preeti Sharma',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://preeti-sharma-tech-writer.github.io',
  baseUrl: '/TMDB/',
  organizationName: 'Preeti-sharma-tech-writer',
  projectName: 'TMDB',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TMDB API Reference',
        logo: {
          alt: 'TMDB API Reference Logo',
          src: 'img/t-logo.svg',
          width: 32,
          height: 32,
        },
        items: [
          { to: '/docs/overview', label: 'Overview', position: 'left' },
          { to: '/docs/reference/search-movies', label: 'API Reference', position: 'left' },
          { to: '/docs/reference-material/working-with-image', label: 'Guides', position: 'left' },
          {
            href: 'https://github.com/Preeti-sharma-tech-writer/TMDB',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Project Overview', to: '/docs/overview' },
              { label: 'API Reference', to: '/docs/reference/search-movies' },
              { label: 'Getting Started', to: '/docs/getting-started' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/preeti-sharma-techwriter/' },
              { label: 'GitHub ↗', href: 'https://github.com/Preeti-sharma-tech-writer/TMDB' },
            ],
          },
        ],
        copyright: `Built with Docusaurus · © ${new Date().getFullYear()} Preeti Sharma`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;