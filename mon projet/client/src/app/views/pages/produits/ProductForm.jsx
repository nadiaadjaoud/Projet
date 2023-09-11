import React, { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {
 
    FormControl,

    FormControlLabel,
    
} from '@mui/material'



const ProductForm= () => {
    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState("");
    const [prix, setPrix] = useState("");
    const [stock, setStock]= useState("");
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };

      
      const [error, setError] = useState(null);
    
      function isValidNom(nom) {
        return /^[A-Za-z]+$/.test(nom);
      }
    
      const handleNom = e => {
        if (!isValidNom(e.target.value)) {
          setError('Nom invalide');
        } else {
          setError(null);
        }
    
        setNom(e.target.value);
      };
    





      const [eror, setEror] = useState(null);
    
      function isValidPrix (prix) {
        return  /^[0-9\b]+$/.test(prix);
      } 
    
      const handlePrix = e => {
        if (!isValidPrix(e.target.value)) {
          setEror(' Prix invalide');
        } else {
          setEror(null);
        }
    
        setPrix(e.target.value);
      };   




      const [eerror, setEerror] = useState(null);
    
      function isValidStock (stock) {
        return  /^[0-9\b]+$/.test(stock);
      } 
    
      const handleStock = e => {
        if (!isValidStock(e.target.value)) {
          setEerror(' Stock invalide');
        } else {
          setEerror(null);
        }
    
        setStock(e.target.value);
      };   
 


      const [erroor, setErroor] = useState(null);
    
      function isValidCat (categorie) {
        return  /^[A-Za-z]+$/.test(categorie);
      } 
    
      const handleCategorie = e => {
        if (!isValidCat(e.target.value)) {
          setErroor('Categorie invalide');
        } else {
          setErroor(null);
        }
    
        setCategorie(e.target.value);
      };   









      const handleClose = () => {
        setOpen(false);
      };
    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { nom,categorie,prix,stock };
        const response = await fetch("http://localhost:5000/produits", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
  
        window.location = "/pages/product-list";
      } catch (err) {
        console.error(err.message);
      }
    };
    return (
        <Fragment>
         
          <Button variant="outlined" className="boutonbleu" onClick={handleClickOpen}   >
            nouveau produit
          </Button>
    
         
              <Dialog open={open} onClose={handleClose} >
              <DialogContent className="boxsize">
              <h3> Ajouter un nouveau produit: </h3>
              </DialogContent>





              <DialogContent>
 <div>
   <TextField className="centrer"
            autoFocus
            margin="dense"
            id="nom"
            name="nom"
            label="le nom du produit"
            value={nom}
            onChange={handleNom}
          />
          {error && <h4 className="erreur" style={{color: '#1976d' }}>{error}</h4>}
   </div>
          </DialogContent>


   <DialogContent>
    <div>
        <TextField className="centrer"
            autoFocus
            margin="dense"
            id="categorie"
            name="categorie"
            label=" la categorie du produit"
            value={categorie}
            onChange={handleCategorie}
            />
            {erroor && <h4 className="erreur" style={{color: '#1976d' }}>{erroor}</h4>}
   </div>
          </DialogContent>



          <DialogContent>
            <div>
       <TextField className="centrer"
            autoFocus
            margin="dense"
            id="stock"
            name="stock"
            label="la quantité du produit en stock"
            value={stock}
            onChange={handleStock}
          />
          {eerror && <h4 className="erreur" style={{color: '#1976d' }}>{eerror}</h4>}
   </div></DialogContent>


          <DialogContent>
            <div>
       <TextField className="centrer"
            autoFocus
            margin="dense"
            id="prix"
            name="prix"
            label="le prix du produit"
            value={prix}
            onChange={handlePrix}
          />
          {eror && <h4 className="erreur" style={{color: '#1976d' }}>{eror}</h4>}
   </div>






    
   <DialogActions>
           <Button onClick={handleClose}>quitter</Button>
           <Button onClick={onSubmitForm}>Ajouter</Button>
           </DialogActions>
            </DialogContent>
            
          </Dialog>
      
        
          
        </Fragment>
      );
    };
    
    export default ProductForm;