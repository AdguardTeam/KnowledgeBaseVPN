const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ADGUARD_WEBSITE_URL = 'https://adguard.com';
const VPN_WEBSITE_URL = 'https://adguard-vpn.com';

// Allow to parameterise the website URL and the base path during the build.
const url = process.env.URL || 'https://adguardteam.github.io/';
const baseUrl = process.env.BASE_URL || '/KnowledgeBaseVPN/';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard VPN Knowledge Base',
  tagline: 'Knowledge base for AdGuard VPN',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'AdGuard',
  projectName: 'adguard-vpn-kb',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de', 'fr', 'es', 'it', 'ja', 'ko', 'zh-CN', 'zh-TW'],
  },
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
    },
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
          to: VPN_WEBSITE_URL + '/blog/index.html',
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
              label: 'about',
              href: VPN_WEBSITE_URL + '/about-us.html',
            },
            {
              label: 'official',
              href: VPN_WEBSITE_URL,
            },
            {
              label: 'what_is_vpn',
              href: VPN_WEBSITE_URL + '/what-is-vpn.html',
            },
            {
              label: 'blog',
              href: VPN_WEBSITE_URL + '/blog/index.html',
            },
            {
              label: 'discuss',
              href: ADGUARD_WEBSITE_URL + '/discuss.html',
            },
          ]
        },
        {
          title: 'products',
          items: [
            {
              label: 'vpn_android',
              href: VPN_WEBSITE_URL + '/android/overview.html',
            },
            {
              label: 'vpn_windows',
              href: VPN_WEBSITE_URL + '/windows/overview.html',
            },
            {
              label: 'vpn_mac',
              href: VPN_WEBSITE_URL + '/mac/overview.html',
            },
            {
              label: 'vpn_ios',
              href: VPN_WEBSITE_URL + '/ios/overview.html',
            },
          ],
        },
        {
          title: 'support',
          items: [
            {
              label: 'support',
              href: VPN_WEBSITE_URL + '/support/support.html',
            },
            {
              label: 'how_to_install',
              href: 'https://kb.adguard.com/vpn/installation',
            },
            {
              label: 'faq',
              href: VPN_WEBSITE_URL + '/support/faq.html',
            },
            {
              label: 'status',
              href: 'https://status.adguard.com/',
            },
            {
              label: 'test',
              href: ADGUARD_WEBSITE_URL + '/test.html',
            }
          ],
        },
        {
          title: 'license',
          items: [
            {
              label: 'license',
              href: VPN_WEBSITE_URL + '/license.html',
            },
            {
              label: 'contribute',
              href: ADGUARD_WEBSITE_URL + '/contribute.html',
            },
            {
              label: 'distribution',
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
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      }
    ],
  ],
};
