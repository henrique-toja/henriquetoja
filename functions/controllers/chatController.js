import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { default as ModelClient } from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';
import { isUnexpected } from '@azure-rest/ai-inference';
import { stringify } from 'csv-stringify/sync';
import cookieParser from 'cookie-parser';
import express from 'express';

// Configurar variáveis de ambiente
dotenv.config();

// Corrigir __dirname no contexto ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração da API do Azure
const token = process.env.TOKEN;
if (!token) {
  console.error("Erro: TOKEN não definido no arquivo .env");
  process.exit(1);
}
const endpoint = "https://models.github.ai/inference"; // Ajuste conforme necessário
const model = "openai/gpt-4.1";
const client = ModelClient(endpoint, new AzureKeyCredential(token));

// Função para identificar usuário por cookie
function getUserId(req, res) {
  let userId = req.cookies.user_id;
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 12);
    res.cookie('user_id', userId, { httpOnly: true, maxAge: 31536000000 });
  }
  return userId;
}

// Função para garantir diretório
function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Inicializa o app Express
const app = express();
app.use(express.json());
app.use(cookieParser());

app.post('/api/chat', async (req, res) => {
  // Verificar consentimento
  const consent = req.headers['x-cookies-accepted'] === 'yes';
  if (!consent) {
    return res.status(403).json({ erro: 'Consentimento de cookies não fornecido.' });
  }

  const { mensagem } = req.body;
  if (!mensagem) return res.status(400).json({ erro: 'Mensagem não enviada.' });

  const userId = getUserId(req, res);

  let resposta = '';
  try {
    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          {
            role: "system",
            content: "Você é uma IA que conversa com outra IA. Sempre responda de forma extremamente breve, direta, sem floreios e com no máximo uma ou duas frases. Mantenha tom técnico e objetivo."
          },
          { role: "user", content: mensagem }
        ],
        temperature: 0.7,
        top_p: 0.9,
        model: model
      }
    });

    if (isUnexpected(response)) {
      return res.status(500).json({ erro: response.body.error });
    }

    resposta = response.body.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro na API GPT' });
  }

  // Salvar no CSV
  const dir = path.join(__dirname, '../database/chats');
  ensureDirSync(dir);
  const filePath = path.join(dir, `${userId}.csv`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'timestamp,mensagem,resposta\n');
  }
  const row = {
    timestamp: new Date().toISOString(),
    mensagem,
    resposta
  };
  const csvLine = stringify([row], { header: false });
  fs.appendFile(filePath, csvLine, (err) => {
    if (err) console.error('Erro ao escrever CSV:', err);
  });

  res.json({ resposta });
});

export default app;

// Para rodar standalone, descomente abaixo:
// app.listen(3000, () => console.log('Servidor rodando na porta 3000'));