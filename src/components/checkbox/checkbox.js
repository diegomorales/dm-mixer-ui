import { Base } from '../../js/utils/custom-elements.js'
import styles from './checkbox.css?inline'
import html from './checkbox.html?raw'

export default class Checkbox extends Base {
  static tagName = 'd-checkbox'
  static html = html
  static styles = styles

  static get observedAttributes() {
    return ['name', 'value', 'label', 'checked']
  }

  #isReady = Promise.withResolvers()
  #input
  #label

  #updateFromAttr = (name, newV) => {
    if (name === 'name') {
      this.#input.name = newV
    }

    if (name === 'value') {
      this.#input.value = newV
    }

    if (name === 'label') {
      this.#label.textContent = newV
    }
  }

  #appendInputControl = () => {
    const ctrl = document.createElement('input')
    ctrl.type = 'checkbox'
    ctrl.slot = 'input'
    ctrl.checked = false

    this.#input = this.appendChild(ctrl)
  }

  #onChange = (e) => {
    e.stopPropagation()
    this.dispatch('change', e)
  }

  #bindEvents = () => {
    this.#input.addEventListener('change', this.#onChange)
  }

  attributeChangedCallback(name, oldV, newV) {
    this.#isReady.promise.then(() => {
      this.#updateFromAttr(name, newV)
    })
  }

  connectedCallback() {
    this.#label = this.ref('label')[0]
    this.#appendInputControl()
    this.#bindEvents()

    this.#isReady.resolve(0)
  }
}
