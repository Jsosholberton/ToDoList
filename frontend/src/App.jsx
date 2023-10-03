import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import Nuevopassword from './paginas/Nuevopassword'
import Olvidepassword from './paginas/Olvidepassword'
import ComfirmarCuenta from './paginas/ComfirmarCuenta'
import Proyectos from './paginas/Proyectos'

import {AuthProvider} from './context/AuthProvider'

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='olvidepassword' element={<Olvidepassword />} />
            <Route path='olvidepassword/:token' element={<Nuevopassword />} />
            <Route path='confirmar/:id' element={<ComfirmarCuenta />} />
            </Route>

            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
     
     
    
  )
}

export default App
