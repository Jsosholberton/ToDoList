import { Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { cerrarSesionProyectos } = useProyectos()
    const { cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionProyectos()
        cerrarSesionAuth()
        localStorage.removeItem('token')
        // console.log(err)
    }

    return (


        <header className="px-4 py-5 bg-white border-b shadow-lg shadow-gray-300 ">
            <div className="md:flex md:justify-between items-center">
                <h2 className="text-5xl italic text-center font-black">GOT<span className="text-red-600">2</span>D<span className="text-red-600">O</span></h2>

                <input
                    type="search"
                    placeholder="Search Project"
                    className="rounded-xl italic shadow-lg lg:w-96 block p-2 border"
                />
                <div className="flex items-center gap-4">
                    <Link
                        to="/Proyectos"
                        className="font-sans font-medium uppercase italic p-3 rounded-xl shadow-2xl cursor-pointer hover:bg-gray-300 active:bg-gray-400 shadow-lg shadow-gray-350 transition-colors"
                    >Projects</Link>

                    <button
                        type="button"
                        className="text-white text-sm bg-black-950 p-3
                        rounded-xl uppercase font-sans font-medium  italic cursor-pointer hover:bg-teal-600 active:bg-cyan-500 shadow-lg shadow-sky-400/50 transition-colors"
                        onClick={handleCerrarSesion}
                    >Close Session</button>
                </div>


            </div>

        </header>
    )
}

export default Header