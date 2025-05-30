const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');
const fs = require('fs');

const ADGUARD_WEBSITE_URL = 'https://adguard.com';
const VPN_WEBSITE_URL = 'https://adguard-vpn.com';

// Allow to parameterise the website URL and the base path during the build.
// By default, the website is published to Cloudflare Pages.
const url = process.env.URL || 'https://kb-vpn.pages.dev/';
const baseUrl = process.env.BASE_URL || '/';

const typesenseCollectionName = process.env.SEARCH_COLLECTION || 'docusaurus-2';
const typesenseHost = process.env.SEARCH_HOST || 'xxx-1.a1.typesense.net';
const typesenseApiKey = process.env.SEARCH_API_KEY || 'test';

const currentImageDomain = process.env.CURRENT_IMAGES_DOMAIN || 'https://cdn.adguard.com';
const newImageDomain = process.env.NEW_IMAGES_DOMAIN || 'https://cdn.adguard-vpn.com';

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
  themes: ['docusaurus-theme-search-typesense'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de', 'cs', 'fr', 'es', 'it', 'ja', 'ko', 'pt-BR', 'tr', 'zh-CN', 'zh-TW'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
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
          target: '_self',
        },
        {
          to: VPN_WEBSITE_URL,
          position: 'left',
          label: 'official_website',
          target: '_self',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '/miscellaneous/update-kb/',
              label: 'Help Us Translate',
            },
          ],
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
              target: '_self',
            },
            {
              label: 'official',
              href: VPN_WEBSITE_URL,
              target: '_self',
            },
            {
              label: 'what_is_vpn',
              href: VPN_WEBSITE_URL + '/en/what-is-vpn.html',
              target: '_self',
            },
            {
              label: 'blog',
              href: VPN_WEBSITE_URL + '/blog/index.html',
              target: '_self',
            },
            {
              label: 'discuss',
              href: VPN_WEBSITE_URL + '/discuss.html',
              target: '_self',
            },
            {
              label: 'support_adguard',
              href: ADGUARD_WEBSITE_URL + '/support-adguard.html',
            },
          ]
        },
        {
          title: 'products',
          items: [
            {
              label: 'for_windows',
              href: VPN_WEBSITE_URL + '/windows/overview.html',
              target: '_self',
            },
            {
              label: 'for_mac',
              href: VPN_WEBSITE_URL + '/mac/overview.html',
              target: '_self',
            },
            {
              label: 'for_android',
              href: VPN_WEBSITE_URL + '/android/overview.html',
              target: '_self',
            },
            {
              label: 'for_android_tv',
              href: VPN_WEBSITE_URL + '/android-tv/overview.html',
              target: '_self',
            },
            {
              label: 'for_ios',
              href: VPN_WEBSITE_URL + '/ios/overview.html',
              target: '_self',
            },
            {
              label: 'for_browser_ext',
              href: VPN_WEBSITE_URL + '/browser-extension/overview.html',
              target: '_self',
            },
            {
              label: 'for_routers',
              href: VPN_WEBSITE_URL + '/router/overview.html',
              target: '_self',
            },
            {
              label: 'for_linux',
              href: VPN_WEBSITE_URL + '/linux/overview.html',
              target: '_self',
            },
            {
              label: 'for_apple_tv',
              href: VPN_WEBSITE_URL + '/apple-tv/overview.html',
              target: '_self',
            },
            {
              label: 'for_xbox',
              href: VPN_WEBSITE_URL + '/xbox/overview.html',
              target: '_self',
            },
            {
              label: 'for_playstation',
              href: VPN_WEBSITE_URL + '/playstation/overview.html',
              target: '_self',
            },
            {
              label: 'for_chromecast',
              href: VPN_WEBSITE_URL + '/chromecast/overview.html',
              target: '_self',
            },
            {
              label: 'version_history',
              href: VPN_WEBSITE_URL + '/versions.html',
              target: '_self',
            },
          ],
        },
        {
          title: 'support',
          items: [
            {
              label: 'support',
              href: VPN_WEBSITE_URL + '/support.html',
              target: '_self',
            },
            {
              label: 'how_to_install',
              href: '/general/how-to-install/',
            },
            {
              label: 'faq',
              href: VPN_WEBSITE_URL + '/support/faq.html',
              target: '_self',
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
              target: '_self',
            },
            {
              label: 'distribution',
              href: ADGUARD_WEBSITE_URL + '/distribution.html',
            },
          ],
        },
      ],
      copyright: `© 2009–${new Date().getFullYear()} Adguard Software Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    typesense: {
      typesenseCollectionName: typesenseCollectionName,
      typesenseServerConfig: {
        nodes: [
          {
            host: typesenseHost,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: typesenseApiKey,
      },
      contextualSearch: true,
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
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    async function changeImageDomain() {
      return {
        name: 'change-image-domain',
        async postBuild({ outDir }) {
          let files  = [];

          const getAllHtmlFiles = (dir) => {
            fs.readdirSync(dir).forEach((file) => {
                const absoluteFileUrl = path.join(dir, file);

                if (fs.statSync(absoluteFileUrl).isDirectory()) {
                  return getAllHtmlFiles(absoluteFileUrl);
                } else if (absoluteFileUrl.match(/[^\/]+\.html$/g)) {
                  return files.push(absoluteFileUrl)
                };
            });
          }

          getAllHtmlFiles(outDir);

          if (files.length > 0) {
            const currentDomainRegExp = new RegExp(currentImageDomain, 'g');

            files.forEach((file) => {
              try {
                let content = fs.readFileSync(file, { encoding: 'utf8' })
                content = content.replace(currentDomainRegExp, newImageDomain);
                fs.writeFileSync(file, content, { encoding: 'utf-8', flag: 'w' })
              } catch (error) {
                  console.log(err);
                  process.exit(255);
              }
            });
          }
        },
      };
    },
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};
