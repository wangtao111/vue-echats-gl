/**
 * Created by wangTao on 2018/1/9.
 */
/**************         生产环境配置         ***********/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html模板；
const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common');//把公共模块提取出来, 并取名为'common'(名字自起), webpack之后再out文件夹下生成common.js, 测试时记得引入提取出来的公共模块js文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将css独立引入变成link标签形式, 使用该插件需要独立下载'npm install extract-text-webpack-plugin --save-dev', 同时下面的rules也必须更改
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {index: './src/main.js'},//入口文件 index， index2
  output: {//输出文件
    filename: 'js/[name].js',//输出文件名
    // publicPath: '',//添加静态资源
    chunkFilename: 'js/[name].js',//CommonsChunkPlugin提取的公共文件
    path: __dirname + '/dist'//输出文件路径
  },
  module: {
    rules: [
      {test: /.js$/, use: ['babel-loader']}, // js转es5
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {test: /\.(eot|woff|ttf)$/, loader: 'file-loader'},
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      }, /*解析css, 并把css变成文件通过link标签引入*/
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:8][ext]'
        }
      },
      {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js' //$表示精确匹配，使用运行时库
    },
    extensions: [".js",".vue"]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],
      {
        root: __dirname,
        verbose: true, //日志
        dry: false, //不要删除任何东西，主要用于测试
        exclude: []//排除不删除的目录，主要用于避免删除公用的文件
      }),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'echarts'), to: 'echarts' }]),//复制js库
    CommonsChunkPlugin, //提取公共文件
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ['common', 'index']
    })
  ]//插件集合
}