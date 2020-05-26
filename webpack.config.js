const path = require("path");
module.exports = {
  mode:'production',
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname + "dist/lib"),     //输出至文件
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
};