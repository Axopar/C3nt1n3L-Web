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
