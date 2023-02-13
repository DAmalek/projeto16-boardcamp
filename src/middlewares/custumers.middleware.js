import { db } from "../config/database.connection.js";

export async function custumersValidation(req, res, next) {
  const { cpf, phone } = req.body;

  try {
    const cpfExists = await db.query(
      `SELECT * FROM custumers WHERE cpf = ${cpf}`
    );

    if (cpfExists) {
      return res.status(409).send("name already exists");
    }
  } catch (error) {
    res.sendStatus(500);
  }

  next();
}
