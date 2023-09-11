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



const CustomerForm= () => {
    const [nom, setNom] = useState("");
    const [siege, setSiege] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTel] = useState("");
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
        const body = { nom,siege,email,telephone };
        const response = await fetch("http://localhost:5000/customers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
  
        window.location = "/pages/customer-list";
      } catch (err) {
        console.error(err.message);
      }
    };
    return (
        <Fragment>
         
          <Button variant="outlined" onClick={handleClickOpen}   >
            nouveau prestataire
          </Button>
    
         
              <Dialog open={open} onClose={handleClose} >
              <DialogContent>
              Ajouter un nouveau prestataire:
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
            label="siege"
            value={siege}
            onChange={e => setSiege(e.target.value)}
          />
          </DialogContent>
   <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            label="adresse email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          </DialogContent>
          <DialogContent>
       <TextField
            autoFocus
            margin="dense"
            label="telephone"
            value={telephone}
            onChange={e => setTel(e.target.value)}
          />
    </DialogContent>
   <DialogActions>
           <Button onClick={handleClose}>quitter</Button>
           <Button onClick={onSubmitForm}>Ajouter</Button>
           </DialogActions>
         
            
          </Dialog>
      
        
          
        </Fragment>
      );
    };
    
    export default CustomerForm;