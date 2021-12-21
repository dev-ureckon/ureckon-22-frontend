import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgetPassword from './pages/auth/ForgetPassword'
import Contact from './pages/Contact/index.jsx'
import { AvoidAuth } from './components/utils/AvoidAuth.js'

function RouteComponent({ open, setOpen, handleOpen, handleClose }) {
  return (
    <>
      <BrowserRouter>
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
          <Route
            path="/register"
            element={
              <AvoidAuth>
                <Register />
              </AvoidAuth>
            }
          />
          <Route
            path="/login"
            element={
              <AvoidAuth>
                <Login />
              </AvoidAuth>
            }
          />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent