import { Base } from '../../js/utils/custom-elements'
import { deg2Matrix } from '../../js/utils/deg-2-matrix'
import { matrix2Deg } from '../../js/utils/matrix-2-deg'
import { getStyleValue } from '../../js/utils/get-style-value'
import { debounceRaf } from '../../js/utils/debounce'
import { scaleValue } from '../../js/utils/scale-value'
import html from './dial.html?raw'
import dialStyles from './dial.css?inline'
import tooltipStyles from '../tooltip/tooltip.css?inline'

const config = {
  minRotation: -150, // degrees
  maxRotation: 150, // degrees
  tooltipDelay: 200, // ms
  degreeStep: 1,
}

/**
 * @param {number} value
 * @returns {number}
 */
const scaleRotation = (value) =>
  scaleValue(value, config.minRotation, config.maxRotation, 0, 1, 4)

/**
 * @param {number} value
 * @returns {number}
 */
const scaleCurrentValue = (value) =>
  scaleValue(
    value,
    0,
    1,
    config.minRotation,
    config.maxRotation,
    config.degreeStep,
  )

export default class Dial extends Base {
  static tagName = 'd-dial'
  static html = html
  static styles = [dialStyles, tooltipStyles].join('')

  static get observedAttributes() {
    return ['name', 'value', 'size', 'color']
  }

  constructor() {
    super()

    this.onPointerdown = this.onPointerdown.bind(this)
    this.onPointermove = debounceRaf(this.onPointermove.bind(this))
    this.onPointerup = this.onPointerup.bind(this)

    this._currentRotation = 0
    this._startY = 0
    this._tooltipTimeout = 0
  }

  get value() {
    return Number(this._input.value)
  }

  set value(v) {
    this._input.value = v
    this.setHandleRotation(scaleCurrentValue(v))
  }

  get name() {
    return this._input.name
  }

  set name(name) {
    this._input.name = name
  }

  /**
   * Dynamically create an input as a slotted element.
   */
  appendInputControl() {
    const ctrl = document.createElement('input')
    ctrl.type = 'number'
    ctrl.slot = 'input'
    ctrl.min = '0'
    ctrl.max = '1'
    ctrl.value = '0' // default value

    this._input = this.appendChild(ctrl)
  }

  showTooltip() {
    this._tooltip.hidden = false
  }

  hideTooltip() {
    this._tooltip.hidden = true
  }

  setHandleRotation(deg) {
    this._handle.style.transform = deg2Matrix(deg)
  }

  setTooltipValue() {
    this._tooltip.textContent = scaleRotation(this._currentRotation)
  }

  onPointermove(e) {
    e.preventDefault()

    const newY = e.clientY
    let delta

    if (newY !== this._startY) {
      delta = Math.abs(newY - this._startY)

      if (newY < this._startY) {
        this._currentRotation += config.degreeStep / (1 / delta)
        if (this._currentRotation > config.maxRotation) {
          this._currentRotation = config.maxRotation
        }

        this._startY = newY
      }

      if (newY > this._startY) {
        this._currentRotation -= config.degreeStep / (1 / delta)
        if (this._currentRotation < config.minRotation) {
          this._currentRotation = config.minRotation
        }

        this._startY = newY
      }
    }

    this.setHandleRotation(this._currentRotation)

    // Update internal 'value' value.
    this._input.value = scaleRotation(this._currentRotation)

    this.dispatch('move', {
      value: this._input.value,
    })

    this.setTooltipValue()
  }

  onPointerup() {
    this.dispatch('release', {
      value: scaleRotation(this._currentRotation),
    })

    if (this._tooltipTimeout) {
      clearTimeout(this._tooltipTimeout)
    } else {
      this.hideTooltip()
    }

    document.removeEventListener('pointermove', this.onPointermove)
    document.removeEventListener('pointerup', this.onPointerup)
  }

  onPointerdown(e) {
    e.preventDefault()

    this._startY = e.clientY
    this._currentRotation = matrix2Deg(getStyleValue(this._handle, 'transform'))

    this.dispatch('press', {
      value: scaleRotation(this._currentRotation),
    })

    this._tooltipTimeout = setTimeout(() => {
      this.showTooltip()
      this.setTooltipValue()
      this._tooltipTimeout = 0
    }, config.tooltipDelay)

    document.addEventListener('pointermove', this.onPointermove)
    document.addEventListener('pointerup', this.onPointerup)
  }

  bindEvents() {
    this._handle.addEventListener('pointerdown', this.onPointerdown)
  }

  attributeChangedCallback(name, oldV, newV) {
    if (name === 'name') {
      this._input.name = newV
    }

    if (name === 'value') {
      this._input.value = newV
    }

    if (name === 'size') {
      this.root.setAttribute('data-size', newV)
    }

    if (name === 'color') {
      this.root.setAttribute('data-color', newV)
    }
  }

  connectedCallback() {
    this._handle = this.ref('handle')[0]
    this._tooltip = this.ref('tooltip')[0]

    this.appendInputControl()

    // Initial state
    this.setHandleRotation(scaleCurrentValue(Number(this._input.value)))

    this.bindEvents()
  }
}
