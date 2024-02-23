# 说明文档
## `routerToview`: 一个快速搭建vue3+ts路由视图映射工具


如何安装？

```shell
npm install routerToview -g
```

## 创建项目

目前支持Vue3+ts项目





## 项目开发

项目开发目前提供两个功能：

* 创建Vue组件
* 创建Vue页面，并配置路由




### 创建Vue组件：

````shell
setup addcpn YourComponentName # 例如coderwhy add NavBar，默认会存放到src/components文件夹中
setup addcpn YourComponentName -d src/pages/home # 也可以指定存放的具体文件夹
````





为什么会创建router.js文件：

* `router.js`文件是路由的其中一个配置；
* 创建该文件中 `src/router/index.js`中会自动加载到路由的 `routes`配置中，不需要手动配置了（如果是自己配置的文件夹需要手动配置）

`src/router/index.js`中已经完成如下操作：

```js
// 动态加载pages中所有的路由文件示例
const files = require.context('@/pages', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/pages' + key.replace('.', ''));
  return page.default;
})
```





