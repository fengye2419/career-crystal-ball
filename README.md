# 职业水晶球 (Career Crystal Ball)

一个功能完整的职业信息查询微信小程序，帮助用户了解不同职业的详细信息，包括岗位要求、薪资范围、职业前景等。

## 项目简介

职业水晶球是一个基于微信小程序开发的职业信息查询应用，为用户提供全面的职业信息查询服务。用户可以通过搜索、浏览热门职业等方式，了解各个职业的详细信息，帮助做出更好的职业规划决策。

## 技术栈

- **开发框架**: 微信小程序原生框架
- **编程语言**: TypeScript
- **样式预处理**: SCSS
- **UI 组件库**: Vant Weapp (v1.11.7)
- **渲染引擎**: Glass-Easel (Skyline)
- **小程序基础库版本**: 2.32.3

## 功能特性

### 核心功能

- 🔍 **职业搜索**: 支持关键词搜索，快速查找感兴趣的职业
- 📋 **职业详情**: 查看职业的详细描述、要求、职责、前景和薪资范围
- ⭐ **收藏功能**: 收藏感兴趣的职业，方便随时查看
- 📜 **历史记录**: 记录浏览过的职业，快速回顾
- 🏠 **首页推荐**: 展示热门职业，快速了解市场趋势

### 页面结构

- **首页**: 展示热门职业列表，支持搜索功能
- **详情页**: 显示职业的完整信息
- **搜索结果页**: 展示搜索结果列表
- **收藏页**: 管理收藏的职业
- **历史页**: 查看浏览历史
- **我的**: 个人中心页面
- **设置页**: 应用设置
- **关于页**: 关于应用的信息

## 项目结构

```
career-crystal-ball/
├── miniprogram/              # 小程序主目录
│   ├── app.json             # 小程序全局配置
│   ├── app.ts               # 小程序入口文件
│   ├── app.scss             # 全局样式
│   ├── pages/               # 页面目录
│   │   ├── index/           # 首页
│   │   ├── detail/          # 详情页
│   │   ├── search-result/   # 搜索结果页
│   │   ├── favorites/       # 收藏页
│   │   ├── history/         # 历史页
│   │   ├── my/              # 我的
│   │   ├── settings/        # 设置页
│   │   └── about/           # 关于页
│   ├── components/          # 组件目录
│   │   ├── custom-tab-bar/  # 自定义底部导航栏
│   │   └── navigation-bar/  # 自定义导航栏
│   ├── utils/               # 工具函数
│   │   ├── careerData.ts    # 职业数据
│   │   └── util.ts          # 通用工具函数
│   ├── images/              # 图片资源
│   └── miniprogram_npm/     # npm 包构建目录
├── typings/                 # TypeScript 类型定义
├── project.config.json      # 项目配置文件
├── project.private.config.json  # 私有配置文件
├── tsconfig.json            # TypeScript 配置
└── README.md                # 项目说明文档
```

## 开发环境

### 前置要求

- Node.js (推荐 v14 或更高版本)
- 微信开发者工具
- npm 或 yarn

### 安装依赖

```bash
cd miniprogram
npm install
```

### 构建 npm 包

在微信开发者工具中：
1. 点击菜单栏 **工具** -> **构建 npm**
2. 等待构建完成

### 开发调试

1. 使用微信开发者工具打开项目
2. 在开发者工具中点击 **编译** 按钮
3. 在模拟器或真机上进行调试

## 配置说明

### 小程序 AppID

项目配置文件中已设置 AppID，如需修改请编辑 `project.config.json` 或 `project.private.config.json`。

### 编译配置

项目已启用以下编译选项：
- TypeScript 编译
- SCSS 编译
- Skyline 渲染引擎
- 代码压缩
- Source Map

## 数据说明

职业数据存储在 `miniprogram/utils/careerData.ts` 文件中，包含以下信息：
- 职业名称和分类
- 职业描述
- 岗位要求
- 工作职责
- 职业前景
- 薪资范围

## 特性说明

### 自定义 TabBar

项目使用自定义 TabBar 组件，提供更好的视觉体验和交互效果。

### Skyline 渲染引擎

项目启用了 Skyline 渲染引擎，提供更好的性能和渲染效果。

### TypeScript 支持

项目完全使用 TypeScript 开发，提供类型安全和更好的开发体验。

## 开发规范

- 代码风格遵循 TypeScript 官方规范
- 使用 2 空格缩进
- 组件和页面使用 PascalCase 命名
- 工具函数使用 camelCase 命名

## 注意事项

1. 首次运行需要构建 npm 包
2. 确保微信开发者工具版本支持 Skyline 渲染引擎
3. 真机调试需要在小程序后台配置合法域名

## 许可证

本项目采用 MIT 许可证。

## 联系方式

如有问题或建议，欢迎提交 Issue 或 Pull Request。

