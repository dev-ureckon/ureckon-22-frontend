import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgotPassword from './pages/auth/ForgotPassword'
import Contact from './pages/Contact/index.jsx'
import CompleteProfile from './pages/auth/CompleteProfile/index.jsx'
//import { AvoidAuth } from './components/utils/AvoidAuth.js'

function RouteComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
