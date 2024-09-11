import paths from './paths.js'
import esbuild from 'esbuild'
import fs from 'fs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssBundler from '@csstools/postcss-bundler'
import cssnano from 'cssnano'

const isProd = process.env.NODE_ENV === 'production'

const onLoadHtmlPlugin = {
  name: 'onLoadHtml',
  setup(build) {
    build.onLoad({ filter: /\.html$/ }, (args) => {
      let text = fs.readFileSync(args.path, 'utf8')

      return {
        contents: text,
        loader: 'text',
      }
    })
  },
}

const onLoadCssPlugin = {
  name: 'onLoadCss',
  setup(build) {
    build.onLoad({ filter: /.\.css$/ }, async (args) => {
      let css = fs.readFileSync(args.path, 'utf8')
      const res = await postcss([
        postcssBundler,
        autoprefixer,
        cssnano,
      ]).process(css, { from: undefined })

      return {
        contents: res.css,
        loader: 'text',
      }
    })
  },
}

const esbuildOptions = {
  bundle: true,
  outfile: paths.distJS + 'main.js',
  minify: isProd,
  sourcemap: !isProd,
  loader: {
    '.html': 'text',
    '.css': 'text',
  },
  plugins: [onLoadHtmlPlugin, onLoadCssPlugin],
}

esbuild.build({
  entryPoints: [paths.dev + 'main.js'],
  ...esbuildOptions,
})
