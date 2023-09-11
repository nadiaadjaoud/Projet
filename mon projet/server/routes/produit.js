const pool = require("../db");

const insertProduct= async (req, res) => {
    try {
      const { nom, categorie, prix,stock } = req.body;
      const newProduit = await pool.query(
        "INSERT INTO produit (nom, categorie, prix, stock ) VALUES($1,$2,$3, $4) RETURNING *",
        [nom, categorie, prix,stock]
      );
  
      res.json(newProduit.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //get all todos
const getAllProduct= async (req, res) => {
    try {
      const allProduits = await pool.query("SELECT * FROM produit");
      res.json(allProduits.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //get a todo
  
 const getProductById= async (req, res) => {
    try {
      const { id } = req.params;
      const produits = await pool.query("SELECT * FROM produit WHERE id = $1", [
        id
      ]);
  
      res.json(produits.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //update a todo
  
  const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { nom, categorie, prix,stock } = request.body
  
    pool.query(
      'UPDATE produit SET nom=$1, categorie=$2, prix=$3, stock=$4 WHERE id = $5',
      [nom, categorie, prix,stock,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`produit modifié avec id: ${id}`)
      }
    )
  }
  
  //delete a todo
  
const deletProduct= async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProduit = await pool.query("DELETE FROM produit WHERE id = $1", [ id ]);
      res.json("produit was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  };
module.exports= {
  getAllProduct,
  getProductById,
  insertProduct,
  updateProduct,
  deletProduct,
}