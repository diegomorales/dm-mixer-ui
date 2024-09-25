import { renderCheckbox } from '../checkbox/checkbox.js'

export const renderChannelSection = (args, slot) => `
  <d-channel-section
    ${slot ? `slot="${slot}"` : ''}
    ${args.name ? `name="${args.name}"` : ''}
    ${args.label ? `label="${args.label}"` : ''}
    ${args.collapsible ? 'collapsible' : ''}
  >
    ${args.checkbox ? renderCheckbox(args.checkbox, 'checkbox') : ''}
    ${args.content}
  </d-channel-section>
`
