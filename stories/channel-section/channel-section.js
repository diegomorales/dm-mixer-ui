import { renderCheckbox } from '../checkbox/checkbox.js'

export const renderChannelSection = (args, slot) => `
  <d-channel-section
    ${slot ? `slot="${slot}"` : ''}
    ${args.collapsible ? 'collapsible' : ''}
  >
    ${args.label ? `<p slot="label">${args.label}</p>` : ''}
    ${args.checkbox ? renderCheckbox(args.checkbox, 'checkbox') : ''}

    <div style="background-color: paleturquoise; height: 200px; align-items: center; justify-content: center; display: flex; text-align: center">
      section content
    </div>
  </d-channel-section>
`
