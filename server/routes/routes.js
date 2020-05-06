// componentes
const inicio = require('./../components/inicio/network');
const nosotros = require('./../components/nosotros/network');
const viajes = require('./../components/viajes/network');
const testimoniales = require('./../components/testimoniales/network');

const router = server => {
    server.get('/', inicio);
    
    server.use('/nosotros', nosotros);
    server.use('/viajes', viajes);
    server.use('/testimoniales', testimoniales);
}

module.exports = router;