import { renderCheckbox } from '../checkbox/checkbox.js'

export const renderChannelSection = (args, slot) => `
  <d-channel-section
    ${slot ? `slot="${slot}"` : ''}
    ${args.name ? `name="${args.name}"` : ''}
    ${args.collapsible ? 'collapsible' : ''}
  >
    ${args.label ? `<p slot="label">${args.label}</p>` : ''}
    ${args.checkbox ? renderCheckbox(args.checkbox, 'checkbox') : ''}

    ${args.content}
  </d-channel-section>
`
