import { Router } from "express";
import { custumersValidation } from "../middlewares/custumers.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaCustumers } from "../schemas/schema.custumers.js";

const customersRoute = Router();

customersRoute.get("/customers");
customersRoute.post(
  "/custumers",
  validateSchema(schemaCustumers),
  custumersValidation
);
customersRoute.put("/customers");

export default customersRoute;
