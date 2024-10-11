import { Base } from '../../js/utils/custom-elements.js'
import styles from './channel.ce.css?inline'
import html from './channel.html?raw'

const channelInputSelector = [
  'input[type="text"]',
  'input[type="number"]',
  'input[type="radio"]:checked',
  'input[type="checkbox"]',
]

export default class Channel extends Base {
  static styles = styles
  static html = html
  static tagName = 'd-channel'

  get data() {
    return Array.from(
      this.querySelectorAll(channelInputSelector.join(',')),
    ).reduce((acc, val) => {
      switch (val.type) {
        case 'number':
          acc[val.name] = Number(val.value)
          break
        case 'checkbox':
          acc[val.name] = val.checked
          break
        default:
          acc[val.name] = val.value
      }

      return acc
    }, {})
  }
}
