# banner-footer-webpack-plugin

## Small adaptation of webpack [BannerPlugin](http://webpack.github.io/docs/list-of-plugins.html#bannerplugin) allowing for a footer option.  Useful for wrapping entire bundles in `try/catch` blocks or making comments before and after bundles.

### Usage
```js
var BannerFooterPlugin = require('banner-footer-webpack-plugin');
plugins: [
  new BannerFooterPlugin(banner, footer, options)
]
```

*Note: if using with [grunt-webpack](https://github.com/webpack/grunt-webpack) the webpack task will process grunt templates for you so it is possible to pass banner and footer as template strings.*
```
new BannerFooterPlugin('<%= grunt.config.get("concat_banner") %>', '<%= grunt.config.get("concat_footer") %>', {
  raw: true
})
```

### Options
- pretty much the same as original
- `options.raw` if true, banner will not be wrapped in a comment
