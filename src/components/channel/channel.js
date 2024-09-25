import { Base } from '../../js/utils/custom-elements.js'
import styles from './channel.ce.css?inline'
import html from './channel.html?raw'

export default class Channel extends Base {
  static styles = styles
  static html = html
  static tagName = 'd-channel'
}
