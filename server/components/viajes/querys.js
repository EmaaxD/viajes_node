const Model = require('./model');

const getViajes = () => new Promise(async (resolve, reject) => {
    try {
        const viajes = await Model.findAll();
        resolve(viajes);
    } catch (error) {
        reject(error);
    }
});

const getViaje = viajeId => new Promise(async (resolve, reject) => {
    try {
        const viaje = await Model.findByPk(viajeId);
        resolve(viaje);
    } catch (error) {
        reject(error);
    }
});

const getViajesLimit = limit => new Promise(async (resolve, reject) => {
    try {
        const viajes = await Model.findAll({ limit });
        resolve(viajes);
    } catch (error) {
        reject(error);
    }
});

module.exports = {
    getViajes,
    getViaje,
    getViajesLimit
}