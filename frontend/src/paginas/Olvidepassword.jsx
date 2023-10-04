import { useState } from 'react'
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta'
import axios from 'axios'
import { useEffect } from "react";


const Olvidepassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || email.length < 6) {
      setAlerta({
        msg: "Email is required",
        error: true
      });
      return
    }

    try {
      const { data } = await axios.post(`http://localhost:4000/api/users/lost-password`, { email })
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
      <h1 className="text-gray-900 font-black text-6xl capitalize">Restore Your password And Not
        {''}<span className="text-red-600"> Lose</span>
        <span className="text-gray-900"> Your</span>
        <span className="text-red-600"> Projects</span>
      </h1>
      
      {msg && <Alerta alerta={alerta} />}

      <form className="my-10 bg-white shadow rounded-lg p-10 "
        onSubmit={handleSubmit}
      >

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input
            id="email"
            type="email"
            placeholder="Put your Email"
            className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
        </div>

        <input
          type="submit"
          value="Recover Access"
          className="bg-gray-900 mb-5 w-full py-3 text-white uppercase font-bold
        rounded hover:cursor-pointer hover:bg-gray-500 transition colors"
        />

      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >You Have a account? Sign In   </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/registrar"
        >Do you dont have a account? Sign up </Link>



      </nav>
    </>
  )
}

export default Olvidepassword