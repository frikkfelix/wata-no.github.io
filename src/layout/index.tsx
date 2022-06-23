import { useRef, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import Header from './Header'
import Footer from './Footer'



export default function Layout() {
  const { pathname } = useLocation()
  const oldPath = useRef(pathname)

  useEffect(() => {
    if (pathname !== oldPath.current) {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "auto"
        })
      } catch (error) {
        window.scrollTo(0,0)
      }
      oldPath.current = pathname
    }
  }, [pathname])


  return (
    <Stack>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Stack>
  )
}