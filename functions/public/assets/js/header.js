document.getElementById('header').innerHTML = `
  <header class="header-cyber">
    <img src="assets/images/logo.webp" alt="Logo" class="header-cyber-logo" />
    <h1 class="header-cyber-title">HenriqueToja <span class="header-cyber-sub">Teste</span></h1>
  </header>
`;

if (!document.getElementById('header-cyber-style')) {
  const style = document.createElement('style');
  style.id = 'header-cyber-style';
  style.textContent = `
    .header-cyber {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px 0 10px 0;
      background: linear-gradient(92deg, #171a29 80%, #ff00cc 130%);
      border-bottom: 2.5px solid #ff00cc;
      box-shadow: 0 2px 24px 0 #ff00cc44;
      z-index: 100;
      position: relative;
      min-height: 70px;
    }
    .header-cyber-logo {
      height: 54px;
      width: 54px;
      border-radius: 18px;
      margin-right: 18px;
      box-shadow: 0 0 14px #00ffe7, 0 0 7px #ff00cc;
      background: #232450;
      object-fit: cover;
      border: 2.5px solid #ff00cc;
    }
    .header-cyber-title {
      font-family: 'Orbitron', 'Roboto', 'Arial', sans-serif;
      color: #00ffe7;
      font-weight: 800;
      font-size: 2em;
      letter-spacing: 2.5px;
      text-shadow: 0 0 7px #00ffe7, 0 0 16px #ff00cc55;
      margin: 0;
      display: flex;
      align-items: baseline;
      gap: 12px;
    }
    .header-cyber-sub {
      font-size: 0.5em;
      color: #ff00cc;
      font-weight: 500;
      margin-left: 10px;
      letter-spacing: 2px;
      text-shadow: 0 0 6px #ff00cc99, 0 0 2px #00ffe7aa;
    }
    @media (max-width: 600px) {
      .header-cyber { padding: 8px 0 6px 0; min-height: 44px; }
      .header-cyber-logo { height: 32px; width: 32px; margin-right: 8px; border-radius: 6px; }
      .header-cyber-title { font-size: 1.1em; letter-spacing: 1.1px; gap: 6px; }
      .header-cyber-sub { font-size: 0.7em; margin-left: 6px; }
    }
  `;
  document.head.appendChild(style);
}