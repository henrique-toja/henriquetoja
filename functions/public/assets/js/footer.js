document.getElementById('footer').innerHTML = `
  <footer class="footer-cyber">
    <div class="footer-cyber-content">
      <span class="footer-cyber-glow">© ${new Date().getFullYear()} Henrique Toja</span>
      <span class="footer-cyber-rights">Todos os direitos reservados.</span>
    </div>
  </footer>
`;

if (!document.getElementById('footer-cyber-style')) {
  const style = document.createElement('style');
  style.id = 'footer-cyber-style';
  style.textContent = `
    .footer-cyber {
      width: 100vw;
      background: #141a23;
      border-top: 1.5px solid #00ffe7;
      box-shadow: 0 -1px 16px #00ffe733;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      z-index: 100;
      position: relative;
    }
    .footer-cyber-content {
      text-align: center;
      width: 100%;
      padding: 10px 0 6px 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .footer-cyber-glow {
      color: #00ffe7;
      font-weight: 600;
      font-size: 1.03em;
      text-shadow: 0 0 6px #00ffe7, 0 0 10px #00aaff99;
      letter-spacing: 0.5px;
      filter: drop-shadow(0 0 2px #00ffe7);
    }
    .footer-cyber-rights {
      color: #00baff;
      font-size: 0.97em;
      letter-spacing: 0.06em;
      text-shadow: 0 0 4px #00aaff77;
    }
    @media (max-width: 600px) {
      .footer-cyber-content { font-size: 0.95em; }
      .footer-cyber { min-height: 36px; }
    }
  `;
  document.head.appendChild(style);
}