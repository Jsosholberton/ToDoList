import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import Nuevopassword from './paginas/Nuevopassword'
import Olvidepassword from './paginas/Olvidepassword'
import ComfirmarCuenta from './paginas/ComfirmarCuenta'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import Proyecto from './paginas/Proyecto'
import EditarProyecto from './paginas/EditarProyecto'

import {AuthProvider} from './context/AuthProvider'
import {ProyectosProvider} from "./context/ProyectosProvider"

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <ProyectosProvider>
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
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
              <Route path=":id" element={<Proyecto />} />
              <Route path="editar/:id" element={<EditarProyecto />} />
            </Route>
          </Routes>
          </ProyectosProvider>
        </AuthProvider>
      </BrowserRouter>
     
     
    
  )
}

export default App
