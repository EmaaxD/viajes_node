module.exports = {
    development: {
        nombresitio: 'Agrencia de viajes [development]'
    },
    production: {
        nombresitio: 'Agrencia de viajes'
    },
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
}