const axios = require('axios');

const client = () => axios.create({
    baseURL: process.env.AYLABS_CREATOR_STUDIO_URL,
    headers: { Authorization: `Bearer ${process.env.AYLABS_CREATOR_STUDIO_KEY}` },
});

exports.fetchExport = async () => {
    const response = await client().get('/api/export');

    return response.data;
}

// Seul /api/export exige la clé : les routes de collecte sont ouvertes côté studio.
exports.refreshData = async () => {
    const results = await Promise.allSettled([
        client().post('/api/analytics/collect'),
        client().post('/api/instagram/collect'),
        client().post('/api/integrations/discord/collect'),
    ]);

    results
        .filter((result) => result.status === 'rejected')
        .forEach((result) => console.error(`Collecte échouée : ${result.reason.config?.url} (${result.reason.response?.status ?? result.reason.message})`));

    return this.fetchExport();
}
