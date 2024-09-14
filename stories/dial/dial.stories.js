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

    return dial
  },
  args: {
    move: fn(),
    press: fn(),
    release: fn(),
    dblclick: fn(),
  },
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
