/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
    },
    disableWhatsNewNotifications: true,
  },
  staticDirs: [{ from: '../sb-theme', to: '/static/theme' }],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite')

    // https://github.com/vitejs/vite/issues/9743#issuecomment-1221292059
    const fullReloadAlways = {
      name: 'full-reload-always',
      handleHotUpdate({ server }) {
        server.ws.send({ type: 'full-reload' })
        return []
      },
    }

    return mergeConfig(config, {
      plugins: [fullReloadAlways],
    })
  },
}
export default config
