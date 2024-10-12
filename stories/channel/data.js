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
    default: 0.5,
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

export const hiShelfSection = {
  freqDial: {
    name: 'hi-shelf-freq',
    size: 'xs',
    color: 'red',
    label: 'kHz',
    labelPosition: 'left',
    leftRange: '2.0',
    rightRange: '8.0',
  },
  gainDial: {
    name: 'hi-shelf-gain',
    size: 'xs',
    color: 'red',
    label: 'dB',
    labelPosition: 'right',
    leftRange: '-15',
    rightRange: '+15',
  },
}

export const eqMidSection = {
  freqDial: {
    name: 'eq-mid-freq',
    size: 'xs',
    color: 'yellow',
    label: 'kHz',
    labelPosition: 'left',
    leftRange: '200',
    rightRange: '4k',
  },
  gainDial: {
    name: 'eq-mid-gain',
    size: 'xs',
    color: 'yellow',
    label: 'dB',
    labelPosition: 'right',
    leftRange: '-15',
    rightRange: '+15',
  },
  qDial: {
    name: 'eq-mid-q',
    size: 'xs',
    color: 'yellow',
    label: 'Q',
    labelPosition: 'left',
    leftRange: '0.1',
    rightRange: '2.0',
  },
}

export const loShelfSection = {
  freqDial: {
    name: 'lo-shelf-freq',
    size: 'xs',
    color: 'green',
    label: 'Hz',
    labelPosition: 'left',
    leftRange: '60',
    rightRange: '250',
  },
  gainDial: {
    name: 'lo-shelf-gain',
    size: 'xs',
    color: 'green',
    label: 'dB',
    labelPosition: 'right',
    leftRange: '-15',
    rightRange: '+15',
  },
}
