import { renderChannelSection } from '../channel-section/channel-section.js'

export const renderChannel = (args, slot) => `
  <d-channel ${slot ? `slot="${slot}"` : ''}>
     ${renderChannelSection(args.trim)}
     ${renderChannelSection(args.comp)}
     ${renderChannelSection(args.filters)}
  </d-channel>
`
