document.getElementById('main').innerHTML = `
  <main class="main-cyber">
    <section id="cyber-chat-section"></section>
  </main>
`;

// Opcional: estilo básico para o main, integrando ao tema cyberpunk do chat
if (!document.getElementById('main-cyber-style')) {
  const style = document.createElement('style');
  style.id = 'main-cyber-style';
  style.textContent = `
    .main-cyber {
      min-height: 100vh;
      width: 100vw;
      background: linear-gradient(135deg, #0f1121 0%, #1b193a 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 600px) {
      .main-cyber {
        min-height: 100dvh;
        padding: 0;
      }
    }
  `;
  document.head.appendChild(style);
}