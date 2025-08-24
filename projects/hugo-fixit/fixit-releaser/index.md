# ⚙️ Versioning, change-log and release tool that supports Conventional Commits specification.

# FixIt Releaser

[![NPM version](https://img.shields.io/npm/v/@hugo-fixit/fixit-releaser.svg)](https://www.npmjs.com/package/@hugo-fixit/fixit-releaser)

中文 | [English](https://raw.githubusercontent.com/hugo-fixit/fixit-releaser/refs/heads/main/README.en.md)

版本控制、变更日志和发布工具，支持 Conventional Commits 规范。

## 功能

- 更新 FixIt 内部版本号。(**仅适用于 [FixIt](https://github.com/hugo-fixit/FixIt)**)
- 根据 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范自动生成变更日志
  - `feat:` 新功能
  - `fix:` 修复问题
  - `docs:` 文档变更
  - `style:` 代码格式调整
  - `refactor:` 代码重构
  - `perf:` 性能优化
  - `test:` 测试相关
  - `chore:` 构建过程或辅助工具的变动
  - 支持 scope：`feat(api):`, `fix(ui):` 等
  - 支持 emoji：`:sparkles: feat:`, `✨ feat:` 等
  - 支持 Breaking Changes：`feat!:`, `feat(scope)!:`, `BREAKING CHANGE:` 等格式

## 安装

| 包管理器 | 命令                                      |
| -------- | ----------------------------------------- |
| pnpm     | `pnpm add -D @hugo-fixit/fixit-releaser`  |
| yarn     | `yarn add -D @hugo-fixit/fixit-releaser`  |
| npm      | `npm i -D @hugo-fixit/fixit-releaser`     |

## 配置

在 FixIt 项目的 `package.json` 中添加以下内容。

```json
{
  "scripts": {
    "version": "fixit-releaser version --prod",
    "release": "fixit-releaser changelog"
  }
}
```

> `fixit-releaser changelog` 配置与 auto-changelog 兼容。

## 使用方法

### 版本

将 FixIt 版本从 v0.3.12-1ca9fdb7 更新到 v0.3.12。

```bash
npx fixit-releaser version --prod
```

将 FixIt 版本从 v0.3.12-1ca9fdb7 更新到 v0.3.12-2ca9fdb7。

```bash
npx fixit-releaser version --dev
```

### 变更日志

从 v0.3.10 生成变更日志。

```bash
npx fixit-releaser changelog --starting-version v0.3.10
# auto-changelog: 6 kB written to CHANGELOG.md
```

更多用法请参见 [auto-changelog](https://github.com/cookpete/auto-changelog)。

## 致谢

本项目变更日志生成功能由 [auto-changelog](https://github.com/cookpete/auto-changelog) 提供支持。


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/fixit-releaser/  

