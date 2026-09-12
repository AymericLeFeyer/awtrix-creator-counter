const router = require('express').Router();
const creatorStudioService = require('./features/aylabs-creator-studio/service');
const awtrixService = require('./features/awtrix/service');

router.post('/refresh', async (req, res) => {
    try {
        await awtrixService.clear();
        await creatorStudioService.refreshData();
        await creatorStudioService.fetchCreatorStudioData();

        res.json("OK");
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'Erreur lors de la récupération des données globales.' 
        });
    }
});

router.get('/ping', (req, res) => {
    res.json('pong');
});

module.exports = router;