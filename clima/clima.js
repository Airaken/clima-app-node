const axius = require('axios');

const getClima = async(latitud, longitud) => {
    let lat = encodeURI(latitud);
    let lng = encodeURI(longitud);
    let resp = await axius.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a8953e20dcf61061b1f58a28d68d6b3c`)

    if (resp.cod === '400') {
        throw new Error(resp.message)
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}