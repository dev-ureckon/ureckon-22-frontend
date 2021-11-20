import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'

function RouteComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
