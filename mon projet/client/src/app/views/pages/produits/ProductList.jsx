import React,{ Fragment, useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { Breadcrumb } from 'app/components'
import { Box, styled, useTheme } from '@mui/system'
import { H5, Span, Small } from 'app/components/Typography'
import { Grow, Icon, Button, TextField } from '@mui/material'
import EditProduit from "./EditProduit";
import ProductForm from "./ProductForm";
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

const ProductList = () => {
    const { palette } = useTheme()
    const textMuted = palette.text.secondary
    const bgGreen = 'rgba(9, 182, 109, 1)'
    const bgError = palette.error.main
    const bgSecondary = palette.secondary.main
    const [produits, setProduits] = useState([]);
    const deleteProduit = async id => {
        try {
          const deleteProduit = await fetch(`http://localhost:5000/produits/${id}`, {
            method: "DELETE"
          });
    
    
          setProduits(produits.filter(produit => produit.id!== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    
      const getProduits = async () => {
        try {
          const response = await fetch("http://localhost:5000/produits");
          const jsonData = await response.json();
         
          setProduits(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getProduits();
     
      }, []);
    
      console.log(produits);
    
    const columns = [
    'nom',
    'categorie',
    'prix',
    'stock',
    'modifier',
'action'];

    const row = produits.map((produit) => { 
        return {
          
         nom: produit.nom,
         categorie:produit.categorie,
       prix:produit.prix,
       stock:produit.stock,
      modifier: <EditProduit produit={produit} />,
        action:  <Button
        variant="outlined"
        className='boutonbleu'
        onClick={() => deleteProduit(produit.id)}
      >
   supprimer
      </Button> ,
          
       }
    })
    return (
        <Container>
               
            <div className="breadcrumb">
         
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'Product List' },
                    ]}
                    
                />
                
            </div>
            <div className='pro' style={{marginLeft:'82%' , marginTop:'-5%', marginBottom:'5%' }}><ProductForm /></div>
            <Box overflow="auto">
                <Box minWidth={750}>
                   
                    <MUIDataTable
                        title={'Tous les produits'}
                 
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
    )
}


export default ProductList
