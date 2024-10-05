export const render = (args, slot) => `
    <e-radio
      ${slot ? `slot="${slot}"` : ''}
      ${args.name ? `name="${args.name}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
    ></e-radio>
`
