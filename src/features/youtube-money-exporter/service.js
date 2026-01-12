const datasource = require('./datasource');
const awtrixService = require('../awtrix/service');

exports.fetchYouTubeMoneyExporterData = async () => {
    const data = await datasource.fetchYouTubeMoneyExporterData();
    const result = {
        youtube_subscribers: data.youtube.total.subscribers,
        instagram_followers: data.instagram.followers,
    }

    console.log(result)

    await awtrixService.sendApp('youtube', 
        result.youtube_subscribers.toString(),
        6491
    );

    await awtrixService.sendApp('instagram', 
        result.instagram_followers.toString(),
        8649
    );

    return result;
}