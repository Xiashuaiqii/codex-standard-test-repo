# 贡献指南

感谢你愿意改进本项目。

## 开始之前

1. 搜索现有 Issue，确认问题或建议尚未被记录。
2. 对较大的改动先创建 Issue，说明目标、方案和影响。
3. 遵守 [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)。

## 本地开发

```bash
git clone https://github.com/Xiashuaiqii/codex-standard-test-repo.git
cd codex-standard-test-repo
npm install
npm run check
```

## 提交要求

- 每个 Pull Request 聚焦一个主题。
- 为行为变更补充或更新测试。
- 更新相关文档；面向用户的变更同时写入 `CHANGELOG.md` 的 `Unreleased` 部分。
- 使用清晰、可追溯的提交信息。
- 提交前确保 `npm run check` 通过。

## Pull Request 流程

1. 从 `main` 创建功能分支。
2. 完成代码、测试和文档。
3. 推送分支并填写 Pull Request 模板。
4. 处理自动检查和评审意见。
5. 经维护者批准后合并。
