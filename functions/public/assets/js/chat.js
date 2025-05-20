// ========== ESTILOS CYBERPUNK ==========
const chatStyles = `
:root {
  --cyber-bg: #12141c;
  --cyber-panel: #191c29;
  --cyber-border: #054060;
  --cyber-neon: #00ffe7;    /* Neon Green */
  --cyber-neon2: #00aaff;   /* Neon Blue */
  --cyber-neon3: #39ff14;   /* Neon Green 2 */
  --cyber-text: #e0e0e0;
  --cyber-secondary: #b7b7ff;
  --cyber-avatar-shadow: 0 0 10px var(--cyber-neon2), 0 0 4px var(--cyber-neon);
}
body {
  background: linear-gradient(135deg, #0f1121 0%, #1b193a 100%);
}
.cyber-chat-box {
  background: var(--cyber-panel);
  border-radius: 18px;
  border: 2px solid var(--cyber-neon2);
  max-width: 400px;
  width: 96vw;
  box-shadow: 0 4px 32px 0 #000b, 0 0 24px 2px var(--cyber-neon2);
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  overflow: hidden;
}

.cyber-chat-header {
  display: flex;
  align-items: center;
  padding: 14px 18px;
  background: linear-gradient(92deg, var(--cyber-panel) 70%, var(--cyber-neon2) 100%);
  border-bottom: 2px solid var(--cyber-border);
  position: relative;
}

.cyber-chat-avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  box-shadow: var(--cyber-avatar-shadow);
  border: 2px solid var(--cyber-neon);
  object-fit: cover;
  margin-right: 14px;
  background: #2a2c44;
}

.cyber-chat-username {
  font-weight: 700;
  color: var(--cyber-neon);
  font-size: 1.15em;
  letter-spacing: 0.07em;
  margin-right: auto;
  text-shadow: 0 0 6px var(--cyber-neon);
}

.cyber-chat-status {
  font-size: 0.97em;
  color: var(--cyber-neon2);
  display: flex;
  align-items: center;
}

.cyber-chat-status .dot {
  height: 12px;
  width: 12px;
  background: linear-gradient(120deg, var(--cyber-neon), var(--cyber-neon2));
  border-radius: 50%;
  margin-right: 6px;
  animation: blink 1.6s infinite alternate;
}

@keyframes blink {
  to { opacity: 0.4; }
}

.cyber-chat-body {
  flex: 1;
  padding: 18px 18px 8px 18px;
  background: linear-gradient(130deg, #191c29 0%, #221e34 100%);
  overflow-y: auto;
  max-height: 40vh;
  min-height: 120px;
  font-size: 1em;
  color: var(--cyber-text);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cyber-chat-message {
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
  animation: fadeIn 0.4s;
}

.cyber-chat-message.user .cyber-chat-bubble {
  align-self: flex-end;
  background: linear-gradient(90deg, var(--cyber-neon3) 0%, var(--cyber-neon2) 100%);
  color: #222;
  box-shadow: 0 0 8px var(--cyber-neon3);
}

.cyber-chat-message.bot .cyber-chat-bubble {
  align-self: flex-start;
  background: linear-gradient(90deg, #242a3a 0%, #1d2032 100%);
  border: 1.5px solid var(--cyber-neon2);
  color: var(--cyber-neon);
  box-shadow: 0 0 12px 2px var(--cyber-neon2);
}

.cyber-chat-bubble {
  padding: 11px 16px;
  border-radius: 14px;
  margin-top: 2px;
  font-size: 1.05em;
  max-width: 280px;
  word-break: break-word;
  line-height: 1.5;
  position: relative;
  animation: popIn 0.25s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes popIn {
  0% { transform: scale(0.88); opacity: 0.7; }
  80% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); }
}

.cyber-chat-input-wrap {
  display: flex;
  align-items: center;
  padding: 14px 12px;
  background: var(--cyber-panel);
  border-top: 2px solid var(--cyber-border);
}

#cyber-chat-msg {
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 10px 14px;
  margin-right: 10px;
  font-size: 1.04em;
  background: #22243a;
  color: var(--cyber-text);
  box-shadow: 0 0 7px var(--cyber-neon2);
  transition: border 0.2s, box-shadow 0.2s;
}

#cyber-chat-msg:focus {
  border: 2px solid var(--cyber-neon);
  box-shadow: 0 0 12px 2px var(--cyber-neon2);
}

#cyber-send-btn {
  background: linear-gradient(92deg, var(--cyber-neon2), var(--cyber-neon3));
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 8px 15px;
  color: #262626;
  font-weight: bold;
  font-size: 1.1em;
  box-shadow: 0 0 10px var(--cyber-neon2);
  cursor: pointer;
  transition: background 0.25s, transform 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

#cyber-send-btn:hover {
  background: linear-gradient(90deg, var(--cyber-neon2), var(--cyber-neon));
  transform: scale(1.08);
}
@media (max-width: 600px) {
  .cyber-chat-box {
    max-width: 99vw;
    min-width: 0;
  }
  .cyber-chat-header {
    padding: 10px 8px;
  }
  .cyber-chat-body {
    padding: 8px 4px 4px 8px;
    font-size: 0.98em;
  }
  .cyber-chat-input-wrap {
    padding: 8px 4px;
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

// ========== GERAR HTML DO CHAT (SEM ENVOLVER O #cyber-chat-section) ==========
const chatInnerHTML = `
  <div class="cyber-chat-box">
    <div class="cyber-chat-header">
      <img src="assets/images/henriquetoja.jpg" class="cyber-chat-avatar" />
      <span class="cyber-chat-username">HenriqueToja</span>
      <span class="cyber-chat-status"><span class="dot"></span>online</span>
    </div>
    <div class="cyber-chat-body" id="cyber-chat-messages"></div>
    <div class="cyber-chat-input-wrap">
      <textarea id="cyber-chat-msg" placeholder="Digite sua mensagem..." rows="1"></textarea>
      <button id="cyber-send-btn" title="Enviar">
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 21l12-9-12-9v18z"></path></svg>
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
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  input.value = '';
  autoResize();

  appendMessage('<span class="typing">Digitando...</span>', 'bot', true);

  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
  messagesDiv.appendChild(msgDiv);
  if (!temp) messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function autoResize() {
  input.style.height = 'auto';
  input.style.height = (input.scrollHeight) + 'px';
}