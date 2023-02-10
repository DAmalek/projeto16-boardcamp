import { Router } from "express";
import { insertGame, listGames } from "../controllers/games.controller.js";
import { gamesValidation } from "../middlewares/games.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { schemaGames } from "../schemas/schema.games.js";

const gameRoutes = Router();

gameRoutes.post(
  "/games",
  validateSchema(schemaGames),
  gamesValidation,
  insertGame
);
gameRoutes.get("/games", listGames);

export default gameRoutes;
