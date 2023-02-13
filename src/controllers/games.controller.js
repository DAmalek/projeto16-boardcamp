import { db } from "../config/database.connection.js";

export async function insertGame(req, res) {
  const { name, image, stockTotal, pricePerDay } = req.body;

  try {
    const game = await db.query(
      'INSERT INTO games ("name", "image", "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)',
      [name, image, stockTotal, pricePerDay]
    );

    console.log(game);

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function listGames(req, res) {
  try {
    const games = await db.query(`SELECT * FROM games;`);

    return res.send(games.rows);
  } catch (error) {
    return res.status(500).send(error);
  }
}
