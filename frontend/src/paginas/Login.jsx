import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import "./base.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "All fields are required",
        error: true,
      });
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/users/login",
        { email, password }
      );

      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/proyectos');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <div className="page-container">
      <div className="corner-text">
        <h2 className="text-5xl text-center font-black">
          <span className="text-black">GOT</span>
          <span className="text-red-600">2</span>
          <span className="text-black">D</span>
          <span className="text-red-600">O</span>
        </h2>
      </div>
      <h1 className="text-gray-800 font-black text-6xl capitalize">
        Control your Projects &nbsp;
        <span className="text-red-600">Define Your Future</span>
        <span className="text-3xl">.</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="PASSWORD"
            type="password"
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-gray-900 w-full py-3 text-white uppercase font-bold rounded hover:bg-gray-500 transition colors"
        >
          Login
        </button>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/registrar" // Reemplaza con la ruta correcta
        >
          Don't have an account? Sign up
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvidepassword" // Reemplaza con la ruta correcta
        >
          Forgot your password?
        </Link>
      </nav>
    </div>
  );
};

export default Login;
