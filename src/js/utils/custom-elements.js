import { toStyleSheet } from './css'

export const defineMixin = (superclass) =>
  class extends superclass {
    static tagName

    static define() {
      if (customElements.get(this.tagName)) {
        return
      }

      customElements.define(this.tagName, this)
    }
  }

export class Base extends defineMixin(HTMLElement) {
  #isReady = Promise.withResolvers()

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.addStyles(this.constructor.styles)
    this.shadowRoot.innerHTML = this.constructor.html
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.#isReady.promise.then(() => {
      this.update(name, newValue)
    })
  }

  /**
   * Use this instead of attributeChangedCallback().
   *
   * @param {string} name
   * @param {string|number|boolean} newValue
   */
  // eslint-disable-next-line no-unused-vars
  update(name, newValue) {}

  afterConnected() {}
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

  connectedCallback() {
    this.#isReady.promise.then(() => {
      this.afterConnected()
    })

    this.#isReady.resolve(0)
  }
}
