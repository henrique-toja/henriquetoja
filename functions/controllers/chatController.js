import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { default as ModelClient } from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';
import { isUnexpected } from '@azure-rest/ai-inference';

// Configurar variáveis de ambiente
dotenv.config();

// Corrigir __dirname no contexto ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validar token
const token = process.env.TOKEN;
if (!token) {
  console.error("Erro: TOKEN não definido no arquivo .env");
  process.exit(1);
}

// Configuração da API do Azure
const endpoint = "https://models.github.ai/inference"; // Confirme se esse é o endpoint real
const model = "openai/gpt-4.1";

// Criar cliente do Azure
const client = ModelClient(endpoint, new AzureKeyCredential(token));

// Criar diretório para salvar mensagens
const dir = path.join(__dirname, '../database/txt');
fs.mkdirSync(dir, { recursive: true });

// Exportar função controladora
export default (app) => {
  app.post('/api/chat', async (req, res) => {
    const { mensagem } = req.body;
    const arquivo = path.join(dir, `msg-${Date.now()}.txt`);
    fs.writeFileSync(arquivo, mensagem);

    try {
      const response = await client.path("/chat/completions").post({
        body: {
          messages: [
            { role: "system", content: "Você é um assistente útil." },
            { role: "user", content: mensagem }
          ],
          temperature: 1.0,
          top_p: 1.0,
          model: model
        }
      });

      if (isUnexpected(response)) {
        return res.status(500).json({ erro: response.body.error });
      }

      const resposta = response.body.choices[0].message.content;
      res.json({ resposta });

    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro na API GPT' });
    }
  });
};


const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');
const { stringify } = require('csv-stringify/sync');
const app = express();

app.use(express.json());
app.use(cookieParser());

function getUserId(req, res) {
  let userId = req.cookies.user_id;
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 12);
    res.cookie('user_id', userId, { httpOnly: true, maxAge: 31536000000 });
  }
  return userId;
}

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
}

app.post('/api/chat', async (req, res) => {
  // Exija consentimento explícito no cabeçalho, body, ou cookie
  const consent = req.headers['x-cookies-accepted'] === 'yes';

  if (!consent) {
    return res.status(403).json({ erro: 'Consentimento de cookies não fornecido.' });
  }

  const mensagem = req.body.mensagem || '';
  const userId = getUserId(req, res);

  const resposta = "Resposta do GPT para: " + mensagem;

  const dir = path.join(__dirname, 'database', 'chats');
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

// app.listen(3000, () => console.log('Servidor rodando na porta 3000'));