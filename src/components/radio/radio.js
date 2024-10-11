import { Base } from '../../js/utils/custom-elements.js'
import styles from './radio.css?inline'
import html from './radio.html?raw'

let rId = 0

export default class Radio extends Base {
  static tagName = 'd-radio'
  static styles = styles
  static html = html
  static get observedAttributes() {
    return ['name', 'value', 'label', 'checked']
  }

  #rId
  #input
  #label

  get value() {
    return this.#input.value
  }

  set value(v) {
    this.#input.value = v
  }

  get name() {
    return this.#input.name
  }

  set name(name) {
    this.#input.name = name
  }

  get type() {
    return 'radio'
  }

  constructor() {
    super()

    this.#rId = ++rId
  }

  #onInputChange = (e) => {
    e.stopPropagation()
    this.dispatch('change', e)
  }

  #appendInputControl = () => {
    const ctrl = document.createElement('input')
    ctrl.type = 'radio'
    ctrl.slot = 'input'
    ctrl.value = this.getAttribute('value') || '' // default value
    ctrl.name = this.getAttribute('name') || ''
    ctrl.checked = this.hasAttribute('checked')

    this.#input = this.appendChild(ctrl)
  }

  #appendLabel = () => {
    const label = document.createElement('label')
    label.slot = 'label'
    label.setAttribute('for', `radio-${this.#rId}`)
    this.#input.id = `radio-${this.#rId}`

    this.#label = this.appendChild(label)
  }

  #bindEvents() {
    this.#input.addEventListener('change', this.#onInputChange)
  }

  update(name, newV) {
    if (name === 'label') {
      if (!this.#label) {
        this.#appendLabel()
      }

      this.#label.textContent = newV
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.#appendInputControl()
    this.#bindEvents()
  }
}
