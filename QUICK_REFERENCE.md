# 快速参考 / Quick Reference

## 🌐 项目链接

| 类型 | 链接 |
|------|------|
| 🌍 **在线演示** | [https://ip.at9.net](https://ip.at9.net) |
| 💻 **GitHub 仓库** | [https://github.com/htazq/View-IP](https://github.com/htazq/View-IP) |
| ☁️ **CNB.cool 仓库** | [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP) |

## 🚀 快速命令

### 获取 IP 地址
```bash
# 纯文本格式
curl https://ip.at9.net

# JSON 格式
curl https://ip.at9.net?format=json

# 指定文本格式
curl https://ip.at9.net?format=text
```

### Git 操作
```bash
# 克隆项目
git clone https://github.com/htazq/View-IP.git

# 添加远程仓库
git remote add github https://github.com/htazq/View-IP.git
git remote add cnb https://cnb.cool/htazq/View-IP.git

# 推送到两个平台
git push github main
git push cnb main

# 同时推送到两个平台
git remote add all https://github.com/htazq/View-IP.git
git remote set-url --add --push all https://github.com/htazq/View-IP.git
git remote set-url --add --push all https://cnb.cool/htazq/View-IP.git
git push all main
```

## 📦 部署配置

### CNB.cool 部署
- **配置文件**: `.cnb.yml`
- **镜像**: `tencentcom/deploy-eopages:latest`
- **项目名**: `worker-ip`
- **触发**: 推送到 `main` 分支自动部署

### GitHub Actions 部署
- **配置文件**: `.github/workflows/deploy.yml`
- **镜像**: `tencentcom/deploy-eopages:latest`
- **项目名**: `worker-ip`
- **触发**: 推送到 `main` 分支或手动触发
- **必需 Secret**: `EDGEONE_API_TOKEN`

## 🔑 环境变量

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `EDGEONE_API_TOKEN` | EdgeOne API Token | ✅ 是 |

### 配置位置

**GitHub**:
- Settings → Secrets and variables → Actions → New repository secret

**CNB.cool**:
- 在私有仓库 `my-secrets` 中创建 `wx-envs.yml`
- 在 `.cnb.yml` 中通过 `imports` 引用

## 📁 项目结构

```
View-IP/
├── edge-functions/ip/index.js    # 主函数（前后端一体）
├── .cnb.yml                      # CNB.cool CI/CD 配置
├── .github/workflows/deploy.yml  # GitHub Actions 配置
├── README.md                     # 中文文档
├── README_EN.md                  # 英文文档
├── CONTRIBUTING.md               # 贡献指南
├── DEPLOYMENT.md                 # 部署指南
└── LICENSE                       # MIT 协议
```

## 🎯 核心功能

- ✅ 显示公网 IP 地址
- ✅ 地理位置信息（国家、城市、ISP）
- ✅ 网络延迟测试（Google、GitHub、微信）
- ✅ IPv4/IPv6 双栈检测
- ✅ 多种输出格式（HTML、JSON、Text）
- ✅ 响应式设计 + 深色模式
- ✅ 快捷键支持（C 复制、R 刷新）

## 🛠️ 技术栈

- **运行时**: EdgeOne Functions
- **前端**: Vanilla JavaScript + Tailwind CSS
- **部署**: EdgeOne Pages
- **CI/CD**: CNB.cool + GitHub Actions

## 📖 文档导航

| 文档 | 说明 |
|------|------|
| [README.md](./README.md) | 项目说明（中文） |
| [README_EN.md](./README_EN.md) | 项目说明（英文） |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | 贡献指南 |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | 部署指南 |
| [OPENSOURCE_GUIDE.md](./OPENSOURCE_GUIDE.md) | 开源发布指南 |
| [UPDATE_SUMMARY.md](./UPDATE_SUMMARY.md) | 更新总结 |

## ⌨️ 快捷键

| 快捷键 | 功能 |
|--------|------|
| `C` | 复制 IP 地址 |
| `R` | 刷新数据 |

## 🔗 API 端点

| 端点 | 说明 | 示例 |
|------|------|------|
| `/` | Web 界面 | https://ip.at9.net |
| `/?format=text` | 纯文本 | https://ip.at9.net?format=text |
| `/?format=json` | JSON API | https://ip.at9.net?format=json |
| `/app` | 前端 JS | https://ip.at9.net/app |

## 📞 联系方式

- **Issues**: [GitHub Issues](https://github.com/htazq/View-IP/issues)
- **作者**: [htazq](https://github.com/htazq)

---

**提示**: 将此文件加入书签，方便快速查找常用命令和链接！

