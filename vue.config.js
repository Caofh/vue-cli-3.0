// vue.config.js

const path = require('path')
const utils = require('./build/utils')

//获取多入口js文件
var srcDir = path.resolve(__dirname, './src')
var entrys = utils.getEntries(srcDir + '/pages/*/*.js')
/*************************/

module.exports = {
  // pages: {
  //   // index: {
  //   //   // 页面的入口文件
  //   //   entry: 'src/pages/index/main.js',
  //   //   // 页面的模板文件
  //   //   template: 'public/index.html',
  //   //   // build 生成的文件名称  例： dist/index.html
  //   //   filename: 'index.html'
  //   // },
  // },

  pages: entrys,

  // 配置cdn资源的host
  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://vuetest.tpdoc.cn/vue-cli-3.0/dist/'
    : '/'
}
