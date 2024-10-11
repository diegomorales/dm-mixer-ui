export const renderDial = (args, slot) => `
    <d-dial
      size="${args.size}"
      color="${args.color}"
      ${slot ? `slot="${slot}"` : ''}
      ${args.name ? `name=${args.name}` : ''}
      ${args.value !== undefined ? `value="${args.value}"` : ''}
      ${args.default ? `default="${args.default}"` : ''}
      ${args.leftRange ? `left-range="${args.leftRange}"` : ''}
      ${args.rightRange ? `right-range="${args.rightRange}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
      ${args.labelPosition ? `label-position="${args.labelPosition}"` : ''}
    ></d-dial>
  `
