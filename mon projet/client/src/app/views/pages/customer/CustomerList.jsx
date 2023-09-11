import React,{ useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { Breadcrumb } from 'app/components'
import { Box, styled, useTheme } from '@mui/system'
import { H5, Span, Small } from 'app/components/Typography'
import { Grow, Icon, IconButton, TextField } from '@mui/material'
import { PresentToAllTwoTone } from '@mui/icons-material'


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

const CustomerList = () => {
  const { palette } = useTheme()
  const textMuted = palette.text.secondary
  const bgGreen = 'rgba(9, 182, 109, 1)'
  const bgError = palette.error.main
  const bgSecondary = palette.secondary.main

    const [prests, setPrests] = useState([]);
    const navigate = useNavigate();
  
    const loadPrests = async () => {
      const response = await fetch("http://localhost:4000/prests");
      const data = await response.json();
      setPrests(data);
    };
    const handleDelete = async (id) => {
        try {
          await fetch(`http://localhost:4000/prests/${id}`, {
            method: "DELETE",
          });
          setPrests(prests.filter((prests) => PresentToAllTwoTone.id !== id));
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        loadPrests();
      }, []);
    
      const columns = [
        {
            name: 'nom', // field name in the row object
            label: 'Name', // column title that will be shown in table
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let prests = CustomerList[dataIndex]

                    return (
                        <FlexBox>
                            
                            <Box ml="12px">
                                <H5 sx={{ fontSize: '15px' }}>{prests?.nom_prest}</H5>
                                <Small sx={{ color: textMuted }}>
                                    {prests?.siege_prest}
                                </Small>
                            </Box>
                        </FlexBox>
                    )
                },
            },
        },
        {
            name: 'email',
            label: 'Details',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <Ellipsis>{prests?.email_prest}</Ellipsis>
                ),
            },
        },
        {
          name: 'numero',
          label: 'Details',
          options: {
              filter: true,
              customBodyRenderLite: (dataIndex) => (
                  <Ellipsis>{prests?.num_prest}</Ellipsis>
              ),
          },
      },
       
     
        {
            name: 'action',
            label: ' ',
            options: {
                filter: false,
                customBodyRenderLite: (dataIndex) => (
                    <FlexBox>
                        <Box flexGrow={1} />
                        <Link to="/pages/new-customer">
                            <IconButton>
                                <Icon>edit</Icon>
                            </IconButton>
                        </Link>
                        <Link to="/pages/view-customer">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Link>
                    </FlexBox>
                ),
            },
        },
    ]

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
            <Box overflow="auto">
                <Box minWidth={750}>
                    <MUIDataTable
                        title={'All Products'}
                        data={CustomerList}
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
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={handleDelete}
                                                    >
                                                        <Icon fontSize="small">
                                                            clear
                                                        </Icon>
                                                    </IconButton>
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
export default CustomerList
