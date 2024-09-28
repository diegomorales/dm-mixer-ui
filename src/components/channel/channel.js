import { Base } from '../../js/utils/custom-elements.js'
import styles from './channel.ce.css?inline'
import html from './channel.html?raw'
import { scaleValue } from '../../js/utils/scale-value.js'

export default class Channel extends Base {
  static styles = styles
  static html = html
  static tagName = 'd-channel'

  get data() {
    return Object.fromEntries(new FormData(this.#form))
  }

  #form

  /**
   *
   * @param controlName
   * @param eventName
   * @param transformTooltipValueFn
   */
  #inputValueReflect = (controlName, eventName, transformTooltipValueFn) => {
    const onInputChange = (e) => {
      if (
        e.target._input.type === 'checkbox' ||
        e.target._input.type === 'radio'
      ) {
        e.target._input.checked
          ? (inputHiddenField.value = e.target.value)
          : (inputHiddenField.value = '')
      } else {
        inputHiddenField.value = e.target.value
      }
    }

    const srcInput = this.querySelector(`[name="${controlName}"]`)
    srcInput.addEventListener(eventName, onInputChange)
    transformTooltipValueFn &&
      (srcInput.transformTooltipValue = transformTooltipValueFn)

    const inputHiddenField = document.createElement('input')
    inputHiddenField.type = 'hidden'
    inputHiddenField.name = srcInput.name
    inputHiddenField.value =
      srcInput._input.type === 'checkbox' || srcInput._input.type === 'radio'
        ? srcInput._input.checked
          ? srcInput.value
          : ''
        : srcInput.value

    this.#form.append(inputHiddenField)
  }

  #prepareTrimSection = () => {
    this.#inputValueReflect('trim-gain', 'release', (value) =>
      scaleValue(value, 0, 1, 0, 20, 1),
    )
  }

  #prepareCompSection = () => {
    this.#inputValueReflect('comp-on', 'change')
    this.#inputValueReflect('comp-ratio', 'release')
    this.#inputValueReflect('comp-threshold', 'release')
  }

  #prepareFilterSection = () => {}

  connectedCallback() {
    super.connectedCallback()

    this.#form = this.ref('form')[0]
  }

  afterConnected() {
    this.#prepareTrimSection()
    this.#prepareCompSection()
    this.#prepareFilterSection()
  }
}
