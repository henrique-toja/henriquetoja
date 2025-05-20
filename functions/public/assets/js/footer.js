document.getElementById('footer').innerHTML = `
  <footer class="footer-cyber">
    <div class="footer-cyber-content">
      <span class="footer-cyber-glow">© ${new Date().getFullYear()} Henrique Toja</span>
      <span class="footer-cyber-rights">Todos os direitos reservados.</span>
    </div>
  </footer>
`;

// CSS cyberpunk para o footer
if (!document.getElementById('footer-cyber-style')) {
  const style = document.createElement('style');
  style.id = 'footer-cyber-style';
  style.textContent = `
    .footer-cyber {
      width: 100vw;
      padding: 0;
      margin: 0;
      background: linear-gradient(92deg, #171a29 70%, #ff00cc 120%);
      border-top: 2px solid #ff00cc;
      box-shadow: 0 -2px 24px 0 #ff00cc44;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 58px;
      z-index: 100;
    }
    .footer-cyber-content {
      text-align: center;
      width: 100%;
      padding: 12px 0 8px 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .footer-cyber-glow {
      color: #00ffe7;
      font-weight: bold;
      font-size: 1.1em;
      text-shadow: 0 0 6px #00ffe7, 0 0 12px #ff00cc66;
      letter-spacing: 1px;
    }
    .footer-cyber-rights {
      color: #b7b7ff;
      font-size: 0.99em;
      letter-spacing: 0.08em;
      text-shadow: 0 0 4px #ff00cc44;
    }
    @media (max-width: 600px) {
      .footer-cyber-content { font-size: 0.97em; }
      .footer-cyber { min-height: 44px; }
    }
  `;
  document.head.appendChild(style);
}