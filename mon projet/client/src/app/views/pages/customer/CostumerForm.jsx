import React, { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useForm } from "react-hook-form";

import {
 
    FormControl,

    FormControlLabel,
    
} from '@mui/material'
import { size } from "lodash";




const CustomerForm= () => {
    const [nom, setNom] = useState("");
    const [siege, setSiege] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTel] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    





      const [erroor, setErroor] = useState(null);
    
      function isValidNum (telephone) {
        return /^[+0]{0,2}(91)?[0-9]{10}$/.test(telephone);
      } 
    
      const handleTelephone = e => {
        if (!isValidNum(e.target.value)) {
          setErroor('Telephone incorrect');
        } else {
          setErroor(null);
        }
    
        setTel(e.target.value);
      };   
     



      
      const [eror, setEror] = useState(null);
    
      function isValidNom (nom) {
        return  /^[A-Za-z]+$/.test(nom);
      } 
    
      const handleNom = e => {
        if (!isValidNom(e.target.value)) {
          setEror('Nom incorrect');
        } else {
          setEror(null);
        }
    
        setNom(e.target.value);
      };   





     
      const [errror, setErrror] = useState(null);
    
      function isValidSiege (siege) {
        return  /^[A-Za-z]+$/.test(siege);
      }
    
      const handleSiege = e => {
        if (!isValidSiege(e.target.value)) {
          setErrror(' Siege incorrect');
        } else {
          setErrror(null);
        }
    
        setSiege(e.target.value);
      };   


     
      const [error, setError] = useState(null);
    
      function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const handleChange = e => {
        if (!isValidEmail(e.target.value)) {
          setError('Email incorrect');
        } else {
          setError(null);
        }
    
        setEmail(e.target.value);
      };
    




      const handleClose = () => {
        setOpen(false);
      };
    const onSubmitForm = async e => {
      e.preventDefault();
      try {

        
        const body = { nom,siege,email,telephone };
        if( isValidEmail(email)& isValidSiege (siege) & isValidNom (nom) & isValidNum (telephone) ){
          if(nom!=="yassir"){
        const response = await fetch("http://localhost:5000/customers", 
        
        {
        
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
  
        window.location = "/pages/customer-list";
      }
    }
     } catch (err) {
        console.error(err.message);
      }
    
    };
    return (
        <Fragment>
         
          <Button variant="outlined" onClick={handleClickOpen} className='boutonbleu'  >
            nouveau prestataire
          </Button>
    
            
              <Dialog  open={open} onClose={handleClose}  >
                
              <DialogContent className="boxsize">
             <h3> Ajouter un nouveau prestataire</h3>
              </DialogContent>
              <DialogContent >
                <div>
                  
    <TextField
         className="centrer"
            autoFocus
            margin="dense"
            id="nom"
            name="nom"
            label=" le nom du prestataire"
            value={nom}
            onChange={handleNom}
            />
               {eror && <h4 className="erreur" style={{color: '#1976d' }}>{eror}</h4>}
      </div>
          </DialogContent>
         


          <DialogContent >
            <div>
        <TextField className="centrer"
            autoFocus
            margin="dense"
            id="siege"
            name="siege"
            label="le siege du prestataire"
            value={siege}
            onChange={handleSiege}
            />
               {errror && <h4 className="erreur" style={{color: '#1976d' }}>{errror}</h4>}
      </div>
          </DialogContent>



          <DialogContent>
          <div>  
        <TextField className="centrer"
            autoFocus
            id="email"
            margin="dense"
            name="email"
            label="l'email du prestataire"
            value={email}
            onChange={handleChange}
          />
             {error && <h4 className="erreur" style={{color: '#1976d' }}>{error}</h4>}
    </div>
          </DialogContent>



          <DialogContent>
            <div>
       <TextField className="centrer"
            autoFocus
            id="telephone"
            name="telephone"
            margin="dense"
            label=" le numéro de telephone du prestataire"
            value={telephone}
            onChange={handleTelephone}
          />
          {erroor && <h4 className="erreur" style={{color: '#1976d' }}>{erroor}</h4>}
          </div>
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