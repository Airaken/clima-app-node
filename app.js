// const axius = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))

// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp);
// }).catch(e => console.log(e));

// clima.getClima(8.750983, -75.8785348).then(resp => {
//     console.log(resp);
// }).catch(e => console.log(e));

// let encodeUrl = encodeURI(argv.direccion);
// axius.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
//     .then(resp => {
//         let location = resp.data.results[0];
//         let coors = location.geometry.location;
//         console.log('Direccion' + location.formatted_address);
//         console.log('lat: ' + coors.lat);
//         console.log('lng ' + coors.lng);
//         // console.log(resp.status);
//     })
//     .catch(e => console.log('Error!', e));