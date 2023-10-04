import useProyectos from "../hooks/useProyectos"

const Proyectos = () => {
  const { proyectos } = useProyectos()
  return (
    <>
        <h1 className="text-4xl font-bold">Projects</h1>

        <div>
          
        </div>
    </>
  )
}

export default Proyectos