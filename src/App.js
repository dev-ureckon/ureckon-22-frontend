import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import './app.css'
import bgvideo from './assets/Background video.mp4'
import RouteComponent from './Routes'

function App() {
  return (
    <>
      <video className="videoTag" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteComponent />
      </ThemeProvider>
    </>
  )
}

export default App
