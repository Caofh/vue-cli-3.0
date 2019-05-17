'use strict'
const path = require('path')
//glob模块
var glob = require('glob');

//获取js入口文件
exports.getEntries = function(globPath) {

  var entries = {}
  /**
   * 读取src目录,并进行路径裁剪
   */
  glob.sync(globPath).forEach(function (entry) {
    /**
     * path.basename 提取出用 ‘/' 隔开的path的最后一部分，除第一个参数外其余是需要过滤的字符串
     * path.extname 获取文件后缀
     */
    var basename = path.basename(entry, path.extname(entry)) // 筛选出最后文件名

    entries[basename] = entry
  });

  // console.log(entries);
  // 获取的主入口如下： { index: './src/module/index/main.js', subpage: './src/module/test/test.js' }
  return entries;

}
