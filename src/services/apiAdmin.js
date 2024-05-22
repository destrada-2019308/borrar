import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/',
    timeout: 1000
})
apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('token')
        if (userDetails) {
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
            console.log(token)
        }
        return config
    },
    (err) => Promise.reject(err)
)

//--------------------------------------------------------Consultas del administrador para CRUD USUARIO
export const getAllUsersRequest = async () => {
    try {
        const res = await apiClient.get('user/getUsers')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteUserRequest = async (id) => {
    try {
        return await apiClient.delete(`user/deleteUserID/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateUserRequest = async (id, user) => {
    try {
        return await apiClient.put(`user/updateUserId/${id}`, user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateRoleUserRequest = async (username, user) => {
    try {
        return await apiClient.put(`user/updateRole/${username}`, user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}


//--------------------------------------------------------Consultas del administrador para CRUD CATEGORIES HOTEL
export const addCategoryHRequest = async (data) => {
    try {
        return await apiClient.post('categoryHotel/addCategory', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const getCategoriesHotelRequest = async () => {
    try {
        const res = await apiClient.get('categoryHotel/getCategory')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteCtegorieHRequest = async (id) => {
    try {
        return await apiClient.delete(`categoryHotel/deleteCategory/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateCategoryRequest = async (id, categoryhotels) => {
    try {
        return await apiClient.put(`categoryHotel/updateCategory/${id}`, categoryhotels)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}


//------------------------ Hotels
export const addHotelRequest = async (data) => {
    try {
        return await apiClient.post('hotel/addHotel', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const getHotelsRequest = async()=>{
    try {
        //return await apiClient.get('/hotel/getHotels')
        const res = await apiClient.get('hotel/getHotels')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteHotelRequest = async (id) => {
    try {
        return await apiClient.delete(`hotel/deleteHotel/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateHotelRequest = async (id, hotel) => {
    try {
        return await apiClient.put(`hotel/updateHotel/${id}`, hotel)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

/* RUTAS ADITTIONALS AND EVENTS */
export const getAdittionalsRequest = async()=>{
    try {
        const res = await apiClient.get('additionals/getAdditionals')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const addAdditionalRequest = async (data) => {
    try {
        return await apiClient.post('additionals/add', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const deleteAdditionalRequest = async (id) => {
    try {
        return await apiClient.delete(`additionals/delete/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateAdditionalRequest = async (id, additional) => {
    try {
        return await apiClient.put(`additionals/update/${id}`, additional)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

/* EVENTS */
export const getEventsRequest = async()=>{
    try {
        //return await apiClient.get('/hotel/getHotels')
        const res = await apiClient.get('event/find')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const addEventRequest = async (data) => {
    try {
        return await apiClient.post('event/add', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const deleteEventRequest = async (id) => {
    try {
        return await apiClient.delete(`event/delete/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateEventRequest = async (id, event) => {
    try {
        return await apiClient.put(`event/update/${id}`, event)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}