# 开源发布指南 / Open Source Release Guide

本文档指导您如何将 View-IP 项目发布到 GitHub 和 CNB.cool 两个平台。

---

## 📋 发布前检查清单

在发布之前，请确认以下事项：

- [x] ✅ README.md（中文版）已完成
- [x] ✅ README_EN.md（英文版）已完成
- [x] ✅ LICENSE 文件已包含（MIT License）
- [x] ✅ CONTRIBUTING.md 贡献指南已创建
- [x] ✅ DEPLOYMENT.md 部署指南已创建
- [x] ✅ .gitignore 文件已配置
- [x] ✅ GitHub Issue 模板已创建
- [x] ✅ GitHub PR 模板已创建
- [x] ✅ GitHub Actions 工作流已配置
- [x] ✅ 代码注释完整
- [x] ✅ 项目可正常运行

---

## 🚀 发布到 GitHub

### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)
2. 点击右上角的 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `View-IP`
   - **Description**: `🌐 A Modern IP Address Lookup Dashboard | 现代化的 IP 地址查询仪表板`
   - **Public**: 选择公开仓库
   - **不要**勾选 "Initialize this repository with a README"（我们已经有了）

### 步骤 2：推送代码到 GitHub

```bash
# 如果还没有初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: View-IP Dashboard"

# 添加 GitHub 远程仓库
git remote add github https://github.com/htazq/View-IP.git

# 推送到 GitHub
git push -u github main
```

### 步骤 3：配置 GitHub 仓库

1. **设置仓库描述和标签**
   - 进入仓库设置
   - 添加 Topics: `ip-lookup`, `dashboard`, `edgeone`, `edge-functions`, `serverless`, `cloudflare-workers`

2. **配置 GitHub Pages（可选）**
   - Settings → Pages
   - 选择部署源（如果需要）

3. **添加 Secrets（用于 GitHub Actions）**
   - Settings → Secrets and variables → Actions
   - 添加 `EDGEONE_API_TOKEN`（如果使用自动部署）

### 步骤 4：创建 Release

1. 进入 Releases 页面
2. 点击 "Create a new release"
3. 填写信息：
   - **Tag version**: `v1.0.0`
   - **Release title**: `🎉 View-IP v1.0.0 - Initial Release`
   - **Description**: 
     ```markdown
     ## 🌐 View-IP v1.0.0
     
     首个正式版本发布！
     
     ### ✨ 主要功能
     - 🌍 实时显示公网 IP 地址
     - 📍 地理位置信息展示
     - ⚡ 网络连通性测试
     - 🔄 多种输出格式支持
     - 🎨 现代化响应式 UI
     - ⌨️ 快捷键支持
     
     ### 🚀 快速开始
     访问 [在线演示](https://ip.at9.net) 或查看 [部署指南](./DEPLOYMENT.md)
     
     ### 📖 文档
     - [README 中文版](./README.md)
     - [README English](./README_EN.md)
     - [贡献指南](./CONTRIBUTING.md)
     ```

---

## 🎯 发布到 CNB.cool

### 步骤 1：创建 CNB.cool 仓库

1. 登录 [CNB.cool](https://cnb.cool/)
2. 点击 `New Project` 或 `+`
3. 填写项目信息：
   - **Project name**: `View-IP`
   - **Description**: `🌐 现代化的 IP 地址查询仪表板 | A Modern IP Address Lookup Dashboard`
   - **Visibility**: Public（公开）

### 步骤 2：推送代码到 CNB.cool

```bash
# 添加 CNB.cool 远程仓库
git remote add cnb https://cnb.cool/htazq/View-IP.git

# 推送到 CNB.cool
git push -u cnb main
```

### 步骤 3：配置 CI/CD

1. **创建密钥仓库**（如果还没有）
   ```bash
   # 在 CNB.cool 创建私有仓库 my-secrets
   # 创建文件 wx-envs.yml
   ```

2. **配置环境变量**
   ```yaml
   # wx-envs.yml
   env:
     EDGEONE_API_TOKEN: "your-edgeone-api-token"
   ```

3. **验证 .cnb.yml 配置**
   - 确认 imports 路径正确
   - 确认部署脚本正确

### 步骤 4：触发首次部署

```bash
# 推送代码触发自动部署
git push cnb main
```

在 CNB.cool 的 CI/CD 页面查看部署进度。

---

## 🔗 同步两个平台

### 方式一：同时推送到两个平台

```bash
# 添加一个组合的远程仓库
git remote add all https://github.com/htazq/View-IP.git
git remote set-url --add --push all https://github.com/htazq/View-IP.git
git remote set-url --add --push all https://cnb.cool/htazq/View-IP.git

# 一次推送到两个平台
git push all main
```

### 方式二：分别推送

```bash
# 推送到 GitHub
git push github main

# 推送到 CNB.cool
git push cnb main
```

---

## 📢 宣传推广

### 1. 社交媒体
- 在 Twitter/X 上发布
- 在技术社区（V2EX、掘金、思否）分享
- 在 Reddit 的相关 subreddit 发布

### 2. 技术博客
- 撰写技术博客介绍项目
- 分享开发经验和技术细节

### 3. 开源社区
- 提交到 Awesome 列表
- 在相关论坛和社区分享

---

## 📊 监控和维护

### GitHub
- 定期查看 Issues 和 PR
- 回复用户反馈
- 更新文档和代码

### CNB.cool
- 监控部署状态
- 查看 CI/CD 日志
- 优化部署流程

---

## 🎉 完成！

恭喜！您的项目现在已经在两个平台上开源了：

- **GitHub**: https://github.com/htazq/View-IP
- **CNB.cool**: https://cnb.cool/htazq/View-IP

记得在两个平台的 README 中互相链接，让用户可以方便地找到另一个平台的仓库。

---

## 📝 后续工作

- [ ] 添加项目徽章（Badges）
- [ ] 创建项目网站或文档站点
- [ ] 收集用户反馈
- [ ] 持续改进和更新
- [ ] 回应社区贡献

祝您的开源项目取得成功！🎊

