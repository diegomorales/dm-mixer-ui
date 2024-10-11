import { Base } from '../../js/utils/custom-elements.js'
import styles from './radio-group.css?inline'

export default class RadioGroup extends Base {
  static tagName = 'd-radio-group'
  static styles = styles
  static html = '<slot></slot>'
}
