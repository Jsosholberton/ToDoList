import useProyectos from "../hooks/useProyectos";
import { useEffect } from "react";
import PreviewProyecto from "../components/PreviewProyecto";

const Proyectos = () => {
  const { proyectos } = useProyectos();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ?  
        proyectos.map(proyecto => (
          <PreviewProyecto 
          key={proyecto._id}
          proyecto={proyecto}
          />
        ))
        : <p className="mt-5 p-5 text-center text-gray-600 uppercase p-5">Not projects found</p>}
      </div>
    </>
  );
};

export default Proyectos;
