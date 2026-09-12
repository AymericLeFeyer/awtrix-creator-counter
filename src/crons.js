const cron = require('node-cron');
const creatorStudioService = require('./features/aylabs-creator-studio/service');
const awtrixService = require('./features/awtrix/service');

exports.startAllCrons = async () => {
    // First launch
    await awtrixService.clear();
    await creatorStudioService.fetchCreatorStudioData();

    cron.schedule('5 * * * *', () => {
        creatorStudioService.fetchCreatorStudioData();
    });
}    