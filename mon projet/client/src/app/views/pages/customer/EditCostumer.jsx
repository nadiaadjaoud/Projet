import React, { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { SettingsCellSharp } from "@mui/icons-material";

const EditCustomer = ({ customer }) => {
  
  const [nom, setNom] = useState(customer.nom);
  const [siege, setSiege] = useState(customer.categorie);
  const [telephone, setTelephone] = useState(customer.telephone);
  const [email, setEmail] = useState(customer.telephone);
  const [open, setOpen] = React.useState(false);



  

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

    setTelephone(e.target.value);
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




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //edit description function

  const updateTelephone= async (e)=>{

    setNom(e.target.value);
    setSiege(e.target.value);
    setTelephone(e.target.value);
    setEmail(e.target.value);

    try {
      const body = {nom,siege,telephone, email};
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
     
      <Button variant="outlined" onClick={handleClickOpen}  className='boutonbleu'  data-target={`#id${customer.id}`}>
        Edit
      </Button>

      {/* 
        id = id10
      */}
          <Dialog open={open} onClose={handleClose} id={`id${customer.id}`}
        
        onClick={() =>{
          setNom(customer.nom)
          setSiege(customer.siege)
          setTelephone(customer.telephone)
          setEmail(customer.email)
       
        }
        
        }

        
        >
          <DialogContent className="boxeditsize" style={{marginLeft: '19%',
    marginBottom: '-10%'}}>
          Modifier le prestataire
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
          <Button onClick={() => setNom(customer.nom)}>annuler</Button>
          <Button 
          
          
          onClick={e => {
            
            updateTelephone(e)
            setNom(customer.nom)
            setSiege(customer.siege)
            setTelephone(customer.telephone)
            setEmail(customer.email)
          
          }
          }
          
          
          >Edit</Button>
          <Button onClick={handleClose}>quitter</Button>
        </DialogActions>
        
      </Dialog>
  
    
      
    </Fragment>
  );



};

export default EditCustomer;