import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656',
    timeout: 1000
})

//Aqui necesitamos exportar métodos del backend hacia el front
export const testConnection = async () => {
    try {
      // Realiza una solicitud GET de prueba al servidor backend
      const response = await axios.get("http://localhost:2656/hotel/getHotels");
      
      // Si la solicitud tiene éxito, devuelve true
      return true;
    } catch (error) {
      // Si hay algún error, devuelve false
      return false;
    }
  };

  apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => Promise.reject(err)
)

// //////////////////////////////////////////////////// //
// ///////////  Métodos Post UwU ///////////////////// //
// //////////////////////////////////////////////////// //

//Método Login para el usuario -> HACER UN HOOK
export const loginRequest = async(user)=>{
    try {
        return await apiClient.post('/user/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const registerRequest = async(user)=>{
    try {
        return await apiClient.post('/user/register', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}