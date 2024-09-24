import '../src/main.css'
import * as Components from '../src/main.js'

for (let c in Components) {
  Components[c].define()
}

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: {
      disable: true,
    },
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
