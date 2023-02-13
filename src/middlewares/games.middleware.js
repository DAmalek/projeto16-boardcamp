import { db } from "../config/database.connection.js";

export async function gamesValidation(req, res, next) {
  const { name } = req.body;

  try {
    const nameExists = await db.query(
      `SELECT * FROM games WHERE name = ${name};`
    );

    if (nameExists) {
      return res.status(409).send("name already exists");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
