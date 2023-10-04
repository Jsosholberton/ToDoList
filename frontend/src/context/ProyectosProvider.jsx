import { useState, useEffect, createContext } from "react"
import axios from "axios"



const ProyectosContext = createContext();

const ProyectosProvider = ({children}) => {

    const [proyectos, setProyectos] = useState([]);
    const [alertaa, setAlerta] = useState({});

    const cerrarSesionProyectos = () => {
        setProyectos([])
        setProyectos({})
        setAlerta({})
    }

    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
                cerrarSesionProyectos
            }}
        >{children}
        </ProyectosContext.Provider>
    )
}
export {
    ProyectosProvider
}

export default ProyectosContext