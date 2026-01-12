require('dotenv').config();

const express = require('express');
const crons = require('./src/crons');

const app = express();
const PORT = process.env.PORT || 4444;

// Middleware pour lire le JSON
app.use(express.json());

// --- CRONS ---
crons.startAllCrons();

// --- DÉMARRAGE ---
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});