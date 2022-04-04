# Vue脚手架

## 1、脚手架文件结构

```tree
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

 ## 2、render配置项

在Vue脚手架中，如果使用之前的非单文件模板组件写法：

```javascript
//创建Vue实例对象vm
new Vue({
  //将App组件放入容器中
  // render: h => h(App),
  el: '#app',
  template: `<App></App>`,
  comments:{App}
})
    // .$mount('#app')
```
会出现错误：
```text
You are using the runtime-only build of Vue where the template compiler is not available. 
Either pre-compile the templates into render functions, or use the compiler-included build.
```

**原因：**

Vue会默认引入`dist\vue.runtime.esm.js`其中不包含模板引擎，所以会报错。

如果直接引入`Vue.js`，会出现程序过于臃肿的情况。


### 2.1 render函数的使用：

```javascript
  render(createElement) {
    return createElement("h1", "你好啊");
  }
```

可以简写为：`render:q => q("h1", "你好啊")`

```javascript
//创建Vue实例对象vm
new Vue({
  //将App组件放入容器中
  render: h => h(App),
  el: '#app',
})
```

由于没有模板解析器，所以不能使用template配置项，需要使用`render`函数接受到的createElement函数去指定具体的内容。

### 2.2 vue.js与vue.runtime.xxx.js的区别：

 1. `vue.js`是完整版的Vue，包含：核心功能 + 模板解析器。
 2. `vue.runtime.xxx.js`是运行版的Vue，只包含：核心功能；没有模板解析器。
因为`vue.runtime.xxx.js`没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的`createElement`函数去指定具体内容。

## 3、脚手架的默认配置

Vue脚手架将一些重要的配置文件（例如webpack）做了隐藏，如果需要查看具体的配置，可以执行：

```
vue inspect > output.js
```

如果需要更改Vue-cli的默认配置可以参考https://cli.vuejs.org/zh/config/

如果需要修改默认配置，需要在根目录（与`package.json`平级）的目录下新建一个`vue.conf.js`

```JavaScript
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
}
```

关闭语法检查

```JavaScript
module.exports = defineConfig({
  lintOnSave: false,
})
```

## 4、ref属性

被用来给元素或子组件注册引用信息（id的替代者）

应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）

使用方式：
1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
2. 获取：```this.$refs.xxx```

## 5、配置项props

功能：让组件接收外部传过来的数据

传递数据：```<Demo name="xxx"/>```

接收数据：

1. 第一种方式（只接收）：```props:['name'] ```

2. 第二种方式（限制类型）：```props:{name:String}```

3. 第三种方式（限制类型、限制必要性、指定默认值）：

    ```js
    props:{
       name:{
       type:String, //类型
       required:true, //必要性
       default:'老王' //默认值
       }
    }
    ```

> 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## 6、mixin(混入、混合)

**功能：**可以把多个组件共用的配置提取成一个混入对象

**使用方式：**

1. 定义混合：

   ```js
   {
       data(){....},
       methods:{....}
       ....
   }
   ```

2. 使用混入：

   全局混入：```Vue.mixin(xxx)```
   局部混入：```mixins:['xxx'] ```

