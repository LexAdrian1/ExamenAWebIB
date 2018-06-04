import * as Joi from 'joi';

export const MEDICAMENTO_SCHEMA = Joi.object().keys({

    gramosAIngerir: Joi
        .string()
        .alphanum()
        .required(),

    nombre: Joi
        .string()
        .alphanum()
        .max(65)
        .required(),

    composicion: Joi
        .string()
        .alphanum(),

    usadoPara: Joi
        .string()
        .alphanum(),

    fechaCaducidad: Joi
        .date(),

    numeroPastillas: Joi
        .number(),

});
