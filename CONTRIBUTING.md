# 贡献指南 / Contributing Guide

[English](#english) | [简体中文](#简体中文)

---

## 简体中文

感谢您对 View-IP 项目的关注！我们欢迎任何形式的贡献。

### 如何贡献

#### 报告问题
- 在 [GitHub Issues](https://github.com/htazq/View-IP/issues) 提交问题
- 请详细描述问题，包括复现步骤、预期行为和实际行为
- 如果可能，请附上截图或错误日志

#### 提交代码
1. **Fork 项目**
   - GitHub: Fork [htazq/View-IP](https://github.com/htazq/View-IP)
   - CNB.cool: Fork [htazq/View-IP](https://cnb.cool/htazq/View-IP)

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **编写代码**
   - 遵循项目现有的代码风格
   - 确保代码可以正常运行
   - 添加必要的注释

4. **测试代码**
   - 在本地测试您的更改
   - 确保不会破坏现有功能

5. **提交更改**
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   # 或
   git commit -m "fix: 修复某个问题"
   ```

6. **推送到远程**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **创建 Pull Request**
   - 在 GitHub 或 CNB.cool 上创建 Pull Request
   - 详细描述您的更改内容和原因
   - 等待维护者审核

### 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式调整（不影响功能）
- `refactor:` 代码重构
- `perf:` 性能优化
- `test:` 测试相关
- `chore:` 构建过程或辅助工具的变动

### 代码审查

所有的 Pull Request 都需要经过审查才能合并。审查过程中可能会：
- 提出修改建议
- 要求补充测试
- 讨论实现方案

请耐心等待，我们会尽快处理您的贡献。

### 开发环境

- **运行时**: EdgeOne Functions
- **前端**: 原生 JavaScript + Tailwind CSS
- **部署**: 腾讯云 EdgeOne Pages

### 联系方式

- GitHub Issues: [https://github.com/htazq/View-IP/issues](https://github.com/htazq/View-IP/issues)
- CNB.cool: [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP)

---

## English

Thank you for your interest in the View-IP project! We welcome contributions of all kinds.

### How to Contribute

#### Report Issues
- Submit issues on [GitHub Issues](https://github.com/htazq/View-IP/issues)
- Please describe the issue in detail, including reproduction steps, expected behavior, and actual behavior
- If possible, attach screenshots or error logs

#### Submit Code
1. **Fork the Project**
   - GitHub: Fork [htazq/View-IP](https://github.com/htazq/View-IP)
   - CNB.cool: Fork [htazq/View-IP](https://cnb.cool/htazq/View-IP)

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Write Code**
   - Follow the existing code style
   - Ensure the code runs properly
   - Add necessary comments

4. **Test Code**
   - Test your changes locally
   - Ensure existing functionality is not broken

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # or
   git commit -m "fix: fix some issue"
   ```

6. **Push to Remote**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Create a Pull Request on GitHub or CNB.cool
   - Describe your changes and reasons in detail
   - Wait for maintainer review

### Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation update
- `style:` Code formatting (no functional changes)
- `refactor:` Code refactoring
- `perf:` Performance optimization
- `test:` Test related
- `chore:` Build process or auxiliary tool changes

### Code Review

All Pull Requests need to be reviewed before merging. During the review process, we may:
- Suggest modifications
- Request additional tests
- Discuss implementation approaches

Please be patient, we will process your contribution as soon as possible.

### Development Environment

- **Runtime**: EdgeOne Functions
- **Frontend**: Vanilla JavaScript + Tailwind CSS
- **Deployment**: Tencent Cloud EdgeOne Pages

### Contact

- GitHub Issues: [https://github.com/htazq/View-IP/issues](https://github.com/htazq/View-IP/issues)
- CNB.cool: [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP)

