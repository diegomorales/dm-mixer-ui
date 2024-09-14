import { toStyleSheet } from './css'

export class Base extends window.HTMLElement {
  static tagName

  static define() {
    if (customElements.get(this.tagName)) {
      return
    }

    customElements.define(this.tagName, this)
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.addStyles(this.constructor.styles)
    this.shadowRoot.innerHTML = this.constructor.html
  }

  /**
   *
   * @param {string} css
   */
  addStyles(css) {
    this.shadowRoot.adoptedStyleSheets.push(toStyleSheet(css))
  }

  /**
   * Get element by `ref` attribute.
   *
   * @param {string} refName
   * @returns {Array} - Found references
   */
  ref(refName) {
    return Array.from(this.shadowRoot.querySelectorAll(`[ref="${refName}"]`))
  }

  /**
   *
   * @param {string} eventName
   * @param {Object} [data={}]
   */
  dispatch(eventName, data = {}) {
    this.dispatchEvent(
      new window.CustomEvent(eventName, {
        detail: data,
      }),
    )
  }

  get root() {
    return this.shadowRoot.querySelector('*:not(style)')
  }
}
