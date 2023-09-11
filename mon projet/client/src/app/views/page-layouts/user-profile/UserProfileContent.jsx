import {
    Badge,
    Card,
    Divider,
    Fab,
    Grid,
    Icon,
    IconButton,
} from '@mui/material'
import React, { Fragment } from 'react'
import DummyChart from './DummyChart'
import ProfileBarChart from './ProfileBarChart'
import { Box, styled, lighten, useTheme } from '@mui/system'
import { H1, H3, H4, Paragraph, Span } from 'app/components/Typography'
import { convertHexToRGB } from 'app/utils/utils'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'space-between',
}))

const ProfileContent = styled('div')(() => ({
    marginTop: '-345px',
    paddingTop: '74px',
    paddingRight: '30px',
    paddingLeft: '4px',
    '& .menu-button': {
        display: 'none',
    },
    '@media only screen and (max-width: 959px)': {
        marginTop: '-390px',
        paddingTop: '24px',
        paddingRight: '16px',
        paddingLeft: '16px',
    },
    '@media only screen and (max-width: 767px)': {
        marginTop: '-410px',
        paddingTop: '16px',
        paddingRight: '16px',
        paddingLeft: '16px',
        '& .menu-button': {
            display: 'flex',
        },
    },
}))

const StyledCard = styled(Card)(() => ({
    height: 96,
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0, 0.15)',
}))

const StyledH1 = styled(H1)(() => ({
    fontWeight: 'normal',
    marginBottom: '4px',
}))

const StyledSpan = styled(Span)(({ theme }) => ({
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
}))

const StyledFab = styled(Fab)(({ bgcolor, textcolor }) => ({
    boxShadow: 'none',
    overflow: 'hidden',
    background: bgcolor,
    '& h3': {
        color: textcolor,
        fontWeight: 'normal',
    },
}))

const TextBox = styled(Box)(({ theme }) => ({
    marginLeft: '16px',
    '& h4': {
        marginBottom: '4px',
        fontWeight: '500',
    },
    '& p': {
        color: theme.palette.text.secondary,
    },
}))

const StyledCard2 = styled(Card)(() => ({
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'flex',
    overflow: 'unset',
}))

const Card2LeftContent = styled('div')(() => ({
    minWidth: 100,
    textAlign: 'center',
}))

const Card2RightContent = styled(JustifyBox)(({ theme }) => ({
    paddingRight: '16px',
    paddingBottom: '12px',
    '& h4': {
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    '& span': {
        color: theme.palette.text.secondary,
    },
}))

const IMG = styled('img')(() => ({
    width: '100%',
    overflow: 'hidden',
}))

const UserProfileContent = ({ toggleSidenav }) => {
    const { palette } = useTheme()
    const textError = palette.error.main
    const textMuted = palette.text.secondary
    const textPrimary = palette.primary.main
    const bgLightGreen = 'rgba(9, 182, 109, 0.15)'
    const bgLightError = lighten(palette.error.main, 0.85)
    const bgLightPrimary = `rgba(${convertHexToRGB(textPrimary)}, 0.15)`
    const bgGrey = 'rgba(0, 0, 0, 0.15)'

    return (
        <ProfileContent>
            <Box
                display="flex"
                justifyContent="flex-end"
                className="menu-button"
            >
                <IconButton onClick={toggleSidenav}>
                    <Icon sx={{ color: '#fff' }}>menu</Icon>
                </IconButton>
            </Box>
            <div className="headerCardHolder">
                <Grid container spacing={3}>
                    {projectSummery.map((project) => (
                        <Grid
                            item
                            lg={4}
                            md={4}
                            sm={12}
                            xs={12}
                            key={project.title}
                        >
                            <StyledCard>
                                <div>
                                    <StyledSpan
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.54)',
                                        }}
                                    >
                                        {project.title}
                                    </StyledSpan>
                                    <H3
                                        sx={{
                                            color: '#fff',
                                            paddingTop: 1,
                                            fontWeight: 'normal',
                                        }}
                                    >
                                        {project.amount}
                                    </H3>
                                </div>
                                <Box height={36} width={56}>
                                    <DummyChart height="40px" />
                                </Box>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Box py={4} />
            <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Card sx={{ pb: 2 }}>
                        <H3
                            sx={{
                                color: textMuted,
                                padding: '16px',
                                paddingBottom: 0,
                                fontWeight: 'normal',
                            }}
                        >
                            Frequence d'utilisation de l'application
                        </H3>
                        <ProfileBarChart
                            height="260px"
                            color={[palette.warn]}
                        />
                       
                    </Card>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card sx={{ p: 2, height: '100%' }}>
                        <H3
                            sx={{
                                color: textMuted,
                                marginBottom: 3,
                                fontWeight: '500',
                            }}
                        >
                            Qui sommes-nous ?
                        </H3>
                        <FlexBox mb={2}>
                           
                            <TextBox>
                            
                                <Paragraph>Leader national dans le domaine de l'informatique en Algérie.
Propriétaire de la marque D-Tech spécialiser dans la fabrication, la commercialisation et le service après-vente des produits électronique Tablettes, Mobile, et PC Portable.</Paragraph>
                            </TextBox>
                        </FlexBox>
                        
                    </Card>
                </Grid>

  

                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        {paymentList.map((method, index) => (
                            <Fragment key={index}>
                                
                                {index !== paymentList.length - 1 && (
                                    <Divider />
                                )}
                            </Fragment>
                        ))}
                    </Card>
                </Grid>
            </Grid>
            <Box py="8px" />
        </ProfileContent>
    )
}

const projectSummery = [
    {
        title: "Nom  ",
        amount: 11,
    },
    {
        title: "Email  ",
        amount: 15,
    },
    {
        title: " Numéro de telephone " ,
        amount: 25,
    },
]

const paymentList = [
   
]

export default UserProfileContent
