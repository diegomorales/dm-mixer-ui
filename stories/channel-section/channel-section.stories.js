import { renderChannelSection } from './channel-section.js'

export default {
  title: 'Components/Channel Section',
  render: renderChannelSection,
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
