const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/styles/_mixins.scss';
          @import '@/styles/_variables.scss';
        `
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        exclude: /\.html$/
      })
    ],
    resolve: {
      alias: {
        '@unit': path.resolve(__dirname, 'tests/unit')
      }
    }
  }
}
