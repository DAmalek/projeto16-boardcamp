import { Router } from "express";

const gameRoutes = Router();

gameRoutes.post("/games");
gameRoutes.get("/games");

export default gameRoutes;
