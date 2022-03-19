import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgotPassword from './pages/auth/ForgotPassword'
import CompleteProfile from './pages/auth/CompleteProfile'
import Contact from './pages/Contact/index.jsx'
import About from './pages/About/index.jsx'
import Profile from './pages/Profile/index.jsx'

import ReverseAuthProtectedRoute from './components/hoc/ReverseAuthProtectedRoute'
import AuthProtectedRoute from './components/hoc/AuthProtectedRoute'
import CompleteProfileAccess from './components/hoc/CompleteProfileAccess'
import Teams from './pages/Teams/index.jsx'
// import EventRegister from './pages/EventRegister/index.jsx'
import HomeNav from './components/header/homeNav'
import Header from './components/header'

function RouteComponent({ open, setOpen, handleOpen, handleClose }) {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeNav />
                <Home
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <ReverseAuthProtectedRoute>
                <Header />
                <Register />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ReverseAuthProtectedRoute>
                <Header />
                <Login />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/complete-profile"
            element={
              <CompleteProfileAccess>
                <Header />
                <CompleteProfile />
              </CompleteProfileAccess>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ReverseAuthProtectedRoute>
                <Header />
                <ForgotPassword />
              </ReverseAuthProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthProtectedRoute>
                <Header />
                <Profile />
              </AuthProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Header />
                <Teams />
              </>
            }
          />
          {/* <Route
            path="events/:eventCode/event-register"
            element={
              <>
                <Header />
                <EventRegister />
              </>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
