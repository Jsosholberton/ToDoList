import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from 'axios'
import useAuth from "../hooks/useAuth"



const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})

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

  const { msg } = alerta

  return (
    <>
      <div className="page-container"></div>
      <h1 className="text-gray-800 font-black text-6xl capitalize">
        {" "}
        Control yours Projects & {""}{" "}
        <span className="text-red-600">Define Your Future</span>
        <span className="text-3xl">.</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow rounded-lg p-10 "
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
            className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
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
            placeholder="Password "
            className="w-full mt-3 p-3 border rounded-xl bg bg-gray-50  "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-gray-900 mb-5 w-full py-3 text-white uppercase font-bold
              rounded hover:cursor-pointer hover:bg-gray-500 transition colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
        >
          Do you dont have a account? Sign up{" "}
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="olvidepassword"
        >
          Forget My Password
        </Link>
      </nav>
    </>
  );
};

export default Login;
