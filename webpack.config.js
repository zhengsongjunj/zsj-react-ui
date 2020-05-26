const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode:'production',
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname , "dist"),     //输出至文件
    library: "ZUI",
    libraryTarget: "umd", //统一模块定义
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
       new HtmlWebpackPlugin({
            title: 'ZUI - React',
            template: 'index.html'
        })
    ],
};