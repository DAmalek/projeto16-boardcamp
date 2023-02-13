import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gameRoutes from "./routes/games.routes.js";
import customersRoute from "./routes/custumers.routes.js";
import rentalRoute from "./routes/rentals.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use([gameRoutes, customersRoute, rentalRoute]);

app.listen(process.env.PORT, () => {
  console.log("server rodando");
});
