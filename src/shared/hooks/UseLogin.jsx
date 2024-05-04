import { useState } from "react";
import toast from "react-hot-toast"
import { loginRequest } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)
        const user = {
            email,
            password
        }
        //respuesta de usuario con axios
        const response = await loginRequest(user)
        setIsLoading(false)

        //manejo de error con el paquete del pan
        if (response.error) {
            return toast.error(
                response?.e?.response?.data ||
                'Error al intentar logearse :c ¡Intentalo más tarde!'
            )
        }

        const { loggedUser, message, token } = response.data
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', JSON.stringify(token))
        if (token) {
            navigate('/home/zaru');
            return toast.success(message)
        }


    }

    return {
        login,
        isLoading
    }

}