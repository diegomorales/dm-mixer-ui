export default {
  dev: './src/',
  get devJs() {
    return this.dev + 'js/'
  },
  get devScss() {
    return this.dev + 'scss/'
  },
  dist: './dist/',
  get distJS() {
    return this.dist + 'js/'
  },
  get distCss() {
    return this.dist + 'css/'
  },
}
