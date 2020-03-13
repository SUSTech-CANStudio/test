module.exports = {
  title: 'Test Project',
  tagline: 'Describe your project in one sentence.', // one sentence description
  url: 'https://sustech-canstudio.github.io',
  baseUrl: '/test/',
  favicon: 'img/favicon.ico',
  organizationName: 'SUSTech-CANStudio', // Usually your GitHub org/user name.
  projectName: 'test', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Test Project',
      logo: {
        alt: 'SUSTech CANStudio Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: 'https://SUSTech-CANStudio.github.io/blog', label: 'Blog', position: 'left'},
        {href: 'https://SUSTech-CANStudio.github.io/', label: 'Home', position: 'right'},
        {
          href: 'https://github.com/SUSTech-CANStudio/test',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack channel',
              href: 'https://canstudio-r.slack.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SUSTech-CANStudio',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/SUSTech-CANStudio/test/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
