import { useState } from 'react'
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta'

  const Registrar = () => {
  const [ name, setName ] = useState ('')
  const [ email, setEmail ] = useState ('')
  const [ password, setPassword ] = useState ('')
  const [ repeatpassword, setRapeatpassword ] = useState ('')
  const [ alerta, setAlerta ] = useState({})
  
  
  
  
  const handlesubmit = e => {
    e.preventDefault();
    if([name, email, password, repeatpassword].includes('')) {
      setAlerta({
          Msg: 'All fields are required',
          error: true
      })
      return
    }
  }
  return (
    <>
          <h1 className="text-sky-600 font-black text-6xl capitalize">Create your account and Manage your {''}  <span className="text-slate-700">Project</span>
          </h1>

       <form
       
        className="my-10 bg-white shadow rounded-lg p-10 "
        onSubmit={handlesubmit}
        >
       <div className="my-5">
            <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
            >Name</label>
            <input
              id="nombre" 
              type="text"
              placeholder="Your Name"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
              value={name}
              onChange={e => setName(e.target.value)}
            
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
              placeholder="Email"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
              value={email}
              onChange={e => setEmail(e.target.value)}
            
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
              placeholder="Password"
              className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
              value={password}
              onChange={e => setPassword(e.target.value)}
            
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
              value={repeatpassword}
              onChange={e => setRapeatpassword(e.target.value)}
            
            />
          </div>
            <input 
              type="submit"
              value="Create Account"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold
              rounded hover:cursor-pointer hover:bg-sky-800 transition colors"
            />

       </form>

       <nav className="lg:flex lg:justify-between">
          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
          >You Have have a account? Sign In </Link>

          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvidepassword"
          >Forget My Password</Link>

          

       </nav>
    </>
  )
}

export default Registrar