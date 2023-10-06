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
    <div className="page-container scroll-mx-0">
      <div className="corner-text">
        <h2 className="opacity-100 text-5xl duration-500 hover:-translate-y-1 italic text-center font-black bg-clip-text text-transparent
        bg-gradient-to-r from-[#ffffff] via-[#4d4c4c] to-[#ffffff]">GOT<span className="text-transparent bg-clip-text 
        bg-gradient-to-r from-[#4b0000] via-[#920404] to-[red] ">2</span>D<span className="text-transparent drop-shadow-2xl shadow-[red] bg-clip-text 
        bg-gradient-to-r from-[#4b0000] via-[#850404] to-[red]">O</span>
        </h2>
      </div>
      <h1 className="opacity-70 hover:opacity-100 hover:translate-x-4 duration-500 skew-3 bg-clip-text text-transparent
        bg-gradient-to-r from-[#b4b3b3] from-10% via-[#fd989d] via-70% to-[#ffffff] italic font-black text-5xl capitalize">
        Control yours Projects <br />& Define Your Future.
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 opacity-75 shadow hover:shadow-[#ff002b] hover:opacity-100 hover:scale-105 translate-x-4 skew-3 md:transform-none rounded-b-none hover:-translate-y-2 hover:shadow-md duration-700 bg-gradient-to-r from-[#000000] via-[#202020] to-[#640000] shadow-xl shadow-[#000000] rounded-3xl p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-[#d8d6d6] italic block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full opacity-80 hover:opacity-100 mt-3 p-3 rounded-l-none hover:-translate-y-1 duration-700 shadow-inner italic shadow shadow-[#000000] rounded-xl 
            bg-gradient-to-r from-[white] via-[#acabab] to-[#ffffff] custom-placeholder"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase italic text-[#d8d6d6] block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="PASSWORD"
            type="password"
            placeholder="Password"
            className="w-full opacity-80 hover:opacity-100 mt-3 rounded-l-none p-3 hover:-translate-y-1 duration-700 shadow-inner italic shadow-[#000000] rounded-xl 
            bg-gradient-to-r from-[white] via-[#acabab] to-[#ffffff] custom-placeholder"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" 
          transition-transform opacity-70 hover:opacity-100 rounded-l-none  transform hover:-translate-y-2 hover:duration-500 bg-gradient-to-r from-[#ffffff] via-[#525252] to-[#640000] italic w-full py-3 
          text-white uppercase font-semibold font-black rounded-xl text-white
          active:translate-x-64 active:duration-300 shadow-md shadow-[#ff0037] transition colors"
        >
          Login
        </button>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="opacity-70 hover:opacity-100 block duration-500 text-center hover:-translate-y-1 my-5 text-[white] uppercase text-sm"
          to="/registrar" // Reemplaza con la ruta correcta
        >
          Don't have an account? Sign up
        </Link>

        <Link
          className="opacity-70 hover:opacity-100 block duration-500 hover:-translate-y-1 text-center my-5 text-[white]  uppercase text-sm"
          to="/olvidepassword" // Reemplaza con la ruta correcta
        >
          Forgot your password?
        </Link>
      </nav>
    </div>
  );
};

export default Login;
