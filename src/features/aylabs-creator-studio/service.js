const datasource = require('./datasource');
const awtrixService = require('../awtrix/service');

// Le studio publie null pour une source désactivée ou jamais collectée.
const display = (value) => value?.toString() ?? "???";

exports.fetchCreatorStudioData = async () => {
    const data = await datasource.fetchExport();
    const result = {
        youtube_subscribers: data.youtube?.total?.subscribers,
        instagram_followers: data.instagram?.followers,
        discord_members: data.discord?.members
    }

    console.log(result)

    await awtrixService.sendApp('youtube', 
        display(result.youtube_subscribers),
        6491
    );

    await awtrixService.sendApp('instagram', 
        display(result.instagram_followers),
        8649
    );

    await awtrixService.sendApp('discord', 
        display(result.discord_members),
        25435
    );

    return result;
}

exports.refreshData = async () => {
    return await datasource.refreshData();
}   
