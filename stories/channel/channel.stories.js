import { renderDial } from '../dial/dial.js'
import { renderChannel } from './channel.js'

export default {
  title: 'Modules/Channel',
  render: (args) => renderChannel(args),
}

const trimDialArgs = {
  name: 'trim',
  label: 'TRIM',
  color: 'red',
  size: 's',
  labelPosition: 'left',
  leftRange: '0',
  rightRange: '+20',
  value: 0,
}

export const channel = {
  args: {
    trim: {
      name: 'trim-section',
      content: renderDial(trimDialArgs),
    },
    comp: {
      name: 'comp',
      collapsible: true,
      checkbox: {
        label: 'COMP',
        name: 'comp-1',
      },
    },
    filters: {
      name: 'filters',
      collapsible: true,
      label: 'FILTERS',
    },
  },
}
