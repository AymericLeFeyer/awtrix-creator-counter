const cron = require('node-cron');
const youtubeMoneyExporterService = require('./features/youtube-money-exporter/service');
const awtrixService = require('./features/awtrix/service');

exports.startAllCrons = async () => {
    // First launch
    await awtrixService.clear();
    await youtubeMoneyExporterService.fetchYouTubeMoneyExporterData();

    cron.schedule('5 * * * *', () => {
        youtubeMoneyExporterService.fetchYouTubeMoneyExporterData();
    });
}    