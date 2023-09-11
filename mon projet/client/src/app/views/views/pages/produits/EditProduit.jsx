import React, { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const EditProduit = ({ produit }) => {
  

  const [prix, setPrix] = useState(produit.prix);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //edit description function

  const updatePrix = async (e)=>{
    setPrix(e.target.value);
    try {
      const body = {prix};
      const response = await fetch(
        `http://localhost:5000/produits/${produit.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/pages/product-list";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
     
      <Button variant="outlined" onClick={handleClickOpen}    data-target={`#id${produit.id}`}>
        Edit
      </Button>

      {/* 
        id = id10
      */}
          <Dialog open={open} onClose={handleClose} id={`id${produit.id}`}
        onClick={() => setPrix(produit.prix)}>
          <DialogContent className="mod" style={{marginLeft: '19%',
    marginBottom: '-10%'}}>
          Modifier le prix 
          </DialogContent>
          
          <DialogContent>
<TextField
            autoFocus
            margin="dense"
            label="prix"
            value={prix}
            onChange={e => setPrix(e.target.value)}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPrix(produit.prix)}>annuler</Button>
          <Button onClick={e => updatePrix(e)}>Edit</Button>
          <Button onClick={handleClose}>quitter</Button>
        </DialogActions>
        
      </Dialog>
  
    
      
    </Fragment>
  );
};

export default EditProduit;