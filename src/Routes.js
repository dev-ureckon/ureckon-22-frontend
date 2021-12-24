import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgetPassword from './pages/auth/ForgetPassword'
import CompleteProfile from './pages/auth/CompleteProfile'
import Contact from './pages/Contact/index.jsx'
import ReverseAuthProtectedRoute from './components/hoc/ReverseAuthProtectedRoute'
import AuthProtectedRoute from './components/hoc/AuthProtectedRoute'
import CompleteProfileAccess from './components/hoc/CompleteProfileAccess'

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
              <ReverseAuthProtectedRoute>
                <Register />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ReverseAuthProtectedRoute>
                <Login />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/complete-profile"
            element={
              <CompleteProfileAccess>
                <CompleteProfile />
              </CompleteProfileAccess>
            }
          />
          <Route
            path="/forget-password"
            element={
              <ReverseAuthProtectedRoute>
                <ForgetPassword />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthProtectedRoute>
                <h2>Profile component here</h2>
              </AuthProtectedRoute>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
