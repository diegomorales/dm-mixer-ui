import paths from './paths.js'
import chokidar from 'chokidar'
import { execSync } from 'child_process'

const srcPath = paths.dev

const watchOptions = {
  persistent: true,
  ignoreInitial: true,
}

const handlerError = (e) => {
  console.error(e)
}

// Watch JS
const watcherJs = chokidar.watch(
  [
    `${srcPath}*.js`,
    `${srcPath}js/**/*.*`,
    `${srcPath}components/**/*.{js,html,css}`,
  ],
  watchOptions,
)
const reloadJs = () => {
  try {
    execSync('npm run build:js -s', { stdio: 'inherit' })
    console.log('--> reload JS')
  } catch (err) {
    console.error(err)
  }
}

watcherJs.on('add', reloadJs)
watcherJs.on('change', reloadJs)
watcherJs.on('error', handlerError)

// Watch CSS
const watcherScss = chokidar.watch(
  [`${srcPath}*.css`, `${srcPath}css/**/*.css`],
  watchOptions,
)
const reloadCss = () => {
  try {
    execSync('npm run build:css -s', { stdio: 'inherit' })
    console.log('--> reload CSS')
    // reloadJs()
  } catch (err) {
    console.error(err)
  }
}

watcherScss.on('add', reloadCss)
watcherScss.on('change', reloadCss)
watcherScss.on('error', handlerError)

// Watch Tokens
const watcherTokens = chokidar.watch(
  [`${srcPath}tokens/**/*.json`],
  watchOptions,
)
const reloadTokens = () => {
  try {
    execSync('npm run build:tokens -s', { stdio: 'inherit' })
    console.log('--> reload Tokens')
    // reloadJs()
  } catch (err) {
    console.error(err)
  }
}

watcherTokens.on('add', reloadTokens)
watcherTokens.on('change', reloadTokens)
watcherTokens.on('error', handlerError)

// // Watch Images
// const watcherImages = chokidar.watch(`${srcPath}images/**/*.*`, watchOptions)
// const reloadImages = () => {
//   execSync('npm run build:images -s', { stdio: 'inherit' });
//   console.log('--> reload Images')
// }
//
// watcherImages.on('add', reloadImages)
// watcherImages.on('change', reloadImages)
// watcherImages.on('error', handlerError)
