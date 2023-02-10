import joi from "joi";

export const schemaGames = joi.object({
  name: joi.string().min(1).required(),
  image: joi.string().min(1).required(),
  stockTotal: joi.number().greater(0).min(1).required(),
  pricePerDay: joi.number().greater(0).min(1).required(),
});
