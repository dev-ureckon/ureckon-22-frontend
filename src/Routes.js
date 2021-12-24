import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgetPassword from './pages/auth/ForgetPassword'
import CompleteProfile from './pages/auth/CompleteProfile'
import Contact from './pages/Contact/index.jsx'


function RouteComponent({ open, setOpen, handleOpen, handleClose }) {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
