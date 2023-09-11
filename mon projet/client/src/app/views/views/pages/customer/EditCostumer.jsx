import React, { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { SettingsCellSharp } from "@mui/icons-material";

const EditCustomer = ({ customer }) => {
  

  const [telephone, setTelephone] = useState(customer.telephone);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //edit description function

  const updateTelephone= async (e)=>{
    setTelephone(e.target.value);
    try {
      const body = {telephone};
      const response = await fetch(
        `http://localhost:5000/customers/${customer.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/pages/customer-list";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
     
      <Button variant="outlined" onClick={handleClickOpen}    data-target={`#id${customer.id}`}>
        Edit
      </Button>

      {/* 
        id = id10
      */}
          <Dialog open={open} onClose={handleClose} id={`id${customer.id}`}
        onClick={() => setTelephone(customer.telephone)}>
          <DialogContent className="mod" style={{marginLeft: '19%',
    marginBottom: '-10%'}}>
          Modifier le numéro 
          </DialogContent>
          
          <DialogContent>
<TextField
            autoFocus
            margin="dense"
            label="telephone"
            value={telephone}
            onChange={e => setTelephone(e.target.value)}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTelephone(customer.telephone)}>annuler</Button>
          <Button onClick={e => updateTelephone(e)}>Edit</Button>
          <Button onClick={handleClose}>quitter</Button>
        </DialogActions>
        
      </Dialog>
  
    
      
    </Fragment>
  );



};

export default EditCustomer;