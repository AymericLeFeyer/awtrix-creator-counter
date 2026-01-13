const datasource = require('./datasource');

exports.sendApp = async (appname, text, icon) => {
    const body = {
        text: text,
        icon: icon,
        duration: 60,
    };
    return await datasource.sendApp(appname, body);
}

exports.clear = async () => {
    return await datasource.sendApp("", null);
}