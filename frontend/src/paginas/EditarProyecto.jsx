import useProyectos from "../hooks/useProyectos"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormularioProyecto from "../components/FormularioProyecto";

const EditarProyecto = () => {
    const params = useParams();

    const { obtenerProyecto, proyecto, cargando } = useProyectos();

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const { name, deadLine, description, client } = proyecto

  return (
    cargando ? (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full border-t-4 border-black-500 border-solid h-16 w-16"></div>
        </div>
      ) : (
        <>
            <h1 className="font-black text-4xl">Edit project: {name}</h1>
            <div className='mt-10 flex justify-center'>
            <FormularioProyecto />
            
          </div>
        </>
    )
  )
}

export default EditarProyecto