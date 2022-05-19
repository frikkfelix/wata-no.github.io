import ThemeProvider from './theme'
import Router from './routes'
import { HelmetProvider } from 'react-helmet-async'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  )
}

