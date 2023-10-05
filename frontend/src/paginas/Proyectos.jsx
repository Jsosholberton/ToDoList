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
      <h1 className="text-4xl italic font-serif font-bold text-4xl">Projects</h1>

      <div className="bg-white mt-10 shadow-lg italic shadow-gray-400 rounded-xl">
        {proyectos.length ?  
        proyectos.map(proyecto => (
          <PreviewProyecto 
          key={proyecto._id}
          proyecto={proyecto}
          />
        ))
        : <p className="mt-5 p-5 text-center font-sans font-medium text-lg text-gray-600 uppercase p-5">Not projects found</p>}
      </div>
    </>
  );
};

export default Proyectos;
