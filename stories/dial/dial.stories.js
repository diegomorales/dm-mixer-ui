import { fn } from '@storybook/test'

export default {
  title: 'Components/Dial',
  render: (args) => {
    const dial = document.createElement('d-dial')
    dial.addEventListener('move', args.move)
    dial.addEventListener('press', args.press)
    dial.addEventListener('release', args.release)

    dial.setAttribute('size', args.size)

    return dial
  },
  // decorators: [
  //   (story) => {
  //     const decorator = document.createElement('div')
  //     decorator.style.maxWidth = '120px'
  //     decorator.style.marginTop = '3rem'
  //     decorator.appendChild(story())
  //     return decorator
  //   },
  // ],
  args: {
    move: fn(),
    press: fn(),
    release: fn(),
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
  },
}

export const dial = {
  args: {
    size: 'xs',
  },
}
