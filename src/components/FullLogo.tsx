import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box } from '@mui/material'

export default function FullLogo() {
  const logo = '/logo/logo.svg'

  return (
    <RouterLink to='/'>
      <Box
        sx={{ height: 35 }}
        component='img' src={logo}
      />
    </RouterLink>
  )
}

