# zsj-react-ui

npm init -y 创建 package.json

yarn add webpack webpack-cli --dev //换淘宝源
yarn add webpack@4.29.6 webpack-cli@3.2.3 --dev 安装 webpack 配置

新建文件夹 lib ->index.tsx 入口文件

.tsx 需要 ts 解析

新建 webpack 配置文件
webpack.confing.js

```
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
```

安装 awesome-typescript-loader

```
yarn add awesome-typescript-loader --dev
yarn add typescript --dev
```

什么时候加 dev

```
nom install --save name  不仅仅给程序员用
npm install --save-dev name  只给程序员用
```

比如 react 用户也需要用，程序员也要 webpack 程序员用，用户不需要
--save 是默认的，不需要加

```
--save -S
--dev -D
```
