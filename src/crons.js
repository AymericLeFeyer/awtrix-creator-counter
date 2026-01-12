const cron = require('node-cron');
const youtubeMoneyExporterService = require('./features/youtube-money-exporter/service');

exports.startAllCrons = () => {
    // First launch
    youtubeMoneyExporterService.fetchYouTubeMoneyExporterData();

    cron.schedule('0 * * * *', () => {
        youtubeMoneyExporterService.fetchYouTubeMoneyExporterData();
    });
}    