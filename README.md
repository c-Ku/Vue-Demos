# React demos (with typescript) by c-Ku

---

Based on vue-cli via typescript.
Start your journey with the spell below:
```
npm start
```

> Recommended workspace: Visual Studio Code
>
> 整理自：[三命：Vue + TypeScript 新项目起手式](https://juejin.im/post/59f29d28518825549f7260b6)
> 最新版：[Vue-cli 整合 Typescript 筆記（05/03/2018）](https://www.zybuluo.com/c-Ku/note/1061488)
> 按此步骤进行可保证流畅运行

## 初始化CLI脚手架
```
// 首先安裝vue-cli
$ sudo npm install vue-cli -g

// 并初始化應用
// 項目名稱、項目描述、項目作者、創建方式（默認）、是否引入路由（YES）、是否引入eslint代碼檢查（YES）、eslint風格（none）、引入單元測試工具（NO）、引入自動化測試工具（NO）
$ vue init webpack newProject
```

## 安装（可能会）需要的插件
```
// 安装vue的官方插件
$ npm i vue-class-component vue-property-decorator --save

// ts-loader typescript 必须安装，其他的相信你以后也会装上的
$ npm i ts-loader typescript tslint tslint-loader tslint-config-standard --save-dev
```
## webpack 配置
找到 `./build/webpack.base.conf.js`
修改 entry 入口 ts 为 js
```
entry: {
app: './src/main.ts'
}
```
修改 resolve 以 import 时不加后缀
```
resolve: {
extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
alias: {
'@': resolve('src')
}
}
```
添加对应后缀文件 loader
```
module: {
rules: [
// 从这里复制下面的代码就可以了
{
test: /\.ts$/,
exclude: /node_modules/,
enforce: 'pre',
loader: 'tslint-loader'
},
{
test: /\.tsx?$/,
loader: 'ts-loader',
exclude: /node_modules/,
options: {
appendTsSuffixTo: [/\.vue$/],
}
},
// 复制以上的
}
}
```

> ts-loader 会检索当前目录下的 tsconfig.json 文件，根据里面定义的规则来解析.ts文件（就跟.babelrc的作用一样）
>
> tslint-loader 作用等同于 eslint-loader

## 添加 tsconfig 文件
根目录下创建 `tslint.json`
参考 [tsconfig](http://json.schemastore.org/tsconfig)

## 添加 tslint
根目录下创建 `tslint.json`
意在引入 ts 的 `standard` 规范
```
{
"extends": "tslint-config-standard",
"globals": {
"require": true
}
}
```

## 让ts识别vue
创建 `vue-shim.d.ts` 放在项目文件目录下
比如 `vue-cli` 的 `src` 目录
意在使 typescript 识别 `.vue` 文件并交由 `vue` 模块处理
```
declare module "*.vue" {
import Vue from "vue";
export default Vue;
}
```
然后将文件目录下的 `js文件` 后缀改为 `.ts`
如 `main.js` → `main.ts`
并在 ts 文件中 import `.vue` 文件时应加上完整后缀
因 `typescript` 默认不识别 `.vue` 文件

## 改造 .vue 文件
此处需要用到 `vue-class-component` 插件，该插件可使Vue语法更加直观、扁平。

可食用更高级的 `vue-property-decorator` 插件，除继承 `vue-class-component` 插件中已有 `Component` 外，新增了Emit, Inject, Model, Prop, Provide, Vue, Watch等六个[装饰器](http://taobaofed.org/blog/2015/11/16/es7-decorator/)。

#### App.vue
```
<template>
<div id="app">
<img src="./assets/logo.png">
<router-view/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {}
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
```

#### HellowWorld.vue
```
<template>
<div class="hello">
<!-- omit -->
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class HelloWorld extends Vue {
msg: string = 'Welcome to Your Vue.js App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
```

## npm run dev

> 如报错
> TypeError: Cannot read property 'afterCompile' of undefined.
>
> 需在 package.json 中更改以下包的版本号为
> "ts-loader": "^3.5.0",
> "webpack": "^3.10.0",
