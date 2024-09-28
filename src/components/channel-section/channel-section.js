import { Base } from '../../js/utils/custom-elements.js'
import styles from './channel-section.css?inline'
import html from './channel-section.html?raw'

export default class ChannelSection extends Base {
  static tagName = 'd-channel-section'
  static styles = styles
  static html = html
  static get observedAttributes() {
    return ['collapsible', 'label']
  }

  #collapseButton
  #labelEl

  constructor() {
    super()
  }

  update(name, newValue) {
    if (name === 'collapsible') {
      this.root.classList.toggle('is-collapsible', true)
    }

    if (name === 'label') {
      this.#labelEl.innerHTML = newValue
      this.root.classList.toggle('has-label', newValue !== '')
    }
  }

  #onCollapseClick = () => {
    this.root.classList.toggle('is-collapsed')
  }

  #bindEvents() {
    this.#collapseButton.addEventListener('click', this.#onCollapseClick)
  }

  connectedCallback() {
    super.connectedCallback()

    this.#collapseButton = this.ref('collapse-button')[0]
    this.#labelEl = this.ref('label')[0]

    this.#bindEvents()
  }
}
