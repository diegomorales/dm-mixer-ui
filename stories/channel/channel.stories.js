import { renderDial } from '../dial/dial.js'
import { renderChannel } from './channel.js'
import { compSection, filterSection, trimSection } from './data.js'
import { renderCheckbox } from '../checkbox/checkbox.js'

export default {
  title: 'Modules/Channel',
  render: (args) => renderChannel(args),
}

export const channel = {
  args: {
    trim: {
      name: 'trim-section',
      content: renderDial(trimSection.gain),
    },
    comp: {
      name: 'comp',
      collapsible: true,
      checkbox: {
        label: 'COMP',
        name: 'comp-on',
        value: 'on',
      },
      content: `
        ${renderDial(compSection.ratioDial)}
        ${renderDial(compSection.thresholdDial)}
      `,
    },
    filters: {
      name: 'filters',
      collapsible: true,
      label: 'FILTERS',
      content: `
        ${renderDial(filterSection.hpfDial)}
        ${renderDial(filterSection.lpfDial)}
        ${renderCheckbox(filterSection.hpfCheckbox)}
        ${renderCheckbox(filterSection.lpfCheckbox)}
      `,
    },
  },
}
