module.exports = {
  inputDir: './src/resources/design/icons', // (required)
  outputDir: './src/resources/scss/icon', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'scss', 'css', 'json', 'html'],
  fontsUrl: '',
  selector: '.app-icon',
  normalize: true,
  descent: 35,
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    svg: {metadata: {by: 'DienGV'}, ascent: 0.5},
    json: {
      // render the JSON human readable with two spaces indent (default is none, so minified)
      indent: 2
    },
    ts: {
      // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
      types: ['constant', 'literalId'],
      // render the types with `'` instead of `"` (default is `"`)
      singleQuotes: true
    }
  },
  // Use a custom Handlebars template
  templates: {scss: './src/resources/design/templates/scss.hbs'},
  // pathOptions: {
  //     ts: './src/types/icon-types.ts',
  //     json: './misc/icon-codepoints.json'
  // }
};
