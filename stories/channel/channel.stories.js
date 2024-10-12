import { renderDial } from '../dial/dial.js'
import { renderChannel } from './channel.js'
import {
  compSection,
  eqMidSection,
  eqSection,
  filterSection,
  hiShelfSection,
  loShelfSection,
  panSection,
  sendsSection,
  trimSection,
} from './data.js'
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
        name: 'comp-section',
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
        name: 'filter-section',
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
        name: 'eq-routing-section',
        collapsible: false,
        checkbox: {
          label: 'EQ IN',
          name: 'eq-on',
        },
        content: renderRadioGroup(eqSection.routing),
      },
      {
        name: 'eq-hi-shelf-section',
        collapsible: true,
        label: 'HI SHELF',
        content: `
          ${renderDial(hiShelfSection.freqDial)}
          ${renderDial(hiShelfSection.gainDial)}
        `,
      },
      {
        name: 'eq-mid-section',
        collapsible: true,
        label: 'MID',
        content: `
          ${renderDial(eqMidSection.freqDial)}
          ${renderDial(eqMidSection.gainDial)}
          ${renderDial(eqMidSection.qDial)}
        `,
      },
      {
        name: 'eq-lo-shelf-section',
        collapsible: true,
        label: 'LO SHELF',
        content: `
          ${renderDial(loShelfSection.freqDial)}
          ${renderDial(loShelfSection.gainDial)}
        `,
      },
      {
        name: 'send-section',
        collapsible: true,
        checkbox: {
          label: 'SENDS',
          name: 'sends',
        },
        content: `
          ${renderDial(sendsSection.aux1Dial)}
          ${renderDial(sendsSection.aux2Dial)}
          ${renderDial(sendsSection.aux3Dial)}
          ${renderDial(sendsSection.aux4Dial)}
        `,
      },
      {
        name: 'pan-section',
        collapsible: false,
        content: `
          ${renderDial(panSection.panDial)}
        `,
      },
    ],
  },
}
