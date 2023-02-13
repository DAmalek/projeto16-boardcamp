import { db } from "../config/database.connection.js";

export async function insertCustomer(req, res) {
  const { name, phone, cpf, birthday } = req.body;

  try {
    const customer = await db.query(
      `INSERT INTO customers ("name", "phone", "cpf", "birthday") VALUES ($1, $2, $3, $4)
      ;`,
      [name, phone, cpf, birthday]
    );
    console.log(customer.rows);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listCustomers(req, res) {
  try {
    const list = await db.query("SELECT * FROM customers");
    return res.send(list.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
