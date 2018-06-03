import * as Joi from 'joi';

export const MEDICAMENTO_SCHEMA = Joi.object().keys({

    gramosAIngerir: Joi
        .alphanum()
        .max(50)
        .required(),

    nombre: Joi
        .string()
        .alphanum()
        .max(65)
        .required(),

    composicion: Joi
        .string()
        .alphanum()
        .integer(),

    usadoPara: Joi
        .string()
        .alphanum()
        .integer(),

    fechaCaducidad: Joi
        .string()
        .alphanum()
        .integer(),

    numeroPastillas: Joi
        .interger(),

});
