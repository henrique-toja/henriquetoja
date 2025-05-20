// Banner de consentimento de cookies - Cyberpunk Style
(function() {
  if (localStorage.getItem('cookiesAccepted')) return;

  const html = `
    <div class="cookie-banner-cyber">
      <div class="cookie-banner-content">
        <span>
          Este site utiliza cookies para melhorar sua experiência de navegação e recursos. Ao continuar, você concorda com nossa <a href="/privacidade" target="_blank">Política de Privacidade</a>.
        </span>
        <button id="cookie-accept-btn" class="cookie-accept-btn-cyber">Aceitar</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);

  // CSS do banner cyberpunk
  if (!document.getElementById('cookie-banner-cyber-style')) {
    const style = document.createElement('style');
    style.id = 'cookie-banner-cyber-style';
    style.textContent = `
      .cookie-banner-cyber {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        pointer-events: none;
      }
      .cookie-banner-content {
        margin: 24px;
        padding: 20px 28px;
        background: linear-gradient(100deg, rgba(16,34,43,0.96) 73%, rgba(0,170,255,0.14) 120%);
        border: 2px solid #00ffe7;
        border-radius: 16px;
        box-shadow: 0 0 24px #00aaff66, 0 0 8px #00ffe788;
        color: #e0f7fa;
        font-family: 'Inter', 'Orbitron', Arial, sans-serif;
        font-size: 1.05em;
        display: flex;
        align-items: center;
        gap: 26px;
        pointer-events: all;
        backdrop-filter: blur(11px) saturate(1.3);
        animation: cyberSlideIn 0.7s;
      }
      .cookie-banner-content a {
        color: #00ffe7;
        text-decoration: underline;
        transition: color 0.2s;
      }
      .cookie-banner-content a:hover {
        color: #00aaff;
      }
      .cookie-accept-btn-cyber {
        background: linear-gradient(90deg, #00aaff 0%, #00ffe7 90%);
        color: #031015;
        border: none;
        font-weight: 700;
        font-size: 1em;
        border-radius: 8px;
        padding: 10px 28px;
        cursor: pointer;
        box-shadow: 0 0 12px #00ffe7, 0 0 6px #00aaff99;
        margin-left: 8px;
        transition: background 0.22s, box-shadow 0.22s, transform 0.17s;
      }
      .cookie-accept-btn-cyber:hover {
        background: linear-gradient(90deg, #00ffe7 0%, #00aaff 100%);
        box-shadow: 0 0 24px #00aaffcc, 0 0 12px #00ffe7cc;
        transform: scale(1.045);
      }
      @media (max-width: 600px) {
        .cookie-banner-content {
          flex-direction: column;
          align-items: stretch;
          font-size: 0.97em;
          padding: 13px 10px;
          gap: 13px;
          margin: 13px;
        }
      }
      @keyframes cyberSlideIn {
        from { opacity: 0; transform: translateY(45px);}
        to { opacity: 1; transform: translateY(0);}
      }
    `;
    document.head.appendChild(style);
  }

  document.getElementById('cookie-accept-btn').onclick = function() {
    localStorage.setItem('cookiesAccepted', 'yes');
    document.querySelector('.cookie-banner-cyber').remove();
  };
})();

 