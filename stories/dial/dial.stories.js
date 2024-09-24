import { renderDial } from './dial.js'

export default {
  title: 'Components/Dial',
  render: renderDial,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
    color: {
      control: 'select',
      options: [
        'gray',
        'light-gray',
        'dark-gray',
        'red',
        'yellow',
        'green',
        'blue',
      ],
    },
    value: {
      control: {
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export const dial = {
  args: {
    name: 'dial-1',
    size: 'xs',
    color: 'gray',
  },
}

export const initialValue = {
  args: {
    ...dial.args,
    value: 0.5,
  },
}

export const withRangeLabels = {
  args: {
    ...initialValue.args,
    leftRange: '-10',
    rightRange: '+10',
  },
}

export const withLabel = {
  args: {
    ...withRangeLabels.args,
    label: 'Label',
    labelPosition: 'left',
  },
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'top'],
    },
  },
}
