import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Sidebar = () => {

    const { auth } = useAuth ()

    return (
        <aside className="md:w-80 lg:w-96 px-5 py-10">
            <p className="text-xl font-bold">Hello: {auth.name}</p>

            <Link
                to="crear-proyecto"
                className="bg-black w-full p-3 text-white uppercase
                font-bold block mt-5 text-center rounded-xl cursor-pointer hover:bg-teal-600 shadow-lg shadow-sky-400/50 transition-colors"
            >New Project</Link>
        </aside>
    )
}

export default Sidebar