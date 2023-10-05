import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import axios from 'axios';

const Registrar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatpassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([name, email, password, repeatpassword].includes('')) {
      setAlerta({
        msg: 'All fields are required',
        error: true,
      });
      return;
    }

    if (password !== repeatpassword) {
      setAlerta({
        msg: 'The password must be the same',
        error: true,
      });
      return;
    }

    if (password.length < 8) {
      setAlerta({
        msg: 'The password must be greater than 8 characters',
        error: true,
      });
      return;
    }

    setAlerta({});

    try {
      const { data } = await axios.post('http://localhost:4000/api/users', {
        name, email, password
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  }

  const { msg } = alerta;

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
      <h1 className="text-red-600 italic font-serif font-bold text-6xl capitalize">
        Create <span className='text-gray-900'>your account and Manage your</span>
        <span className='text-red-600'> Project</span>
        <span className="text-3xl text-black">.</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow-lg shadow-gray-500f rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 italic block text-xl font-bold"
            htmlFor="nombre"
          >
            Name
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Your Name"
            className="w-full mt-3 p-3 border rounded-xl italic shadow-lg shadow-gray-400 bg bg-gray-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-xl italic shadow-lg shadow-gray-400 bg bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 italic block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="PASSWORD"
            type="password"
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-xl italic shadow-lg shadow-gray-400 bg bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block italic text-xl font-bold"
            htmlFor="password2"
          >
            Repeat Password
          </label>
          <input
            id="PASSWORD2"
            type="password"
            placeholder="Repeat Password"
            className="w-full mt-3 p-3 shadow-xl italic border rounded-xl shadow-lg shadow-gray-400 bg bg-gray-50"
            value={repeatpassword}
            onChange={(e) => setRepeatpassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-gray-900 mb-5 w-full italic py-3 text-white uppercase font-bold rounded-xl hover:bg-teal-600 active:bg-cyan-500 shadow-lg shadow-sky-400/50 transition colors"
        >
          Create Account
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
          to="/olvidepassword"
        >
          Forgot My Password
        </Link>
      </nav>
    </div>
  );
}

export default Registrar;
