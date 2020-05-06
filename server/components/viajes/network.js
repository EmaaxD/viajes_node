const express = require('express');
const Controller = require('./controller');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const viajes = await Controller.getViajes();
        res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes
        });
    } catch (error) {
        console.error(`[component viajes][all] ${error}`);
    }
});

router.get('/:viajeId', async(req, res) => {
    const { viajeId } = req.params;
    try {
        const viaje = await Controller.getViaje(viajeId);
        res.render('viaje', { viaje });
    } catch (error) {
        console.error(`[component viajes][viajeId] ${error}`);
    }
});

module.exports = router;