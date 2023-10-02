

const Nuevopassword = () => {
  return (
    <>
          <h1 className="text-sky-600 font-black text-6xl capitalize">Reestablese tu password y no pierdas acceso a tus
           {''}  <span className="text-slate-700">proyectos</span>
          </h1>

       <form className="my-10 bg-white shadow rounded-lg p-10 ">
       <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
            >Nuevo password</label>
            <input
              id="nombre" 
              type="text"
              placeholder="Tu Nombre"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>

          <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
            >Email</label>
            <input
              id="email" 
              type="email"
              placeholder="Email de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>
         
          <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
            >Email</label>
            <input
              id="PASSWORD" 
              type="password"
              placeholder="password de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>
          <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
            >Repetir Password</label>
            <input
              id="PASSWORD2" 
              type="password"
              placeholder="Repetir Tu Password"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>
            <input 
              type="submit"
              value="Guardar nuevo password"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold
              rounded hover:cursor-pointer hover:bg-sky-800 transition colors"
            />
          </form>
    </>
  )
}

export default Nuevopassword