<div align="center">

# 🌐 View-IP

**一个现代化的 IP 地址查询仪表板**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![EdgeOne Pages](https://img.shields.io/badge/Powered%20by-EdgeOne%20Pages-00a4ff)](https://edgeone.ai/)
[![CNB.cool](https://img.shields.io/badge/Deploy%20on-CNB.cool-orange)](https://cnb.cool/htazq/View-IP)

[English](./README_EN.md) | 简体中文

</div>

---

## ✨ 功能特性

- 🌍 **IP 地址显示** - 实时显示您的公网 IP 地址
- 📍 **地理位置信息** - 显示国家、城市、ISP 运营商等详细信息
- ⚡ **网络连通性测试** - 实时检测到 Google、GitHub、微信等服务的延迟
- 🔄 **多种输出格式** - 支持 Web 界面、JSON API、纯文本（适配 curl）
- 🎨 **现代化 UI** - 响应式设计，支持深色模式
- ⌨️ **快捷键支持** - 按 `C` 复制 IP，按 `R` 刷新数据
- 📱 **移动端适配** - 完美支持手机、平板等移动设备
- 🚀 **边缘计算** - 基于腾讯云 EdgeOne Pages，全球低延迟访问

## 🎯 在线演示

**🌐 在线访问**: [https://ip.at9.net](https://ip.at9.net)

**源码仓库**：
- **GitHub**: [https://github.com/htazq/View-IP](https://github.com/htazq/View-IP)
- **CNB.cool**: [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP)

## 📸 界面预览

### Web 界面
- 🌐 大字号显示当前 IP 地址，点击即可复制
- 🗺️ 地理位置信息，点击可在 Google Maps 查看
- 📊 实时网络延迟监控（Google、GitHub、微信）
- 🔍 IPv4/IPv6 双栈支持检测
- 📡 出口 IP 一致性验证

### CLI 模式
```bash
# 快速获取 IP 地址
curl https://ip.at9.net
# 输出: 123.45.67.89

# 获取 JSON 格式详细信息
curl https://ip.at9.net?format=json
```

## 🚀 快速开始

### 在腾讯云 EdgeOne Pages 部署

#### 前置要求
- 腾讯云账号
- EdgeOne Pages 服务（免费额度充足）
- EdgeOne API Token

#### 部署步骤

1. **Fork 本项目**
   ```bash
   # 在 CNB.cool 或 GitHub 上 Fork 本项目
   ```

2. **配置 API Token**
   - 登录腾讯云控制台
   - 进入 EdgeOne 服务
   - 创建 API Token 并保存

3. **配置 CNB.cool CI/CD**

   在 `.cnb.yml` 中配置您的 API Token：
   ```yaml
   imports:
     - https://cnb.cool/your-username/my-secrets/-/blob/main/wx-envs.yml
   ```

4. **推送代码触发部署**
   ```bash
   git add .
   git commit -m "Deploy to EdgeOne Pages"
   git push origin main
   ```

5. **访问您的应用**
   - 部署成功后，EdgeOne 会自动生成临时域名
   - 您也可以绑定自定义域名

## 📁 项目结构

```
View-IP/
├── edge-functions/          # 边缘函数目录
│   └── ip/
│       └── index.js        # 主函数文件（包含前后端逻辑）
├── .cnb.yml                # CNB.cool CI/CD 配置
├── edgeone.json            # EdgeOne Pages 配置
├── LICENSE                 # MIT 开源协议
└── README.md               # 项目说明文档
```

## 🔧 技术栈

- **运行时**: EdgeOne Functions（类似 Cloudflare Workers）
- **前端框架**: 原生 JavaScript + Tailwind CSS
- **字体**: Google Fonts - Inter
- **图标**: SVG + Heroicons
- **部署平台**: 腾讯云 EdgeOne Pages
- **CI/CD**: CNB.cool 云原生平台

## 📖 API 文档

### 1. Web 界面（默认）
```bash
GET https://ip.at9.net
```
返回完整的 HTML 仪表板界面

### 2. 纯文本模式
```bash
GET https://ip.at9.net?format=text
# 或使用 curl/wget
curl https://ip.at9.net
```
返回纯文本 IP 地址

### 3. JSON API
```bash
GET https://ip.at9.net?format=json
```
返回 JSON 格式的详细信息：
```json
{
  "ip": "123.45.67.89",
  "country": "China",
  "city": "Beijing",
  "isp": "中国电信 China Telecom",
  "region": "Beijing",
  "latitude": 39.9042,
  "longitude": 116.4074,
  "asn": "AS4134"
}
```

## ⌨️ 快捷键

| 快捷键 | 功能 |
|--------|------|
| `C` | 复制 IP 地址到剪贴板 |
| `R` | 手动刷新所有数据 |

## 🎨 功能亮点

### 1. 智能 ISP 识别
自动识别并友好显示主流运营商：
- 🇨🇳 中国电信 / 联通 / 移动
- ☁️ 阿里云 / 腾讯云 / 华为云
- 🌐 Cloudflare / AWS / Google Cloud

### 2. 网络连通性检测
实时监控到主流服务的延迟：
- Google（国际网络连通性）
- GitHub（开发者网络）
- 微信（国内网络连通性）

### 3. IPv4/IPv6 双栈检测
- 自动检测 IPv4 和 IPv6 支持情况
- 显示双栈 IP 地址
- 验证出口 IP 一致性

### 4. 响应式设计
- 📱 移动端优化
- 💻 桌面端大屏适配
- 🌙 自动深色模式（跟随系统）

## 🔒 隐私说明

- ✅ 本项目不存储任何用户数据
- ✅ 所有查询均实时处理，不记录日志
- ✅ 地理位置信息由 EdgeOne 边缘节点提供
- ✅ 第三方 API 调用（ipip.net、ipify.org）由客户端直接发起

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📝 开发计划

- [ ] 添加更多 ISP 识别规则
- [ ] 支持更多第三方 IP 查询源
- [ ] 添加历史记录功能
- [ ] 支持自定义主题颜色
- [ ] 添加更多网络诊断工具

## 📄 开源协议

本项目采用 [MIT License](./LICENSE) 开源协议

## 🙏 致谢

- [腾讯云 EdgeOne Pages](https://edgeone.ai/) - 提供边缘计算平台
- [CNB.cool](https://cnb.cool/) - 提供云原生 CI/CD 平台
- [Tailwind CSS](https://tailwindcss.com/) - 提供 CSS 框架
- [ipip.net](https://www.ipip.net/) - 提供 IP 地理位置查询
- [ipify.org](https://www.ipify.org/) - 提供 IP 地址查询 API

## 📮 联系方式

- **项目主页**: [https://github.com/htazq/View-IP](https://github.com/htazq/View-IP)
- **CNB.cool**: [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP)
- **问题反馈**: [GitHub Issues](https://github.com/htazq/View-IP/issues)

---

<div align="center">

**如果这个项目对您有帮助，请给个 ⭐ Star 支持一下！**

Made with ❤️ by [htazq](https://github.com/htazq)

</div>
