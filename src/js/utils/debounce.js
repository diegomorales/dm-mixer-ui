/**
 *
 * @param {Function} fn
 * @return {Function} Debounced function
 */
export const debounceRaf = (fn) => {
  let rId

  return (...args) => {
    if (rId) {
      return
    }

    rId = window.requestAnimationFrame(() => {
      fn(...args)
      rId = undefined
    })
  }
}
