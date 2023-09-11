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

 const InvoiceViewer = () => {
    const { palette } = useTheme()
    const textMuted = palette.text.secondary
    const bgGreen = 'rgba(9, 182, 109, 1)'
    const bgError = palette.error.main
    const bgSecondary = palette.secondary.main





























   
        const [livraison, setLivraison] = useState([])
      
        const fetchData = () => {
          fetch("http://localhost:3000/livraison")
            .then(response => {
              return response.json()
            })
            .then(data => {
              setLivraison(data)
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
    'livrer'
    ];





//ajout livraison
const [mesage,processMessage]=useState("");
const [message, updateMessage]=useState("");
const save=(id,fo,prod,cat,quant) =>{
var commandeinfo={

 "id": id,
 "fournisseur": fo,
 "produit": prod,
  "categorie": cat,
 "quantite": quant,
 "statut": "livrée",
 
} 

const url= "http://localhost:5004/livraisons";
axios.post(url, commandeinfo)
.then(response=> processMessage("commande livrée"))



if (fo=="jumia"){

    const url= "http://localhost:5001/livraisons";
    axios.post(url, commandeinfo)
    .then(response=> processMessage("commande livrée"))

}


if (fo=="amazon"){

    const url= "http://localhost:5003/livraisons";
    axios.post(url, commandeinfo)
    .then(response=> processMessage("commande livrée"))

}

if (fo=="yassir"){

    const url= "http://localhost:5002/livraisons";
    axios.post(url, commandeinfo)
    .then(response=> processMessage("commande livrée"))

}



axios.delete ("http://localhost:3000/livraison/"+id)
.then(response=>{
    updateMessage("");
}).catch(error=>{
    updateMessage("erreur");  
})


}


    
    const row = livraison.map((livraison) => { 
        return {
            id: livraison.id,
            fournisseur:livraison.fournisseur,
         produit:livraison.produit,
         categorie:livraison.categorie,
         quantité:livraison.quantité,
         statut:"livrée",
         livrer:  <Button variant="contained" color="success" className='livrer' onClick={save.bind(this, livraison.id,livraison.fournisseur,livraison.produit,livraison.categorie,livraison.quantité, livraison.statut)}  >
         livrer </Button>,
    }
})

    return (
        <Container>
               
            <div className="breadcrumb">
         
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/src/app/views/invoice' },
                        { name: ' Liste des commandes à livrer ' },
                    ]}
                    
                />
                
            </div>
           
           

            <Box overflow="auto">
                <Box minWidth={750}>
                   
                    <MUIDataTable
                        title={'All livraisons'}
                 
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
                
            
 export default InvoiceViewer;