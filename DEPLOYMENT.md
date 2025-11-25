# 部署指南 / Deployment Guide

[English](#english) | [简体中文](#简体中文)

---

## 简体中文

本文档详细介绍如何将 View-IP 项目部署到不同的平台。

### 方式一：腾讯云 EdgeOne Pages（推荐）

#### 前置要求
- 腾讯云账号
- EdgeOne Pages 服务已开通
- EdgeOne API Token

#### 步骤 1：获取 API Token

1. 登录 [腾讯云控制台](https://console.cloud.tencent.com/)
2. 进入 EdgeOne 服务
3. 在 API 密钥管理中创建新的 API Token
4. 保存 Token（只显示一次）

#### 步骤 2：配置项目

如果使用 **CNB.cool 平台**：

1. Fork 本项目到您的 CNB.cool 账号
2. 创建私有仓库存储密钥：
   ```bash
   # 在 CNB.cool 创建 my-secrets 仓库
   # 创建 wx-envs.yml 文件，内容如下：
   ```
   
   ```yaml
   # wx-envs.yml
   env:
     EDGEONE_API_TOKEN: "your-api-token-here"
   ```

3. 在 `.cnb.yml` 中引用密钥：
   ```yaml
   imports:
     - https://cnb.cool/your-username/my-secrets/-/blob/main/wx-envs.yml
   ```

如果使用 **GitHub**：

1. Fork 本项目到您的 GitHub 账号
2. 在仓库设置中添加 Secret：
   - 进入 Settings → Secrets and variables → Actions
   - 添加 `EDGEONE_API_TOKEN`

#### 步骤 3：部署

**使用 CNB.cool 自动部署**：
```bash
git add .
git commit -m "Deploy to EdgeOne Pages"
git push origin main
```

推送后，CNB.cool 会自动触发 CI/CD 流程，部署到 EdgeOne Pages。

**使用 EdgeOne CLI 手动部署**：
```bash
# 安装 EdgeOne CLI
npm install -g @tencent/edgeone-cli

# 准备部署文件
mkdir -p deploy-temp/functions
cp edge-functions/ip/index.js deploy-temp/functions/index.js
cp edge-functions/ip/index.js deploy-temp/functions/app.js

# 部署
edgeone pages deploy ./deploy-temp -n view-ip -t YOUR_API_TOKEN
```

#### 步骤 4：绑定域名（可选）

1. 在 EdgeOne 控制台找到您的项目
2. 添加自定义域名
3. 配置 DNS 解析
4. 等待 SSL 证书自动签发

### 方式二：Cloudflare Workers

View-IP 也可以部署到 Cloudflare Workers，因为它使用标准的 Web API。

#### 步骤 1：安装 Wrangler

```bash
npm install -g wrangler
wrangler login
```

#### 步骤 2：创建 wrangler.toml

```toml
name = "view-ip"
main = "edge-functions/ip/index.js"
compatibility_date = "2024-01-01"

[env.production]
routes = [
  { pattern = "ip.at9.net/*", zone_name = "at9.net" }
]
```

#### 步骤 3：部署

```bash
wrangler deploy
```

### 方式三：Vercel Edge Functions

#### 步骤 1：安装 Vercel CLI

```bash
npm install -g vercel
vercel login
```

#### 步骤 2：创建 vercel.json

```json
{
  "functions": {
    "api/ip.js": {
      "runtime": "edge"
    }
  },
  "rewrites": [
    { "source": "/(.*)", "destination": "/api/ip" }
  ]
}
```

#### 步骤 3：调整代码结构

将 `edge-functions/ip/index.js` 移动到 `api/ip.js`，并调整导出格式。

#### 步骤 4：部署

```bash
vercel --prod
```

### 环境变量配置

如果需要配置环境变量，可以在部署平台的控制台中添加：

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `EDGEONE_API_TOKEN` | EdgeOne API Token | 是（EdgeOne 部署） |

### 故障排查

#### 问题 1：部署失败
- 检查 API Token 是否正确
- 确认账号权限是否足够
- 查看部署日志获取详细错误信息

#### 问题 2：无法访问
- 检查域名 DNS 解析是否正确
- 确认 SSL 证书是否已签发
- 检查防火墙规则

#### 问题 3：功能异常
- 检查浏览器控制台是否有错误
- 确认第三方 API（ipip.net、ipify.org）是否可访问
- 检查 EdgeOne 函数日志

### 性能优化建议

1. **启用 CDN 缓存**
   - 静态资源（CSS、JS）设置长期缓存
   - API 响应设置短期缓存

2. **压缩响应**
   - 启用 Gzip/Brotli 压缩
   - 减小 HTML/JS 文件大小

3. **使用边缘节点**
   - 选择离用户最近的边缘节点
   - 减少网络延迟

---

## English

This document provides detailed instructions on how to deploy the View-IP project to different platforms.

### Option 1: Tencent Cloud EdgeOne Pages (Recommended)

#### Prerequisites
- Tencent Cloud account
- EdgeOne Pages service enabled
- EdgeOne API Token

#### Step 1: Get API Token

1. Log in to [Tencent Cloud Console](https://console.cloud.tencent.com/)
2. Navigate to EdgeOne service
3. Create a new API Token in API Key Management
4. Save the Token (shown only once)

#### Step 2: Configure Project

If using **CNB.cool Platform**:

1. Fork this project to your CNB.cool account
2. Create a private repository to store secrets
3. Reference secrets in `.cnb.yml`

If using **GitHub**:

1. Fork this project to your GitHub account
2. Add Secret in repository settings
3. Add `EDGEONE_API_TOKEN`

#### Step 3: Deploy

**Auto-deploy with CNB.cool**:
```bash
git push origin main
```

**Manual deploy with EdgeOne CLI**:
```bash
npm install -g @tencent/edgeone-cli
edgeone pages deploy ./deploy-temp -n view-ip -t YOUR_API_TOKEN
```

### Troubleshooting

See the Chinese section above for detailed troubleshooting steps.

### Performance Optimization

1. Enable CDN caching
2. Compress responses
3. Use edge nodes

