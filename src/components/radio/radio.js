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
  #internals

  get value() {
    return this.#input.value
  }

  set value(v) {
    this.#input.value = v
    this.#internals.setFormValue('', 'checked')
  }

  get checked() {
    return this.#input.checked
  }
  // set checked(value) {
  //   this.#input.checked = value
  // }

  get form() {
    return this.#internals.form
  }

  get name() {
    return this.getAttribute('name')
  }

  get type() {
    return 'radio'
  }

  constructor() {
    super()
    this.#internals = this.attachInternals()
  }

  connectedCallback() {
    super.connectedCallback()
    console.log(this.#internals) // ElementInternals object

    this.#internals.setFormValue('off')

    this.#input = this.ref('input')[0]
  }
}
