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
      padding: 18px 0 12px 0;
      background: linear-gradient(92deg, rgba(16,34,43,0.92) 60%, rgba(0,170,255,0.18) 120%);
      border-bottom: 2px solid #00ffe7;
      box-shadow: 0 3px 24px 0 #00ffe744, 0 1px 2px #00aaff33;
      position: relative;
      min-height: 70px;
      z-index: 100;
      backdrop-filter: blur(14px) saturate(150%);
    }
    .header-cyber-logo-wrap {
      background: linear-gradient(135deg, #00ffe7 7%, #00aaff 100%);
      border-radius: 50%;
      padding: 3px;
      box-shadow: 0 0 18px #00ffe7aa, 0 0 9px #00aaff77;
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: box-shadow 0.3s;
    }
    .header-cyber-logo-wrap:hover {
      box-shadow: 0 0 32px #00ffe7cc, 0 0 18px #00aaffbb;
    }
    .header-cyber-logo {
      height: 54px;
      width: 54px;
      border-radius: 50%;
      object-fit: cover;
      background: #131c27;
      border: 2.5px solid #00aaff;
      box-shadow: 0 0 16px #00ffe7cc;
      transition: transform 0.3s;
    }
    .header-cyber-logo:hover {
      transform: scale(1.08) rotate(8deg);
      box-shadow: 0 0 32px #00ffe7cc, 0 0 18px #00aaffbb;
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
      font-size: 2.2em;
      letter-spacing: 2.5px;
      margin: 0;
      text-shadow: 0 0 9px #00ffe7, 0 0 20px #00aaff99;
      display: flex;
      align-items: center;
      gap: 12px;
      line-height: 1;
    }
    .header-cyber-sub {
      font-size: 0.5em;
      color: #00aaff;
      font-weight: 700;
      margin-left: 9px;
      letter-spacing: 2px;
      text-shadow: 0 0 10px #00aaffcc, 0 0 8px #00ffe799;
      background: linear-gradient(90deg, #00ffe7, #00aaff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header-cyber-glow-bar {
      margin-top: 8px;
      width: 82%;
      height: 4px;
      border-radius: 2px;
      background: linear-gradient(90deg, #00ffe7 5%, #00aaff 80%);
      box-shadow: 0 0 14px #00ffe7aa, 0 0 6px #00aaff66;
      animation: cyberGlowBar 2.2s infinite alternate;
    }
    @keyframes cyberGlowBar {
      from { filter: brightness(1) blur(0.5px);}
      to   { filter: brightness(1.6) blur(2px);}
    }
    @media (max-width: 600px) {
      .header-cyber-glass { padding: 8px 0 6px 0; min-height: 44px; }
      .header-cyber-logo { height: 32px; width: 32px; }
      .header-cyber-logo-wrap { margin-right: 10px; }
      .header-cyber-title { font-size: 1.13em; letter-spacing: 1.1px; gap: 6px; }
      .header-cyber-sub { font-size: 0.7em; margin-left: 5px; }
      .header-cyber-glow-bar { width: 65%; margin-top: 7px; }
    }
  `;
  document.head.appendChild(style);
}