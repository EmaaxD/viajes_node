const express = require('express');
const Controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const testimoniales = await Controller.getTestimoniales();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.error(`[get testimoniales] ${error}`);
    }
});

router.post('/', async (req, res) => {
    const { body: testimonial } = req;
    try {
        const testimonialCreated = await Controller.createTestimonial(testimonial);

        if (testimonialCreated.errores) {
            res.render('testimoniales', {
                errores: testimonialCreated.errores,
                nombre: testimonialCreated.testimonial.nombre,
                correo: testimonialCreated.testimonial.correo,
                mensaje: testimonialCreated.testimonial.mensaje
            });
        }else {
            res.redirect('/testimoniales');
        }
    } catch (error) {
        console.error(`[post testimonial] ${error}`);
    }
});

module.exports = router;