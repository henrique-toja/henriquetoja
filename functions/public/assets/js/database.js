// Banner de consentimento de cookies - Minimalista Neon Tech
(function() {
  if (localStorage.getItem('cookiesAccepted')) {
    document.dispatchEvent(new Event('cookies:accepted'));
    return;
  }

  const html = `
    <div class="cookie-banner-cyber">
      <div class="cookie-banner-content">
        <span>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com nossa <a href="/privacidade" target="_blank">Política de Privacidade</a>.
        </span>
        <button id="cookie-accept-btn" class="cookie-accept-btn-cyber">Aceitar</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);

  if (!document.getElementById('cookie-banner-cyber-style')) {
    const style = document.createElement('style');
    style.id = 'cookie-banner-cyber-style';
    style.textContent = `
      .cookie-banner-cyber {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        pointer-events: none;
      }
      .cookie-banner-content {
        margin: 14px;
        padding: 14px 22px;
        background: rgba(18, 29, 36, 0.96);
        border: 1.5px solid #00ffe7;
        border-radius: 12px;
        box-shadow: 0 0 20px #00ffe755;
        color: #e0f7fa;
        font-family: 'Inter', 'Orbitron', Arial, sans-serif;
        font-size: 1em;
        display: flex;
        align-items: center;
        gap: 18px;
        pointer-events: all;
        backdrop-filter: blur(7px) saturate(1.2);
        animation: cyberSlideIn 0.7s;
      }
      .cookie-banner-content a {
        color: #00ffe7;
        text-decoration: underline;
        transition: color 0.2s;
      }
      .cookie-banner-content a:hover {
        color: #00baff;
      }
      .cookie-accept-btn-cyber {
        background: linear-gradient(90deg, #00baff 0%, #00ffe7 100%);
        color: #1a2333;
        border: none;
        font-weight: 600;
        font-size: 1em;
        border-radius: 7px;
        padding: 8px 22px;
        cursor: pointer;
        box-shadow: 0 0 8px #00ffe7, 0 0 3px #00baff99;
        margin-left: 8px;
        transition: background 0.18s, box-shadow 0.18s, transform 0.14s;
      }
      .cookie-accept-btn-cyber:hover {
        background: linear-gradient(90deg, #00ffe7 0%, #00baff 100%);
        box-shadow: 0 0 14px #00baffcc, 0 0 7px #00ffe7cc;
        transform: scale(1.035);
      }
      @media (max-width: 600px) {
        .cookie-banner-content {
          flex-direction: column;
          align-items: stretch;
          font-size: 0.97em;
          padding: 10px 7px;
          gap: 9px;
          margin: 7px;
        }
      }
      @keyframes cyberSlideIn {
        from { opacity: 0; transform: translateY(40px);}
        to { opacity: 1; transform: translateY(0);}
      }
    `;
    document.head.appendChild(style);
  }

  document.getElementById('cookie-accept-btn').onclick = function() {
    localStorage.setItem('cookiesAccepted', 'yes');
    document.querySelector('.cookie-banner-cyber').remove();
    document.dispatchEvent(new Event('cookies:accepted'));
  };
})();

// Função sensível (exemplo)
function sendMessageToBackend(message) {
  // ...envio AJAX/fetch aqui...
}

// Garantia de só rodar se houver consentimento
function habilitaFuncionalidades() {
  // Chame aqui tudo que depende de consentimento
  // Exemplo:
  // sendMessageToBackend('Olá');
  console.log('Consentimento ativo: funcionalidades liberadas!');
}

// Checa consentimento ao carregar a página
if (localStorage.getItem('cookiesAccepted')) {
  habilitaFuncionalidades();
} else {
  document.addEventListener('cookies:accepted', habilitaFuncionalidades);
}