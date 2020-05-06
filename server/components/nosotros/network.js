const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
});

module.exports = router;