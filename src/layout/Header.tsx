import React from 'react'
import {
  useTheme,
  useMediaQuery,
  styled,
  AppBar,
  Toolbar, Theme, Container, Box, Divider,
} from '@mui/material'
import DesktopMenu from './DesktopMenu'
import MenuMobile from './MenuMobile'
import { alpha } from '@mui/material/styles'
import FullLogo from '../components/FullLogo'
import LanguageButton from '../components/LanguageButton'

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('md')]: {
    height: 88
  },
}))


export default function Header() {
  const theme = useTheme()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        backgroundColor: 'transparent'
      }}
    >
      <StyledToolBar
        sx={{
          backgroundColor: alpha(theme.palette.background.default, 0.9),
          backdropFilter: 'blur(6px)'
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

         { isDesktop ? <DesktopMenu /> : <MenuMobile /> }

         <LanguageButton />

       </Container>
      </StyledToolBar>
      <Divider />
    </AppBar>
  )
}
