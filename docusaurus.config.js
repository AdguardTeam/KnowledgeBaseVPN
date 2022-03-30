const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ADGUARD_WEBSITE_URL = 'https://adguard.com';
const VPN_WEBSITE_URL = 'https://adguard-vpn.com';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard VPN Knowledge Base',
  tagline: 'Knowledge base for AdGuard VPN',
  url: 'https://adguardteam.github.io/',
  baseUrl: '/KnowledgeBaseVPN/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'AdGuard',
  projectName: 'adguard-vpn-kb',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'AdGuard DNS',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        {
          to: ADGUARD_WEBSITE_URL + '/blog/tag/adguard-vpn.html',
          position: 'left',
          label: 'blog',
        },
        {
          to: VPN_WEBSITE_URL,
          position: 'left',
          label: 'official_website',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/AdguardTeam/KnowledgeBaseVPN',
          label: 'github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'AdGuard VPN',
        src: 'img/logo_dark.svg',
        srcDark: 'img/logo_dark.svg',
      },
      links: [
        {
          title: 'vpn',
          items: [
            {
              label: 'About',
              href: VPN_WEBSITE_URL + '/about-us.html',
            },
            {
              label: 'Official Site',
              href: VPN_WEBSITE_URL,
            },
            {
              label: 'What is VPN',
              href: VPN_WEBSITE_URL + '/what-is-vpn.html',
            },
            {
              label: 'Blog',
              href: VPN_WEBSITE_URL + '/blog/index.html',
            },
            {
              label: 'Discuss',
              href: ADGUARD_WEBSITE_URL + '/discuss.html',
            },
          ]
        },
        {
          title: 'Products',
          items: [
            {
              label: 'AdGuard VPN for Android',
              href: VPN_WEBSITE_URL + '/android/overview.html',
            },
            {
              label: 'AdGuard VPN for Windows',
              href: VPN_WEBSITE_URL + '/windows/overview.html',
            },
            {
              label: 'AdGuard VPN for Mac',
              href: VPN_WEBSITE_URL + '/mac/overview.html',
            },
            {
              label: 'AdGuard VPN for iOS',
              href: VPN_WEBSITE_URL + '/ios/overview.html',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Support',
              href: VPN_WEBSITE_URL + '/support/support.html',
            },
            {
              label: 'How to install AdGuard VPN',
              href: 'https://kb.adguard.com/vpn/installation',
            },
            {
              label: 'FAQ',
              href: VPN_WEBSITE_URL + '/support/faq.html',
            },
            {
              label: 'Status of AdGuard Services',
              href: 'https://status.adguard.com/',
            },
            {
              label: 'AdGuard test page',
              href: ADGUARD_WEBSITE_URL + '/test.html',
            }
          ],
        },
        {
          title: 'License',
          items: [
            {
              label: 'Purchase a license',
              href: VPN_WEBSITE_URL + '/license.html',
            },
            {
              label: 'Contribute to AdGuard',
              href: ADGUARD_WEBSITE_URL + '/contribute.html',
            },
            {
              label: 'Distribution',
              href: ADGUARD_WEBSITE_URL + '/distribution.html',
            },
          ],
        },
      ],
      copyright: `© AdGuard VPN, ${new Date().getFullYear()}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],
};
