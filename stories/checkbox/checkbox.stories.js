export default {
  title: 'Components/Checkbox',
  render: (args) => {
    const checkbox = document.createElement('d-checkbox')

    args.label && checkbox.setAttribute('label', args.label)

    return checkbox
  },
}

export const checkbox = {
  args: {},
}

export const withLabel = {
  args: {
    label: 'Label',
  },
}
