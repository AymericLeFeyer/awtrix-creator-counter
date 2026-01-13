const axios = require('axios');

exports.sendApp = async (app, body) => {
    const url = process.env.AWTRIX_URL;
    return await axios.post(`${url}/api/custom?name=${app}`, body);
}

exports.setPowerState = async (state) => {
    const url = process.env.AWTRIX_URL;
    return await axios.post(`${url}/api/power`, { power: state });
}

exports.switchApp = async (difference) => {
    const url = process.env.AWTRIX_URL;
    if (difference == 1) {
        return await axios.post(`${url}/api/nextapp`);
    } else if (difference == -1) {
        return await axios.post(`${url}/api/previousapp`);
    }
}