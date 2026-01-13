const router = require('express').Router();
const youtubeMoneyExporterService = require('./features/youtube-money-exporter/service');
const awtrixService = require('./features/awtrix/service');

router.post('/refresh', async (req, res) => {
    try {
        await awtrixService.clear();
        await youtubeMoneyExporterService.fetchYouTubeMoneyExporterData();

        res.json("OK");
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'Erreur lors de la récupération des données globales.' 
        });
    }
});

module.exports = router;