import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ auth, setAuth ] = useState({})

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if (!token){
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data }  = await axios('http://localhost:4000/api/users/profile', config)
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
        autenticarUsuario()
    }, [])

    return (
        <AuthContext.Provider
        value={{
            auth,
            setAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;