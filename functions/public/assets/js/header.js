document.getElementById('header').innerHTML = `
  <header class="header-cyber-glass">
    <div class="header-cyber-logo-wrap">
      <img src="assets/images/logo.webp" alt="Logo" class="header-cyber-logo" />
    </div>
    <div class="header-cyber-title-group">
      <h1 class="header-cyber-title">
        HenriqueToja
        <span class="header-cyber-sub">GPT</span>
      </h1>
      <div class="header-cyber-glow-bar"></div>
    </div>
  </header>
`;

if (!document.getElementById('header-cyber-style')) {
  const style = document.createElement('style');
  style.id = 'header-cyber-style';
  style.textContent = `
    .header-cyber-glass {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 0 9px 0;
      background: rgba(18, 29, 36, 0.95);
      border-bottom: 1.5px solid #00ffe7;
      box-shadow: 0 1px 10px 0 #00ffe73c;
      min-height: 54px;
      z-index: 100;
      backdrop-filter: blur(6px) saturate(120%);
    }
    .header-cyber-logo-wrap {
      background: linear-gradient(135deg, #00ffe7 7%, #00aaff 100%);
      border-radius: 50%;
      padding: 2px;
      box-shadow: 0 0 10px #00ffe7aa, 0 0 5px #00aaff66;
      margin-right: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: box-shadow 0. .header-cyber-logo-wrap:hover {
      box-shadow: 0 0 18px #00ffe7cc, 0 0 7px #00aaffbb;
    }
    .header-cyber-logo {
      height: 36px;
      width: 36px;
      border-radius: 50%;
      object-fit: cover;
      background: #131c27;
      border: 1.5px solid #00aaff;
      box-shadow: 0 0 7px #00ffe7bb;
      transition: transform 0.18s;
    }
    .header-cyber-logo:hover {
      transform: scale(1.06) rotate(6deg);
      box-shadow: 0 0 20px #00ffe7cc, 0 0 12px #00aaffbb;
    }
    .header-cyber-title-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }
    .header-cyber-title {
      font-family: 'Orbitron', 'Inter', 'Roboto', 'Arial', sans-serif;
      color: #00ffe7;
      font-weight: 900;
      font-size: 1.38em;
      letter-spacing: 1.1px;
      margin: 0;
      text-shadow: 0 0 6px #00ffe7, 0 0 10px #00aaff77;
      display: flex;
      align-items: center;
      gap: 7px;
      line-height: 1;
    }
    .header-cyber-sub {
      font-size: 0.48em;
      color: #00aaff;
      font-weight: 700;
      margin-left: 5px;
      letter-spacing: 1.2px;
      text-shadow: 0 0 7px #00aaffbb, 0 0 5px #00ffe766;
      background: linear-gradient(90deg, #00ffe7, #00aaff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header-cyber-glow-bar {
      margin-top: 6px;
      width: 65%;
      height: 3px;
      border-radius: 2px;
      background: linear-gradient(90deg, #00ffe7 7%, #00aaff 90%);
      box-shadow: 0 0 8px #00ffe7bb, 0 0 4px #00aaff44;
      animation: cyberGlowBar 2s infinite alternate;
    }
    @keyframes cyberGlowBar {
      from { filter: brightness(1) blur(0.3px);}
      to   { filter: brightness(1.4) blur(1.2px);}
    }
    @media (max-width: 600px) {
      .header-cyber-glass { padding: 6px 0 4px 0; min-height: 36px; }
      .header-cyber-logo { height: 22px; width: 22px; }
      .header-cyber-logo-wrap { margin-right: 7px; }
      .header-cyber-title { font-size: 0.81em; letter-spacing: 0.4px; gap: 3px; }
      .header-cyber-sub { font-size: 0.8em; margin-left: 3px; }
      .header-cyber-glow-bar { width: 38%; margin-top: 4px; }
    }
  `;
  document.head.appendChild(style);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/assets/js/service-worker.js")
      .catch(err => console.log("Service Worker registration failed:", err));
  });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  if (!document.getElementById('pwa-install-banner')) {
    const banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.innerHTML = `
      <div class="pwa-banner-cyber">
        <span>Deseja instalar o app HenriqueToja GPT?</span>
        <button id="pwa-install-btn">Instalar</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('pwa-install-btn').onclick = () => {
      banner.remove();
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
    };
  }
});

// Estilo minimalista para o banner
if (!document.getElementById('pwa-banner-cyber-style')) {
  const style = document.createElement('style');
  style.id = 'pwa-banner-cyber-style';
  style.textContent = `
    .pwa-banner-cyber {
      position: fixed;
      left: 50%; bottom: 22px; transform: translateX(-50%);
      background: #191c29f0;
      border: 1.5px solid #00ffe7;
      border-radius: 10px;
      box-shadow: 0 0 12px #00ffe777;
      color: #e0f7fa;
      display: flex;
      gap: 15px;
      align-items: center;
      padding: 9px 19px;
      z-index: 10000;
      font-size: 1em;
      font-family: 'Inter', 'Orbitron', Arial, sans-serif;
      animation: cyberSlideIn 0.7s;
    }
    .pwa-banner-cyber button {
      background: linear-gradient(90deg, #00baff, #00ffe7);
      border: none;
      color: #1a2333;
      font-weight: 600;
      border-radius: 6px;
      padding: 6px 16px;
      cursor: pointer;
      box-shadow: 0 0 7px #00ffe7;
      transition: background 0.18s, box-shadow 0.18s, transform 0.14s;
    }
    .pwa-banner-cyber button:hover {
      background: linear-gradient(90deg, #00ffe7, #00baff);
      box-shadow: 0 0 16px #00baffcc, 0 0 8px #00ffe7cc;
      transform: scale(1.035);
    }
    @keyframes cyberSlideIn {
      from { opacity: 0; transform: translate(-50%, 40px);}
      to { opacity: 1; transform: translate(-50%, 0);}
    }
  `;
  document.head.appendChild(style);
}