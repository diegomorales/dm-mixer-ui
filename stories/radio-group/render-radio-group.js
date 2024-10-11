import { renderRadio } from '../radio/render-radio.js'

export const renderRadioGroup = (args) => {
  return `
    <d-radio-group>
      ${args.items.reduce((acc, val) => `${acc}${renderRadio(val)}`, '')}
    </d-radio-group>
  `
}
