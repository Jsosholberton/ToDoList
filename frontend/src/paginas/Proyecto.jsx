import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos';

const Proyecto = () => {

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
    <div className='flex justify-between'>
        <h1 className='font-black text-4xl'>{name}</h1>

        <div>
            <Link
            to={`/proyectos/editar/${params.id}`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            </Link>
        </div>
    </div>
      <button
        type='button'
        className='text-sm p-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
        bg-sky-400 text-white text-center'
        > new task</button>
  </>
    )
  )
}

export default Proyecto