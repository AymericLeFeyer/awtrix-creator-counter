require('dotenv').config();

const express = require('express');
const crons = require('./src/crons');

const app = express();
const PORT = process.env.PORT || 4444;

// Middleware pour lire le JSON
app.use(express.json());
app.use('/api/', require('./src/controller'));
app.use('/api/awtrix', require('./src/features/awtrix/controller'));

// --- CRONS ---
crons.startAllCrons();

// --- DÉMARRAGE ---
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});