import { useState } from 'react'

const FormularioProyecto = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deadLine, setDeadLine] = useState('')
    const [client, setClient] = useState('')


    return (
        <form className='bg-white py-10 px-5 md:w-1/2 rounded-lg'>
            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm shadow'
                    htmlFor='name'
                >Project Name</label>
                <input
                    id='name'
                    type='text'
                    className='border w-full p-2 placeholder-gray-400 rounded-md'
                    placeholder='Name of the Project'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm shadow'
                    htmlFor='Description'
                >Description</label>
                <textarea
                    id='description'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Description of the project'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm shadow'
                    htmlFor='deadLine'
                >DeadLine</label>
                <input
                    id='deadLine'
                    type='date'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Description of the project'
                    value={deadLine}
                    onChange={e => setDeadLine(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm shadow'
                    htmlFor='client'
                >Client Name</label>
                <input
                    id='client'
                    type='text'
                    className='border w-full p-2 placeholder-gray-400 rounded-md'
                    placeholder='Name of the Client'
                    value={client}
                    onChange={e => setClient(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value='Create Proyect'
                className='bg-black w-full p-3 uppercase font-bold text-white
                rounded cursor-pointer hover:bg-red-600 transition-colors'
            />

        </form>
    )
}

export default FormularioProyecto