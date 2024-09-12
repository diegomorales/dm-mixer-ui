import paths from './paths.js'
import * as fs from 'fs'
import * as path from 'path'

fs.mkdirSync(paths.devCss + 'vars', { recursive: true })

/**
 *
 * @param {string} file
 * @param {string} ext
 * @return {string}
 */
const replaceFileExt = (file, ext) => `${path.parse(file).name}.${ext}`

/**
 *
 * @param {Object} json
 * @return {string}
 */
const writeCSSVars = (json) => {
  let out = ''

  for (const key in json) {
    if (json[key]['$value'] && json[key]['$type']) {
      out += `--${key}: ${json[key]['$value']};`
    } else {
      out += writeCSSVars(json[key])
    }
  }

  return out
}

const files = fs.readdirSync(paths.devTokens)

files.forEach((file) => {
  const json = JSON.parse(fs.readFileSync(paths.devTokens + file).toString())

  fs.writeFileSync(
    `${paths.devCss}vars/${replaceFileExt(file, 'css')}`,
    `:root {${writeCSSVars(json)}}`,
  )
})
