const Model = require('./model');

const createTestimonial = ({ nombre, correo, mensaje }) => new Promise(async (resolve, reject) => {
    try {
        const testimonial = await Model.create({ nombre, correo, mensaje });
        resolve(testimonial);
    } catch (error) {
        reject(error);
    }
});

const getTestimoniales = () => new Promise(async (resolve, reject) => {
    try {
        const testimoniales = await Model.findAll();
        resolve(testimoniales);
    } catch (error) {
        reject(error);
    }
});

const getTestimonialesLimit = limit => new Promise(async (resolve, reject) => {
    try {
        const testimoniales = await Model.findAll({ limit });
        resolve(testimoniales);
    } catch (error) {
        reject(error);
    }
});

module.exports = {
    createTestimonial,
    getTestimoniales,
    getTestimonialesLimit
}