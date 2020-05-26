const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode:'development',
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname , "dist"),     //输出至文件
    library: "ZUI",
    libraryTarget: "umd", //统一模块定义
  },
  resolve:{
    extensions:['.ts','.tsx','.js','.jsx']
  },        //默认文件别名
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
    externals: {
        react: {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: 'React',
        },
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: 'ReactDOM',
        },
      }
};