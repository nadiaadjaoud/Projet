const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require('body-parser');
const {insertProduct,getAllProduct,getProductById,updateProduct,deletProduct}=require("./routes/produit");
const {insertCustomer,getAllCustomer,getCustomerById,updateCustomer,deletCustomer}=require("./routes/customer");
const{getAllCommande,getCommandeById,insertCommande,updateCommande,deletCommande}=require("./routes/commande");
//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.json());

app.post("/customers",insertCustomer);
app.post("/produits",insertProduct);
app.post("/commandes",insertCommande);
app.get("/customers",getAllCustomer);
app.get("/produits",getAllProduct);
app.get("/commandes",getAllCommande);
app.get("/customers/:id",getCustomerById);
app.get("/produits/:id",getProductById);
app.get("/commandes/:id",getCommandeById);
app.put("/customers/:id",updateCustomer);
app.put("/produits/:id",updateProduct);
app.put("/commandes/:id",updateCommande);
app.delete("/customers/:id",deletCustomer);
app.delete("/produits/:id",deletProduct);
app.delete("/commandes/:id",deletCommande);
app.listen(5000, () => {
  console.log("server has started on port 5000");
});