import { renderFaderButton } from './render-fader-button.js'

export default {
  title: 'Components/Fader Button',
  render: (args) => renderFaderButton(args),
  argTypes: {
    color: {
      control: 'select',
      options: ['black', 'red', 'blue'],
    },
  },
}

export const faderButton = {
  args: {
    color: 'black',
  },
}
