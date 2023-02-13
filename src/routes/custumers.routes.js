import { Router } from "express";
import { insertCustomer } from "../controllers/custumer.Controller.js";
import { custumersValidation } from "../middlewares/custumers.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaCustumers } from "../schemas/schema.custumers.js";

const customersRoute = Router();

customersRoute.get("/customers");
customersRoute.post(
  "/customers",
  validateSchema(schemaCustumers),
  custumersValidation,
  insertCustomer
);
customersRoute.put("/customers");

export default customersRoute;
