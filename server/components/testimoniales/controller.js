const Querys = require('./querys');

const createTestimonial = testimonial => new Promise(async (resolve, reject) => {
    let errores = [];

    if (!testimonial) {
        reject(new Error('utiliza el formulario'));
        return false;
    }else {
        if (testimonial.nombre == '') {
            errores.push({ mensaje: 'Agrega tu nombre'});
        }

        if (testimonial.correo == '') {
            errores.push({ mensaje: 'Agrega tu correo'});
        }

        if (testimonial.mensaje == '') {
            errores.push({ mensaje: 'Agrega el mensaje'});
        }
    }

    if (errores.length > 0) {
        resolve({ errores, testimonial });
        return false;
    }

    try {
        const testimonialCreated = await Querys.createTestimonial(testimonial);
        resolve(testimonialCreated);
    } catch (error) {
        reject(error);
    }
});

const getTestimoniales = () => new Promise(async (resolve, reject) => {
    try {
        const testimoniales = await Querys.getTestimoniales();
        resolve(testimoniales);
    } catch (error) {
        reject(error);
    }
});


module.exports = {
    createTestimonial,
    getTestimoniales
}