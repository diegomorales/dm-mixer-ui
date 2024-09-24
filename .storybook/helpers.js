/**
 * Create a DocumentFragment from a html string.
 *
 * @param {string} html
 * @returns {DocumentFragment}
 */
export const htmlToDocFrag = (html) => {
  const tmp = document.createElement('template')
  tmp.innerHTML = html

  return tmp.content
}

export const hideControl = (name) => ({
  [name]: {
    table: {
      disable: true,
    },
  },
})
