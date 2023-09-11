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
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { nom,categorie,prix };
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
         
          <Button variant="outlined" onClick={handleClickOpen}   >
            nouveau produit
          </Button>
    
         
              <Dialog open={open} onClose={handleClose} >
              <DialogContent>
              Ajouter un nouveau produit:
              </DialogContent>
              <DialogContent>
              
   <TextField
            autoFocus
            margin="dense"
            label="nom"
            value={nom}
            onChange={e => setNom(e.target.value)}
          />
          </DialogContent>
   <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            label="categorie"
            value={categorie}
            onChange={e => setCategorie(e.target.value)}
          />
          </DialogContent>
          <DialogContent>
       <TextField
            autoFocus
            margin="dense"
            label="prix"
            value={prix}
            onChange={e => setPrix(e.target.value)}
          />
    
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