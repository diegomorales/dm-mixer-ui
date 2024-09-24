import { renderCheckbox } from './checkbox.js'

export default {
  title: 'Components/Checkbox',
  render: renderCheckbox,
  args: {
    name: 'checkbox-1',
    value: '1',
    checked: false,
  },
}

export const checkbox = {
  args: {},
}

export const withLabel = {
  args: {
    label: 'Label',
  },
}
