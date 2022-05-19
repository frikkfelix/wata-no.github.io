import React from 'react'
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
  createTheme
} from '@mui/material'
import { CssBaseline } from '@mui/material'
import palette from './palette'
import Overrides from './overrides'

type ThemeProviderProps = {
  children: React.ReactNode
}

export default function ThemeProvider({ children } : ThemeProviderProps) {
  const themeOptions = {
    palette: palette
  }

  const theme = createTheme(themeOptions)

  theme.components = Overrides()

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}