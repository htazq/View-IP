
// --- 辅助函数 ---

function getFriendlyISP(asn, org) {
  if (!org) return 'Unknown ISP';
  const orgUpper = org.toUpperCase();
  if (/CHINANET|CHINA TELECOM/i.test(orgUpper)) return '中国电信 China Telecom';
  if (/UNICOM|CNCGROUP/i.test(orgUpper)) return '中国联通 China Unicom';
  if (/CHINA MOBILE|CMNET/i.test(orgUpper)) return '中国移动 China Mobile';
  if (/ALIBABA|ALIYUN/i.test(orgUpper)) return '阿里云 Alibaba Cloud';
  if (/TENCENT/i.test(orgUpper)) return '腾讯云 Tencent Cloud';
  if (/CLOUDFLARE/i.test(orgUpper)) return 'Cloudflare';
  if (/GOOGLE/i.test(orgUpper)) return '谷歌云 Google Cloud';
  if (/AMAZON|AWS/i.test(orgUpper)) return '亚马逊云 AWS';
  return org.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function getFlagEmoji(countryCode) {
  if (!countryCode) return '🌍';
  return String.fromCodePoint(...countryCode.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}

// --- HTML 生成器 (骨架) ---
function generateHTML(data) {
  const jsonStr = JSON.stringify(data);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My IP Dashboard</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌐</text></svg>">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
    .glass { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.6); }
    .dark-mode { background-color: #0f172a; color: #e2e8f0; }
    .dark-mode .glass { background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255,255,255,0.08); }
    .dot-flashing {
      position: relative; width: 6px; height: 6px; border-radius: 5px; background-color: #6366f1; color: #6366f1;
      animation: dot-flashing 1s infinite linear alternate; animation-delay: .5s;
    }
    .dot-flashing::before, .dot-flashing::after {
      content: ''; display: inline-block; position: absolute; top: 0;
      width: 6px; height: 6px; border-radius: 5px; background-color: #6366f1; color: #6366f1;
      animation: dot-flashing 1s infinite alternate;
    }
    .dot-flashing::before { left: -10px; animation-delay: 0s; }
    .dot-flashing::after { left: 10px; animation-delay: 1s; }
    @keyframes dot-flashing { 0% { background-color: #6366f1; } 50%, 100% { background-color: #e0e7ff; } }
    .animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
  </style>
  <script>
    window.__DATA__ = ${jsonStr};
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark-mode');
    }
  </script>
</head>
<body class="min-h-screen flex flex-col text-slate-800 transition-colors duration-300 opacity-0" style="animation: fadeIn 0.5s forwards">

  <nav class="w-full p-4 md:p-6 flex justify-between items-center max-w-5xl mx-auto">
    <div class="font-bold text-xl tracking-tight flex items-center gap-2 select-none">
      <span>🌐</span> <span>My IP Dashboard</span>
    </div>
    <div class="text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded-md font-bold font-mono">
      Pro
    </div>
  </nav>

  <main class="flex-grow w-full max-w-5xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
    
    <div id="hero-card" class="glass rounded-3xl shadow-lg shadow-blue-500/5 p-8 md:p-12 text-center border-t-4 border-blue-500 relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      <h2 class="text-slate-400 uppercase tracking-[0.2em] text-xs font-bold mb-6">Current Connection</h2>
      
      <div class="relative group cursor-pointer select-none" id="ip-container" title="Click to Copy (C)">
        <div id="ip-display" class="text-4xl md:text-7xl font-bold text-slate-800 dark:text-white tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-95 font-mono">
          ${data.ip}
        </div>
        <div class="absolute -right-6 top-0 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-slate-300">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
        </div>
      </div>
      
      <div class="flex flex-wrap justify-center gap-3 mt-8 text-sm font-medium">
        <a href="${data.mapUrl}" target="_blank" class="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700 rounded-full flex items-center gap-2 transition-colors group/loc">
          <span>${data.flag}</span> <span class="group-hover/loc:underline decoration-blue-400 decoration-2 underline-offset-2">${data.country} ${data.city}</span>
        </a>
        <div class="px-4 py-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <span>${data.isp}</span>
        </div>
        <div class="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 font-mono">
          ${data.asn}
        </div>
        <div class="px-4 py-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full font-mono flex items-center gap-1" title="Data Center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          ${data.colo}
        </div>
        <div class="px-4 py-1.5 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full font-mono text-xs flex items-center">
          ${data.protocol}
        </div>
      </div>

      <div class="mt-8 max-w-md mx-auto">
        <div class="bg-slate-900/5 border border-slate-200/60 dark:bg-black/20 dark:border-white/5 rounded-lg p-3 flex items-center justify-between gap-2 group hover:border-slate-300 dark:hover:border-white/10 transition-colors">
           <code class="font-mono text-xs text-slate-500 dark:text-slate-400 flex-grow text-left truncate select-all">
             <span class="select-none text-slate-400 opacity-50 mr-2">></span>curl https://${data.hostname}
           </code>
           <button id="btn-copy-cli" class="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded text-slate-400 hover:text-slate-600 transition-colors" title="Copy Command">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
           </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      
      <div class="glass rounded-2xl shadow-sm p-6 flex flex-col relative overflow-hidden h-full">
        <div class="absolute top-0 right-0 p-4 opacity-[0.05] text-slate-900 dark:text-white">
            <svg class="w-24 h-24 transform translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
        </div>
        <h3 class="text-slate-500 text-xs font-bold uppercase mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span> Local Network
        </h3>
        <div id="ipip-content" class="flex-grow flex flex-col justify-center min-h-[80px]">
            <div class="flex items-center space-x-2">
                <div class="dot-flashing"></div>
                <span class="text-xs text-slate-400 ml-4">Querying ipip.net...</span>
            </div>
        </div>
        <div class="mt-4 text-[10px] text-slate-400 text-right">Source: ipip.net</div>
      </div>

      <div class="glass rounded-2xl shadow-sm p-6 flex flex-col h-full">
        <h3 class="text-slate-500 text-xs font-bold uppercase mb-5 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-pink-500"></span> Connectivity Stack
        </h3>
        <ul class="space-y-4 text-sm flex-grow">
            <li class="flex justify-between items-center">
                <span class="text-slate-600 dark:text-slate-400">出口 IP 一致性</span>
                <span id="ip-ipify" class="font-mono text-right"><span class="dot-flashing inline-block"></span></span>
            </li>
            <li class="flex justify-between items-center">
                <span class="text-slate-600 dark:text-slate-400">IPv4 Support</span>
                <span id="ip-v4" class="font-mono text-xs text-right truncate max-w-[120px] ml-2"><span class="dot-flashing inline-block"></span></span>
            </li>
            <li class="flex justify-between items-center">
                <span class="text-slate-600 dark:text-slate-400">IPv6 Support</span>
                <span id="ip-v6" class="font-mono text-xs text-right truncate max-w-[120px] ml-2"><span class="dot-flashing inline-block"></span></span>
            </li>
        </ul>
        <div class="mt-4 text-[10px] text-slate-400 text-right">Source: ipify.org</div>
      </div>

      <div class="glass rounded-2xl shadow-sm p-6 flex flex-col h-full">
        <div class="flex justify-between items-center mb-5">
            <h3 class="text-slate-500 text-xs font-bold uppercase flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Latency
            </h3>
            <span class="text-[10px] bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 px-1.5 py-0.5 rounded text-slate-400">5s Refresh</span>
        </div>
        <ul class="space-y-3 text-sm flex-grow">
          <li class="flex justify-between items-center p-2 -mx-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg cursor-pointer transition-colors group" id="btn-check-google">
            <span class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><img src="https://www.google.com/favicon.ico" class="w-4 h-4 opacity-70 group-hover:opacity-100" onerror="this.style.display='none'"> Google</span>
            <span id="status-google" class="font-mono text-xs text-slate-400">Waiting...</span>
          </li>
          <li class="flex justify-between items-center p-2 -mx-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg cursor-pointer transition-colors group" id="btn-check-github">
            <span class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><img src="https://github.com/favicon.ico" class="w-4 h-4 opacity-70 group-hover:opacity-100 bg-white rounded-full" onerror="this.style.display='none'"> GitHub</span>
            <span id="status-github" class="font-mono text-xs text-slate-400">Waiting...</span>
          </li>
          <li class="flex justify-between items-center p-2 -mx-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg cursor-pointer transition-colors group" id="btn-check-wechat">
             <span class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><img src="https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico" class="w-4 h-4 opacity-70 group-hover:opacity-100" onerror="this.style.display='none'"> WeChat</span>
             <span id="status-wechat" class="font-mono text-xs text-slate-400">Waiting...</span>
          </li>
        </ul>
      </div>

    </div>
    
    <footer class="text-center pt-8 pb-4 space-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
      <div class="text-xs font-mono text-slate-400 max-w-lg mx-auto break-all">
        <span class="select-none mr-1">UA:</span> ${data.userAgent}
      </div>
      
      <div class="flex justify-center items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest">
        <span class="flex items-center gap-1"><kbd class="border border-slate-300 dark:border-slate-600 rounded px-1 font-sans">C</kbd> Copy IP</span>
        <span class="flex items-center gap-1"><kbd class="border border-slate-300 dark:border-slate-600 rounded px-1 font-sans">R</kbd> Refresh</span>
      </div>
      
      <div class="text-[10px] text-slate-300">
          Generated by EdgeOne Functions · <span id="refresh-timer">Auto checking...</span>
      </div>
    </footer>
  </main>

  <script src="/app"></script>
</body>
</html>`;
}

const FRONTEND_JS = `
(function() {
    const DATA = window.__DATA__;
    const IP = DATA.ip;
    const HOSTNAME = DATA.hostname;

    document.getElementById('ip-container').addEventListener('click', function() {
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(IP).then(() => {
            const el = document.getElementById('ip-display');
            const originalText = el.innerText;
            const originalClasses = el.className;
            el.innerText = 'Copied!';
            el.className = 'text-4xl md:text-7xl font-bold text-green-500 tracking-tight transition-all duration-200 scale-110 animate-fade-in font-sans';
            setTimeout(() => {
                el.innerText = originalText;
                el.className = originalClasses;
            }, 1000);
        });
    });
    
    document.getElementById('btn-copy-cli').addEventListener('click', function(e) {
        const text = 'curl https://' + HOSTNAME;
        navigator.clipboard.writeText(text);
        const btn = e.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<span class="text-green-500 text-xs font-bold">✓</span>';
        setTimeout(() => btn.innerHTML = originalHTML, 1000);
    });

    document.addEventListener('keydown', (e) => {
        // 只有单独按下 C 键时才触发复制，避免与 Ctrl+C 冲突
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            if (!navigator.clipboard) return;
            navigator.clipboard.writeText(IP);
            const el = document.getElementById('ip-container');
            el.click(); 
        }
        if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
            const timer = document.getElementById('refresh-timer');
            timer.innerText = 'Manual Refreshing...';
            timer.className = 'text-blue-500 font-bold';
            runAllChecks();
            checkStack('https://api4.ipify.org?format=json', 'ip-v4');
            checkStack('https://api6.ipify.org?format=json', 'ip-v6');
            // 刷新 ipip.net 数据
            refreshIPIPNet();
            setTimeout(() => {
                timer.innerText = 'Auto checking...';
                timer.className = '';
            }, 1500);
        }
    });

    const bindCheck = (id, key) => {
       const el = document.getElementById(id);
       if(el) el.onclick = () => manualCheck(key);
    };
    bindCheck('btn-check-google', 'google');
    bindCheck('btn-check-github', 'github');
    bindCheck('btn-check-wechat', 'wechat');

    // ipip.net 数据刷新函数
    function refreshIPIPNet() {
        const el = document.getElementById('ipip-content');
        el.innerHTML = '<div class="flex items-center space-x-2"><div class="dot-flashing"></div><span class="text-xs text-slate-400 ml-4">Refreshing ipip.net...</span></div>';
        
        fetch('https://myip.ipip.net/json?t=' + Date.now())
          .then(res => res.json())
          .then(data => {
            if (data.ret === 'ok') {
                const loc = data.data.location; 
                const locationStr = loc.slice(1).join(' ').replace(/中国/g, ''); 
                el.innerHTML = \`
                    <div class="text-2xl font-bold text-slate-800 dark:text-white mb-1 animate-fade-in tracking-tight">\${data.data.ip}</div>
                    <div class="text-sm text-slate-500 dark:text-slate-400 animate-fade-in">\${locationStr}</div>
                \`;
            } else {
                el.innerHTML = '<span class="text-red-400 text-xs">Parse Error</span>';
            }
          })
          .catch(() => {
            el.innerHTML = '<div class="text-amber-500 text-xs leading-relaxed">AdBlocker Detected<br><span class="opacity-70">Allow requests to ipip.net</span></div>';
          });
    }

    // 初始加载 ipip.net 数据
    refreshIPIPNet();

    fetch('https://api.ipify.org?format=json&t=' + Date.now())
      .then(res => res.json())
      .then(data => {
        const isMatch = data.ip === IP;
        const el = document.getElementById('ip-ipify');
        if(isMatch) {
            el.innerHTML = '<span class="text-green-500 font-bold text-xs px-2 py-1 bg-green-50 dark:bg-green-900/30 rounded-md" title="第三方 IP 检测与 本站 IP 匹配，网络出口一致">✅ Consistent</span>';
        } else {
            el.innerHTML = '<span class="text-amber-500 text-xs font-mono">' + data.ip + '</span> <span class="text-[10px] text-red-400 block">Proxy Detected</span>';
        }
      })
      .catch(e => document.getElementById('ip-ipify').innerHTML = '<span class="text-red-400 text-xs">Timeout</span>');

    async function checkStack(url, id) {
        const el = document.getElementById(id);
        try {
            const controller = new AbortController();
            setTimeout(() => controller.abort(), 3000);
            const res = await fetch(url + '&t=' + Date.now(), { signal: controller.signal });
            const data = await res.json();
            el.innerHTML = '<span class="text-blue-600 dark:text-blue-400 font-medium animate-fade-in">' + data.ip + '</span>';
            el.title = data.ip;
        } catch (e) {
            el.innerHTML = '<span class="text-slate-300 dark:text-slate-600 text-[10px]">N/A</span>';
        }
    }
    checkStack('https://api4.ipify.org?format=json', 'ip-v4');
    checkStack('https://api6.ipify.org?format=json', 'ip-v6');

    const sites = {
        google: 'https://www.google.com/favicon.ico',
        github: 'https://github.com/favicon.ico',
        wechat: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico'
    };

    function checkLatency(siteKey) {
        const url = sites[siteKey];
        const start = Date.now();
        const img = new Image();
        const el = document.getElementById('status-' + siteKey);
        
        img.onload = () => {
            const d = Date.now() - start;
            let colorClass = 'text-emerald-500';
            if (d > 200) colorClass = 'text-yellow-500';
            if (d > 500) colorClass = 'text-orange-500';
            el.innerHTML = \`<span class="\${colorClass} font-bold animate-fade-in">\${d} ms</span>\`;
        };
        img.onerror = () => {
             const d = Date.now() - start;
             if (d > 2000) {
                 el.innerHTML = '<span class="text-red-500 font-bold text-xs">Timeout</span>';
             } else {
                 el.innerHTML = '<span class="text-red-400 text-xs">Error</span>';
             }
        };
        
        setTimeout(() => {
            if(!img.complete) {
                img.src = "";
                el.innerHTML = '<span class="text-red-500 font-bold text-xs">Timeout</span>';
            }
        }, 2500);

        img.src = url + '?' + Date.now();
    }

    function runAllChecks() {
        checkLatency('google');
        setTimeout(() => checkLatency('github'), 200);
        setTimeout(() => checkLatency('wechat'), 400);
    }
    
    function manualCheck(key) {
        const el = document.getElementById('status-' + key);
        el.innerHTML = '<span class="dot-flashing inline-block scale-75"></span>';
        checkLatency(key);
    }

    runAllChecks();
    setInterval(runAllChecks, 5000);
})();
`;

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 参考用户提供的 interface EORequest
  const eo = request.eo || {};
  const geo = eo.geo || {};

  // 优先使用 eo.clientIp，其次尝试头部
  const clientIP = eo.clientIp ||
    request.headers.get('x-client-ip') ||
    request.headers.get('x-forwarded-for') ||
    'Unknown IP';

  const userAgent = request.headers.get('User-Agent') || '';

  // === 1. CLI / API 模式 ===
  if (/curl|wget/i.test(userAgent) || url.searchParams.get('format') === 'text') {
    return new Response(clientIP + '\n', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // 获取 ISP 信息
  const friendlyISP = geo.cisp || getFriendlyISP(geo.asn, geo.organization);

  // JSON 格式 API
  if (url.searchParams.get('format') === 'json') {
    return new Response(JSON.stringify({
      ip: clientIP,
      country: geo.countryName || geo.countryCodeAlpha2 || 'Unknown',
      city: geo.cityName || 'Unknown',
      isp: friendlyISP,
      region: geo.regionName || geo.regionCode || 'Unknown',
      latitude: geo.latitude || 0,
      longitude: geo.longitude || 0,
      asn: geo.asn || 'Unknown',
      // Debug info
      debug: {
        eo: eo,
        headers: Object.fromEntries(request.headers)
      }
    }, null, 2), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  // === 2. 前端资源路由 ===
  if (url.pathname === '/app') {
    return new Response(FRONTEND_JS, {
      headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
    });
  }

  // === 3. 默认路由: 返回 HTML 页面 ===
  const serverData = {
    ip: clientIP,
    city: geo.cityName || 'Unknown City',
    country: geo.countryName || 'Unknown Country',
    flag: getFlagEmoji(geo.countryCodeAlpha2),
    asn: geo.asn ? `AS${geo.asn}` : 'AS N/A',
    colo: geo.regionName || 'EdgeOne',
    protocol: url.protocol.replace(':', '').toUpperCase(),
    isp: friendlyISP,
    userAgent: userAgent,
    hostname: url.hostname,
    mapUrl: (geo.latitude && geo.longitude)
      ? `https://www.google.com/maps?q=${geo.latitude},${geo.longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${geo.cityName || ''},+${geo.countryName || ''}`
  };

  const html = generateHTML(serverData);
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
