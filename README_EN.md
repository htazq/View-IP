<div align="center">

# 🌐 View-IP

**A Modern IP Address Lookup Dashboard**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![EdgeOne Pages](https://img.shields.io/badge/Powered%20by-EdgeOne%20Pages-00a4ff)](https://edgeone.ai/)
[![CNB.cool](https://img.shields.io/badge/Deploy%20on-CNB.cool-orange)](https://cnb.cool/htazq/View-IP)

English | [简体中文](./README.md)

</div>

---

## ✨ Features

- 🌍 **IP Address Display** - Real-time display of your public IP address
- 📍 **Geolocation Information** - Shows country, city, ISP provider and more
- ⚡ **Network Connectivity Test** - Real-time latency monitoring to Google, GitHub, WeChat, etc.
- 🔄 **Multiple Output Formats** - Supports Web UI, JSON API, and plain text (curl-friendly)
- 🎨 **Modern UI** - Responsive design with dark mode support
- ⌨️ **Keyboard Shortcuts** - Press `C` to copy IP, `R` to refresh data
- 📱 **Mobile Optimized** - Perfect support for phones, tablets and mobile devices
- 🚀 **Edge Computing** - Built on Tencent Cloud EdgeOne Pages for global low-latency access

## 🎯 Live Demo

**🌐 Live Site**: [https://ip.at9.net](https://ip.at9.net)

**Source Code**:
- **GitHub**: [https://github.com/htazq/View-IP](https://github.com/htazq/View-IP)
- **CNB.cool**: [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP)

## 📸 Interface Preview

### Web Interface
- 🌐 Large display of current IP address, click to copy
- 🗺️ Geolocation info, click to view on Google Maps
- 📊 Real-time network latency monitoring (Google, GitHub, WeChat)
- 🔍 IPv4/IPv6 dual-stack support detection
- 📡 Egress IP consistency verification

### CLI Mode
```bash
# Quick IP address retrieval
curl https://ip.at9.net
# Output: 123.45.67.89

# Get detailed JSON information
curl https://ip.at9.net?format=json
```

## 🚀 Quick Start

### Deploy on Tencent Cloud EdgeOne Pages

#### Prerequisites
- Tencent Cloud account
- EdgeOne Pages service (generous free tier)
- EdgeOne API Token

#### Deployment Steps

1. **Fork this project**
   ```bash
   # Fork this project on CNB.cool or GitHub
   ```

2. **Configure API Token**
   - Log in to Tencent Cloud Console
   - Navigate to EdgeOne service
   - Create and save an API Token

3. **Configure CNB.cool CI/CD**
   
   Configure your API Token in `.cnb.yml`:
   ```yaml
   imports:
     - https://cnb.cool/your-username/my-secrets/-/blob/main/wx-envs.yml
   ```

4. **Push code to trigger deployment**
   ```bash
   git add .
   git commit -m "Deploy to EdgeOne Pages"
   git push origin main
   ```

5. **Access your application**
   - After successful deployment, EdgeOne will automatically generate a temporary domain
   - You can also bind a custom domain

## 📁 Project Structure

```
View-IP/
├── edge-functions/          # Edge functions directory
│   └── ip/
│       └── index.js        # Main function file (contains frontend and backend logic)
├── .cnb.yml                # CNB.cool CI/CD configuration
├── edgeone.json            # EdgeOne Pages configuration
├── LICENSE                 # MIT License
├── README.md               # Project documentation (Chinese)
└── README_EN.md            # Project documentation (English)
```

## 🔧 Tech Stack

- **Runtime**: EdgeOne Functions (similar to Cloudflare Workers)
- **Frontend**: Vanilla JavaScript + Tailwind CSS
- **Fonts**: Google Fonts - Inter
- **Icons**: SVG + Heroicons
- **Deployment**: Tencent Cloud EdgeOne Pages
- **CI/CD**: CNB.cool Cloud Native Platform

## 📖 API Documentation

### 1. Web Interface (Default)
```bash
GET https://ip.at9.net
```
Returns complete HTML dashboard interface

### 2. Plain Text Mode
```bash
GET https://ip.at9.net?format=text
# Or use curl/wget
curl https://ip.at9.net
```
Returns plain text IP address

### 3. JSON API
```bash
GET https://ip.at9.net?format=json
```
Returns detailed information in JSON format:
```json
{
  "ip": "123.45.67.89",
  "country": "China",
  "city": "Beijing",
  "isp": "China Telecom",
  "region": "Beijing",
  "latitude": 39.9042,
  "longitude": 116.4074,
  "asn": "AS4134"
}
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| `C` | Copy IP address to clipboard |
| `R` | Manually refresh all data |

## 🎨 Feature Highlights

### 1. Smart ISP Recognition
Automatically identifies and displays major ISPs in a friendly format:
- 🇨🇳 China Telecom / China Unicom / China Mobile
- ☁️ Alibaba Cloud / Tencent Cloud / Huawei Cloud
- 🌐 Cloudflare / AWS / Google Cloud

### 2. Network Connectivity Detection
Real-time monitoring of latency to mainstream services:
- Google (international network connectivity)
- GitHub (developer network)
- WeChat (domestic network connectivity)

### 3. IPv4/IPv6 Dual-Stack Detection
- Automatically detects IPv4 and IPv6 support
- Displays dual-stack IP addresses
- Verifies egress IP consistency

### 4. Responsive Design
- 📱 Mobile optimized
- 💻 Desktop large screen adaptation
- 🌙 Automatic dark mode (follows system)

## 🔒 Privacy Statement

- ✅ This project does not store any user data
- ✅ All queries are processed in real-time without logging
- ✅ Geolocation information is provided by EdgeOne edge nodes
- ✅ Third-party API calls (ipip.net, ipify.org) are initiated directly by the client

## 🤝 Contributing

Issues and Pull Requests are welcome!

1. Fork this project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Submit a Pull Request

## 📝 Roadmap

- [ ] Add more ISP recognition rules
- [ ] Support more third-party IP query sources
- [ ] Add history tracking feature
- [ ] Support custom theme colors
- [ ] Add more network diagnostic tools

## 📄 License

This project is licensed under the [MIT License](./LICENSE)

## 🙏 Acknowledgments

- [Tencent Cloud EdgeOne Pages](https://edgeone.ai/) - Provides edge computing platform
- [CNB.cool](https://cnb.cool/) - Provides cloud-native CI/CD platform
- [Tailwind CSS](https://tailwindcss.com/) - Provides CSS framework
- [ipip.net](https://www.ipip.net/) - Provides IP geolocation query
- [ipify.org](https://www.ipify.org/) - Provides IP address query API

## 📮 Contact

- **Project Homepage**: [https://github.com/htazq/View-IP](https://github.com/htazq/View-IP)
- **CNB.cool**: [https://cnb.cool/htazq/View-IP](https://cnb.cool/htazq/View-IP)
- **Issue Tracker**: [GitHub Issues](https://github.com/htazq/View-IP/issues)

---

<div align="center">

**If this project helps you, please give it a ⭐ Star!**

Made with ❤️ by [htazq](https://github.com/htazq)

</div>


