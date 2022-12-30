# SJA 分析器 v3.0 开源仓库

## SJA 简介

SJA 分析器，原名 Scratch Json Analyser。是一个具有**作品结构分析**、**作品相似度对比**和**作品跨站迁移（仍在筹划制作中）** 功能的 Scratch 文件工具。

SJA 原版采用 Scratch 实现，旧版 SJA 网站采用 Python 后端实现。本仓库为最新版本 SJA(v3)的源代码仓库，采用 JS 实现。

## 当前项目的平台支持情况

\*如有未纳入本表的编程社区，请提交 issue.

| Code | Platform             | Process       | Upd |
| ---- | -------------------- | ------------- | --- |
| sc   | Scratch              | ✅Fully       |     |
| a    | 阿儿法营（稽木世界） | ✅Fully       |     |
| ccw  | 共创世界             | 🚧Working on  |     |
| cc   | ClipCC               | 🚧Working on  |     |
| cn   | Scratch 中社         | ✅Fully       |     |
| xmw  | 小码王               | ✅Fully       |     |
| tw   | TurboWarp            | ⏲️to-do       |     |
| 40   | 40code               | ⏲️to-do       |     |
| sn   | 编程少年             | ⏲️to-do       |     |
| xtl  | 有道小图灵           | ⏲️to-do       |     |
| xes  | 学而思编程           | ⏲️to-do       |     |
| bcd  | 编程豆               | ⏲️to-do       |     |
| lab  | Codelab              | ⏲️to-do       |     |
| mind | mind+                | ⏲️to-do       |     |
| cxm  | 程小盟               | ⏲️to-do       |     |
| zq   | 蒸汽工坊             | ⏲️to-do       |     |
| kd   | 有道卡搭             | ❌Unsupported |     |
| bcm  | 编程猫               | ❌Unsupported |     |

## Devlopers Guide

### Repo Structure

- blocks-info
  - sample 各积木 json 文件
  - blocks.xlsx 积木类型统计信息
- devTool 开发工具
  - obj.json 生成积木类型统计的 json 文件
  - xlsx2obj.py 将 blocks-info/blocks.xlsx 转换为 obj.json
- release
  - 用于发布的 js 代码

### Terms

- block: project.json 文件中 blocks 列表的一个元素
- struc: block 充当的结构
  - SUPER_TOP 空指针，指向 topLevel 积木的虚构结构
  - unknown 未知块
  - top-input 内含填空的顶层块
  - top-def 函数定义
  - top-arg 内含形参的顶层块
  - top 无形参无填空顶层
  - special-var 变量或列表参数
  - special-num 形参/实参
  - special-bool 形参/实参
  - special-menu 作为积木的列表
  - sentence 语句
  - prototype 内含形参
  - num 参数
  - menu 菜单
  - cmouth 控制语句，携带列表 cmouth，内容为 input 属性
  - bool 布尔值
- Entity：true if a block is counted as a visible block unit in Scratch editor
- Para: 一个代码段
- Category: 人为区分的积木类型（与前缀不一定相同）

### project.json

- input
  ```json
  "inputs": {
    "BACKDROP": [
      3,
      [
        12,
        "1",
        "dJ*BpT[EaE/~RhqUMm7O"
      ],
    "WU/HnVSoORyWXyHv%$*U"
    ]

    "SOUND_MENU": [
      1,
      "/uL^2][e5W/4T8jcz7IG"
    ]
  }
  ```

## 联系方式

- Email： guyan1024@aliyun.com 或 chinaguyan@gmail.com
- QQ：2191806401
