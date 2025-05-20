// Troque pela sua chave Gemini!
const GEMINI_API_KEY = "SUA_CHAVE_AQUI";

document.getElementById('send-btn').addEventListener('click', enviarMensagem);
document.getElementById('chat-msg').addEventListener('keypress', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    enviarMensagem();
  }
});

function enviarMensagem() {
  const msgInput = document.getElementById('chat-msg');
  const respostaDiv = document.getElementById('chat-resposta');
  const mensagem = msgInput.value.trim();

  if (!mensagem) return;

  respostaDiv.classList.remove('hidden');
  respostaDiv.innerHTML = `<span class="typing">Digitando...</span>`;

  fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: mensagem }]
        }]
      })
    }
  )
    .then(res => res.json())
    .then(data => {
      const resposta = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Erro na resposta';
      respostaDiv.innerHTML = `<span class="resposta">${resposta}</span>`;
      msgInput.value = '';
    })
    .catch(() => {
      respostaDiv.innerHTML = `<span class="resposta erro">Erro ao conectar com a API Gemini.</span>`;
    });
}