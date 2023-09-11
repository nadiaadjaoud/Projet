const pool = require("../db");

const insertCustomer= async (req, res) => {
    try {
      const { nom,siege,telephone,email} = req.body;
      const newCustomer = await pool.query(
        " INSERT INTO customer (nom,siege,telephone, email) VALUES($1,$2,$3,$4) RETURNING * ",
        [nom,siege,telephone, email]
      );
  
      res.json(newCustomer.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //get all todos
  
const getAllCustomer= async (req, res) => {
    try {
      const allCustomers = await pool.query("SELECT * FROM customer");
      res.json(allCustomers.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //get a todo
  
const getCustomerById= async (req, res) => {
    try {
      const { id } = req.params;
      const customers = await pool.query("SELECT * FROM customer WHERE id = $1", [
        id
      ]);
  
      res.json(customers.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //update a todo
  
  const updateCustomer = (request, response) => {
    const id = parseInt(request.params.id)
    const { nom, siege, telephone, email } = request.body
  
    pool.query(
      'UPDATE customer SET nom=$1, siege=$2, telephone=$3, email=$4 WHERE id = $5',
      [nom, siege, telephone, email,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`customer modifié avec id: ${id}`)
      }
    )
  }
  
  //delete a todo
  
const deletCustomer= async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCustomer = await pool.query("DELETE FROM customer WHERE id = $1", [ id ]);
      res.json("produit was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  };
  module.exports = {
    getAllCustomer,
    getCustomerById,
    insertCustomer,
    updateCustomer,
    deletCustomer,
  }