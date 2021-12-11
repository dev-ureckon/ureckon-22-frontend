import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgetPassword from './pages/ForgetPassword'
import Contact from './pages/Contact/index.jsx'
import { AvoidAuth } from './components/utils/AvoidAuth.js'

function RouteComponent () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<AvoidAuth><Register /></AvoidAuth>} />
          <Route path='/login' element={<AvoidAuth><Login /></AvoidAuth>} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
