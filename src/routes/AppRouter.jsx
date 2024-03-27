
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthRoute } from '../routes/AuthRoute';


import {
  Employee,
  PayRoll,
  Profile,
  Store,
  Dashboard,
  Company,
} from '../pages/private'
import { Login, Home, Uikit, Register, NotFound } from '../pages/public';



const AppRouter = () => {
  return (

    <>

      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={< Login />} />

        {/* ----------PRIVATE ROUTES-------- */}
        <Route path='/dashboard' element={<AuthRoute>< Dashboard /></AuthRoute>} />
        <Route path='/profile' element={<AuthRoute><Profile /></AuthRoute>} />
        <Route path='/company' element={<AuthRoute>< Company /></AuthRoute>} />
        <Route path='/employee' element={<AuthRoute><Employee /></AuthRoute>} />
        <Route path='/Payroll' element={<AuthRoute> <PayRoll /> </AuthRoute>} />
        <Route path='/store' element={<AuthRoute>< Store /></AuthRoute>} />
        <Route path='/uikit' element={<Uikit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRouter