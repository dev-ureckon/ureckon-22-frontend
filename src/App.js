import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import './app.css'
import RouteComponent from './Routes'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteComponent />
      </ThemeProvider>
    </>
  )
}

export default App
