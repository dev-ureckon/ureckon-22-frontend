import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'

import Register from './pages/auth/Register'
import Login from './pages/auth/Login/index.jsx'
import ForgetPassword from './pages/ForgetPassword'


function RouteComponent () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
        {/* <Switch>
        
        </Switch> */}
      </BrowserRouter>
    </>
  )
}

export default RouteComponent
