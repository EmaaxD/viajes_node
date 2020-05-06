const express = require('express');
const { getViajesLimit } = require('./../viajes/querys');
const { getTestimonialesLimit } = require('./../testimoniales/querys');
const router = express.Router();

router.get('/', async (req, res) => {
    const limit = 3;
    try {
        const viajes = await getViajesLimit(limit);
        const testimoniales = await getTestimonialesLimit(limit);
        res.render('index', {
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.error(`[get inicio] ${error}`);
    }
});

module.exports = router;