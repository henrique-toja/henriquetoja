// ========== ESTILO MINIMALISTA MODERNO COM TOQUE NEON ==========
const chatStyles = `
:root {
  --cyber-bg: #11171e;
  --cyber-panel: #18202b;
  --cyber-border: #00ffe7;
  --cyber-neon: #00ffe7;
  --cyber-neon2: #00baff;
  --cyber-neon3: #39ff14;
  --cyber-text: #e6f9fa;
  --cyber-placeholder: #7befff;
}
body {
  background: linear-gradient(135deg, #11171e 0%, #1a2333 100%);
}
.cyber-chat-box {
  background: var(--cyber-panel);
  border-radius: 18px;
  border: 1.5px solid var(--cyber-border);
  max-width: 400px;
  width: 96vw;
  margin: 40px auto;
  box-shadow: 0 0 15px #00ffe72e, 0 6px 32px 0 #000b;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.25s;
}
.cyber-chat-header {
  display: flex;
  align-items: center;
  padding: 10px 19px 7px 19px;
  background: transparent;
  border: none;
  position: relative;
}
.cyber-chat-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--cyber-neon2);
  border: 2px solid var(--cyber-border);
  object-fit: cover;
  margin-right: 11px;
}
.cyber-chat-username {
  font-weight: 600;
  color: var(--cyber-neon2);
  font-size: 1.09em;
  letter-spacing: 0.05em;
  margin-right: auto;
  text-shadow: 0 0 4px var(--cyber-neon2);
}
.cyber-chat-status {
  font-size: 0.93em;
  color: var(--cyber-neon);
  display: flex;
  align-items: center;
}
.cyber-chat-status .dot {
  height: 10px;
  width: 10px;
  background: linear-gradient(120deg, var(--cyber-neon), var(--cyber-neon2));
  border-radius: 50%;
  margin-right: 4px;
  animation: blink 1.6s infinite alternate;
}
@keyframes blink { to { opacity: 0.5; } }
.cyber-chat-body {
  flex: 1;
  padding: 16px 18px 8px 18px;
  background: transparent;
  overflow-y: auto;
  max-height: 45vh;
  min-height: 110px;
  font-size: 1em;
  color: var(--cyber-text);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cyber-chat-message {
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
  animation: fadeIn 0.33s;
}
.cyber-chat-message.user .cyber-chat-bubble {
  align-self: flex-end;
  background: linear-gradient(90deg, var(--cyber-neon3) 0%, var(--cyber-neon2) 100%);
  color: #1a2333;
  box.cyber-chat-message.bot .cyber-chat-bubble {
  align-self: flex-start;
  background: rgba(19,31,44,0.7);
  border: 1.5px solid var(--cyber-neon2);
  color: var(--cyber-neon);
  box-shadow: 0 0 8px 2px var(--cyber-neon2);
}
.cyber-chat-bubble {
  padding: 10px 15px;
  border-radius: 12px;
  margin-top: 1px;
  font-size: 1.04em;
  max-width:-height: 1.48;
  background: none;
  transition: box-shadow 0.2s;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.cyber-chat-input-wrap {
  display: flex;
  align-items: center;
  padding: 11px 12px;
  background: transparent;
  border-top: 1px solid var(--cyber-border);
}
#cyber-chat-msg {
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 9px 13px;
  margin-right: 12px;
  font-size: 1.04em;
  background: #121c26;
  color: var(---text);
  box-shadow: 0 0 6px var(--cyber-neon2);
  transition: border 0.2s, box-shadow 0.2s;
}
#cyber-chat-msg:focus {
  border: 1.5px solid var(--cyber-neon2);
  box-shadow: 0 0 11px 2px var(--cyber-neon2);
}
#cyber-chat-msg::placeholder {
  color: var(--cyber-placeholder);
  opacity: 1;
}
#cyber-send-btn {
  background: linear-gradient(92deg, var(--cyber-neon2), var(--cyber-neon));
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: #14212e;
  font-weight: bold;
  font-size: 1.09em;
  box-shadow: 0 0 8px var(--cyber-neon2);
  cursor: pointer;
  transition: background 0.2s, transform 0.13s;
  display: flex;
  align-items: center;
  justify-content: center;
}
#cyber-send-btn:hover {
  background: linear-gradient(90deg, var(--cyber-neon), var(--cyber-neon2));
  transform: scale(1.05);
}
@media (max-width: 600px) {
  .cyber-chat-box {
    max-width: 99vw;
    min-width: 0;
    margin: 12px 0;
  }
  .cyber-chat-header {
    padding: 8px 4px 6px 8px;
  }
  .cyber-chat-body {
    padding: 7px 3px 4px 7px;
    font-size: 0.96em;
  }
  .cyber-chat-input-wrap {
    padding: 7px 3px;
  }
}
`;

// ========== INJETAR CSS NA PÁGINA ==========
if (!document.getElementById('cyber-chat-style')) {
  const style = document.createElement('style');
  style.id = 'cyber-chat-style';
  style.textContent = chatStyles;
  document.head.appendChild(style);
}

// ========== GERAR HTML DO CHAT ==========
const chatInnerHTML = `
  <div class="cyber-chat-box">
    <div class="cyber-chat-header">
      <img src="assets/images/henriquetoja.jpg" class="cyber-chat-avatar" />
      <span class="cyber-chat-username">HenriqueToja</span>
      <span class="cyber-chat-status"><span class="dot"></span>online</span>
    </div>
    <div class="cyber-chat-body" id="cyber-chat-messages"></div>
    <div class="cyber-chat-input-wrap">
      <textarea id="cyber-chat-msg" placeholder="Digite sua mensagem..." rows="1" autocomplete="off"></textarea>
      <button id="cyber-send-btn" title="Enviar">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 21l12-9-12-9v18z"></path></svg>
      </button>
    </div>
  </div>
`;

// ========== INSERE O CHAT NO ELEMENTO JÁ EXISTENTE ==========
(function mountCyberChat() {
  const section = document.getElementById('cyber-chat-section');
  if (!section || section.hasChildNodes()) return;
  section.innerHTML = chatInnerHTML;
})();

// ========== FUNÇÕES DE INTERAÇÃO ==========
const messagesDiv = document.getElementById('cyber-chat-messages');
const input = document.getElementById('cyber-chat-msg');
const sendBtn = document.getElementById('cyber-send-btn');

if (sendBtn && input && messagesDiv) {
  sendBtn.addEventListener('click', enviarMensagem);
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  });
  input.addEventListener('input', autoResize);
}

function enviarMensagem() {
  const.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  input.value = '';
  autoResize();

  appendMessage('<span class="typing">Digitando...</span>', 'bot', true);

  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-cookies-accepted': 'yes' },
    body: JSON.stringify({ mensagem: msg })
  })
    .then(res => res.json())
    .then(data => {
      messagesDiv.removeChild(messagesDiv.lastChild);
      const resposta = data?.resposta || 'Erro na resposta';
      appendMessage(resposta, 'bot');
    })
    .catch(() => {
      messagesDiv.removeChild(messagesDiv.lastChild);
      appendMessage('Erro ao conectar com o servidor.', 'bot');
    });
}

function appendMessage(text, sender, temp = false) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `cyber-chat-message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'cyber-chat-bubble';
  bubble.innerHTML = text;
  msgDiv.appendChild(bubble);
  messagesDiv.appendChildfunction autoResize() {
  input.style.height = 'auto';
  input.style.height = (input.scrollHeight) + 'px';
}