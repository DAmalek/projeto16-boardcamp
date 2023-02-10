import { db } from "../config/database.connection";

export async function insertGame(req, res) {
  const { name, image, stockTotal, pricePerDay } = req.body;

  try {
    const game = await db.query(
      `INSERT INTO games (name,image,stockTotal, pricePerDay) VALUES (${
        (name, image, stockTotal, pricePerDay)
      })`
    );
    console.log(receita);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function listGames(req, res) {
  try {
    const games = await db.query(`SELECT * FROM games`);

    res.send(games.rows);
  } catch (error) {}
}
