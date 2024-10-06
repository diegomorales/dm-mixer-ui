import { render as renderRadio } from './render-radio.js'

export default {
  title: 'Components/Radio',
  render: (args) => renderRadio(args),
  decorators: [
    (story) => `<form action="#">
${story()}
<hr>
<input type="checkbox" name="ch-1"/>
<input type="checkbox" name="ch-2"/>

<input type="radio" name="r1" value="r1">
<input type="radio" name="r1" value="r2">
<input type="radio" name="r1" value="r3">
</form>`,
  ],
}

export const radio = {
  args: {
    name: 'radio-1',
    label: 'Radio',
    value: 'radio-1',
  },
}
