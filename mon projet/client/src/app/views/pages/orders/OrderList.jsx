import React,{setForecast,useEffect,useState}  from 'react'
import { Link } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { Breadcrumb } from 'app/components'
import { Box, styled, useTheme } from '@mui/system'
import { H5, Span, Small } from 'app/components/Typography'
import { Grow, Icon, Button, TextField } from '@mui/material'
import axios from 'axios'

import { IconButton } from '@mui/material';

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const Ellipsis = styled(Span)(() => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
}))

const StyledSpan = styled(Span)(({ bgColor }) => ({
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    background: bgColor,
}))

const IMG = styled('img')(() => ({
    height: 32,
    borderRadius: '4px',
}))

 const OrderList = () => {
    const { palette } = useTheme()
    const textMuted = palette.text.secondary
    const bgGreen = 'rgba(9, 182, 109, 1)'
    const bgError = palette.error.main
    const bgSecondary = palette.secondary.main
   




// confirmer la commande
const [mesage,processMessage]=useState("");
const [message, updateMessage]=useState("");
const save=(id,fo,prod,cat,quant) =>{
var commandeinfo={

 "id": id,
 "fournisseur": fo,
 "produit": prod,
  "categorie": cat,
 "quantité": quant,
 
} 
const url= "http://localhost:3000/livraison";
axios.post(url, commandeinfo)
.then(response=> processMessage("commande prete a etre livrée"))

var commandeinfo1={

    "id": id,
    "fournisseur": fo,
    "produit": prod,
     "categorie": cat,
    "quantite": quant,
    "statut": "confirmée"
    
   } 
const url1="http://localhost:5004/commandes";
axios.post(url1, commandeinfo1)
.then(response=> processMessage("Commande confirmée et prete a etre livrée"))



if (fo=="jumia"){


    const url1= "http://localhost:5001/commandes";
    axios.post(url1, commandeinfo1)
    .then(response=> processMessage("commande confirmée"))

}


if (fo=="amazon"){

    const url1= "http://localhost:5003/commandes";
    axios.post(url1, commandeinfo1)
    .then(response=> processMessage("commande confirmée"))

}

if (fo=="yassir"){

    const url1= "http://localhost:5002/commandes";
    axios.post(url1, commandeinfo1)
    .then(response=> processMessage("commande confirmée"))

}




axios.delete ("http://localhost:3000/commandes/"+id)
.then(response=>{
    updateMessage("");
}).catch(error=>{
    updateMessage("erreur");  
})

}













//supprimer commande

const deleteCom=(id,fo,prod,cat,quant) =>{
var commandeinfo={

 "id": id,
 "fournisseur": fo,
 "produit": prod,
  "categorie": cat,
 "quantite": quant,
 "statut": "annulé",
 
} 

const url= "http://localhost:5004/commandes";
axios.post(url, commandeinfo)
.then(response=> processMessage("commande annulée"))



if (fo=="jumia"){

    const url= "http://localhost:5001/commandes";
    axios.post(url, commandeinfo)
    .then(response=> processMessage("commande annulée"))

}


if (fo=="amazon"){

    const url= "http://localhost:5003/commandes";
    axios.post(url, commandeinfo)
    .then(response=> processMessage("commande annulée"))

}

if (fo=="yassir"){

    const url= "http://localhost:5002/commandes";
    axios.post(url, commandeinfo)
    .then(response=> processMessage("commande annulée"))

}




axios.delete ("http://localhost:3000/commandes/"+id)
.then(response=>{
    updateMessage("");
}).catch(error=>{
    updateMessage("erreur");  
})





}






        const [commandes, setCommandes] = useState([])
      
        const fetchData = () => {
          fetch("http://localhost:3000/commandes")
            .then(response => {
              return response.json()
            })
            .then(data => {
              setCommandes(data)
            })
        }
      
        useEffect(() => {
          fetchData()
        }, [])
    const columns = [
    'fournisseur',
    'produit',
    'categorie',
    'quantité',
    'confirmer',
    'annuler'
    ];




    
    const row = commandes.map((commande) => { 
        return {
            id: commande.id,
            fournisseur:commande.nomfournisseur,
         produit:commande.nomproduit,
         categorie:commande.categorie,
         quantité:commande.quantité,
         confirmer:  <Button variant="contained" color="success" onClick={save.bind(this,commande.id,commande.nomfournisseur,commande.nomproduit,commande.categorie,commande.quantité)} >
         ok </Button>,
         annuler:  <Button variant="contained" className="btn btn-danger" onClick={deleteCom.bind(this,commande.id,commande.nomfournisseur,commande.nomproduit,commande.categorie,commande.quantité)}>
         annuler </Button>,
  
    }
})

    return (
        <Container>
               
            <div className="breadcrumb">
         
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'Commandes List' },
                    ]}
                    
                />
                
            </div>
           
<p> {message}</p>

<p>{mesage}</p>

            <Box overflow="auto">
                <Box minWidth={750}>
                   
                    <MUIDataTable
                        title={'All Products'}
                 
                           data={row}
                        columns={columns}
                        options={{
                            filterType: 'textField',
                            responsive: 'standard',
                            elevation: 0,
                            rowsPerPageOptions: [10, 20, 40, 80, 100],
                            customSearchRender: (
                                searchText,
                                handleSearch,
                                hideSearch,
                                options
                            ) => {
                                return (
                                    
                                        <Grow appear in={true} timeout={300}>
                                           
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                onChange={({ target: { value } }) =>
                                                    handleSearch(value)
                                                }
                                                InputProps={{
                                                    style: {
                                                        paddingRight: 0,
                                                    },
                                                    startAdornment: (
                                                        <Icon
                                                            fontSize="small"
                                                            sx={{ mr: 1 }}
                                                        >
                                                            search
                                                        </Icon>
                                                    ),
                                                   
                                                }}
                                            />
                                        </Grow>
                                )
                            },
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
                    }
                
            
 export default OrderList;