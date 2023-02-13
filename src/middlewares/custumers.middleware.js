import { db } from "../config/database.connection.js";

export async function custumersValidation(req, res, next) {
  const { cpf, phone } = req.body;

  try {
    const cpfExists = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [
      cpf,
    ]);

    if (cpfExists.rowCount !== 0) {
      return res.status(409).send("cpf already exists");
    }
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }

  next();
}
