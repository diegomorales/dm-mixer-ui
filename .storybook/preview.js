import '../src/main.css'
import * as Components from '../src/main.js'
import beautify from 'js-beautify'

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
    docs: {
      source: {
        transform: (input) => {
          return beautify.html(input, {
            indent_size: 4,
            wrap_line_length: 80,
            preserve_newlines: false,
            brace_style: 'expand',
            wrap_attributes: 'force',
          })
        },
      },
    },
  },
}

export default preview
