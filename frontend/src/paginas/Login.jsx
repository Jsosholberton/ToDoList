import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
          <h1 className="text-sky-600 font-black text-6xl capitalize"> Control yours Projects & Define Your  {''}  <span className="text-slate-700">Future</span>
          </h1>

       <form className="my-10 bg-white shadow rounded-lg p-10 ">
          <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
            >Email</label>
            <input
              id="email" 
              type="email"
              placeholder="Email"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>
          <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
            >Password</label>
            <input
              id="PASSWORD" 
              type="password"
              placeholder="Password "
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            
            />
          </div>
            <input 
              type="submit"
              value="Login"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold
              rounded hover:cursor-pointer hover:bg-sky-800 transition colors"
            />

       </form>

       <nav className="lg:flex lg:justify-between">
          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
          >Do you dont have a account? Sign up </Link>

          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="olvidepassword"
          >Forget My Password</Link>

          

       </nav>
    </>
  )
}

export default Login