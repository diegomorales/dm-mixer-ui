export const renderRadio = (args, slot) => `
    <d-radio
      ${slot ? `slot="${slot}"` : ''}
      ${args.name ? `name="${args.name}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
      ${args.checked ? 'checked' : ''}
    ></d-radio>
`
