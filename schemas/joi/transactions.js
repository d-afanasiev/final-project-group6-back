import Joi from 'joi';

const currentBallanseJoiSchema = Joi.object({
  currentBalance: Joi.number().required(),
});

const addTransactionJoiSchema = Joi.object({
  type: Joi.string().required().valid('income', 'expense'),
  date: Joi.date().required(),
  category: Joi.string()
    .required()
    .valid(
      'transport',
      'goods',
      'health',
      'alco',
      'fun',
      'house',
      'tech',
      'utilities',
      'sport',
      'education',
      'other',
      'salary',
      'freelance',
    ),
  amount: Joi.number().min(1).required(),
});

const categoryTransactionJoiSchema = Joi.object({
  category: Joi.array().items(
    Joi.string().valid(
      'transport',
      'goods',
      'health',
      'alco',
      'fun',
      'house',
      'tech',
      'utilities',
      'sport',
      'education',
      'other',
      'salary',
      'freelance',
    ),
  ),
});

const typeTransactionJoiSchema = Joi.object({
  type: Joi.string().required().valid('income', 'expense'),
});

export default {
  currentBallanseJoiSchema,
  addTransactionJoiSchema,
  categoryTransactionJoiSchema,
  typeTransactionJoiSchema,
};
