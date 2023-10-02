import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import Nuevopassword from './paginas/Nuevopassword'
import Olvidepassword from './paginas/Olvidepassword'
import ComfirmarCuenta from './paginas/ComfirmarCuenta'


function App() {
  return (
      <BrowserRouter>
     
      <Routes>
         <Route path="/" element={<AuthLayout />}>
         <Route index element={<Login />} />
         <Route path='registrar' element={<Registrar />} />
         <Route path='olvidepassword' element={<Olvidepassword />} />
         <Route path='olvidepassword:token' element={<Nuevopassword />} />
         <Route path='confirmar/:id' element={<ComfirmarCuenta />} />
         </Route>
      </Routes>

      </BrowserRouter>
     
     
    
  )
}

export default App
