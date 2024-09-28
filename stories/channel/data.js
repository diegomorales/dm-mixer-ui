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
