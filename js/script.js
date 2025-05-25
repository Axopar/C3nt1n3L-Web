document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messagesContainer = document.getElementById("chat-messages");
  const typingIndicator = document.getElementById("typing-indicator");

  // Autoajustar altura del textarea
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  });

  // Envío de mensaje
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = input.value.trim();

    if (message !== "") {
      appendMessage("user", message);
      input.value = "";
      input.style.height = "auto";

      simulateResponse(message);
    }
  });

  // Agrega el mensaje al contenedor
  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "user" ? "user" : "sofia");

    const content = document.createElement("p");
    content.textContent = text;

    messageDiv.appendChild(content);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Simulación de respuesta de Sofía
  function simulateResponse(userInput) {
    showTyping();

    setTimeout(() => {
      hideTyping();
      const response = generateResponse(userInput);
      appendMessage("sofia", response);
    }, 1200);
  }

  // Mostrar indicador de escritura
  function showTyping() {
    typingIndicator.classList.add("active");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Ocultar indicador de escritura
  function hideTyping() {
    typingIndicator.classList.remove("active");
  }

  // Simulación lógica de respuesta (aquí puede integrarse backend/IA)
  function generateResponse(userInput) {
    // Aquí puedes conectar a una API o usar lógica local
    return `Sofía ha recibido tu consulta: "${userInput}". En breve te ofrecerá una respuesta jurídica clara, estructurada y contundente.`;
  }
});
// server.js (proxy seguro)
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Protegida en .env

app.post('/api/sofia', async (req, res) => {
    const { message } = req.body;

    const prompt = `Actúa como Sofía, la IA legal. Responde en español, con precisión jurídica, claridad estructural y tono elocuente. Mensaje del usuario: "${message}"`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.3,
            }),
        });

        const data = await response.json();
        const output = data.choices?.[0]?.message?.content;
        res.json({ reply: output });
    } catch (error) {
        console.error('Error desde OpenAI:', error);
        res.status(500).json({ error: 'Error al procesar la respuesta legal' });
    }
});

app.listen(3000, () => {
    console.log('Proxy Sofía en puerto 3000');
});

