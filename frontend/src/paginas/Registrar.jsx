import { useState } from 'react'
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta'
import axios from 'axios'
import { useEffect } from "react";

  const Registrar = () => {
  const [ name, setName ] = useState ('')
  const [ email, setEmail ] = useState ('')
  const [ password, setPassword ] = useState ('')
  const [ repeatpassword, setRapeatpassword ] = useState ('')
  const [ alerta, setAlerta ] = useState({})
  
  
  const handlesubmit = async e => {
    e.preventDefault();
    if([name, email, password, repeatpassword].includes('')) {
      setAlerta({
          msg: 'All fields are required',
          error: true
      })
      return
    }

    if(password !== repeatpassword) {
      setAlerta({
        msg: 'The password must the be same',
        error: true
    })
    return
    }
    if(password.length < 8) {
      setAlerta({
        msg: 'The password must the be greater than 8 characters',
        error: true
    })
    return
    }
    
    setAlerta({})

    try {
      const { data } = await axios.post('http://localhost:4000/api/users',{
        name, email, password })
        setAlerta({
          msg: data.msg,
          error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
    })
    }
  }

  const { msg } = alerta

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
          <h1 className="text-red-600 font-black text-6xl capitalize">Create  {''}  <span className="text-gray-900">your account and Manage your</span>
          <span className='text-red-600'> Project</span>
          <span className="text-3xl text-black">.</span>
          </h1>

        { msg && <Alerta alerta={alerta} /> }

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
              className="bg-gray-900 mb-5 w-full py-3 text-white uppercase font-bold
              rounded hover:cursor-pointer hover:bg-gray-500 transition colors"
            />

       </form>

       <nav className="lg:flex lg:justify-between">
          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
          >You Have a account? Sign In </Link>

          <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvidepassword"
          >Forget My Password</Link>

          

       </nav>
    </>
  )
}

export default Registrar