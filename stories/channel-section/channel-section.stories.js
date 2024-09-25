import { hideControl } from '../../.storybook/helpers.js'
import { renderChannelSection } from './channel-section.js'

const placeholderSection = `
  <div style="background-color: paleturquoise; height: 200px; align-items: center; justify-content: center; display: flex; text-align: center">
    section content
  </div>
`

export default {
  title: 'Components/Channel Section',
  render: (args) => renderChannelSection(args),
  args: {
    name: 'section-name',
    content: placeholderSection,
  },
  argTypes: {
    ...hideControl('content'),
  },
}

export const channelSection = {
  args: {
    collapsible: true,
    checkbox: {
      label: 'SECTION',
      name: 'checkbox-section-1',
    },
  },
}

export const withLabel = {
  args: {
    label: 'SECTION',
    collapsible: true,
  },
}
