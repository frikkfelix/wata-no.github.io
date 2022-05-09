import { Outlet } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </Stack>
  )
}