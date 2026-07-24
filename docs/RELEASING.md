# 发布流程

本项目使用语义化版本，Git 标签和 GitHub Release 均以 `v` 开头，例如 `v0.2.0`。

## 发布前检查

1. 确认 `main` 分支的 CI 通过。
2. 执行 `npm run check`。
3. 按变更类型更新 `package.json` 和 `VERSION`。
4. 将 `CHANGELOG.md` 的 `Unreleased` 内容移动到带日期的新版本小节。
5. 提交版本变更。

## 创建发布

```bash
git tag -a v0.2.0 -m "Release v0.2.0"
git push origin v0.2.0
gh release create v0.2.0 \
  --title "v0.2.0" \
  --notes-file release-notes.md \
  --verify-tag
```

## 发布后检查

- Release 页面可访问且说明正确。
- 标签指向预期提交。
- README 的版本徽章已更新。
- `CHANGELOG.md` 中的比较链接有效。
