import React,{setForecast,useEffect,useState}  from 'react'
import { Link } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { Breadcrumb } from 'app/components'
import { Box, styled, useTheme } from '@mui/system'
import { H5, Span, Small } from 'app/components/Typography'
import { Grow, Icon, Button, TextField } from '@mui/material'


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
         confirmer:  <Button variant="contained" color="success" >
         ok </Button>,
         annuler:  <Button variant="contained" className="btn btn-danger">
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