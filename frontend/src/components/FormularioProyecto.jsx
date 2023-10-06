import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'

const FormularioProyecto = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState(null)
    const [description, setDescription] = useState('')
    const [deadLine, setDeadLine] = useState('')
    const [client, setClient] = useState('')

    const params = useParams();

    const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos();

    useEffect(() => {
        if(params.id && proyecto.name) {
            setId(proyecto._id)
            setName(proyecto.name)
            setDescription(proyecto.description)
            setDeadLine(proyecto.deadLine.split('T')[0])
            setClient(proyecto.client)
        }
    }, [params])


    const handleSubmit = async e => {
        e.preventDefault();

        if ([name, description, deadLine, client].includes('')) {
            mostrarAlerta({
                msg: 'All fields are required',
                error: true
            })
            return
        }

        await submitProyecto({id, name, description, deadLine, client})

        setId(null)
        setName('')
        setDescription('')
        setDeadLine('')
        setClient('')
    }

    const { msg } = alerta

    return (
        <form
        className='bg-white py-10 shadow-lg shadow-gray-500 px-5 md:w-1/2 rounded-lg'
        onSubmit={handleSubmit}
        >
            {msg && <Alerta alerta={alerta}/>}

            <div className='mb-5'>
                <label
                    className='text-gray-700 italic uppercase font-bold text-sm shadow rounded-lg p-1 bg-gray-200'
                    htmlFor='name'
                >Project Name</label>
                <input
                    id='name'
                    type='text'
                    className='border w-full p-2 italic placeholder-gray-400 rounded-md rounded-lg p-1 shadow-xl'
                    placeholder='Name of the Project'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase italic font-bold text-sm shadow rounded-lg p-1 bg-gray-200'
                    htmlFor='Description'
                >Description</label>
                <textarea
                    id='description'
                    className='border w-full p-2 mt-2 italic placeholder-gray-400 rounded-md shadow-xl'
                    placeholder='Description of the project'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase italic font-bold text-sm shadow rounded-lg p-1 bg-gray-200'
                    htmlFor='deadLine'
                >DeadLine</label>
                <input
                    id='deadLine'
                    type='date'
                    className='border w-full p-2 mt-2 italic placeholder-gray-400 rounded-md shadow-xl'
                    placeholder='Description of the project'
                    value={deadLine}
                    onChange={e => setDeadLine(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase italic font-bold text-sm shadow rounded-lg p-1 bg-gray-200'
                    htmlFor='client'
                >Client Name</label>
                <input
                    id='client'
                    type='text'
                    className='border w-full p-2 italic placeholder-gray-400 rounded-md shadow-xl'
                    placeholder='Name of the Client'
                    value={client}
                    onChange={e => setClient(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value={id ? 'Update': 'Create'}
                className='bg-black-950 w-full p-3 uppercase italic font-bold text-white
                rounded-lg cursor-pointer shadow-lg shadow-rose-400 hover:bg-red-600 active:bg-rose-600 transition-colors'
            />

        </form>
    )
}

export default FormularioProyecto