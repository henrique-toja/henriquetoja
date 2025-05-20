document.addEventListener("DOMContentLoaded", function() {
  const main = document.getElementById('main');
  if (main) {
    main.innerHTML = `
      <main class="main-cyber">
        <section id="cyber-chat-section"></section>
      </main>
    `;

    if (!document.getElementById('main-cyber-style')) {
      const style = document.createElement('style');
      style.id = 'main-cyber-style';
      style.textContent = `
        .main-cyber {
          min-height: 100vh;
          width: 100vw;
          background: #11171e;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        #cyber-chat-section {
          width: 100%;
          max-width: 420px;
          background: rgba(12, 23, 34, 0.93);
          border-radius: 18px;
          box-shadow: 0 0 16px #00ffe755, 0 0 5px #00baff44;
          border: 1.5px solid #00ffe7;
          padding: 36px 28px 28px 28px;
          margin: 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(3px);
          transition: box-shadow 0.2s, border 0.2s;
        }
        #cyber-chat-section:focus-within, #cyber-chat-section:hover {
          box-shadow: 0 0 26px #00ffe7aa, 0 0 12px #00baff88;
          border-color: #03ff9e;
        }
        @media (max-width: 600px) {
          .main-cyber {
            min-height: 100dvh;
            padding: 0;
          }
          #cyber-chat-section {
            max-width: 98vw;
            padding: 20px 7px 15px 7px;
            margin: 8px 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  } else {
    console.error('Elemento #main não encontrado!');
  }
});