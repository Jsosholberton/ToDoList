

const Nuevopassword = () => {
  return (
    <>
          <h1 className="text-sky-600 font-black text-6xl capitalize">Restore Your password And Not lose Your
           {''}  <span className="text-slate-700">Projects</span>
          </h1>

       <form className="my-10 bg-white shadow rounded-lg p-10 ">
       <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
            >New password</label>
            <input
              id="password" 
              type="text"
              placeholder="New password"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>

        
          <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
            >Repeat Password</label>
            <input
              id="PASSWORD2" 
              type="password"
              placeholder="Repeat Password"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>
            <input 
              type="submit"
              value="Save The password"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold
              rounded hover:cursor-pointer hover:bg-sky-800 transition colors"
            />
          </form>
    </>
  )
}

export default Nuevopassword