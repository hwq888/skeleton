// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {},
    "postcss-px2rem-exclude": {
      remUnit: 75,
      exclude: /node_modules|folder_name/i
    }
  }
}
