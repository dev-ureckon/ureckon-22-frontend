import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgetPassword from './pages/auth/ForgetPassword'
import Contact from './pages/Contact/index.jsx'
import CompleteProfile from './pages/auth/CompleteProfile/index.jsx'
import { AvoidAuth } from './components/utils/AvoidAuth.js'

function RouteComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route
            path="/complete-profile"
            element={
              <AvoidAuth>
                <CompleteProfile />
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
