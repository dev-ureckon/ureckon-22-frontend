import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import './fonts.css'
import './app.css'
import RouteComponent from './Routes'
import bgvideo from './assets/bgVideo.mp4'
import Header from './components/header'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* for main container */}
        <video className="videoTag" autoPlay loop muted>
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div style={{ background: '#00000088', minHeight: '100vh', height: '100%' }}>
          {/* for Navbar */}
          <Header />
          <RouteComponent />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
