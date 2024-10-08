import { round } from './round.js'

/**
 * @function
 *
 * @desc Converts rotation to a matrix string.
 *
 * @param {number|string} deg - Degree value
 * @param {number} x=0 - Horizontal translation
 * @param {number} y=0 - Vertical translation
 * @returns {string} Returns matrix string
 */
export const deg2Matrix = (deg, x = 0, y = 0) => {
  const rad = parseFloat(deg) * (Math.PI / 180)

  const matrix = [
    round(Math.cos(rad), 6),
    round(Math.sin(rad), 6),
    -round(Math.sin(rad), 6),
    round(Math.cos(rad), 6),
    x,
    y,
  ]

  return 'matrix(' + matrix.join(', ') + ')'
}
