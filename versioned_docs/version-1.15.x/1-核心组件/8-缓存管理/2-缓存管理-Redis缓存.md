---
title: '缓存管理-Redis缓存'
sidebar_position: 2
hide_title: true
---

`GF` 框架通过社区模块提供了 `gcache` 的 `Redis` 缓存适配实现，仓库地址： [https://github.com/gogf/gcache-adapter](https://github.com/gogf/gcache-adapter) 使用方式请参考仓库 `README` 介绍。

`Redis` 缓存在多节点保证缓存的数据一致性时非常有用，特别是 `Session` 共享, 数据库查询缓存等场景中。其中，数据库ORM也内置支持了缓存适配功能，具体示例请参考： [ORM链式操作-查询缓存](output/goframe-v1.15-md/核心组件/数据库ORM/ORM链式操作-重点/ORM链式操作-查询缓存) 章节。