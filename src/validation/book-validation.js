import Joi from "joi"
const create = Joi.object({
    title: Joi.string().required(),
    type: Joi.string().required(),
    author: Joi.string().required(),
    number_of_pages: Joi.number().optional(),
    publisher: Joi.string().required(),
})

const update = Joi.object({
    title: Joi.string().optional(),
    type: Joi.string().optional(),
    author: Joi.string().optional(),
    number_of_pages: Joi.number().optional(),
    publisher: Joi.string().optional(),
})

const id = Joi.string().required()

export default {
    create,
    update,
    id
}