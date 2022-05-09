import React from 'react'
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
  createTheme
} from '@mui/material'
import { CssBaseline } from '@mui/material'
import palette from './palette'

type ThemeProviderProps = {
  children: React.ReactNode
}

export default function ThemeProvider({ children } : ThemeProviderProps) {
  const themeOptions = {
    palette: palette
  }

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}