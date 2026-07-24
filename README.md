# Codex Standard Test Repository

[![CI](https://github.com/Xiashuaiqii/codex-standard-test-repo/actions/workflows/ci.yml/badge.svg)](https://github.com/Xiashuaiqii/codex-standard-test-repo/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/Xiashuaiqii/codex-standard-test-repo)](https://github.com/Xiashuaiqii/codex-standard-test-repo/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

这是一个用于演示标准 GitHub 项目组成的最小 Node.js 仓库，包含源代码、自动化测试、持续集成、版本记录、维护文档、Issue/PR 模板和正式 Release。

## 功能

- 提供一个简单且可测试的 `greet()` 示例函数。
- 使用 Node.js 内置测试运行器，不依赖第三方运行时包。
- 通过 GitHub Actions 自动执行语法检查与测试。
- 使用语义化版本和 Keep a Changelog 风格记录变更。
- 包含贡献、安全、行为准则和发布流程文档。

## 快速开始

需要 Node.js 20 或更高版本。

```bash
git clone https://github.com/Xiashuaiqii/codex-standard-test-repo.git
cd codex-standard-test-repo
npm install
npm test
```

示例：

```js
import { greet } from "./src/index.js";

console.log(greet("GitHub"));
```

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm test` | 运行自动化测试 |
| `npm run lint` | 检查 JavaScript 语法 |
| `npm run check` | 依次执行语法检查和测试 |

## 项目结构

```text
.
├── .github/                 # CI、Dependabot、Issue 和 PR 模板
├── docs/RELEASING.md        # 发布流程
├── src/index.js             # 示例源码
├── test/index.test.js       # 自动化测试
├── CHANGELOG.md             # 版本变更记录
├── CODE_OF_CONDUCT.md       # 社区行为准则
├── CONTRIBUTING.md          # 贡献指南
├── LICENSE                  # MIT 许可证
├── SECURITY.md              # 安全策略
├── VERSION                  # 当前版本号
└── package.json             # 项目元数据和脚本
```

## 版本与发布

本项目遵循[语义化版本](https://semver.org/lang/zh-CN/)。当前版本见 [`VERSION`](VERSION)，历史版本与下载入口见 [Releases](https://github.com/Xiashuaiqii/codex-standard-test-repo/releases)，变更详情见 [`CHANGELOG.md`](CHANGELOG.md)。

维护者发布新版本时应遵循 [`docs/RELEASING.md`](docs/RELEASING.md)。

## 贡献与安全

提交修改前请阅读 [`CONTRIBUTING.md`](CONTRIBUTING.md) 和 [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)。安全问题请按照 [`SECURITY.md`](SECURITY.md) 私下报告，不要创建公开 Issue。

## 许可证

本项目采用 [MIT License](LICENSE)。
