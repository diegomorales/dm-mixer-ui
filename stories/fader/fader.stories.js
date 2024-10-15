import FaderButtonStories from '../fader-button/fader-button.stories.js'
import { renderFader } from './render-fader.js'

export default {
  title: 'Components/Fader',
  render: (args) => renderFader(args),
  argTypes: {
    ...FaderButtonStories.argTypes,
  },
}

export const fader = {
  args: {
    color: 'black',
    name: 'fader-1',
  },
}
