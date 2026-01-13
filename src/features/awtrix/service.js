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

exports.turnOff = async () => {
    return await datasource.setPowerState(false);
}

exports.turnOn = async () => {
    return await datasource.setPowerState(true);
}

exports.nextApp = async () => {
    return await datasource.switchApp(1);
}

exports.previousApp = async () => {
    return await datasource.switchApp(-1);
}