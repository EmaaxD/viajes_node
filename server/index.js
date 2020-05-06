const express = require('express');
const path = require('path');
const app = express();

const configs = require('./config');
const routes = require('./routes/routes');

require('dotenv').config({ path: 'variables.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    const fecha = new Date().getFullYear();
    res.locals.fechaActual = fecha;
    res.locals.ruta = req.path;

    return next();
});
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

const config = configs[app.get('env')];
app.locals.titulo = config.nombresitio;

// db.authenticate()
//     .then(() => console.log('DB conectada'))
//     .catch(error => console.error(`DB Error ${error}`))

routes(app);

app.listen(configs.port, configs.host, function () {
    console.log(`servidor escuchando http://${configs.host}:${configs.port}`);
})