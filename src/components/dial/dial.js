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
  get keyboardDegreeStep() {
    return this.degreeStep * 5
  },
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
    return [
      'name',
      'value',
      'default',
      'size',
      'color',
      'left-range',
      'right-range',
      'label',
      'label-position',
    ]
  }

  #input
  #handle
  #tooltip
  #leftRangeValue
  #rightRangeValue
  #label
  #transformTooltipValue = (value) => value

  constructor() {
    super()

    this.#onPointermove = debounceRaf(this.#onPointermove)

    this._currentRotation = 0
    this._startY = 0
    this._tooltipTimeout = 0
  }

  get value() {
    return Number(this.#input.value)
  }

  set value(v) {
    this.#input.value = v
    this.setHandleRotation(scaleCurrentValue(v))
  }

  get name() {
    return this.#input.name
  }

  set name(name) {
    this.#input.name = name
  }

  /**
   * Dynamically create an input as a slotted element.
   */
  #appendInputControl = () => {
    const ctrl = document.createElement('input')
    ctrl.type = 'number'
    ctrl.slot = 'input'
    ctrl.min = '0'
    ctrl.max = '1'
    ctrl.value =
      this.getAttribute('value') || this.getAttribute('default') || '0' // default value
    ctrl.name = this.getAttribute('name') || ''

    this.#input = this.appendChild(ctrl)
  }

  get transformTooltipValue() {
    return this.#transformTooltipValue
  }
  set transformTooltipValue(fn) {
    this.#transformTooltipValue = fn
  }

  setHandleRotation(deg) {
    this.#handle.style.transform = deg2Matrix(deg)
  }

  setTooltipValue() {
    this.#tooltip.textContent = this.transformTooltipValue(
      scaleRotation(this._currentRotation),
    )
  }

  #onDblClick = (e) => {
    e.stopPropagation()
    this.dispatch('dblclick')
    this.value = this.getAttribute('default') || '0'
  }

  #onPointermove = (e) => {
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
    this.#input.value = scaleRotation(this._currentRotation)

    this.dispatch('move', {
      value: this.#input.value,
    })

    this.setTooltipValue()
  }

  #onPointerup = () => {
    this.dispatch('release', {
      value: scaleRotation(this._currentRotation),
    })

    if (this._tooltipTimeout) {
      clearTimeout(this._tooltipTimeout)
    } else {
      this.#tooltip.hidePopover()
    }

    document.removeEventListener('pointermove', this.#onPointermove)
    document.removeEventListener('pointerup', this.#onPointerup)
  }

  #onPointerdown = (e) => {
    e.preventDefault()

    this._startY = e.clientY
    this._currentRotation = matrix2Deg(getStyleValue(this.#handle, 'transform'))

    this.dispatch('press', {
      value: scaleRotation(this._currentRotation),
    })

    this._tooltipTimeout = setTimeout(() => {
      this.setTooltipValue()
      this._tooltipTimeout = 0
      this.#tooltip.showPopover()
    }, config.tooltipDelay)

    document.addEventListener('pointermove', this.#onPointermove)
    document.addEventListener('pointerup', this.#onPointerup)
  }

  #onInputKeyDown = (e) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
      return
    }

    e.preventDefault()

    // 1.
    this._startY = e.clientY
    this._currentRotation = matrix2Deg(getStyleValue(this.#handle, 'transform'))

    // 2.
    if (e.key === 'ArrowUp') {
      this._currentRotation += config.keyboardDegreeStep
      if (this._currentRotation > config.maxRotation) {
        this._currentRotation = config.maxRotation
      }
    }

    if (e.key === 'ArrowDown') {
      this._currentRotation -= config.keyboardDegreeStep
      if (this._currentRotation < config.minRotation) {
        this._currentRotation = config.minRotation
      }
    }

    // 3.
    this.setHandleRotation(this._currentRotation)

    // Update internal 'value' value.
    this.#input.value = scaleRotation(this._currentRotation)

    this.dispatch('move', {
      value: this.#input.value,
    })
  }

  bindEvents() {
    this.#handle.addEventListener('pointerdown', this.#onPointerdown)
    this.#handle.addEventListener('dblclick', this.#onDblClick)
    this.#input.addEventListener('keydown', this.#onInputKeyDown)
  }

  update(name, newV) {
    if (name === 'name') {
      this.#input.name = newV
    }

    if (name === 'value') {
      this.value = Number(this.#input.value)
    }

    if (name === 'size') {
      this.root.setAttribute('data-size', newV)
    }

    if (name === 'color') {
      this.root.setAttribute('data-color', newV)
    }

    if (name === 'left-range') {
      this.#leftRangeValue.textContent = newV
    }

    if (name === 'right-range') {
      this.#rightRangeValue.textContent = newV
    }

    if (name === 'label') {
      this.#label.textContent = newV
    }

    if (name === 'label-position') {
      this.root.setAttribute('data-label-position', newV)
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.#handle = this.ref('handle')[0]
    this.#tooltip = this.ref('tooltip')[0]
    this.#leftRangeValue = this.ref('left-range-value')[0]
    this.#rightRangeValue = this.ref('right-range-value')[0]
    this.#label = this.ref('label')[0]

    this.#appendInputControl()

    // Initial value
    this.setHandleRotation(scaleCurrentValue(Number(this.#input.value)))

    this.bindEvents()
  }
}
