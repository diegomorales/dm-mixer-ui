import { renderRadioGroup } from './render-radio-group.js'

export default {
  title: 'Components/Radio Group',
  render: (args) => renderRadioGroup(args),
  decorators: [(story) => `<form action="#">${story()}</form>`],
}

export const radioGroup = {
  args: {
    items: [
      {
        name: 'radio-group-1',
        value: 'radio-1',
        label: 'Radio 1',
      },
      {
        name: 'radio-group-1',
        value: 'radio-2',
        label: 'Radio 2',
      },
    ],
  },
}
