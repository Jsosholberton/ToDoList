import { Link } from "react-router-dom"

const Header = () => {
    return (


        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between items-center">
                <h2 className="text-5xl text-center font-black">
                    <span className="text-black">GOT</span>
                    <span className="text-red-600">2</span>
                    <span className="text-black">D</span>
                    <span className="text-red-600">O</span>
                </h2>

                <input
                    type="search"
                    placeholder="Search Project"
                    className="rounded-lg lg:w-96 block p-2 border"
                />
                <div className="flex items-center gap-4">
                    <Link
                        to="/Proyectos"
                        className="font-bold uppercase p-3 rounded cursor-pointer hover:bg-gray-300 shadow transition-colors"
                    >Projects</Link>

                    <button
                        type="button"
                        className="text-white text-sm bg-black p-3
                        rounded-md uppercase font-bold cursor-pointer hover:bg-gray-500 transition-colors"
                    >Close Session</button>
                </div>


            </div>

        </header>
    )
}

export default Header