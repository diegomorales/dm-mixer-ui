import { renderChannelSection } from '../channel-section/channel-section.js'

export const renderChannel = (args, slot) => `
  <d-channel ${slot ? `slot="${slot}"` : ''}>
    ${args.sections.reduce((acc, val) => `${acc}${renderChannelSection(val)}`, '')}
  </d-channel>
`
