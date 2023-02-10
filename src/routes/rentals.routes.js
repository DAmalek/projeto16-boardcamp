import { Router } from "express";

const rentalRoute = Router();

rentalRoute.get("/rentals");
rentalRoute.post("/rentals");
rentalRoute.put("/rentals");
rentalRoute.delete("/rentals");
