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

每次运行完了都要 npx webpack 就很烦，我们需要一个自动打包的工具
首先安装一波

```
yarn add webpack-dev-server --dev
监听运行 npx webpack-dev-server
```

我们需要 html 页面浏览，安装 html-webpack-plugin

```
yarn add html-webpack-plugin --dev
```

webpack.config.js 添加插件

```
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
```

增加命令
package.json

```
   "start": "webpack-dev-server",
    "build": "webpack"
```

增加依赖

```
安装react和react-dom
以及类型声明文件
yarn add @types/react --dev
yarn add @types/react-dom --dev
```

添加别名
webpack.config.js

```
 resolve:{
    extensions:['.ts','.tsx','.js','.jsx']
  },
```

外来依赖，需要排除
webpack.config.js

```
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
```

不同命令不同包

```
cross-env NODE_ENV=development
跨平台 所有的环境变量都是好用的
```

```
yarn add cross-env --dev
```

安装 jset

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

jest 不支持 ts 还要安装 ts

```
yarn add --dev ts-jest
```

编写第一个测试用例的时候 test 报错，需要安装@types/jest

```
yarn add @types/jest --dev
```

第一个测试用例

```
function add(a: number, b: number) {
  return a + b;
}
describe("我的第一个测试用例", () => {
  it("add(1,2)等于3", () => {
    expect(add(1, 2)).toEqual(3);
  });
});

```

需要安装渲染插件 react-test-renderer

```
yarn add --dev @types/react-test-renderer
```

每个文件的作用

```
jest.config.js  jest配置
tsconfig.js  tsconfig 配置
tslint.json   代码规范配置

```

### icon 制作时引入 svg,首先在 webpack.config 添加 loader

第一步

```
module>rules>
 {
        test: /\.svg?$/,
        loader: "svg-sprite-loader",
      }
```

安装 svg-sprite-loader

但是 ts 还是不认识 svg，需要在 type 申明 svg 是个什么玩意，跟目录下面新建 types/custom.d.ts

```
declare module "*.svg" {
  const content: any;
  export default content;
}

```

最后在 tsconfig.json

```
 "include": [
    "types/**/*", "lib/**/*"
  ],    //告诉tsconfig 这里面都是我的源文件
```
