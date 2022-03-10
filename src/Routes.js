import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgotPassword from './pages/auth/ForgotPassword'
import CompleteProfile from './pages/auth/CompleteProfile'
import Contact from './pages/Contact/index.jsx'
import About from './pages/About/index.jsx'
import EventDetails from './pages/EventDetails/index.jsx'
import Profile from './pages/Profile/index.jsx'

import ReverseAuthProtectedRoute from './components/hoc/ReverseAuthProtectedRoute'
import AuthProtectedRoute from './components/hoc/AuthProtectedRoute'
import CompleteProfileAccess from './components/hoc/CompleteProfileAccess'
import Teams from './pages/Teams/index.jsx'
import EventCategories from './pages/EventCategories/index.jsx'

function RouteComponent({ open, setOpen, handleOpen, handleClose }) {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
            path="/forgot-password"
            element={
              <ReverseAuthProtectedRoute>
                <ForgotPassword />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthProtectedRoute>
                <Profile />
              </AuthProtectedRoute>
            }
          />
          <Route path="/events" element={<EventCategories />} />
          {/* <Route path="/events/:eventCategorySlug" element={} /> */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:eventCode" element={<EventDetails />} />
          <Route path="/team" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
