export const renderCheckbox = (args, slot) => `
    <d-checkbox
      ${slot ? `slot="${slot}"` : ''}
      ${args.name ? `name="${args.name}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
      ${args.labelPosition ? `label-position="${args.labelPosition}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.checked ? 'checked' : ''}
    ></d-checkbox>
  `
