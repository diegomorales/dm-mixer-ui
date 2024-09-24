import { Base } from '../../js/utils/custom-elements.js'
import styles from './channel-section.css?inline'
import html from './channel-section.html?raw'

export default class ChannelSection extends Base {
  static tagName = 'd-channel-section'
  static styles = styles
  static html = html
  static get properties() {
    return ['collapsible']
  }

  #collapseButton

  constructor() {
    super()
  }

  update(name, newValue) {
    if (name === 'collapsible') {
      this.root.classList.toggle('is-collapsible', newValue)
    }
  }

  #onCollapseClick = () => {
    this.root.classList.toggle('is-collapsed')
  }

  #bindEvents() {
    this.#collapseButton.addEventListener('click', this.#onCollapseClick)
  }

  connectedCallback() {
    this.#collapseButton = this.ref('collapse-button')[0]
    this.#bindEvents()

    // Initial state
    this.update('collapsible', this.hasAttribute('collapsible'))

    this._isReady.resolve(0)
  }
}
