# vue+vue-router+vuex+element-ui+axios多页面

## 项目说明

``` bash
# 使用淘宝镜像install
npm --registry https://registry.npm.taobao.org install

# 运行本地环境
npm run dev

# 生产环境打包
npm run build

# 接口调用方式
接口配置在src/server/api.js中配置
使用时调用this.$api.对应配置。实例：
this.$api.decision.request(param)
.then((data) => {})
.catch((err) => {});

# ESlint
快捷键格式化ctrl+alt+l
```
