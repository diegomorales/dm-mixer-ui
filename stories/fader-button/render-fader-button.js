export const renderFaderButton = (args, slot) => `
  <d-fader-button
    ${slot ? `slot="${slot}"` : ''}
    color="${args.color}"></d-fader-button>
`
