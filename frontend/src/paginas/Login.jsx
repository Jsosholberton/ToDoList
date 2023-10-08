import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from 'axios';
import useAuth from "../hooks/useAuth";


const Login = () => {
  // Definición de estados locales para email, password y alertas
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  // Obtiene la función setAuth del contexto de autenticación
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verifica si el email o la contraseña están vacíos
    if ([email, password].includes("")) {
      setAlerta({
        msg: "All fields are required",
        error: true,
      });
      return;
    }
    try {
      // Envía la solicitud de inicio de sesión al servidor
      const { data } = await axios.post(
        "http://localhost:4000/api/users/login",
        { email, password }
      );

      // Almacena el token en el almacenamiento local y establece la autenticación
      localStorage.setItem('token', data.token)
      setAuth(data)
      // Redirige al usuario a la página de proyectos
      navigate('/proyectos');
    } catch (error) {
      // Maneja los errores de inicio de sesión
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  // Extrae el mensaje de alerta del estado
  const { msg } = alerta;

  return (
    <div className="page-container">
      <div className="corner-text fixed top-0 left-0 p-5">
        <h2 className="opacity-90 hover:opacity-100 text-5xl duration-500 p-5
        hover:-translate-y-1 italic text-center font-black bg-clip-text text-transparent
        bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#525252]">GOT<span className="text-transparent bg-clip-text 
        bg-gradient-to-r from-[#4b0000] via-[#920404] to-[red] ">2</span>D<span className="text-transparent drop-shadow-2xl shadow-[#f53232] bg-clip-text 
        bg-gradient-to-r from-[#4b0000] via-[#850404] to-[red]">O</span>
        </h2>
      </div>
      <h1 className="opacity-80 hover:opacity-100 hover:scale-105 hover:translate-x-3
        duration-1000 skew-3 bg-clip-text text-transparent hover:shadow-[#f30000]
        bg-gradient-to-br from-[#d8d8d8] via-[#dbdbdb] to-[#474747] hover:from-[#ffffff] hover:from-30% hover:via-[#ce2929] hover:duration-500 hover:to-[#df9696]
        italic font-bold text-[2.30rem] hover:duration-1000 capitalize h-40 p-1">
        Control yours Projects <br />& Define Your Future
        <span className="text-[#dd2121] text-4xl ">.</span>
      </h1>

      {/* Renderiza la alerta si existe */}
      {msg && <Alerta alerta={alerta} />}

      <form
        className="delay-100 opacity-80 custom-shadow
        hover:opacity-100 hover:scale-105 translate-x-4 skew-x-1 
        md:transform-none hover:-translate-y-2 
        hover:shadow-lg duration-700 hover:shadow-[#700000]
        bg-gradient-to-br from-[#000000] from-1% via-[#131212] via-50% to-[#ffffff]
        rounded-3xl p-6"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-[#d8d6d6] font-thin italic block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          {/* Campo de entrada de email */}
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="hover:translate-x-1  hover:duration-700 opacity-80 hover:opacity-100 mt-1 p-2 rounded-l-none hover:-translate-y-1 duration-700 shadow-inner italic shadow shadow-[#000000] rounded-xl 
              bg-gradient-to-r from-[white] via-[#acabab] to-[#ffffff] custom-placeholder
              w-80 focus:w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className="my-5">
          <label
            className="uppercase italic font-thin text-[#d8d6d6] block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          {/* Campo de entrada de contraseña */}
          <input
            id="PASSWORD"
            type="password"
            placeholder="Password"
            className="w-80 focus:w-96  hover:translate-x-1 opacity-80 hover:opacity-100 mt-3 rounded-l-none p-2 hover:-translate-y-1 duration-700 shadow-inner italic shadow-[#000000] rounded-xl 
            bg-gradient-to-r from-[white] via-[#acabab] to-[#ffffff] custom-placeholder"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Botón de inicio de sesión */}
        <button
          type="submit"
          className=" 
          transition-shadow opacity-70 hover:opacity-100 rounded-full
          hover:-translate-y-2 hover:duration-1000 bg-gradient-to-r from-[#ffffff] via-[#3d3d3d] to-[#000000] hover:to-[#c40c0c]
          italic w-full py-2
          text-white uppercase delay-75 font-medium rounded-3xl text-white shadow-inner
          active:animate-ping pointer-events-auto hover:shadow-[#5e0005] transition-colors font-thin duration-1000"
        >
          Login
        </button>
      </form>

      <nav className="lg:flex lg:justify-between">
        {/* Enlace para registrar una cuenta */}
        <Link
          className="delay-75 opacity-90 hover:skew-x-3 hover:opacity-100 hover:scale-110 shadow-lg p-2 hover:shadow-white shadow-black-950 rounded-full block duration-500 text-center hover:-translate-y-1 my-5 text-[#ffffff] uppercase text-sm"
          to="/registrar" // Reemplaza con la ruta correcta
        >
          Don't have an account? Sign up
        </Link>

        {/* Enlace para recuperar contraseña */}
        <Link
          className="delay-75 opacity-90 hover:skew-x-3 hover:opacity-100 hover:scale-110 block duration-500 hover:-translate-y-1 text-center my-5 text-[#ffffff] shadow-lg p-2 hover:shadow-white shadow-black-950 rounded-full uppercase text-sm"
          to="/olvidepassword" // Reemplaza con la ruta correcta
        >
          Forgot your password?
        </Link>
      </nav>
    </div>
  );
};

export default Login;
