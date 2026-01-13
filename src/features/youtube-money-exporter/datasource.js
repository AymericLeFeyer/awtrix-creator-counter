const axios = require('axios');

exports.fetchYouTubeMoneyExporterData = async () => {
    const url = process.env.YOUTUBE_MONEY_EXPORTER_URL;

    const response = await axios.get(`${url}/api/`)
    
    return response.data;
}

exports.refreshData = async () => {
    const url = process.env.YOUTUBE_MONEY_EXPORTER_URL;

    await axios.get(`${url}/api/instagram`);
    await axios.get(`${url}/api/discord`);
    await axios.get(`${url}/api/youtube`);

    return this.fetchYouTubeMoneyExporterData()
}