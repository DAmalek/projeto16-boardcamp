import { db } from "../config/database.connection.js";

export async function gamesValidation(req, res, next) {
  const { name } = req.body;

  try {
    const nameExists = await db.query(
      'SELECT id FROM games WHERE "name" = $1',
      [name]
    );
    console.log(nameExists.rowCount);
    if (nameExists.rowCount !== 0)
      return res.status(409).send("game already exists!");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
