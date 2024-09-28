import { Base } from '../../js/utils/custom-elements.js'
import styles from './channel.ce.css?inline'
import html from './channel.html?raw'
import { scaleValue } from '../../js/utils/scale-value.js'

export default class Channel extends Base {
  static styles = styles
  static html = html
  static tagName = 'd-channel'

  #trimDial

  #prepareTrimSection = () => {
    this.#trimDial.transformTooltipValue = (value) =>
      scaleValue(value, 0, 1, 0, 20, 1)
  }

  connectedCallback() {
    this.#trimDial = this.querySelector('d-dial[name="trim"]')

    this.#prepareTrimSection()
  }
}
