import useProyectos from "../hooks/useProyectos";
import { useEffect } from "react";

const Proyectos = () => {
  const { proyectos } = useProyectos();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="h-screen"></div>
      <div>
        {/* Contenido de tus proyectos */}
      </div>
    </>
  );
};

export default Proyectos;
