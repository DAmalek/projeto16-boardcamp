import { Router } from "express";
import {
  deleteRental,
  finishRental,
  insertRental,
  listRentals,
} from "../controllers/rentals.controller.js";
import {
  rentalsValidation,
  validateFinish,
} from "../middlewares/rentals.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaRental } from "../schemas/schema.rentals.js";

const rentalRoute = Router();

rentalRoute.get("/rentals", listRentals);
rentalRoute.post(
  "/rentals",
  validateSchema(schemaRental),
  rentalsValidation,
  insertRental
);
rentalRoute.post("/rentals/:id/return", validateFinish, finishRental);
rentalRoute.delete("/rentals/:id", deleteRental);

export default rentalRoute;
