import { fn } from '@storybook/test'

export default {
  title: 'Components/Dial',
  render: (args) => {
    const dial = document.createElement('d-dial')
    dial.addEventListener('move', args.move)
    dial.addEventListener('press', args.press)
    dial.addEventListener('release', args.release)

    return dial
  },
  decorators: [
    (story) => {
      const decorator = document.createElement('div')
      decorator.style.maxWidth = '120px'
      decorator.style.marginTop = '3rem'
      decorator.appendChild(story())
      return decorator
    },
  ],
  args: {
    move: fn(),
    press: fn(),
    release: fn(),
  },
}

export const dial = {
  args: {},
}
