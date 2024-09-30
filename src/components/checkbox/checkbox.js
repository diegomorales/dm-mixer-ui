import { Base } from '../../js/utils/custom-elements.js'
import styles from './checkbox.css?inline'
import html from './checkbox.html?raw'

export default class Checkbox extends Base {
  static tagName = 'd-checkbox'
  static html = html
  static styles = styles

  static get observedAttributes() {
    return ['name', 'value', 'label', 'checked', 'label-position']
  }

  get value() {
    return this._input.value
  }

  set value(v) {
    this._input.value = v
  }

  get name() {
    return this._input.name
  }

  set name(name) {
    this._input.name = name
  }

  // #input
  #label

  update(name, newV) {
    if (name === 'name') {
      this._input.name = newV
    }

    if (name === 'value') {
      this._input.value = newV
    }

    if (name === 'label') {
      this.#label.textContent = newV
    }

    if (name === 'label-position') {
      this.root.setAttribute('data-label-position', newV)
    }
  }

  #appendInputControl = () => {
    const ctrl = document.createElement('input')
    ctrl.type = 'checkbox'
    ctrl.slot = 'input'
    ctrl.value = this.getAttribute('value') || '0' // default value
    ctrl.name = this.getAttribute('name') || ''
    ctrl.checked = this.hasAttribute('checked')

    this._input = this.appendChild(ctrl)
  }

  #onChange = (e) => {
    e.stopPropagation()
    this.dispatch('change', e)
  }

  #bindEvents = () => {
    this._input.addEventListener('change', this.#onChange)
  }

  connectedCallback() {
    super.connectedCallback()

    this.#label = this.ref('label')[0]
    this.#appendInputControl()
    this.#bindEvents()
  }
}
