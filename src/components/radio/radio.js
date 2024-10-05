import { Base } from '../../js/utils/custom-elements.js'
import styles from './radio.css?inline'
import html from './radio.html?raw'

export default class Radio extends Base {
  static tagName = 'e-radio'
  static styles = styles
  static html = html
  static formAssociated = true
  static get observedAttributes() {
    return ['name', 'value', 'label', 'checked']
  }

  #input

  get value() {
    return this.#input.value
  }

  set value(v) {
    this.#input.value = v
    this.internals.setFormValue(v)
  }

  get checked() {
    return this.#input.checked
  }

  get form() {
    return this.internals.form
  }

  get name() {
    return this.getAttribute('name')
  }

  get type() {
    return 'text'
  }

  constructor() {
    super()
    this.internals = this.attachInternals()
  }

  connectedCallback() {
    super.connectedCallback()

    this.#input = this.ref('input')[0]
  }
}
