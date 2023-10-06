import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Sidebar = () => {

    const { auth } = useAuth ()

    return (
        <aside className="md:w-80 lg:w-96 px-5 py-10">
            <p className="text-xl italic font-bold">Hello: {auth.name}</p>

            <Link
                to="crear-proyecto"
                className="bg-black-950 w-full p-3 text-white uppercase
                font-sans font-medium block mt-5 italic text-center rounded-xl cursor-pointer hover:bg-teal-600 active:bg-cyan-500 shadow-lg shadow-sky-400/50 transition-colors"
            >New Project</Link>
        </aside>
    )
}

export default Sidebar