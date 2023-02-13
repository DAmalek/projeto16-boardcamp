import { Router } from "express";
import {
  insertCustomer,
  listCustomers,
  listOneCustomer,
  updateCustomer,
} from "../controllers/custumer.Controller.js";
import { custumersValidation } from "../middlewares/custumers.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaCustumers } from "../schemas/schema.custumers.js";

const customersRoute = Router();

customersRoute.get("/customers", listCustomers);
customersRoute.get("/customers/:id", listOneCustomer);
customersRoute.post(
  "/customers",
  validateSchema(schemaCustumers),
  custumersValidation,
  insertCustomer
);
customersRoute.put(
  "/customers/:id",
  validateSchema(schemaCustumers),

  updateCustomer
);

export default customersRoute;
