export const renderDial = (args, slot) => `
    <d-dial
      size="${args.size}"
      color="${args.color}"
      ${slot ? `slot="${slot}"` : ''}
      ${args.name ? `name=${args.name}` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.leftRange ? `left-range="${args.leftRange}"` : ''}
      ${args.rightRange ? `right-range="${args.rightRange}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
      ${args.labelPosition ? `label-position="${args.labelPosition}"` : ''}
    ></d-dial>
  `
