import autoprefixer from 'autoprefixer'
import postcssBundler from '@csstools/postcss-bundler'
import cssnano from 'cssnano'

const plugins = [postcssBundler, autoprefixer]

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano)
}

export default (ctx) => ({
  map: ctx.options && ctx.options.map,
  plugins,
})
