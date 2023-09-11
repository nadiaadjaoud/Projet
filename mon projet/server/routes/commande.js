const pool = require("../db");

const insertCommande= async (req, res) => {
  try {
    const {fournisseur,produit,categorie,quantité} = req.body;
    const newCommande = await pool.query(
      "INSERT INTO commande (fournisseur,produit,categorie,quantité ) VALUES($1,$2,$3,$4) RETURNING *",
      [fournisseur,produit,categorie,quantité]
    );

    res.json(newCommande.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
  
  //get all todos
  
const getAllCommande= async (req, res) => {
    try {
      const allCommandes = await pool.query("SELECT * FROM commande");
      res.json(allCommandes.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //get a todo
  
const getCommandeById= async (req, res) => {
    try {
      const { id } = req.params;
      const commandes = await pool.query("SELECT * FROM commande WHERE id = $1", [
        id
      ]);
  
      res.json(commandes.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //update a todo
  

  const updateCommande = (request, response) => {
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
  
const deletCommande= async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCommande = await pool.query("DELETE FROM commande WHERE id = $1", [ id ]);
      res.json("commande was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  };
  module.exports = {
    getAllCommande,
    getCommandeById,
    insertCommande,
    updateCommande,
    deletCommande,
  }