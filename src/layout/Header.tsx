import React from 'react'
import {
  useTheme,
  useMediaQuery,
  styled,
  AppBar,
  Toolbar, Theme, Container, Typography, Box,
} from '@mui/material'
import DesktopMenu from './DesktopMenu'
import MenuMobile from './MenuMobile'

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('md')]: {
    height: 88
  },
}))

export default function Header() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <AppBar>
      <StyledToolBar
        disableGutters
      >
       <Container
         sx={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between',
         }}
       >
         <Typography>
           Wata.no
         </Typography>

         <Box sx={{ flexGrow: 1 }} />

         { isDesktop ? <DesktopMenu /> : <MenuMobile /> }

       </Container>
      </StyledToolBar>
    </AppBar>
  )
}
