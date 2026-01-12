const axios = require('axios');

exports.fetchYouTubeMoneyExporterData = async () => {
    const url = process.env.YOUTUBE_MONEY_EXPORTER_URL;
    const response = await axios.get(`${url}/api/`)
    return response.data;
}