const Querys = require('./querys');

const getViajes = () => new Promise(async (resolve, reject) => {
    try {
        const viajes = Querys.getViajes();
        resolve(viajes);
    } catch (error) {
        reject(error);
    }
});

const getViaje = viajeId => new Promise(async (resolve, reject) => {
    if (!viajeId) {
        reject(new Error('se necesita un id'));
    }

    try {
        const viaje = await Querys.getViaje(viajeId);
        resolve(viaje);
    } catch (error) {
        reject(error);
    }
});

module.exports = {
    getViajes,
    getViaje
}