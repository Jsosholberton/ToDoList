import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import axios from 'axios';

const Olvidepassword = () => {
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || email.length < 6) {
      setAlerta({
        msg: "Email is required",
        error: true
      });
      return;
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
    <div className="page-container">
      <div className="corner-text">
        <h2 className="text-5xl italic text-center font-black">
          <span className="text-black">GOT</span>
          <span className="text-red-600">2</span>
          <span className="text-black">D</span>
          <span className="text-red-600">O</span>
        </h2>
      </div>
      <h1 className="text-gray-900 italic font-serif font-bold text-6xl capitalize">Restore Your password And Not
        <span className="text-red-600"> Lose</span>
        <span className="text-gray-900"> Your</span>
        <span className="text-red-600"> Projects</span>
        <span className="text-3xl">.</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow rounded-lg shadow-lg shadow-gray-500 p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 italic block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Put your Email"
            className="w-full mt-3 p-3 border italic rounded-xl shadow-lg shadow-gray-400 bg bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          value="Recover Access"
          className="bg-gray-900 mb-5 w-full py-3 text-white uppercase italic font-bold rounded-xl hover:bg-teal-600 active:bg-cyan-500 shadow-lg shadow-sky-400/50 transition colors"
        >
          Recover Access
        </button>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          You Have an account? Sign In
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/registrar"
        >
          Don't have an account? Sign up
        </Link>
      </nav>
    </div>
  );
}

export default Olvidepassword;
