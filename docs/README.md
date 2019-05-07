---
home: true
heroImage: /hero.png
actionText: 起步 go →
actionLink: /form/form
features:
- title: 模块化
  details: 以模块化格式开发页面，以实现最简化的配置，帮助您专注于创作。
- title: 配置化
  details: 配置开发页面，配置组件自动生成你需要的页面。
- title: 高效化
  details: 有效地处理各种问题，一个更改将随其他页面而改变，无需单独处理。

footer: MIT Licensed | Copyright © 2019-che-tai-lian
---

``` bash
#设置npm源
npm config set registry http://nexus.dev.chelizitech.com/repository/npm-all/

# 安装
npm install ctl-web-module@latest

# 发布
npm publish --registry http://nexus.dev.chelizitech.com/repository/npm/

# 文档编写
vuepress dev

# 构建文档为静态文件
vuepress build
```
