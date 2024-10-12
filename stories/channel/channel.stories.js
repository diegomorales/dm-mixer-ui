import { renderDial } from '../dial/dial.js'
import { renderChannel } from './channel.js'
import { compSection, eqSection, filterSection, trimSection } from './data.js'
import { renderCheckbox } from '../checkbox/checkbox.js'
import { renderRadioGroup } from '../radio-group/render-radio-group.js'

export default {
  title: 'Modules/Channel',
  render: (args) => renderChannel(args),
}

export const channel = {
  args: {
    sections: [
      {
        name: 'trim-section',
        content: renderDial(trimSection.gain),
      },
      {
        name: 'comp',
        collapsible: true,
        checkbox: {
          label: 'COMP',
          name: 'comp-on',
        },
        content: `
          ${renderDial(compSection.ratioDial)}
          ${renderDial(compSection.thresholdDial)}
        `,
      },
      {
        name: 'filters',
        collapsible: true,
        label: 'FILTERS',
        content: `
          ${renderCheckbox(filterSection.hpfCheckbox)}
          ${renderDial(filterSection.hpfDial)}
          ${renderDial(filterSection.lpfDial)}
          ${renderCheckbox(filterSection.lpfCheckbox)}
        `,
      },
      {
        name: 'eq',
        collapsible: false,
        checkbox: {
          label: 'EQ IN',
          name: 'eq-on',
        },
        content: renderRadioGroup(eqSection.routing),
      },
    ],
  },
}
