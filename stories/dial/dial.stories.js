import { fn } from '@storybook/test'

export default {
  title: 'Components/Dial',
  render: (args) => {
    const dial = document.createElement('d-dial')
    dial.addEventListener('move', args.move)
    dial.addEventListener('press', args.press)
    dial.addEventListener('release', args.release)
    dial.addEventListener('dblclick', args.dblclick)

    dial.setAttribute('size', args.size)
    dial.setAttribute('color', args.color)

    args.value && dial.setAttribute('value', args.value)
    args.leftRange && dial.setAttribute('left-range', args.leftRange)
    args.rightRange && dial.setAttribute('right-range', args.rightRange)

    return dial
  },
  args: {
    move: fn(),
    press: fn(),
    release: fn(),
    dblclick: fn(),
  },
  argTypes: {
    move: {
      table: {
        disable: true,
      },
    },
    press: {
      table: {
        disable: true,
      },
    },
    release: {
      table: {
        disable: true,
      },
    },
    dblclick: {
      table: {
        disable: true,
      },
    },
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
    ...dial.args,
    leftRange: '0.0',
    rightRange: '1.0',
  },
}
