import { Base } from '../../js/utils/custom-elements.js'
import html from './fader.html?raw'
import styles from './fader.css?inline'

let fId = 0

export default class Fader extends Base {
  static tagName = 'd-fader'
  static html = html
  static styles = styles
  static get observedAttributes() {
    return ['name', 'value', 'label']
  }

  #fId
  #input

  constructor() {
    super()

    this.#fId = ++fId
  }

  get name() {
    return this.#input.name
  }

  set name(name) {
    this.#input.name = name
  }

  #appendInputControl() {
    const ctrl = document.createElement('input')
    ctrl.type = 'range'
    ctrl.setAttribute('slot', 'input')
    ctrl.name = this.getAttribute('name') || ''
    ctrl.max = '1'
    ctrl.min = '0'
    ctrl.step = 'any'
    ctrl.setAttribute('list', `fader-${this.#fId}`)

    const ticks = document.createElement('datalist')
    ticks.id = `fader-${this.#fId}`
    ticks.setAttribute('slot', 'input')
    ticks.innerHTML = `
      <option value="0" label="buhnij"></option>
      <option value="0.1" label="a"></option>
      <option value="0.2" label="s"></option>
      <option value="0.5" label="dd"></option>
      <option value="1" label="ew"></option>
    `

    this.#input = this.appendChild(ctrl)
    this.appendChild(ticks)
  }

  connectedCallback() {
    super.connectedCallback()

    this.#appendInputControl()
  }
}
