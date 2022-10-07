import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../hooks/api";
import Cookies from "js-cookie";

export const AuthContext = createContext({})
export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    const checkToken = async (token) => {
        const res = await Api({
            path: 'auth/me',
            method: 'POST',
            token
        })
        if(res.status === 200){
            setAuth(true)
            setUser(res.data)
            setToken(token)
            Cookies.set('token', token, { expires: 30 })
            Cookies.set('auth', true, { expires: 30 })
        } else {
            Cookies.remove('token')
            Cookies.remove('auth')
        }
    }
    const logout = () => {
        setAuth(false)
        setUser({})
        setToken('')
        Cookies.remove('token')
        Cookies.remove('auth')
    }

    useEffect(()=>{
        if(Cookies.get('token') !== undefined && auth === false){
            checkToken(Cookies.get('token'))
        }
    },[])

    const data = {
        state: {
            token,
            auth,
            user
        },
        action: {
            setToken,
            setAuth,
            setUser,
            checkToken,
            logout
        }
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
const UseAuthContext = () => {
    return useContext(AuthContext)
}
export default UseAuthContext;