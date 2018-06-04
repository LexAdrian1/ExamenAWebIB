import * as Joi from 'joi';

export const PACIENTE_SCHEMA = Joi.object().keys({
        nombres: Joi
            .string()
            .alphanum()
            .max(50)
            .required(),

        apellidos: Joi
            .string()
            .alphanum()
            .max(65)
            .required(),

        fechaNacimiento: Joi
            .string()
            .alphanum(),

        hijos: Joi
            .number(),

    });
