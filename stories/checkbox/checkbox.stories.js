export default {
  title: 'Components/Checkbox',
  render: (args) => {
    const checkbox = document.createElement('d-checkbox')

    args.label && checkbox.setAttribute('label', args.label)
    args.name && checkbox.setAttribute('name', args.name)
    args.value && checkbox.setAttribute('value', args.value)
    args.checked && checkbox.setAttribute('checked', '')

    return checkbox
  },
  args: {
    name: 'checkbox-1',
    value: '1',
    checked: false,
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
