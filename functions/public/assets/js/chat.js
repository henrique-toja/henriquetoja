document.getElementById('chat-section').innerHTML = `
  <div class="chat-app">
    <div class="chat-header">
      <img src="assets/images/henriquetoja.jpg" class="chat-avatar" alt="Avatar" />
      <span class="chat-title">HenriqueToja</span>
    </div>
    <div id="chat-messages" class="chat-messages"></div>
    <div class="chat-input-area">
      <textarea id="chat-msg" placeholder="Digite sua mensagem..." rows="1"></textarea>
      <button id="send-btn">➤</button>
    </div>
  </div>
`;

const msgInput = document.getElementById('chat-msg');
const messagesContainer = document.getElementById('chat-messages');

document.getElementById('send-btn').addEventListener('click', enviarMensagem);
msgInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    enviarMensagem();
  }
});

function renderMensagem(mensagem, tipo) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${tipo}`;
  msgDiv.innerText = mensagem;
  messagesContainer.appendChild(msgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function enviarMensagem() {
  const mensagem = msgInput.value.trim();
  if (!mensagem) return;

  renderMensagem(mensagem, 'user');
  msgInput.value = '';
  renderMensagem('Digitando...', 'typing');

  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mensagem })
  })
    .then(res => res.json())
    .then(data => {
      document.querySelector('.chat-message.typing')?.remove();
      renderMensagem(data.resposta || 'Erro na resposta', 'bot');
    })
    .catch(() => {
      document.querySelector('.chat-message.typing')?.remove();
      renderMensagem('Erro ao conectar com o servidor.', 'erro');
    });
}
