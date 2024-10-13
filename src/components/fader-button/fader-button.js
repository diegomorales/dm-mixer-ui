import { Base } from '../../js/utils/custom-elements'
import css from './fader-button.css?raw'
import html from './fader-button.html?raw'

export default class FaderButton extends Base {
  static tagName = 'd-fader-button'
  static styles = css
  static html = html

  static get observedAttributes() {
    return ['color']
  }

  update(name, newV) {
    if (name === 'color') {
      this.root.setAttribute('color', newV)
    }
  }
}
