const path = require("path");
module.exports = {
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
  }
}