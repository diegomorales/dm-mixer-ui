import { renderCheckbox } from './checkbox.js'

export default {
  title: 'Components/Checkbox',
  render: (args) => renderCheckbox(args),
  args: {
    name: 'checkbox-1',
    checked: false,
  },
}

export const checkbox = {
  args: {},
}

export const withLabel = {
  args: {
    label: 'Label',
    labelPosition: 'left',
  },
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
}
