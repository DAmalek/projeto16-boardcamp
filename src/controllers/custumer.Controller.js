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

export async function listOneCustomer(req, res) {
  const { id } = req.params;

  try {
    const customer = await db.query('SELECT * FROM customers where "id" = $1', [
      id,
    ]);

    if (customer.rows.length === 0) return res.sendStatus(404);
    return res.send(customer.rows[0]);
  } catch (err) {
    return res.status(500).send(err);
  }
}

export async function updateCustomer(req, res) {
  const { id } = req.params;

  const { name, phone, cpf, birthday } = req.body;
  try {
    const cpfUsed = await db.query(
      'SELECT id FROM customers WHERE "cpf" = $1 AND "id" != $2',
      [cpf, id]
    );

    if (cpfUsed.rows.length > 0) return res.sendStatus(409);

    await db.query(
      'UPDATE customers SET "name" = $1, "phone" = $2, "cpf" = $3, "birthday" = $4 WHERE "id" = $5',
      [name, phone, cpf, birthday, id]
    );

    return res.sendStatus(200);
  } catch (err) {
    return res.status(500).send(err);
  }
}
