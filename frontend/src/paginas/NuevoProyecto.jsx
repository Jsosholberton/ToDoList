import FormularioProyecto from "../components/FormularioProyecto"

const NuevoProyecto = () => {
    return (
      <>
          <h1 className="italic font-serif font-bold text-4xl capitalize">Create project</h1>
  
          <div className='mt-10 flex justify-center'>
            <FormularioProyecto />
            
          </div>
      </>
    )
  }
  
  export default NuevoProyecto
