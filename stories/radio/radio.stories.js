import { renderRadio } from './render-radio.js'

export default {
  title: 'Components/Radio',
  render: (args) => renderRadio(args),
  decorators: [(story) => `<form action="#">${story()}</form>`],
}

export const radio = {
  args: {
    name: 'radio-1',
    label: 'Radio',
    value: 'radio-1',
    checked: false,
  },
}
