import React from 'react'
import {
  useTheme,
  useMediaQuery,
  styled,
  AppBar,
  Toolbar, Theme, Container, Box, Divider, Button,
} from '@mui/material'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import { alpha } from '@mui/material/styles'
import FullLogo from '../components/FullLogo'
import LanguageSelect from '../components/LanguageSelect'

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  height: '120px',
  [theme.breakpoints.up('md')]: {
    height: '120px'
  },
}))


export default function Header() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        backgroundColor: 'transparent',
      }}
    >
      <StyledToolBar
        sx={{
          backgroundColor: '#FFFFFF',
        }}
      >
       <Container
         sx={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between',
         }}
       >
         <FullLogo />

         <Box sx={{ flexGrow: 1 }} />

         { isDesktop && <MenuDesktop /> }

         <LanguageSelect />

         { !isDesktop && <MenuMobile />}

       </Container>
      </StyledToolBar>
      <Divider />
    </AppBar>
  )
}
