export const trimSection = {
  gain: {
    name: 'trim-gain',
    label: 'TRIM',
    color: 'red',
    size: 's',
    labelPosition: 'left',
    leftRange: '0',
    rightRange: '+20',
    value: 0,
  },
}

export const compSection = {
  ratioDial: {
    label: 'RATIO',
    labelPosition: 'left',
    size: 'xs',
    color: 'gray',
    leftRange: '1:1',
    rightRange: '10:1',
    value: 0,
    name: 'comp-ratio',
  },
  thresholdDial: {
    label: 'THOLD',
    labelPosition: 'right',
    color: 'gray',
    size: 'xs',
    leftRange: '-20',
    rightRange: '+10',
    value: 0,
    name: 'comp-threshold',
  },
}

export const filterSection = {
  hpfDial: {
    size: 'xs',
    color: 'dark-gray',
    leftRange: '20',
    rightRange: '4k',
    value: 0,
    name: 'filter-hpf',
  },
  lpfDial: {
    size: 'xs',
    color: 'dark-gray',
    leftRange: '0.1k',
    rightRange: '20k',
    value: 0,
    name: 'filter-lpf',
  },
  hpfCheckbox: {
    name: 'hpf-on',
    label: 'HPF',
    labelPosition: 'right',
  },
  lpfCheckbox: {
    name: 'lpf-on',
    label: 'LPF',
    labelPosition: 'left',
  },
}

export const eqSection = {
  routing: {
    items: [
      {
        name: 'eq-routing',
        value: 'eq-comp',
        label: 'EQ ➞ Comp',
        checked: true,
      },
      {
        name: 'eq-routing',
        value: 'comp-eq',
        label: 'Comp ➞ EQ',
      },
    ],
  },
}
