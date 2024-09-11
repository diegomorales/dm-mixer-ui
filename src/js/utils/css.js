/**
 *
 * @param {string} css
 * @returns {CSSStyleSheet}
 */
export const toStyleSheet = (css) => {
  const sheet = new window.CSSStyleSheet()
  sheet.replaceSync(css)
  return sheet
}
