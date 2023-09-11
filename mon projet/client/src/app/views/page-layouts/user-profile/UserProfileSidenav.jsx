import React from 'react'
import useAuth from 'app/hooks/useAuth'
import { Box, styled, useTheme } from '@mui/system'
import { Avatar, Button, Card, Grid, Icon } from '@mui/material'
import { H3, H4, Paragraph, Span } from 'app/components/Typography'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const SideNav = styled(FlexBox)(({ theme }) => ({
    marginTop: '-345px',
    paddingTop: '74px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        marginTop: -410,
    },
}))

const ContentBox = styled(FlexBox)(() => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '48px',
    paddingRight: '48px',
    marginBottom: '44px',
    '& p': {
        marginBottom: '4px',
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 0.54)',
    },
    '& h3': {
        color: '#fff',
        fontWeight: '500',
    },
}))

const StyledCard = styled(Card)(() => ({
    width: 104,
    height: 104,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const UserProfileSidenav = () => {
    const { user } = useAuth()
    const { palette } = useTheme()
    const bgPrimary = palette.primary.main
    const textMuted = palette.text.secondary
    const textPrimary = palette.primary.main
    const bgDefault = palette.background.default
    const textLightWhite = 'rgba(255, 255, 255, 0.54)'

    return (
        <SideNav>
            <Avatar
                sx={{ height: 84, width: 84, mb: '20px' }}
                src="/assets/images/face-7.jpg"
            />
            <Paragraph sx={{ my: '16px', color: '#fff' }}>
                {user.name}
            </Paragraph>
            <Box py="12px" />
            <ContentBox>
                
                <div />
            </ContentBox>
            <Box px={4} pt={2} sx={{ background: bgDefault }}>
                <Grid container spacing={3}>
                    <Grid item>
                        <StyledCard sx={{ background: bgPrimary }}>
                            <Box textAlign="center" color={textLightWhite}>
                                <Icon>sentiment_very_satisfied</Icon>
                                <br />
                                <Span sx={{ pt: 2 }}>Dashboard</Span>
                            </Box>
                        </StyledCard>
                    </Grid>
                    {shortcutList.map((item, ind) => (
                        <Grid item key={ind}>
                            <StyledCard>
                                <Box textAlign="center" color={textMuted}>
                                    <Icon>{item.icon}</Icon>
                                    <br />
                                    <Span sx={{ pt: 2 }}>{item.title}</Span>
                                </Box>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
                <Box py="16px" />
               
                <Box py="8px" />
            </Box>
        </SideNav>
    )
}

const shortcutList = [
    
    {
        title: 'Photos',
        icon: 'collections',
    },
    {
        title: 'paramétres',
        icon: 'brightness_7',
    },
    {
        title: 'contacts',
        icon: 'group',
    },
]

export default UserProfileSidenav
